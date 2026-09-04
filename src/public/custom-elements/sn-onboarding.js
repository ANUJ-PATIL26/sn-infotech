/**
 * <sn-onboarding> — How we onboard you + trial guarantee
 * (mirrors sn-infotech-site <onboarding-strip>)
 */
const STEP_ICONS = {
  cellphone: `<svg class="step-icon" viewBox="0 0 128 128" aria-hidden="true" width="44" height="44"><circle cx="64" cy="64" r="64" fill="#FC4E1F"/><rect x="46" y="30" width="36" height="68" rx="6" fill="#0A0A0A"/><rect x="52" y="38" width="24" height="42" rx="2" fill="#FC4E1F"/><circle cx="64" cy="88" r="4" fill="#FC4E1F"/></svg>`,
  phone: `<svg class="step-icon" viewBox="0 0 128 128" aria-hidden="true" width="44" height="44"><circle cx="64" cy="64" r="64" fill="#FC4E1F"/><path fill="#0A0A0A" d="M78.5 36.2c-2.2-2.2-5.8-2.2-8 0l-8.4 8.4c-1.8 1.8-2.1 4.6-.7 6.7l3.2 4.8c-5.4 9.4-12.8 16.8-22.2 22.2l-4.8-3.2c-2.1-1.4-4.9-1.1-6.7.7l-8.4 8.4c-2.2 2.2-2.2 5.8 0 8l5.6 5.6c2.4 2.4 5.7 3.5 9.1 3.1 16.8-2.1 32.5-10.5 44.2-22.2 11.7-11.7 20.1-27.4 22.2-44.2.4-3.4-.7-6.7-3.1-9.1l-5.6-5.6z"/></svg>`,
  trial: `<svg class="step-icon" viewBox="0 0 128 128" aria-hidden="true" width="44" height="44"><circle cx="64" cy="64" r="64" fill="#FC4E1F"/><g fill="#0A0A0A"><rect x="34" y="38" width="60" height="54" rx="8"/><rect x="46" y="30" width="10" height="16" rx="3" fill="#FC4E1F"/><rect x="72" y="30" width="10" height="16" rx="3" fill="#FC4E1F"/><rect x="40" y="48" width="48" height="8" rx="2" fill="#FC4E1F"/><path fill="#FC4E1F" d="M54.5 78.5l-7-7 4.2-4.2 2.8 2.8 12.3-12.3 4.2 4.2-16.5 16.5z"/></g></svg>`,
};

const ONBOARD_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text); }
  *, *::before, *::after { box-sizing: border-box; }
  .section { padding: calc(var(--section-y) + var(--space-6)) 0 var(--section-y); background: var(--bg); }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .head { text-align: center; max-width: 40rem; margin: 0 auto var(--space-4); }
  .eyebrow {
    color: var(--teal); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 var(--space-1);
  }
  h2 {
    margin: 0; font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: var(--ink); font-weight: 700;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  .steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-2); margin-bottom: var(--space-3); }
  article {
    padding: 2rem 1.5rem; border-radius: 6px; background: #fff;
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  :host-context([data-theme="dark"]) article { background: var(--surface); }
  article:hover {
    transform: translateY(-4px);
    box-shadow: -4px 0 16px rgba(34, 51, 59, 0.2);
  }
  .step-icon { width: 44px; height: 44px; display: block; margin-bottom: 0.65rem; }
  .step {
    display: inline-flex; padding: 0.3rem 0.7rem; border-radius: 40px;
    background: #f2f4f3; color: #22333b; font-weight: 700; font-size: var(--fs-xs);
    letter-spacing: 0.06em; margin-bottom: var(--space-2);
  }
  article:nth-child(2) .step { background: #c4b09a; }
  article:nth-child(3) .step { background: #e5e0d8; }
  h3 { margin: 0 0 0.5rem; color: var(--ink); font-size: var(--fs-h3); font-weight: 700; }
  :host-context([data-theme="dark"]) h3 { color: var(--text); }
  p { margin: 0; color: var(--text-muted); font-size: var(--fs-body); }
  .guarantee {
    padding: var(--space-3); border-radius: 6px;
    background: #22333b; color: #fff;
  }
  .guarantee strong { display: block; margin-bottom: 0.55rem; font-size: var(--fs-body-lg); font-weight: 700; }
  .guarantee p { margin: 0 0 0.75rem; color: #c4b8ab; }
  .guarantee p:last-of-type { margin-bottom: 0; }
  @media (max-width: 900px) { .steps { grid-template-columns: 1fr; } }
`;

class SnOnboarding extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${ONBOARD_CSS}</style>
      <section class="section" aria-labelledby="onboard-title">
        <div class="inner">
          <div class="head" data-reveal>
            <p class="eyebrow">How we onboard you</p>
            <h2 id="onboard-title">From first call to confident delivery</h2>
          </div>
          <div class="steps" data-reveal-stagger>
            <article data-reveal>
              ${STEP_ICONS.cellphone}
              <div class="step">01</div>
              <h3>Share your goals</h3>
              <p>Tell us what you run today and where you need reliability, speed, or cost control.</p>
            </article>
            <article data-reveal>
              ${STEP_ICONS.phone}
              <div class="step">02</div>
              <h3>Meet your project manager</h3>
              <p>We review requirements, propose an approach, and agree a clear first sprint.</p>
            </article>
            <article data-reveal>
              ${STEP_ICONS.trial}
              <div class="step">03</div>
              <h3>Start a one-week trial</h3>
              <p>Work with us risk-free while we prove fit against real workloads and priorities.</p>
            </article>
          </div>
          <div class="guarantee" data-reveal>
            <strong>1 Week trial period based On Terms &amp; Conditions</strong>
            <p>We are confident in our ability that our clients will be extremely satisfied with their decision in selecting SN Infotech as the complete business solution for their respective industries.</p>
            <p>SN InfoTech offers a risk-free, money-back service acceptance period to all of its clients following contract signing and the initial phase of 7 days. If at any point during this period, the client feels any SN InfoTech functionality was misrepresented during the initial selection process and no longer wishes to do business with us, we will refund the client’s fees.</p>
          </div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-onboarding')) {
  customElements.define('sn-onboarding', SnOnboarding);
}
