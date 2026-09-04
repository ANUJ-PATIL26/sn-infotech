/**
 * <sn-k8s-features> — navy paper band with white feature cards (ANS rhythm).
 * Full-viewport panel: intro + 6 cards sized to fill one screen.
 * Mirrors sn-infotech-site <kubernetes-features> (Index5 intro).
 */
const K8S_CSS = `
  :host { display: block; font-family: var(--font-body); color: #fff; }
  *, *::before, *::after { box-sizing: border-box; }
  .section {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2.75rem, 6vh, 4.5rem) 0;
    background: #22333b;
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
    filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.28));
  }
  .eyebrow {
    color: #a9927d; font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 0.5rem;
  }
  h2 {
    margin: 0 0 0.65rem; font-family: var(--font-heading);
    font-size: var(--fs-h2, clamp(1.85rem, 3.2vw, 2.5rem)); line-height: 1.15; color: #fff; font-weight: 700;
  }
  .lead { margin: 0; color: #c4b8ab; font-size: var(--fs-body-lg, 1.1rem); line-height: 1.5; }
  .grid {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2.2vh, 1.5rem);
  }
  article {
    padding: clamp(1.15rem, 2.2vh, 1.5rem) clamp(1.15rem, 1.6vw, 1.4rem); border-radius: 6px;
    background: #ffffff; color: #22333b;
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  article:hover {
    transform: translateY(-2px);
    box-shadow: -4px 0 16px rgba(34, 51, 59, 0.25);
  }
  .idx {
    color: #5e503f; font-weight: 700; font-size: 0.8rem;
    letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.3rem;
  }
  h3 {
    margin: 0 0 0.4rem; color: #22333b;
    font-size: clamp(1.1rem, 1.3vw, 1.25rem); font-weight: 700; line-height: 1.25;
  }
  p { margin: 0; color: #6b5f52; font-size: var(--fs-body, 1rem); line-height: 1.5; }
  @media (max-width: 900px) {
    .section { min-height: 0; padding: clamp(2.5rem, 6vw, 3.5rem) 0; }
    .grid { grid-template-columns: repeat(2, 1fr); }
    .intro { grid-template-columns: 1fr; }
    .intro-media, .intro-media img { max-height: 200px; height: auto; }
  }
  @media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
`;

const FEATURES = [
  { title: 'Save Money', description: 'Right-size clusters and cut idle spend without sacrificing reliability.' },
  { title: 'Certified', description: 'Practitioners experienced across AWS, GCP, and enterprise Kubernetes.' },
  { title: 'Deploy Code', description: 'Ship safely with repeatable release patterns and environment parity.' },
  { title: 'Data Backups', description: 'Protect stateful workloads with tested backup and restore paths.' },
  { title: 'CI / CD', description: 'Automate build, test, and deploy pipelines around your containers.' },
  { title: 'Log Aggregation', description: 'Centralise logs and alerts so issues surface before customers notice.' },
];

class SnK8sFeatures extends HTMLElement {
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
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${K8S_CSS}</style>
      <section class="section" aria-labelledby="k8s-title">
        <div class="inner">
          <div class="intro" data-reveal>
            <div>
              <p class="eyebrow">Managed Kubernetes as a Service</p>
              <h2 id="k8s-title">Production Kubernetes without the operational drag</h2>
              <p class="lead">A specialist control plane and support model that monitors cluster health and keeps delivery moving.</p>
            </div>
            <div class="intro-media">
              <img src="/src/assets/images/site/pages/home/Index5.png" alt="Managed Kubernetes" width="480" height="240" loading="lazy" />
            </div>
          </div>
          <div class="grid" data-reveal-stagger>${cards}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-k8s-features')) {
  customElements.define('sn-k8s-features', SnK8sFeatures);
}
