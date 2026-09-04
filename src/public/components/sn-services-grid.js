/**
 * <sn-services-grid> — ANS-style aqua "doors" service tiles.
 */
const SERVICES_CSS = `
  :host {
    display: block;
    font-family: var(--font-body);
    color: var(--text);
    scroll-margin-top: calc(var(--header-h, 88px) + 12px);
  }
  *, *::before, *::after { box-sizing: border-box; }
  .section {
    padding: var(--section-y) 0;
    background: var(--bg-accent);
  }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .head { margin-bottom: var(--space-5); text-align: center; max-width: 44rem; margin-inline: auto; }
  .eyebrow {
    color: var(--teal); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 var(--space-1);
  }
  h2 {
    margin: 0 0 var(--space-2); font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: var(--ink); font-weight: 700;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  .lead { margin: 0; color: var(--text-muted); font-size: var(--fs-body-lg); }
  .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); }
  article {
    padding: 2.5rem 2rem;
    border-radius: 6px;
    background: var(--aqua);
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  :host-context([data-theme="dark"]) article { background: var(--surface); }
  article:hover {
    transform: translateY(-4px);
    box-shadow: -4px 0 16px rgba(34, 51, 59, 0.2);
  }
  .num {
    font-size: var(--fs-xs); letter-spacing: 0.08em; text-transform: uppercase;
    font-weight: 700; margin-bottom: var(--space-2); color: var(--blue);
  }
  .icon {
    width: 52px; height: 52px; border-radius: 6px; margin-bottom: var(--space-2);
    background: #fff; display: grid; place-items: center;
    transition: transform var(--duration) var(--ease-spring);
  }
  :host-context([data-theme="dark"]) .icon { background: var(--surface-elevated); }
  article:hover .icon { transform: scale(1.06); }
  .icon img { width: 32px; height: 32px; object-fit: contain; }
  h3 {
    margin: 0 0 0.6rem; font-size: var(--fs-h3); color: var(--ink);
    font-family: var(--font-heading); font-weight: 700; line-height: var(--lh-heading);
  }
  :host-context([data-theme="dark"]) h3 { color: var(--text); }
  p { margin: 0 0 var(--space-2); color: var(--text-muted); font-size: var(--fs-body); }
  a {
    font-weight: 600; text-decoration: none; font-size: var(--fs-small); color: var(--blue);
    display: inline-flex; gap: 0.35rem; align-items: center;
    transition: gap var(--duration) var(--ease-out), color var(--duration) var(--ease);
  }
  a::after { content: "→"; transition: transform var(--duration) var(--ease-out); }
  a:hover { color: var(--blue-hover); gap: 0.55rem; }
  a:hover::after { transform: translateX(3px); }
  @media (max-width: 900px) { article { padding: 1.75rem 1.35rem; } }
  @media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
`;

class SnServicesGrid extends HTMLElement {
  connectedCallback() {
    if (!this.id) this.id = 'services';
    const root = this.attachShadow({ mode: 'open' });
    const s = globalThis.SN_IMAGE_MAP?.services || {};
    const services = [
      {
        id: '01',
        title: 'Managed Cloud Support',
        href: '/services/cloud/managed-cloud-support',
        img: s.cloudServices,
        description:
          'From keeping the lights on to automating critical cloud systems, our managed cloud teams give you expert coverage while you focus on the business.',
      },
      {
        id: '02',
        title: 'CI/CD Automation',
        href: '/ci-cd',
        img: s.devOpsService,
        description:
          'We help organisations unite development and operations with cloud-native tooling that streamlines and automates workloads end to end.',
      },
      {
        id: '03',
        title: 'Managed IT Services',
        href: '/services/it-management/managed-it-service',
        img: s.itMaintenance,
        description:
          'Let our team design, deploy, and maintain your infrastructure 24×7 — faster releases, safer updates, and less firefighting.',
      },
      {
        id: '04',
        title: 'Outsource IT',
        href: '/services/it-management/outsource-it',
        img: s.outsourceIt,
        description:
          'Close the skills gap with remote coverage for infrastructure, end users, and applications so your internal team can build, not babysit.',
      },
    ];

    const cards = services
      .map(
        (item) => `
      <article data-reveal>
        <div class="num">Solution ${item.id}</div>
        <div class="icon">
          ${item.img ? `<img src="${item.img.src}" alt="${item.img.alt || item.title}" width="32" height="32" loading="lazy" />` : ''}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.href}">Learn more</a>
      </article>`
      )
      .join('');

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${SERVICES_CSS}</style>
      <section class="section" aria-labelledby="services-title">
        <div class="inner">
          <div class="head" data-reveal>
            <p class="eyebrow">Our services</p>
            <h2 id="services-title">Capability that matches how modern teams actually work</h2>
            <p class="lead">Four core offerings drawn from two decades of cloud, DevOps, and managed IT delivery.</p>
          </div>
          <div class="grid" data-reveal-stagger>${cards}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }
}

if (!customElements.get('sn-services-grid')) {
  customElements.define('sn-services-grid', SnServicesGrid);
}
