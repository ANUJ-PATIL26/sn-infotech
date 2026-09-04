/**
 * <sn-value-proposition> — Why businesses choose SN Infotech (below hero, before services).
 * Mirrors sn-infotech-site <value-proposition>.
 */
const HOME_IMG = '/src/assets/images/site/pages/home';
const ILLUS = {
  pricing: `${HOME_IMG}/Index2.png`,
  enterprise: `${HOME_IMG}/Index3.png`,
  trial: `${HOME_IMG}/Index4.png`,
};

function illusImg(src, delay = '') {
  const style = delay ? ` style="animation-delay:${delay}"` : '';
  return `<img class="illus sn-float" src="${src}" alt="" width="1024" height="682" decoding="async" loading="lazy"${style} />`;
}

const STAR = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9L12 2.5z"/></svg>';
const POUND = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M7 16h10M15 7.5A3.5 3.5 0 0011.5 4 3.5 3.5 0 008 7.5V13a4 4 0 01-4 4h12"/><path d="M6 11h8"/></svg>';
const CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ROCKET = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 15c-1.5 2-2 5-2 5s3-.5 5-2l7-7a5 5 0 00-3-3l-7 7z" stroke-linejoin="round"/><path d="M14 7l3-3 3 3-3 3-3-3z"/><circle cx="15.5" cy="8.5" r="1" fill="currentColor"/></svg>';

const FLOAT_CSS = `
  @keyframes sn-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .sn-float { animation: sn-float 7s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    .sn-float { animation: none !important; }
  }
`;

const VALUE_CSS = `
  :host {
    display: block;
    font-family: var(--font-body);
    color: var(--text);
    scroll-margin-top: calc(var(--header-h, 88px) + 12px);
  }
  *, *::before, *::after { box-sizing: border-box; }
  .section {
    position: relative;
    padding: calc(var(--section-y) + 0.5rem) 0 var(--section-y);
    overflow: hidden;
    background: var(--bg);
  }
  .section::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 8% 20%, rgba(47, 158, 107, 0.12), transparent 60%),
      radial-gradient(ellipse 45% 45% at 92% 30%, rgba(59, 125, 221, 0.12), transparent 55%),
      radial-gradient(ellipse 40% 40% at 50% 95%, rgba(122, 90, 245, 0.1), transparent 55%);
  }
  .inner {
    position: relative;
    z-index: 1;
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto;
  }
  .intro { max-width: 46rem; margin-bottom: clamp(2rem, 4vw, 3rem); }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    color: var(--accent, #a9927d); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 700; margin: 0 0 var(--space-2);
  }
  h2 {
    margin: 0 0 var(--space-2);
    font-family: var(--font-heading);
    font-size: var(--fs-h2);
    line-height: var(--lh-heading);
    color: var(--text);
    max-width: 18ch;
  }
  h2 .line {
    position: relative;
    display: inline;
    background-image: linear-gradient(var(--accent, #5e503f), var(--accent, #5e503f));
    background-size: 0% 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms var(--ease, ease);
  }
  .intro.is-in h2 .line,
  h2:hover .line { background-size: 100% 3px; }
  .lead {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body);
    max-width: 42rem;
  }
  .panels {
    display: grid;
    grid-template-columns: 1.12fr 1fr 1fr;
    gap: clamp(1rem, 2vw, 1.35rem);
  }
  .panel {
    --tint: var(--accent);
    --tint-soft: rgba(169, 146, 125, 0.18);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: clamp(1.35rem, 2.2vw, 1.75rem);
    border-radius: 22px;
    border: 1px solid color-mix(in srgb, var(--tint) 22%, var(--border));
    background:
      linear-gradient(160deg,
        color-mix(in srgb, var(--surface) 92%, transparent),
        color-mix(in srgb, var(--tint-soft) 70%, var(--surface))
      );
    box-shadow: var(--shadow-soft, 0 8px 28px rgba(10, 9, 8, 0.08));
    backdrop-filter: blur(10px);
    transition: transform 300ms var(--ease, ease), box-shadow 300ms var(--ease, ease), border-color 300ms var(--ease, ease);
  }
  .panel:hover {
    transform: translateY(-6px);
    border-color: color-mix(in srgb, var(--tint) 48%, var(--border));
    box-shadow: var(--shadow, 0 14px 36px rgba(10, 9, 8, 0.12));
  }
  .illus-wrap {
    display: grid;
    place-items: center;
    aspect-ratio: 1024 / 682;
    width: 100%;
    margin: 0 0 1.1rem;
    padding: 0;
    border-radius: 0;
    background: transparent;
    border: none;
    overflow: visible;
  }
  .illus {
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: drop-shadow(0 12px 28px rgba(10, 9, 8, 0.16));
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    width: fit-content;
    margin: 0 0 0.85rem;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    font-size: var(--fs-xs);
    font-weight: 700;
    color: var(--tint);
    background: color-mix(in srgb, var(--tint-soft) 80%, var(--surface));
    border: 1px solid color-mix(in srgb, var(--tint) 28%, transparent);
  }
  .panel h3 {
    margin: 0 0 0.85rem;
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 1.8vw, 1.45rem);
    line-height: 1.2;
    color: var(--text);
  }
  .panel p {
    margin: 0 0 0.7rem;
    color: var(--text-muted);
    font-size: var(--fs-body);
    line-height: var(--lh-body);
  }
  .panel p:last-of-type { margin-bottom: 0; }
  .note {
    margin-top: auto;
    padding-top: 1rem;
    font-size: var(--fs-xs);
    color: var(--text-subtle, var(--text-muted));
    font-style: italic;
  }
  .cta {
    margin-top: clamp(2.25rem, 4vw, 3.25rem);
    text-align: center;
    padding: clamp(1.6rem, 3vw, 2.25rem);
    border-radius: 24px;
    border: 1px solid color-mix(in srgb, var(--accent, #5e503f) 28%, var(--border));
    background: linear-gradient(135deg, rgba(94, 80, 63, 0.12), rgba(34, 51, 59, 0.08));
    box-shadow: var(--shadow-soft, 0 8px 28px rgba(10, 9, 8, 0.08));
  }
  .cta h3 {
    margin: 0 0 0.65rem;
    font-family: var(--font-heading);
    font-size: clamp(1.45rem, 2.4vw, 1.85rem);
    color: var(--text);
  }
  .cta p {
    margin: 0 auto 1.35rem;
    max-width: 36rem;
    color: var(--text-muted);
    font-size: var(--fs-body);
  }
  .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 52px; padding: 0 1.45rem; border-radius: 6px;
    font-weight: 700; font-size: var(--fs-btn); text-decoration: none;
    transition: transform 300ms var(--ease, ease), background 300ms var(--ease, ease), border-color 300ms var(--ease, ease), color 300ms var(--ease, ease);
  }
  .btn:hover { transform: translateY(-2px); }
  .btn-primary { background: #5e503f; color: #f2f4f3; }
  .btn-primary:hover { background: #0a0908; }
  .btn-ghost {
    border: 2px solid color-mix(in srgb, var(--text) 35%, transparent);
    color: var(--text); background: transparent;
  }
  .btn-ghost:hover { border-color: var(--accent, #a9927d); color: var(--accent, #a9927d); }
  @media (max-width: 1024px) {
    .panels { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .panel {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      transform: none !important;
    }
    .panel:hover { transform: none; }
    .illus-wrap { aspect-ratio: auto; max-height: 220px; }
    .illus { max-height: 220px; width: auto; margin: 0 auto; filter: none; }
  }
  @media (max-width: 560px) {
    .btn { width: 100%; }
  }
  @media (prefers-reduced-motion: reduce) {
    .panel:hover { transform: none; }
  }
` + FLOAT_CSS;

