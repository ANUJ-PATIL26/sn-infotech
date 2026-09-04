/**
 * <sn-consultation-modal> — Request a Callback modal (theme-aware tokens).
 */
const MODAL_CSS = `
  :host { display: contents; font-family: var(--font-body); }
  *, *::before, *::after { box-sizing: border-box; }
  .trigger {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 48px; padding: 1rem 1.8rem; border-radius: 6px; border: 0;
    background: #5e503f; color: #fff; font-family: var(--font-heading); font-weight: 600; cursor: pointer;
    font-size: var(--fs-btn); box-shadow: 0 8px 24px rgba(94, 80, 63, 0.28);
    transition: background var(--duration) var(--ease), transform var(--duration) var(--ease-out);
  }
  .trigger:hover { background: #0a0908; transform: translateY(-2px); }
  .backdrop {
    display: none; position: fixed; inset: 0; z-index: 2000;
    background: var(--overlay); padding: var(--space-2);
    align-items: center; justify-content: center;
    overflow: auto;
  }
  .backdrop.open { display: flex; }
  .panel {
    width: min(480px, 100%); background: var(--surface-elevated); color: var(--text);
    border: 1px solid var(--border); border-radius: 18px;
    padding: var(--space-3); box-shadow: var(--shadow);
    max-height: min(92dvh, 720px); overflow: auto;
  }
  .head { display: flex; justify-content: space-between; align-items: start; gap: var(--space-2); margin-bottom: var(--space-2); }
  h2 { margin: 0; font-family: var(--font-heading); font-size: var(--fs-h3); color: var(--text); letter-spacing: var(--ls-heading); }
  .sub { margin: 0.4rem 0 0; color: var(--text-muted); font-size: var(--fs-small); }
  .close {
    width: 44px; height: 44px; border-radius: var(--radius); border: 1px solid var(--border);
    background: var(--surface); color: var(--text); cursor: pointer; flex-shrink: 0;
  }
  label { display: block; font-size: var(--fs-xs); font-weight: 700; color: var(--text-subtle); margin: var(--space-1) 0 0.35rem; }
  input, textarea, select {
    width: 100%; min-height: 44px; border-radius: var(--radius); border: 1px solid var(--border);
    background: var(--bg); color: var(--text); padding: 0.8rem 0.9rem; font-size: var(--fs-body);
  }
  textarea { min-height: 96px; resize: vertical; }
  .submit {
    width: 100%; margin-top: var(--space-2); min-height: 48px; border: 0; border-radius: 6px;
    background: #5e503f; color: #fff; font-family: var(--font-heading); font-weight: 600; cursor: pointer; font-size: var(--fs-btn);
    transition: background var(--duration) var(--ease), transform var(--duration) var(--ease-out);
  }
  .submit:hover { background: #0a0908; transform: translateY(-1px); }
  .hint { margin: var(--space-1) 0 0; font-size: var(--fs-xs); color: var(--text-muted); }
  .hint a { color: #5e503f; }
  .status { margin-top: var(--space-1); font-size: var(--fs-small); color: #a9927d; min-height: 1.2em; }
`;

class SnConsultationModal extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const label = this.getAttribute('button-label') || 'Request a Callback';
    this.shadowRoot.innerHTML = `
      <style>${MODAL_CSS}</style>
      <button class="trigger" type="button" data-open>${label}</button>
      <div class="backdrop" data-backdrop role="presentation">
        <div class="panel" role="dialog" aria-modal="true" aria-labelledby="consult-title">
          <div class="head">
            <div>
              <h2 id="consult-title">Request a free consultation</h2>
              <p class="sub">Tell us a little about your environment — we’ll call you back.</p>
            </div>
            <button class="close" type="button" data-close aria-label="Close">✕</button>
          </div>
          <form data-form>
            <label for="name">Full name</label>
            <input id="name" name="name" required autocomplete="name" />
            <label for="email">Work email</label>
            <input id="email" name="email" type="email" required autocomplete="email" />
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required autocomplete="tel" />
            <label for="interest">I’m interested in</label>
            <select id="interest" name="interest">
              <option>Cloud Services</option>
              <option>DevOps as a Service</option>
              <option>Managed Kubernetes</option>
              <option>Outsource IT Support</option>
              <option>Other</option>
            </select>
            <label for="message">How can we help?</label>
            <textarea id="message" name="message" maxlength="1000"></textarea>
            <button class="submit" type="submit">Submit request</button>
            <p class="hint">Prefer to talk now? Call <a href="tel:+447348648904">+44 7348 648904</a></p>
            <div class="status" data-status aria-live="polite"></div>
          </form>
        </div>
      </div>
    `;

    const backdrop = this.shadowRoot.querySelector('[data-backdrop]');
    const open = () => backdrop.classList.add('open');
    const close = () => backdrop.classList.remove('open');
    this.shadowRoot.querySelector('[data-open]').addEventListener('click', open);
    this.shadowRoot.querySelector('[data-close]').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    this.shadowRoot.querySelector('[data-form]').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      const status = this.shadowRoot.querySelector('[data-status]');
      status.textContent = 'Sending…';

      // [LOCAL-ONLY-ISSUE]: postMessage to Velo / Wix Forms does not complete when opening this Custom Element outside a Wix page
      // [RESOLVES-ON-WIX]: On the live Wix page, Velo listens for sn-consultation-submit and wires the payload to Wix Forms + Automations
      this.dispatchEvent(
        new CustomEvent('sn-consultation-submit', {
          bubbles: true,
          composed: true,
          detail: data,
        })
      );

      // [LOCAL-ONLY-ISSUE]: Custom Element ↔ Velo page messaging needs the actual Wix page context
      // [RESOLVES-ON-WIX]: window.parent / host page receives the event once the element is embedded via Velo Custom Element
      window.parent?.postMessage({ type: 'sn-consultation-submit', payload: data }, '*');

      status.textContent = 'Thanks — we will be in touch shortly.';
      form.reset();
      setTimeout(close, 1200);
    });
  }
}

if (!customElements.get('sn-consultation-modal')) {
  customElements.define('sn-consultation-modal', SnConsultationModal);
}
