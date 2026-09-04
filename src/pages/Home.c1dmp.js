/**
 * Homepage — wire Custom Elements in the Wix Editor:
 * sn-site-header, sn-hero, sn-value-proposition (set element ID to why-sn for the hero scroll cue),
 * sn-logo-marquee, sn-about-strip, sn-video-showcase (set element ID to home-video),
 * sn-services-grid (set element ID to services for Explore Services),
 * sn-k8s-features, sn-devops-features, sn-recruitment-features, sn-onboarding,
 * sn-testimonials, sn-faqs (set element ID to faqs for footer /#faqs), sn-cta-banner, sn-site-footer, sn-consultation-modal,
 * sn-agent-chat (optional; prefer native Wix Chat).
 *
 * SEO: apply title/description from src/seo/pages.json → home
 */

import { getOrganizationJsonLd } from 'public/seo.js';
// [LOCAL-ONLY-ISSUE]: public/ module imports and $w APIs only work inside Wix page runtime / wix dev
// [RESOLVES-ON-WIX]: Velo bundles public modules and injects $w when the page runs on Wix

import { saveConsultationLead, notifyLeadWebhook } from 'backend/leads.jsw';
// [LOCAL-ONLY-ISSUE]: backend/*.jsw web modules do not execute in a plain browser preview
// [RESOLVES-ON-WIX]: Wix backend runtime executes .jsw after publish or authenticated wix dev

$w.onReady(function () {
  // SEO metadata — also set matching values in the Wix SEO panel for crawlers
  if ($w('#pageSeoTitle')) {
    $w('#pageSeoTitle').text =
      'SN Infotech Ltd | DevOps, Cloud & Managed IT Consultancy';
  }

  // Organization structured data for an optional HTML embed (#seoSchemaHost)
  if ($w('#seoSchemaHost')) {
    $w('#seoSchemaHost').html = `<script type="application/ld+json">${getOrganizationJsonLd()}</script>`;
  }

  // Native Wix Chat: enable the Wix Chat / AI chatbot app in the Editor (no custom UI required).
  // Optional custom assistant: add <sn-agent-chat> Custom Element to the page.

  // [LOCAL-ONLY-ISSUE]: Custom Element ↔ Velo postMessage bridge needs the real Wix page iframe/host context
  // [RESOLVES-ON-WIX]: Once Custom Elements are embedded on the page, message events reach this handler
  if (typeof window !== 'undefined') {
    window.addEventListener('message', async (event) => {
      if (event?.data?.type !== 'sn-consultation-submit') return;
      const payload = event.data.payload;
      try {
        // [LOCAL-ONLY-ISSUE]: saveConsultationLead uses wix-data — empty/mock without CMS collection
        // [RESOLVES-ON-WIX]: Create "Leads" collection; insert succeeds on live Wix Data
        await saveConsultationLead(payload);
        await notifyLeadWebhook(payload);
        // Prefer replacing notifyLeadWebhook with a Wix Automation: Form submit → Send email
      } catch (err) {
        console.error('Consultation lead handling failed', err);
      }
    });
  }
});
