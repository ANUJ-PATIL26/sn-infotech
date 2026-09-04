/**
 * HTTP Functions — public API endpoints for the SN Infotech site.
 * Docs: https://www.wix.com/velo/reference/wix-http-functions
 *
 * Endpoints (once published):
 *   POST /_functions/chatProxy
 */

import { ok, badRequest, serverError } from 'wix-http-functions';
// [LOCAL-ONLY-ISSUE]: wix-http-functions only resolves inside the Wix / Velo runtime
// [RESOLVES-ON-WIX]: Wix backend runtime provides this binding at publish / wix dev with site auth

import { getSecret } from 'wix-secrets-backend';
// [LOCAL-ONLY-ISSUE]: wix-secrets-backend cannot read Secrets Manager without a connected live Wix site
// [RESOLVES-ON-WIX]: Wix Secrets Manager injects secret values at runtime after you store ANTHROPIC_API_KEY

import { fetch } from 'wix-fetch';
// [LOCAL-ONLY-ISSUE]: wix-fetch is not available in a plain browser preview of these files
// [RESOLVES-ON-WIX]: Wix backend runtime provides wix-fetch for server-side HTTP

/**
 * POST /_functions/chatProxy
 * Body: { message: string }
 * Proxies to Anthropic Claude API using a key stored in Wix Secrets Manager.
 */
export async function post_chatProxy(request) {
  try {
    const body = await request.body.json();
    const message = (body?.message || '').toString().trim();

    if (!message) {
      return badRequest({ error: 'message is required' });
    }

    // [LOCAL-ONLY-ISSUE]: getSecret('ANTHROPIC_API_KEY') fails locally without Secrets Manager linkage
    // [RESOLVES-ON-WIX]: Store the key in Wix Secrets Manager as ANTHROPIC_API_KEY, then publish
    const apiKey = await getSecret('ANTHROPIC_API_KEY');

    // [LOCAL-ONLY-ISSUE]: Outbound LLM call will not run in local file preview
    // [RESOLVES-ON-WIX]: Backend executes on Wix servers after publish / authenticated wix dev
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 512,
        system:
          'You are a helpful assistant for SN Infotech Ltd, a UK DevOps, Cloud and IT consultancy based in London. Be concise, professional, and encourage visitors to request a free consultation or call +44 7348 648904 for sales matters. Do not invent certifications or client names.',
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return serverError({ error: 'LLM upstream error', detail: errText.slice(0, 400) });
    }

    const data = await response.json();
    const reply =
      data?.content?.find((block) => block.type === 'text')?.text ||
      'I could not generate a reply. Please try again or contact info@sninfotech.co.uk.';

    return ok({ reply });
  } catch (error) {
    return serverError({
      error: 'chatProxy failed',
      detail: error?.message || String(error),
    });
  }
}
