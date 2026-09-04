/**
 * <sn-recruitment-features> — IT recruitment expert band (mirrors sn-k8s-features format).
 * Mirrors sn-infotech-site <recruitment-features> (Index7 intro).
 */
const RECRUIT_CSS = `
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
  {
    title: 'Cloud & DevOps',
    description: 'Specialist hiring for cloud and DevOps roles across platforms and delivery pipelines.',
  },
  {
    title: 'Salesforce Developer',
    description: 'Source Salesforce talent to deploy and integrate solutions tailored to your needs.',
  },
  {
    title: 'IT Infrastructure',
    description: 'Infrastructure specialists for end-user, application, and platform support.',
  },
  {
    title: 'Industry Knowledge',
    description: 'Deep sector familiarity and a carefully grown technology talent network.',
  },
  {
    title: 'Best Candidates',
    description: 'We source the finest IT professionals matched to your exact requirement.',
  },
  {
    title: 'Highly Trained',
    description: 'Technical recruiters delivering cost-effective hiring from shortlist to start.',
  },
];

class SnRecruitmentFeatures extends HTMLElement {
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
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${RECRUIT_CSS}</style>
      <section class="section" aria-labelledby="recruit-title">
        <div class="inner">
          <div class="intro" data-reveal>
            <div>
              <p class="eyebrow">IT Recruitment Expert</p>
              <h2 id="recruit-title">IT recruitment &amp; unrivalled expertise</h2>
              <p class="lead">Today’s technology landscape moves fast — every organisation’s worth is measured by its people. We help you hire elite staff to drive innovation across the UK and globally.</p>
            </div>
            <div class="intro-media">
              <img src="/src/assets/images/site/pages/home/Index7.png" alt="IT recruitment and talent partnership" width="480" height="240" loading="lazy" />
            </div>
          </div>
          <div class="grid" data-reveal-stagger>${cards}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-recruitment-features')) {
  customElements.define('sn-recruitment-features', SnRecruitmentFeatures);
}