class SnValueProposition extends HTMLElement {
  connectedCallback() {
    if (!this.id) this.id = 'why-sn';
    const root = this.attachShadow({ mode: 'open' });
    const blocks = [
      {
        tint: '#2f9e6b',
        soft: 'rgba(47, 158, 107, 0.16)',
        badgeIcon: POUND,
        badge: 'Up to 10% MSP Quote Discount',
        title: 'Save More Without Compromising Quality',
        illus: illusImg(ILLUS.pricing),
        body: [
          'Already have a Managed Service Provider quote?',
          "Share it with us and we'll offer up to 10% off any comparable MSP quotation.",
          'Receive the same enterprise-level expertise, proactive support, and reliable service while reducing your IT costs.',
        ],
        note: 'Terms & Conditions Apply.',
      },
      {
        tint: '#3b7ddd',
        soft: 'rgba(59, 125, 221, 0.16)',
        badgeIcon: CHECK,
        badge: 'High Quality · Low Cost',
        title: 'Enterprise Quality. Competitive Pricing.',
        illus: illusImg(ILLUS.enterprise, '-2.2s'),
        body: [
          'Technology should help your business grow—not increase operational costs.',
          'Our experienced engineers deliver cloud, DevOps, cybersecurity, and managed IT services with enterprise-level quality at highly competitive rates.',
          'We focus on long-term partnerships, proactive support, and measurable business value.',
        ],
      },
      {
        tint: '#7a5af5',
        soft: 'rgba(122, 90, 245, 0.16)',
        badgeIcon: ROCKET,
        badge: '7-Day Trial',
        title: 'Try Us Risk-Free',
        illus: illusImg(ILLUS.trial, '-4s'),
        body: [
          'Experience our managed IT services before making a long-term commitment.',
          "During your trial you'll work directly with our engineers and experience our proactive support, cloud management, and technical expertise.",
          "If we don't meet expectations, you're free to walk away according to our Terms & Conditions.",
        ],
      },
    ];

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${VALUE_CSS}</style>
      <section class="section" id="why-sn-infotech" aria-labelledby="value-title">
        <div class="inner">
          <header class="intro" data-reveal>
            <p class="eyebrow">${STAR} Why Businesses Choose SN Infotech</p>
            <h2 id="value-title">More Than an IT Partner.<br /><span class="line">A Team Invested in Your Success.</span></h2>
            <p class="lead">
              We combine enterprise-grade expertise with competitive pricing, proactive support, and flexible engagement models to help UK businesses reduce costs, improve reliability, and scale with confidence.
            </p>
          </header>
          <div class="panels" data-reveal-stagger>
            ${blocks
              .map(
                (b) => `
              <article class="panel" data-reveal style="--tint:${b.tint};--tint-soft:${b.soft}">
                <div class="illus-wrap">${b.illus}</div>
                <span class="chip">${b.badgeIcon}${b.badge}</span>
                <h3>${b.title}</h3>
                ${b.body.map((p) => `<p>${p}</p>`).join('')}
                ${b.note ? `<p class="note">*${b.note}</p>` : ''}
              </article>`
              )
              .join('')}
          </div>
          <div class="cta" data-reveal>
            <h3>Ready to Reduce Your IT Costs?</h3>
            <p>Let's discuss how SN Infotech can improve your infrastructure while lowering operational expenses.</p>
            <div class="actions">
              <a class="btn btn-primary" href="/free-consultation">Get a Free Consultation</a>
              <a class="btn btn-ghost" href="/contact-us">Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>
    `;

    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-value-proposition')) {
  customElements.define('sn-value-proposition', SnValueProposition);
}
