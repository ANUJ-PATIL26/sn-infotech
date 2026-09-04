/**
 * <sn-testimonials> — ANS-style navy band + white postcard stories with cut-corner images.
 */
const TESTIMONIALS_CSS = `
  :host { display: block; font-family: var(--font-body); color: #fff; }
  *, *::before, *::after { box-sizing: border-box; }
  .section { padding: var(--section-y) 0; background: #22333b; }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .top {
    display: flex; flex-wrap: wrap; justify-content: space-between; align-items: end;
    gap: var(--space-2); margin-bottom: var(--space-4);
  }
  .eyebrow {
    color: #a9927d; font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 var(--space-1);
  }
  h2 {
    margin: 0; font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: #fff; font-weight: 700;
  }
  .view-all {
    color: #a9927d; font-weight: 600; font-size: var(--fs-small); text-decoration: none;
    display: inline-flex; gap: 0.35rem; align-items: center;
  }
  .view-all:hover { color: #fff; }
  .view-all::after { content: "→"; transition: transform var(--duration) var(--ease-out); }
  .view-all:hover::after { transform: translateX(3px) rotate(-20deg); }
  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-2); }
  article {
    display: flex; flex-direction: column; overflow: hidden;
    border-radius: 6px; background: #ffffff; color: #22333b;
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  article:hover {
    transform: translateY(-5px);
    box-shadow: -4px 0 16px rgba(34, 51, 59, 0.28);
  }
  .media {
    position: relative; aspect-ratio: 16 / 10; background: transparent; overflow: visible;
    display: grid; place-items: center; padding: 0.65rem;
  }
  .media::before { content: none; }
  .media img {
    position: relative; z-index: 1;
    width: 100%; height: 100%; object-fit: contain;
    border-radius: 0;
    filter: drop-shadow(0 10px 22px rgba(10, 9, 8, 0.14));
    transition: transform 0.9s var(--ease-out);
  }
  article:hover .media img { transform: scale(1.04); }
  .body { padding: var(--space-3); flex: 1; display: flex; flex-direction: column; }
  .meta {
    display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;
    margin-bottom: 0.75rem; font-size: var(--fs-xs); color: #6b5f52; font-weight: 600;
  }
  .tag {
    display: inline-flex; padding: 0.3rem 0.7rem; border-radius: 40px;
    background: #f2f4f3; color: #22333b; text-transform: uppercase; letter-spacing: 0.06em;
  }
  .dot {
    width: 8px; height: 8px; border-radius: 50%; background: #a9927d; flex-shrink: 0;
  }
  h3 {
    margin: 0 0 0.6rem; color: #22333b; font-size: var(--fs-h3);
    font-family: var(--font-heading); font-weight: 700; line-height: var(--lh-heading);
  }
  p { margin: 0; color: #6b5f52; font-size: var(--fs-body); flex: 1; }
  @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
`;

class SnTestimonials extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const HOME = '/src/assets/images/site/pages/home';
    const stories = [
      {
        title: 'Cloud migration without downtime',
        industry: 'SaaS',
        category: 'Cloud',
        read: '4 min read',
        summary: 'Lifted a multi-tier application to managed cloud with blue/green cutover and hardened networking.',
        image: { src: `${HOME}/Index8.png`, alt: 'Cloud migration customer outcome' },
      },
      {
        title: 'DevOps platform for faster releases',
        industry: 'FinTech',
        category: 'DevOps',
        read: '3 min read',
        summary: 'Introduced CI/CD, observability, and on-call practices that halved lead time for changes.',
        image: { src: `${HOME}/Index9.png`, alt: 'DevOps customer outcome' },
      },
      {
        title: 'Always-on IT support for a distributed team',
        industry: 'Professional services',
        category: 'Managed IT',
        read: '3 min read',
        summary: 'Outsourced helpdesk and infrastructure care so internal staff could focus on client delivery.',
        image: { src: `${HOME}/Index10.png`, alt: 'Managed IT customer outcome' },
      },
    ];

    const cards = stories
      .map(
        (s) => `
      <article data-reveal>
        <div class="media">
          ${s.image ? `<img src="${s.image.src}" alt="${s.image.alt || s.title}" width="800" height="500" loading="lazy" />` : ''}
        </div>
        <div class="body">
          <div class="meta">
            <span class="tag">${s.category}</span>
            <span class="dot" aria-hidden="true"></span>
            <span>${s.industry}</span>
            <span class="dot" aria-hidden="true"></span>
            <span>${s.read}</span>
          </div>
          <h3>${s.title}</h3>
          <p>${s.summary}</p>
        </div>
      </article>`
      )
      .join('');

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${TESTIMONIALS_CSS}</style>
      <section class="section" aria-labelledby="customers-title">
        <div class="inner">
          <div class="top" data-reveal>
            <div>
              <p class="eyebrow">Hear from our customers</p>
              <h2 id="customers-title">Outcomes teams can measure</h2>
            </div>
            <a class="view-all" href="/blog">View all customer stories</a>
          </div>
          <div class="grid" data-reveal-stagger>${cards}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-testimonials')) {
  customElements.define('sn-testimonials', SnTestimonials);
}
