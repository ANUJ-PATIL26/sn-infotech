/**
 * <sn-cta-banner> — ANS-style amber full-width "Talk to us" band.
 */
const CTA_CSS = `
  :host { display: block; font-family: var(--font-body); color: #22333b; }
  *, *::before, *::after { box-sizing: border-box; }
  .banner {
    padding: clamp(4rem, 8vw, 6.5rem) 0;
    background: #a9927d;
  }
  .inner {
    width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); flex-wrap: wrap;
  }
  h2 {
    margin: 0 0 0.5rem; font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: #22333b; font-weight: 700;
    max-width: 14ch;
  }
  p { margin: 0; color: #5e503f; max-width: 36rem; font-size: var(--fs-body-lg); }
  .actions { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; }
  .phone {
    color: #22333b; font-weight: 700; font-size: var(--fs-h3); text-decoration: none;
    transition: opacity var(--duration) var(--ease);
  }
  .phone:hover { opacity: 0.75; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
    min-height: 48px; padding: 1rem 1.8rem; border-radius: 6px;
    background: #ffffff; color: #22333b; font-weight: 600; text-decoration: none;
    font-size: var(--fs-btn);
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  .btn::after { content: "→"; transition: transform var(--duration) var(--ease-out); }
  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(34, 51, 59, 0.15);
  }
  .btn:hover::after { transform: translateX(3px); }
  @media (max-width: 900px) {
    h2 { max-width: none; }
  }
  @media (max-width: 560px) {
    .actions { width: 100%; }
    .btn, .phone { width: 100%; justify-content: center; text-align: center; }
    .phone { overflow-wrap: anywhere; }
  }
`;

class SnCtaBanner extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${CTA_CSS}</style>
      <section class="banner" aria-labelledby="cta-title">
        <div class="inner" data-reveal>
          <div>
            <h2 id="cta-title">Talk to us.</h2>
            <p>To find out more about SN Infotech or speak with one of our experts, get in touch today.</p>
          </div>
          <div class="actions">
            <a class="phone" href="tel:+447348648904">+44 7348 648904</a>
            <a class="btn" href="/contact-us">Get in touch</a>
          </div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-cta-banner')) {
  customElements.define('sn-cta-banner', SnCtaBanner);
}
