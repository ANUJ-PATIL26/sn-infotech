/**
 * <sn-site-header> — ANS-style floating white chrome + mega-menu.
 * Five primary service tabs plus More: Cloud, DevOps, Web Development, AI Solutions, IT Services, More.
 */
const HEADER_CSS = `
  :host {
    display: block;
    font-family: var(--font-body);
    color: var(--ink);
    font-size: var(--fs-body);
    position: relative;
    z-index: 1000;
  }
  *, *::before, *::after { box-sizing: border-box; }
  .shell {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    padding: 1rem var(--gutter) 0;
    pointer-events: none;
  }
  .bar {
    pointer-events: auto;
    width: min(100%, 1440px);
    max-width: 1440px;
    margin: 0 auto;
    min-height: 70px;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(0.75rem, 1.5vw, 1.5rem);
    padding: 0 1rem 0 1.25rem;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(34, 51, 59, 0.2);
  }
  :host-context([data-theme="dark"]) .bar {
    background: #2a3a42;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.35);
  }
  .brand {
    display: flex; align-items: center; gap: 0.65rem;
    font-family: var(--font-heading); font-weight: 700; font-size: 1.05rem;
    color: var(--ink); text-decoration: none;
    flex-shrink: 0;
    margin-right: clamp(0.75rem, 1.5vw, 1.75rem);
  }
  :host-context([data-theme="dark"]) .brand { color: #f4f7fb; }
  .brand img { width: min(132px, 38vw); height: auto; max-width: 100%; }
  .brand-mark {
    width: 36px; height: 36px; border-radius: 6px;
    background: linear-gradient(135deg, #5e503f, #a9927d);
    display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 0.8rem;
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto;
    min-width: 0;
    gap: 0.1rem;
    margin: 0;
  }
  .nav-item { position: relative; }
  .nav-trigger {
    appearance: none; background: transparent; border: 0; color: #22333b;
    padding: 0.65rem 0.45rem; border-radius: 6px; cursor: pointer;
    font: inherit; font-weight: 600; font-size: var(--fs-nav);
    text-decoration: none; display: inline-block; white-space: nowrap;
    transition: color var(--duration) var(--ease), background var(--duration) var(--ease);
  }
  :host-context([data-theme="dark"]) .nav-trigger { color: #d4cbc2; }
  .nav-trigger:hover, .nav-item.open .nav-trigger {
    color: #5e503f; background: rgba(94, 80, 63, 0.08);
  }
  .mega {
    display: none; position: absolute; top: calc(100% + 0.75rem); left: 0;
    width: min(420px, 88vw); padding: var(--space-2);
    background: #f2f4f3; border: 1px solid #ddd6ce;
    border-radius: 6px; box-shadow: 0 0 10px rgba(34, 51, 59, 0.2);
    grid-template-columns: 1fr; gap: 0.25rem;
  }
  /* Invisible bridge so the pointer can cross the gap without closing the menu */
  .mega::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: 1rem;
  }
  :host-context([data-theme="dark"]) .mega {
    background: #1a262c; border-color: #33444c;
  }
  .nav-item:nth-last-child(-n+3) .mega { left: auto; right: 0; }
  .nav-item.open .mega { display: grid; }
  .mega a {
    display: grid; grid-template-columns: 40px 1fr; gap: 0.7rem; align-items: start;
    padding: 0.75rem; border-radius: 6px; text-decoration: none; color: inherit;
    transition: background var(--duration) var(--ease), transform var(--duration) var(--ease-out);
  }
  .mega a:hover { background: rgba(255,255,255,0.7); transform: translateX(2px); }
  :host-context([data-theme="dark"]) .mega a:hover { background: rgba(94,80,63,0.12); }
  .mega-icon {
    width: 40px; height: 40px; border-radius: 6px;
    background: #ffffff; color: #5e503f;
    display: grid; place-items: center;
  }
  :host-context([data-theme="dark"]) .mega-icon { background: #2a3a42; }
  .mega-icon svg { width: 20px; height: 20px; }
  .mega strong {
    display: block; font-size: var(--fs-small); color: #22333b; margin-bottom: 0.15rem;
    font-weight: 600;
  }
  :host-context([data-theme="dark"]) .mega strong { color: #f4f7fb; }
  .mega span { display: block; font-size: var(--fs-xs); color: #6b5f52; line-height: 1.4; }
  .actions {
    display: flex; align-items: center; gap: 0.5rem;
    margin-left: 0; flex-shrink: 0;
  }
  .phone {
    color: #6b5f52; font-weight: 600; font-size: var(--fs-small);
    text-decoration: none; white-space: nowrap;
  }
  .phone:hover { color: #5e503f; }
  .theme-btn, .burger {
    width: 44px; height: 44px; border-radius: 6px;
    border: 1px solid #ddd6ce; background: #fff;
    color: #22333b; cursor: pointer;
    display: inline-grid; place-items: center;
    flex-shrink: 0;
    transition: border-color var(--duration) var(--ease), color var(--duration) var(--ease),
      transform var(--duration) var(--ease-out);
  }
  :host-context([data-theme="dark"]) .theme-btn,
  :host-context([data-theme="dark"]) .burger {
    background: #1a262c; border-color: #33444c; color: #f4f7fb;
  }
  .theme-btn:hover, .burger:hover { border-color: #5e503f; color: #5e503f; transform: scale(1.04); }
  .theme-btn svg, .burger svg { width: 18px; height: 18px; }
  .cta {
    display: inline-flex; align-items: center; justify-content: center;
    flex-shrink: 0; min-height: 44px; padding: 0 1.35rem; border-radius: 6px;
    background: #5e503f; color: #fff; font-weight: 600; line-height: 1;
    font-size: var(--fs-btn); text-decoration: none; text-align: center;
    white-space: nowrap;
    transition: background var(--duration) var(--ease), transform var(--duration) var(--ease-out);
  }
  .cta:hover { background: #0a0908; transform: translateY(-1px); }
  .burger { display: none; margin-left: auto; }
  .drawer {
    display: none; position: fixed; inset: 0; z-index: 1100;
    background: rgba(10, 9, 8, 0.55); pointer-events: auto;
  }
  .drawer.open { display: block; }
  .drawer-panel {
    position: absolute; top: 0; right: 0; width: min(360px, 92vw); height: 100%;
    background: #f2f4f3; padding: var(--space-3); overflow: auto;
    animation: slideIn var(--duration-slow) var(--ease);
  }
  :host-context([data-theme="dark"]) .drawer-panel { background: #22333b; }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
  .drawer-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2); }
  .drawer-head strong { font-size: var(--fs-h3); color: #22333b; }
  :host-context([data-theme="dark"]) .drawer-head strong { color: #f4f7fb; }
  .drawer-acc { border-bottom: 1px solid #ddd6ce; }
  :host-context([data-theme="dark"]) .drawer-acc { border-color: #33444c; }
  .drawer-acc-trigger {
    appearance: none; width: 100%; background: transparent; border: 0;
    display: flex; align-items: center; justify-content: space-between;
    min-height: 44px; padding: 0.9rem 0; color: #22333b; font: inherit; font-weight: 700;
    font-size: var(--fs-nav); cursor: pointer; text-align: left;
  }
  :host-context([data-theme="dark"]) .drawer-acc-trigger { color: #f4f7fb; }
  .drawer-acc-trigger::after {
    content: ''; width: 0.45rem; height: 0.45rem;
    border-right: 2px solid #6b5f52; border-bottom: 2px solid #6b5f52;
    transform: rotate(45deg); transition: transform var(--duration) var(--ease);
  }
  .drawer-acc.open .drawer-acc-trigger::after { transform: rotate(-135deg); }
  .drawer-acc-panel { display: none; padding-bottom: 0.5rem; }
  .drawer-acc.open .drawer-acc-panel { display: block; }
  .drawer a {
    display: block; padding: 0.85rem 0; border-bottom: 1px solid #ddd6ce;
    color: #22333b; text-decoration: none; font-weight: 600; font-size: var(--fs-nav);
  }
  :host-context([data-theme="dark"]) .drawer a { color: #f4f7fb; border-color: #33444c; }
  .drawer .sub { padding-left: 0.75rem; font-weight: 500; color: #6b5f52; font-size: var(--fs-small); }
  .close-btn {
    width: 44px; height: 44px; border-radius: 6px; border: 1px solid #ddd6ce;
    background: #fff; color: #22333b; cursor: pointer; display: grid; place-items: center;
    flex-shrink: 0;
  }
  .spacer { height: calc(70px + 2rem); }
  @media (max-width: 1280px) {
    .nav-links, .actions .phone { display: none; }
    .burger { display: inline-grid; margin-left: 0; }
    .actions { margin-left: auto; }
  }
  @media (max-width: 900px) {
    .actions .cta { display: none; }
    .shell { padding: 0.65rem var(--gutter) 0; }
    .bar { padding: 0 0.75rem; min-height: 60px; }
    .spacer { height: calc(60px + 1.3rem); }
  }
  @media (max-width: 560px) {
    .brand img { width: min(108px, 40vw); }
  }
`;

