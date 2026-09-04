/**
 * <sn-kubernetes-page> — dedicated /kubernetes-services layout (ANS tokens).
 * Content from https://www.sninfotech.co.uk/kubernetes-services
 * Mirrors Vite <kubernetes-page> structure and copy.
 */
const IMG = '/src/assets/images/site/pages/kubernetes-services';

const PAGE = {
  eyebrow: 'Kubernetes',
  hero: 'Kubernetes Services',
  lead: 'Managed Kubernetes brings fully automated cluster setup, faster staging environments, and simpler CI/CD for test and deployment — with maximum transparency and control.',
  ctaLabel: 'Talk to a Kubernetes expert',
  ctaHref: '/free-consultation',
  overview: [
    'Managed Kubernetes facilitates the fully automated setup of Kubernetes clusters. Several clusters can also be quickly deployed for staging environments, then deleted when no longer needed.',
    'Kubernetes simplifies and carefully supports the automation of CI/CD pipelines for testing and deployment. Our managed solution offers maximum transparency and control of the K8s cluster.',
  ],
  capabilitiesHeading: 'Managed Kubernetes brings K8s to life',
  capabilitiesLead:
    'Everything you need for production-ready clusters — security, upgrades, availability and full admin access.',
  features: [
    {
      title: 'Security Fixes',
      body: 'Automatic updates of security fixes across the cluster.',
      icon: `${IMG}/icons/security.png`,
    },
    {
      title: 'Versioning & Upgrades',
      body: 'Managed versioning and upgrade paths without weekend fire drills.',
      icon: `${IMG}/icons/versioning.png`,
    },
    {
      title: 'Top Availability',
      body: 'Highly available, geo-redundant control plane for resilient operations.',
      icon: `${IMG}/icons/availability.png`,
    },
    {
      title: 'Admin API Access',
      body: 'Full cluster admin-level access to the Kubernetes API when you need it.',
      icon: `${IMG}/icons/admin-api.png`,
    },
  ],
  operations: {
    heading: 'Kubernetes deployment and operations',
    body: 'Knowing your TCO is critical when choosing how to deploy and manage Kubernetes. We help you understand the real cost of deployment and Day 2 operations.',
    bullets: [
      'Pre-requisites for a successful production roll-out',
      'Major deployment options — DIY, public cloud, managed service, distros',
      'Key cost variables during deployment and Day 2 operations',
      'Actual TCO patterns from enterprise Kubernetes users',
    ],
    image: `${IMG}/vps-general.png`,
  },
  integrations: [
    {
      heading: 'Easy integration of cloud-native solutions',
      body: 'Managed Kubernetes is complete “vanilla” Kubernetes as defined by the CNCF. K8s works best with complementary services — Istio, Linkerd, Prometheus, Traefik, Envoy, Fluentd, Rook and more — connected via APIs. Install the additional services you need.',
      image: `${IMG}/cloud-native.png`,
      eyebrow: 'Cloud-native',
    },
    {
      heading: 'Fully integrated persistent storage',
      body: 'With CSI-based storage, stateful apps are as easy as a simple web server. Persistent volumes are created via PVC and attached to worker nodes. Volumes migrate on node failure — fault-tolerant by design on our double-redundant Enterprise Cloud storage.',
      image: `${IMG}/persistent-storage.png`,
      eyebrow: 'Storage',
    },
  ],
  upstream: {
    heading: '100% upstream Kubernetes',
    body: 'Shared visibility and control across hybrid environments spanning bare metal, private and public clouds.',
    platforms: [
      { name: 'Bare metal & private', icon: `${IMG}/platforms/environments.png` },
      { name: 'AWS', icon: `${IMG}/platforms/aws.png` },
      { name: 'Public cloud', icon: `${IMG}/platforms/cloud.png` },
      { name: 'Azure', icon: `${IMG}/platforms/azure.png` },
    ],
  },
};

const CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text); }
  *, *::before, *::after { box-sizing: border-box; }
  .hero {
    position: relative;
    overflow: hidden;
    padding: calc(var(--header-h, 88px) + clamp(2.5rem, 5vw, 3.5rem)) 0 clamp(3rem, 6vw, 4.5rem);
    background: #0a0908;
    border-bottom: 1px solid var(--border, #c5c9cd);
  }
  .hero-bg-video {
    position: absolute; inset: 0; z-index: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center 30%;
    pointer-events: none;
  }
  .hero::before {
    content: "";
    position: absolute; inset: 0; z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(247,246,243,0.92) 0%,
      rgba(247,246,243,0.76) 28%,
      rgba(247,246,243,0.34) 48%,
      rgba(247,246,243,0) 65%,
      transparent 65%
    );
  }
  :host-context([data-theme="dark"]) .hero::before {
    background: linear-gradient(
      90deg,
      rgba(10,9,8,0.9) 0%,
      rgba(10,9,8,0.72) 28%,
      rgba(10,9,8,0.32) 48%,
      rgba(10,9,8,0) 65%,
      transparent 65%
    );
  }
  @media (prefers-reduced-motion: reduce) { .hero-bg-video { display: none; } }
  .inner { position: relative; z-index: 2; width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .hero-layout {
    display: grid; grid-template-columns: 1.15fr 0.85fr;
    gap: var(--space-4); align-items: center;
  }
  .eyebrow {
    color: var(--teal, #5e503f); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 0.5rem;
  }
  h1 {
    margin: 0 0 var(--space-2); font-family: var(--font-heading);
    font-size: var(--fs-h1); line-height: 1.15; color: var(--ink, #22333b); font-weight: 700;
    max-width: 14ch;
  }
  :host-context([data-theme="dark"]) h1 { color: var(--text); }
  .lead {
    margin: 0 0 var(--space-3); color: var(--text-muted);
    font-size: var(--fs-body-lg); line-height: 1.55; max-width: 42rem;
  }
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.35rem;
    min-height: 48px; padding: 0 1.5rem; border-radius: 6px;
    background: var(--ink, #22333b); color: #fff; font-weight: 600; text-decoration: none;
    font-size: var(--fs-btn);
    transition: transform var(--duration) var(--ease-out), box-shadow var(--duration) var(--ease);
  }
  .btn::after { content: "→"; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(34, 51, 59, 0.18); }
  .media {
    border: 0; background: transparent; box-shadow: none; overflow: visible;
  }
  .media img {
    width: 112%; max-width: none; height: auto; max-height: min(54vh, 520px);
    object-fit: contain; display: block;
    transform: translateX(20%);
    filter: drop-shadow(0 16px 36px rgba(0,0,0,0.14));
  }
  .band { padding: var(--section-y) 0; }
  .band-alt { background: var(--bg, #f2f4f3); }
  .band-dark { background: #22333b; color: #fff; }
  h2 {
    margin: 0 0 0.65rem; font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: 1.15; color: var(--ink, #22333b); font-weight: 700;
    max-width: 22ch;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  .band-dark h2 { color: #fff; }
  .band-dark .eyebrow { color: #a9927d; }
  .band-dark .lead { color: #c4b8ab; }
  .overview p {
    margin: 0 0 var(--space-2); color: var(--text-muted);
    font-size: var(--fs-body-lg); line-height: 1.55; max-width: 48rem;
  }
  .cap-grid {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px; background: color-mix(in srgb, var(--border, #c5c9cd) 80%, transparent);
    border: 1px solid color-mix(in srgb, var(--border, #c5c9cd) 80%, transparent);
    border-radius: 6px; overflow: hidden;
  }
  .cap-grid article {
    margin: 0; padding: clamp(1.2rem, 2vh, 1.5rem);
    background: #fff; color: #22333b; border: none; border-radius: 0;
    border-top: 3px solid #a9927d;
  }
  :host-context([data-theme="dark"]) .cap-grid article { background: var(--surface); color: var(--text); }
  .cap-top {
    display: flex; align-items: center; justify-content: space-between;
    gap: 0.75rem; margin-bottom: 0.85rem;
  }
  .icon {
    width: 44px; height: 44px; display: grid; place-items: center;
    border-radius: 6px; background: #0a0908; padding: 0.35rem; overflow: hidden;
  }
  .icon img { width: 100%; height: 100%; object-fit: contain; }
  .idx {
    color: #5e503f; font-weight: 700; font-size: 0.75rem;
    letter-spacing: 0.08em; text-transform: uppercase;
  }
  .cap-grid h3 {
    margin: 0 0 0.4rem; font-weight: 700;
    font-size: clamp(1rem, 1.15vw, 1.1rem); line-height: 1.25; color: #22333b;
  }
  :host-context([data-theme="dark"]) .cap-grid h3 { color: var(--text); }
  .cap-grid p {
    margin: 0; color: #6b5f52; font-size: var(--fs-small, 0.9375rem); line-height: 1.45; max-width: 26ch;
  }
  :host-context([data-theme="dark"]) .cap-grid p { color: var(--text-muted); }
  .ops, .split {
    display: grid; grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(1.5rem, 3vw, 2.5rem); align-items: center;
  }
  .ops ul, .bullets { margin: 0 0 var(--space-3); padding: 0; list-style: none; display: grid; gap: 0.65rem; }
  .ops li, .bullets li {
    position: relative; padding-left: 1.35rem;
    color: var(--ink, #22333b); font-size: var(--fs-body); line-height: 1.45;
  }
  :host-context([data-theme="dark"]) .ops li { color: var(--text); }
  .ops li::before, .bullets li::before {
    content: ""; position: absolute; left: 0; top: 0.55em;
    width: 0.55rem; height: 0.55rem; border-radius: 2px; background: #a9927d;
  }
  .link {
    display: inline-flex; align-items: center; min-height: 44px; padding: 0 1.15rem;
    border-radius: 6px; border: 1px solid #a9927d; color: #22333b;
    text-decoration: none; font-weight: 600;
  }
  .split { margin-bottom: clamp(2.5rem, 5vw, 4rem); }
  .split:last-child { margin-bottom: 0; }
  .split.reverse > :first-child { order: 2; }
  .platforms {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-2);
  }
  .platform {
    display: flex; flex-direction: column; align-items: center; gap: 0.65rem;
    padding: var(--space-3); border-radius: 6px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    text-align: center;
  }
  .platform-icon {
    width: 64px; height: 64px; display: grid; place-items: center;
    border-radius: 6px; background: #0a0908; padding: 0.5rem;
  }
  .platform-icon img { width: 100%; height: 100%; object-fit: contain; }
  .platform span { color: #fff; font-size: 0.8rem; font-weight: 700; line-height: 1.25; }
  @media (max-width: 1024px) {
    .cap-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 900px) {
    .hero-layout, .ops, .split, .split.reverse { grid-template-columns: 1fr; }
    .split.reverse > :first-child { order: 0; }
    .cap-grid, .platforms { grid-template-columns: 1fr 1fr; }
    .media img { transform: none; width: 100%; max-width: 100%; }
  }
  @media (max-width: 560px) {
    .cap-grid, .platforms { grid-template-columns: 1fr; }
  }
`;

class SnKubernetesPage extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const p = PAGE;

    const caps = p.features
      .map(
        (f, i) => `
      <article data-reveal>
        <div class="cap-top">
          <div class="icon"><img src="${f.icon}" alt="" width="36" height="36" loading="lazy" /></div>
          <span class="idx">0${i + 1}</span>
        </div>
        <h3>${f.title}</h3>
        <p>${f.body}</p>
      </article>`
      )
      .join('');

    const bullets = p.operations.bullets.map((b) => `<li>${b}</li>`).join('');
    const overview = p.overview.map((t) => `<p>${t}</p>`).join('');

    const integrations = p.integrations
      .map(
        (block, i) => `
      <div class="split ${i % 2 === 1 ? 'reverse' : ''}" data-reveal>
        <div>
          <p class="eyebrow">${block.eyebrow}</p>
          <h2>${block.heading}</h2>
          <p class="lead">${block.body}</p>
          <a class="link" href="/free-consultation">Contact us</a>
        </div>
        <figure class="media">
          <img src="${block.image}" alt="${block.heading}" width="800" height="600" loading="lazy" />
        </figure>
      </div>`
      )
      .join('');

    const platforms = p.upstream.platforms
      .map(
        (pl) => `
      <div class="platform" data-reveal>
        <div class="platform-icon"><img src="${pl.icon}" alt="" width="56" height="56" loading="lazy" /></div>
        <span>${pl.name}</span>
      </div>`
      )
      .join('');

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${CSS}</style>

      <section class="hero">
        <video class="hero-bg-video" muted loop playsinline webkit-playsinline preload="none" aria-hidden="true">
          <source src="/src/assets/videos/sninfovideo.mp4" type="video/mp4" />
        </video>
        <div class="inner hero-layout">
          <div data-reveal>
            <p class="eyebrow">${p.eyebrow}</p>
            <h1>${p.hero}</h1>
            <p class="lead">${p.lead}</p>
            <a class="btn" href="${p.ctaHref}">${p.ctaLabel}</a>
          </div>
          <div class="media" data-reveal>
            <img src="/src/assets/images/placeholders/devops/k8s-hero.svg" alt="${p.hero}" width="800" height="600" loading="eager" />
          </div>
        </div>
      </section>

      <section class="band" aria-labelledby="k8s-overview">
        <div class="inner">
          <p class="eyebrow" data-reveal>Managed Kubernetes</p>
          <h2 id="k8s-overview" data-reveal>Built for control and speed</h2>
          <div class="overview" data-reveal>${overview}</div>
        </div>
      </section>

      <section class="band band-alt" aria-labelledby="k8s-capabilities">
        <div class="inner">
          <p class="eyebrow" data-reveal>Capabilities</p>
          <h2 id="k8s-capabilities" data-reveal>${p.capabilitiesHeading}</h2>
          <p class="lead" data-reveal>${p.capabilitiesLead}</p>
          <div class="cap-grid" data-reveal-stagger>${caps}</div>
        </div>
      </section>

      <section class="band" aria-labelledby="k8s-ops">
        <div class="inner ops">
          <div>
            <p class="eyebrow" data-reveal>TCO & Day 2</p>
            <h2 id="k8s-ops" data-reveal>${p.operations.heading}</h2>
            <p class="lead" data-reveal>${p.operations.body}</p>
            <ul data-reveal>${bullets}</ul>
            <a class="btn" data-reveal href="/free-consultation">Contact us</a>
          </div>
          <figure class="media" data-reveal>
            <img src="${p.operations.image}" alt="Kubernetes operations" width="800" height="600" loading="lazy" />
          </figure>
        </div>
      </section>

      <section class="band band-alt">
        <div class="inner">${integrations}</div>
      </section>

      <section class="band band-dark" aria-labelledby="k8s-upstream">
        <div class="inner">
          <p class="eyebrow" data-reveal>Upstream</p>
          <h2 id="k8s-upstream" data-reveal>${p.upstream.heading}</h2>
          <p class="lead" data-reveal>${p.upstream.body}</p>
          <div class="platforms" data-reveal-stagger>${platforms}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
    this._bindHeroVideo(root);
  }

  _bindHeroVideo(root) {
    this._unbindHeroVideo?.();
    const video = root.querySelector('.hero-bg-video');
    if (!video) return;
    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'none';
    let wantPlay = false;
    let armed = false;
    const PLAY_RATIO = 0.35;
    const KEEP_RATIO = 0.18;
    const releaseDecode = () => {
      try {
        if (!video.paused) video.pause();
      } catch {
        /* ignore */
      }
      try {
        if (video.readyState > 0) video.currentTime = 0;
      } catch {
        /* ignore */
      }
    };
    const armAndPlay = () => {
      if (!wantPlay) return;
      if (!armed) {
        armed = true;
        try {
          video.load();
        } catch {
          /* ignore */
        }
      }
      if (!video.paused) return;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              if (!entry) return;
              const ratio = entry.intersectionRatio || 0;
              if (entry.isIntersecting && ratio >= PLAY_RATIO) {
                wantPlay = true;
                armAndPlay();
                return;
              }
              if (!entry.isIntersecting || ratio < KEEP_RATIO) {
                wantPlay = false;
                releaseDecode();
              }
            },
            {
              root: null,
              threshold: [0, 0.08, 0.18, 0.35, 0.5, 0.75, 1],
              rootMargin: '0px 0px -28% 0px',
            }
          )
        : null;
    io?.observe(this);
    requestAnimationFrame(() => {
      const rect = this.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
      const ratio = visible / Math.max(rect.height, 1);
      if (ratio >= PLAY_RATIO && rect.top < vh * 0.72) {
        wantPlay = true;
        armAndPlay();
      }
    });
    this._unbindHeroVideo = () => {
      wantPlay = false;
      io?.disconnect();
      releaseDecode();
    };
  }

  disconnectedCallback() {
    this._unbindHeroVideo?.();
    this._unbindHeroVideo = null;
  }
}

if (!customElements.get('sn-kubernetes-page')) {
  customElements.define('sn-kubernetes-page', SnKubernetesPage);
}
