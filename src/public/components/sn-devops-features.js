/**
 * <sn-devops-features> — DevOps expert band (mirrors sn-k8s-features format).
 * Mirrors sn-infotech-site <devops-features> (Index6 intro).
 */
const DEVOPS_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text); }
  *, *::before, *::after { box-sizing: border-box; }
  .section {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2.75rem, 6vh, 4.5rem) 0;
    background: var(--bg);
  }
  .inner {
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: clamp(1.75rem, 4vh, 2.75rem);
  }
  .intro {
    display: grid; grid-template-columns: 1.35fr 0.85fr; gap: clamp(1.25rem, 3vw, 2rem);
    align-items: center;
  }
  .intro-media {
    border-radius: 0; overflow: visible; border: none;
    box-shadow: none; background: transparent;
    max-height: clamp(200px, 24vh, 280px);
  }
  .intro-media img {
    width: 100%; height: clamp(200px, 24vh, 280px);
    display: block; object-fit: contain; object-position: center;
    filter: drop-shadow(0 12px 28px rgba(10, 9, 8, 0.16));
  }
  .eyebrow {
    color: var(--teal); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 0.5rem;
  }
  h2 {
    margin: 0 0 0.65rem; font-family: var(--font-heading);
    font-size: var(--fs-h2, clamp(1.85rem, 3.2vw, 2.5rem)); line-height: 1.15; color: var(--ink); font-weight: 700;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  .lead { margin: 0; color: var(--text-muted); font-size: var(--fs-body-lg, 1.1rem); line-height: 1.5; }
  .grid {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2.2vh, 1.5rem);
  }
  article {
    padding: clamp(1.15rem, 2.2vh, 1.5rem) clamp(1.15rem, 1.6vw, 1.4rem); border-radius: 6px;
    background: #ffffff; color: #22333b;
    border: 1px solid color-mix(in srgb, var(--border, #c5c9cd) 70%, transparent);
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  :host-context([data-theme="dark"]) article {
    background: var(--surface); color: var(--text); border-color: var(--border);
  }
  article:hover {
    transform: translateY(-2px);
    box-shadow: -4px 0 16px rgba(34, 51, 59, 0.18);
  }
  .idx {
    color: #5e503f; font-weight: 700; font-size: 0.8rem;
    letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.3rem;
  }
  :host-context([data-theme="dark"]) .idx { color: var(--teal); }
  h3 {
    margin: 0 0 0.4rem; color: #22333b;
    font-size: clamp(1.1rem, 1.3vw, 1.25rem); font-weight: 700; line-height: 1.25;
  }
  :host-context([data-theme="dark"]) h3 { color: var(--text); }
  p { margin: 0; color: #6b5f52; font-size: var(--fs-body, 1rem); line-height: 1.5; }
  :host-context([data-theme="dark"]) p { color: var(--text-muted); }
  @media (max-width: 900px) {
    .section { min-height: 0; padding: clamp(2.5rem, 6vw, 3.5rem) 0; }
    .grid { grid-template-columns: repeat(2, 1fr); }
    .intro { grid-template-columns: 1fr; }
    .intro-media, .intro-media img { max-height: 200px; height: auto; }
  }
  @media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
`;

const FEATURES = [
  {
    title: '24/7 Managed DevOps',
    description: 'We run DevOps and cloud infrastructure end to end so you can focus on the business.',
  },
  {
    title: 'Infrastructure Hardening',
    description: 'Secure platforms against misconfiguration and drift before change hits production.',
  },
  {
    title: 'Infrastructure Governance',
    description: 'Policy, cost and visibility across cloud estates — without slowing delivery.',
  },
  {
    title: 'Release Automation',
    description: 'Faster, reliable releases through CI/CD, test automation and continuous monitoring.',
  },
  {
    title: 'Infrastructure Automation',
    description: 'Infrastructure as Code for consistent provisioning and less manual toil.',
  },
  {
    title: 'CI / CD Pipeline',
    description: 'Automate delivery with Jenkins, CircleCI, AWS CodePipeline and cloud-native tools.',
  },
];

class SnDevopsFeatures extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const cards = FEATURES.map(
      (f, i) => `
      <article data-reveal>
        <div class="idx">0${i + 1}</div>
        <h3>${f.title}</h3>
        <p>${f.description}</p>
      </article>`
    ).join('');

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${DEVOPS_CSS}</style>
      <section class="section" aria-labelledby="devops-title">
        <div class="inner">
          <div class="intro" data-reveal>
            <div>
              <p class="eyebrow">DevOps Expert</p>
              <h2 id="devops-title">Hire highly skilled DevOps consultants from us</h2>
              <p class="lead">Maximise ongoing business value from cloud adoption. We unite development and operations with cloud-native tooling so you build, manage, deploy, and scale applications faster and more reliably.</p>
            </div>
            <div class="intro-media">
              <img src="/src/assets/images/site/pages/home/Index6.png" alt="DevOps delivery and automation" width="480" height="240" loading="lazy" />
            </div>
          </div>
          <div class="grid" data-reveal-stagger>${cards}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-devops-features')) {
  customElements.define('sn-devops-features', SnDevopsFeatures);
}