const NAV_TABS = [
  {
    label: 'Cloud Services',
    items: [
      { label: 'AWS services', href: '/services/cloud/aws', description: 'Amazon Web Services architecture, migration, and managed ops.', icon: 'cloud' },
      { label: 'Azure services', href: '/services/cloud/azure', description: 'Microsoft Azure cloud platforms built for scale and security.', icon: 'cloud' },
      { label: 'GCP services', href: '/services/cloud/gcp', description: 'Google Cloud Platform design, delivery, and optimisation.', icon: 'cloud' },
      { label: 'OCI services', href: '/services/cloud/oci', description: 'Oracle Cloud Infrastructure for enterprise workloads.', icon: 'cloud' },
      { label: 'Cloud consulting & migration', href: '/services/cloud/cloud-consulting-migration', description: 'Strategy, landing zones, and low-risk migration to the cloud.', icon: 'cloud' },
      { label: 'Managed cloud support', href: '/services/cloud/managed-cloud-support', description: 'Day-2 operations, monitoring, and cloud platform care.', icon: 'support' },
    ],
  },
  {
    label: 'DevOps',
    items: [
      { label: 'CI/CD automation', href: '/ci-cd', description: 'Reliable pipelines from commit to production.', icon: 'devops' },
      { label: 'Docker', href: '/docker', description: 'Containerisation strategy, images, and runtime ops.', icon: 'devops' },
      { label: 'Kubernetes', href: '/kubernetes', description: 'Production-grade Kubernetes clusters and operations.', icon: 'k8s' },
      { label: 'Cloud DevOps', href: '/services/devops/cloud-devops', description: 'Cloud-native DevOps delivery across AWS, Azure, GCP, and OCI.', icon: 'devops' },
      { label: 'Infrastructure as Code', href: '/services/devops/infrastructure-as-code', description: 'Repeatable infrastructure with Terraform, CloudFormation, and related tooling.', icon: 'devops' },
    ],
  },
  {
    label: 'Web Development',
    items: [
      { label: 'Custom web development', href: '/website-development', description: 'Bespoke websites built for performance and conversion.', icon: 'web' },
      { label: 'UI/UX design', href: '/ui-ux-design', description: 'Clear interfaces that make complex products feel simple.', icon: 'web' },
      { label: 'SEO & Technical optimization', href: '/services/web-development/seo-technical-optimization', description: 'Technical SEO, performance, and crawlability built into delivery.', icon: 'web' },
      { label: 'Frontend development', href: '/services/web-development/frontend-development', description: 'Modern, accessible frontends with React, Next.js, and related stacks.', icon: 'web' },
      { label: 'Backend development', href: '/services/web-development/backend-development', description: 'APIs, services, and data layers that power your product.', icon: 'web' },
      { label: 'Full stack development', href: '/services/web-development/full-stack-development', description: 'End-to-end web product delivery from UI to infrastructure.', icon: 'web' },
    ],
  },
  {
    label: 'AI Consultations',
    items: [
      { label: 'AI Consulting', href: '/services/ai-consultations/ai-consulting', description: 'Strategy, roadmaps, and practical AI adoption aligned to business outcomes.', icon: 'web' },
      { label: 'Generative AI solutions', href: '/services/ai-consultations/generative-ai-solutions', description: 'Practical GenAI products grounded in your data.', icon: 'web' },
      { label: 'Agentic AI solutions', href: '/services/ai-consultations/agentic-ai-solutions', description: 'Autonomous agent workflows that execute multi-step business tasks.', icon: 'web' },
      { label: 'Machine learning solutions', href: '/services/ai-consultations/machine-learning-solutions', description: 'Models that forecast demand, risk, and opportunity.', icon: 'web' },
      { label: 'NLP & computer vision', href: '/services/ai-consultations/nlp-computer-vision', description: 'Language and vision intelligence for documents, media, and operations.', icon: 'web' },
      { label: 'MLOps & AI infrastructure', href: '/services/ai-consultations/mlops-ai-infrastructure', description: 'Reliable pipelines to train, deploy, and monitor models.', icon: 'devops' },
    ],
  },
  {
    label: 'CyberSecurity',
    items: [
      { label: 'VAPT', href: '/services/cybersecurity/vapt', description: 'Vulnerability assessment and penetration testing for apps and infrastructure.', icon: 'support' },
      { label: 'SOC', href: '/services/cybersecurity/soc', description: 'Security operations centre design, tooling, and response readiness.', icon: 'support' },
      { label: 'DevSecOps', href: '/services/cybersecurity/devsecops', description: 'Security embedded into CI/CD and platform engineering.', icon: 'devops' },
      { label: 'Network & Application Security', href: '/services/cybersecurity/network-application-solutions', description: 'Secure networks, applications, and APIs across hybrid estates.', icon: 'cloud' },
      { label: 'IAM & GRC', href: '/services/cybersecurity/iam-grc', description: 'Identity, access, governance, risk, and compliance programmes.', icon: 'people' },
    ],
  },
  {
    label: 'IT Management',
    items: [
      { label: 'IT Recruitment', href: '/services/it-management/it-recruitment', description: 'Specialist hiring for cloud, DevOps, and engineering roles.', icon: 'people' },
      { label: 'Managed IT Services', href: '/services/it-management/managed-it-service', description: 'Proactive managed IT that keeps teams productive.', icon: 'support' },
      { label: 'Outsource IT', href: '/services/it-management/outsource-it', description: 'Extend your IT capability with a trusted remote team.', icon: 'support' },
      { label: 'IT Consulting', href: '/services/it-management/it-consulting', description: 'Strategy, audits, and roadmap guidance for modern IT.', icon: 'people' },
    ],
  },
  {
    label: 'More',
    items: [
      { label: 'About', href: '/about-us', description: 'Who we are and how we work with clients.', icon: 'people' },
      { label: 'Blog', href: '/blog', description: 'Insights on cloud, DevOps, and managed IT.', icon: 'web' },
      { label: 'Contact us', href: '/contact-us', description: 'Reach the SN Infotech team.', icon: 'support' },
      { label: 'Free consultation', href: '/free-consultation', description: 'Book a no-obligation consultation.', icon: 'people' },
    ],
  },
];

