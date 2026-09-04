/**
 * <sn-about-strip> — ANS-style media + copy on aqua.
 */
const ABOUT_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text); }
  *, *::before, *::after { box-sizing: border-box; }
  .section { padding: var(--section-y) 0; background: var(--bg); }
  .inner {
    width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto;
    display: grid; grid-template-columns: 1.05fr 1fr; gap: clamp(2rem, 4vw, 3.5rem); align-items: center;
  }
  .media {
    position: relative; min-height: 340px; border-radius: 6px; overflow: hidden;
    background: var(--navy);
  }
  .media::after {
    content: ""; position: absolute; width: 120px; height: 120px; border-radius: 50%;
    background: #c4b09a; bottom: -30px; left: -20px; z-index: 0; opacity: 0.85;
  }
  .media img {
    position: relative; z-index: 1;
    width: 100%; height: 100%; min-height: 340px; object-fit: cover;
    border-radius: 0 0 0 80px;
    transition: transform 1s var(--ease-out);
  }
  .media:hover img { transform: scale(1.03); }
  .eyebrow {
    color: var(--teal); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 var(--space-1);
  }
  h2 {
    margin: 0 0 var(--space-2); font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: var(--ink); font-weight: 700;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  p { margin: 0 0 var(--space-2); color: var(--text-muted); font-size: var(--fs-body); }
  .pills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: var(--space-2); }
  .pill {
    padding: 0.45rem 0.9rem; border-radius: 40px;
    font-size: var(--fs-xs); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
  }
  .pill:nth-child(1) { background: var(--aqua-mid); color: var(--ink); }
  .pill:nth-child(2) { background: #c4b09a; color: var(--ink); }
  .pill:nth-child(3) { background: #fff; color: var(--ink); border: 1px solid var(--border); }
  :host-context([data-theme="dark"]) .pill:nth-child(3) { background: var(--surface); color: var(--text); }
  a {
    display: inline-flex; margin-top: var(--space-3); color: var(--blue); font-weight: 600;
    text-decoration: none; font-size: var(--fs-small); gap: 0.35rem; align-items: center;
  }
  a::after { content: "→"; transition: transform var(--duration) var(--ease-out); }
  a:hover { color: var(--blue-hover); }
  a:hover::after { transform: translateX(3px); }
  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; }
    .media { min-height: 0; }
    .media img { border-radius: 0 0 0 48px; min-height: 220px; }
  }
  @media (max-width: 560px) {
    .media img { min-height: 180px; }
  }
`;

class SnAboutStrip extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const img = globalThis.SN_IMAGE_MAP?.team?.about || {
      src: '/src/assets/images/placeholders/about-team.svg',
      alt: 'SN Infotech consultants collaborating',
    };
    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${ABOUT_CSS}</style>
      <section class="section" aria-labelledby="about-title">
        <div class="inner">
          <div class="media" data-reveal="left">
            <img src="${img.src}" alt="${img.alt}" width="800" height="640" loading="lazy" />
          </div>
          <div data-reveal="right">
            <p class="eyebrow">About SN Infotech</p>
            <h2 id="about-title">The cloud company you can trust</h2>
            <p>
              On-premises, at the edge, and in the cloud — we meet you where you are.
              SN Infotech designs hybrid-ready managed services so UK organisations can migrate,
              operate, and improve without losing control of security, cost, or delivery speed.
            </p>
            <p>
              Partnerships across major cloud platforms and deep operations experience mean we
              help you build, manage, deploy, and scale applications more reliably than ever.
            </p>
            <div class="pills">
              <span class="pill">DevOps</span>
              <span class="pill">Kubernetes</span>
              <span class="pill">IT recruitment</span>
            </div>
            <a href="/about-us">Our company</a>
          </div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-about-strip')) {
  customElements.define('sn-about-strip', SnAboutStrip);
}