function icon(name) {
  return (globalThis.SN_ICONS && globalThis.SN_ICONS[name]) || '';
}

class SnSiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._onTheme = () => this.syncThemeIcon();
  }

  connectedCallback() {
    this.render();
    this.bind();
    this.syncThemeIcon();
    globalThis.addEventListener?.('sn-theme-change', this._onTheme);
  }

  disconnectedCallback() {
    globalThis.removeEventListener?.('sn-theme-change', this._onTheme);
    document.body.style.overflow = '';
  }

  syncThemeIcon() {
    const theme = globalThis.SN_THEME?.getTheme?.() || 'light';
    const btn = this.shadowRoot.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? icon('sun') : icon('moon');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  render() {
    const logo = globalThis.SN_IMAGE_MAP?.brand?.logo;
    const brandInner = logo?.src
      ? `<img src="${logo.src}" alt="${logo.alt || 'SN Infotech'}" width="140" height="36" />`
      : `<span class="brand-mark">SN</span><span>SN Infotech</span>`;

    const desktopNav = NAV_TABS.map(
      (tab) => `
      <div class="nav-item">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">${tab.label}</button>
        <div class="mega" role="menu">
          ${tab.items
            .map(
              (item) => `
            <a href="${item.href}">
              <div class="mega-icon">${icon(item.icon)}</div>
              <div>
                <strong>${item.label}</strong>
                <span>${item.description}</span>
              </div>
            </a>`
            )
            .join('')}
        </div>
      </div>`
    ).join('');

    const drawerLinks = NAV_TABS.map(
      (tab) => `
      <div class="drawer-acc">
        <button class="drawer-acc-trigger" type="button" aria-expanded="false">${tab.label}</button>
        <div class="drawer-acc-panel">
          ${tab.items.map((i) => `<a class="sub" href="${i.href}">${i.label}</a>`).join('')}
        </div>
      </div>`
    ).join('');

    this.shadowRoot.innerHTML = `
      <style>${HEADER_CSS}</style>
      <div class="shell">
        <header class="bar">
          <a class="brand" href="/" aria-label="SN Infotech Ltd home">${brandInner}</a>
          <nav class="nav-links" aria-label="Primary">${desktopNav}</nav>
          <div class="actions">
            <a class="phone" href="tel:+447348648904">+44 7348 648904</a>
            <button class="theme-btn" type="button" data-theme-toggle aria-label="Toggle colour theme"></button>
            <a class="cta" href="/free-consultation">Get in touch</a>
          </div>
          <button class="burger" type="button" aria-label="Open menu" data-open-drawer>${icon('menu')}</button>
        </header>
      </div>
      <div class="spacer" aria-hidden="true"></div>
      <div class="drawer" data-drawer>
        <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div class="drawer-head">
            <strong>Menu</strong>
            <button class="close-btn" type="button" data-close-drawer aria-label="Close menu">${icon('close')}</button>
          </div>
          ${drawerLinks}
          <a href="tel:+447348648904">+44 7348 648904</a>
          <a href="/free-consultation">Get in touch</a>
        </div>
      </div>
    `;
  }

  bind() {
    const root = this.shadowRoot;
    const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let closeTimer = null;

    const cancelClose = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };

    const closeAllMenus = () => {
      cancelClose();
      root.querySelectorAll('.nav-item').forEach((n) => {
        n.classList.remove('open');
        n.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      });
    };

    const scheduleClose = () => {
      cancelClose();
      closeTimer = setTimeout(closeAllMenus, 180);
    };

    const openMenu = (item, trigger) => {
      cancelClose();
      root.querySelectorAll('.nav-item').forEach((n) => {
        if (n === item) return;
        n.classList.remove('open');
        n.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      });
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    root.querySelectorAll('.nav-item').forEach((item) => {
      const trigger = item.querySelector('.nav-trigger');
      if (!trigger || trigger.tagName !== 'BUTTON') return;

      trigger.addEventListener('click', () => {
        if (canHover()) return;
        const open = item.classList.contains('open');
        if (open) closeAllMenus();
        else openMenu(item, trigger);
      });

      item.addEventListener('mouseenter', () => {
        if (!canHover()) return;
        openMenu(item, trigger);
      });
      item.addEventListener('mouseleave', () => {
        if (!canHover()) return;
        scheduleClose();
      });
    });

    root.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
      const next = globalThis.SN_THEME?.toggleTheme?.() || 'light';
      this.syncThemeIcon();
      globalThis.parent?.postMessage?.({ type: 'sn-theme-change', theme: next }, '*');
      this.dispatchEvent(
        new CustomEvent('sn-theme-change', { bubbles: true, composed: true, detail: { theme: next } })
      );
    });

    const drawer = root.querySelector('[data-drawer]');
    const setDrawer = (open) => {
      drawer?.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    root.querySelector('[data-open-drawer]')?.addEventListener('click', () => setDrawer(true));
    root.querySelector('[data-close-drawer]')?.addEventListener('click', () => setDrawer(false));
    drawer?.addEventListener('click', (e) => {
      if (e.target === drawer) setDrawer(false);
    });

    root.querySelectorAll('.drawer-acc').forEach((acc) => {
      const trigger = acc.querySelector('.drawer-acc-trigger');
      trigger?.addEventListener('click', () => {
        const open = acc.classList.contains('open');
        root.querySelectorAll('.drawer-acc').forEach((a) => {
          a.classList.remove('open');
          a.querySelector('.drawer-acc-trigger')?.setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          acc.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
}

if (!customElements.get('sn-site-header')) {
  customElements.define('sn-site-header', SnSiteHeader);
}
