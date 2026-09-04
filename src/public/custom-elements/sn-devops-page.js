/**
 * <sn-devops-page> — dedicated /devops-services layout (ANS tokens).
 * Content from https://www.sninfotech.co.uk/devops-services
 * Mirrors Vite <devops-page> structure and copy.
 */
const IMG = '/src/assets/images/site/pages/devops-services';

const PAGE = {
  eyebrow: 'DevOps',
  hero: 'DevOps Services',
  lead: 'SN InfoTech carves your path towards modern IT by empowering you to create a platform-centric architecture. Our DevOps Automation Specialists allow easy management of cloud-native and traditional workloads while ensuring seamless application development and delivery.',
  ctaLabel: 'Talk to a DevOps expert',
  ctaHref: '/free-consultation',
  overview: [
    'We know that every organisation has different challenges, but we also know that everyone wants to win. We tailor our services to your unique needs with continuous support in your journey.',
    'Our release automation services focus on ensuring reliable deployments and cutting release time from hours to minutes — with a minimum of 25% reduction in time.',
  ],
  capabilitiesHeading: 'End-to-end DevOps on AWS, Azure & GCP',
  capabilitiesLead:
    'One team covering managed DevOps, hardening, governance, release automation, Infrastructure as Code and CI/CD across the major clouds.',
  features: [
    {
      title: '24/7 Managed DevOps',
      body: 'We run DevOps and cloud infrastructure end to end so you can focus on the business.',
      icon: `${IMG}/icons/managed-devops.png`,
    },
    {
      title: 'Infrastructure Hardening',
      body: 'Secure platforms against misconfiguration and drift before change hits production.',
      icon: `${IMG}/icons/hardening.png`,
    },
    {
      title: 'Infrastructure Governance',
      body: 'Policy, cost and visibility across cloud estates — without slowing delivery.',
      icon: `${IMG}/icons/governance.png`,
    },
    {
      title: 'Release Automation',
      body: 'Faster, reliable releases through CI/CD, test automation and continuous monitoring.',
      icon: `${IMG}/icons/release.png`,
    },
    {
      title: 'Infrastructure Automation',
      body: 'Infrastructure as Code for consistent provisioning and less manual toil.',
      icon: `${IMG}/icons/automation.png`,
    },
    {
      title: 'CI / CD Pipeline',
      body: 'Automate delivery with Jenkins, CircleCI, AWS CodePipeline and cloud-native tools.',
      icon: `${IMG}/icons/cicd.png`,
    },
  ],
  tools: [
    { name: 'Terraform', src: `${IMG}/tools-svg/terraform.svg` },
    { name: 'TeamCity', src: `${IMG}/tools-svg/teamcity.svg` },
    { name: 'strongSwan', src: `${IMG}/tools-svg/strongswan.svg` },
    { name: 'Splunk', src: `${IMG}/tools-svg/splunk.svg` },
    { name: 'SonarQube', src: `${IMG}/tools-svg/sonarqube.svg` },
    { name: 'New Relic', src: `${IMG}/tools-svg/newrelic.svg` },
    { name: 'Maven', src: `${IMG}/tools-svg/maven.svg` },
    { name: 'Kubernetes', src: `${IMG}/tools-svg/kubernetes.svg` },
    { name: 'Jenkins', src: `${IMG}/tools-svg/jenkins.svg` },
    { name: 'ELK', src: `${IMG}/tools-svg/elk.svg` },
    { name: 'GitHub', src: `${IMG}/tools-svg/github.svg` },
    { name: 'ELK Stack', src: `${IMG}/tools-svg/elk-stack.svg` },
    { name: 'Docker', src: `${IMG}/tools-svg/docker.svg` },
    { name: 'Datadog', src: `${IMG}/tools-svg/datadog.svg` },
    { name: 'Consul', src: `${IMG}/tools-svg/consul.svg` },
    { name: 'Bitbucket', src: `${IMG}/tools-svg/bitbucket.svg` },
    { name: 'AWS CodeDeploy', src: `${IMG}/tools-svg/aws-codedeploy.svg` },
    { name: 'Ansible', src: `${IMG}/tools-svg/ansible.svg` },
    { name: 'Bamboo', src: `${IMG}/tools-svg/bamboo.svg` },
    { name: 'Amazon CloudWatch', src: `${IMG}/tools-svg/amazon-cloudwatch.svg` },
  ],
  reasons: [
    {
      title: 'Certified Professionals',
      body: 'Certified professionals with expertise in cloud and configuration management.',
      icon: `${IMG}/icons/certified.png`,
    },
    {
      title: 'End-to-End Services',
      body: 'One-stop automation centre spanning the entire DevOps process.',
      icon: `${IMG}/icons/end-to-end.png`,
    },
    {
      title: 'Reduce TCO',
      body: 'Cost-effective engagement models: Time & Material and Milestone approaches.',
      icon: `${IMG}/icons/reduce-tco.png`,
    },
  ],
  process: [
    { title: 'You send the requirement', icon: `${IMG}/process/step-1.svg` },
    { title: 'We shortlist candidates for you', icon: `${IMG}/process/step-2.svg` },
    { title: 'You interview candidates', icon: `${IMG}/process/step-3.svg` },
    { title: 'Hired candidate starts work', icon: `${IMG}/process/step-4.svg` },
  ],
  scale: {
    heading: 'DevOps at scale',
    body: 'DevOps emphasises coordination and collaboration between Dev and Ops teams while embracing automation and orchestration across the entire IT stack — following a concise, scalable process.',
    bullets: [
      'Onboard applications to the cloud platform',
      'Harden IT infrastructure',
      'Configuration management',
      'Continuous integration & deployments',
    ],
    image: `${IMG}/scale.png`,
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
    max-width: 12ch;
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
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px; background: color-mix(in srgb, var(--border, #c5c9cd) 80%, transparent);
    border: 1px solid color-mix(in srgb, var(--border, #c5c9cd) 80%, transparent);
    border-radius: 6px; overflow: hidden;
  }
  .cap-grid article {
    margin: 0;
    padding: clamp(1.25rem, 2.2vh, 1.65rem) clamp(1.15rem, 1.8vw, 1.45rem);
    background: #fff; color: #22333b; border: none; border-radius: 0;
    border-top: 3px solid #a9927d;
    transition: background var(--duration) var(--ease);
  }
  :host-context([data-theme="dark"]) .cap-grid article {
    background: var(--surface); color: var(--text);
  }
  .cap-grid article:hover { background: #f7f5f2; }
  :host-context([data-theme="dark"]) .cap-grid article:hover { background: color-mix(in srgb, var(--surface) 90%, #a9927d); }
  .cap-top {
    display: flex; align-items: center; justify-content: space-between;
    gap: 0.75rem; margin-bottom: 0.9rem;
  }
  .icon {
    width: 44px; height: 44px;
    display: grid; place-items: center; border-radius: 6px;
    background: #0a0908; padding: 0.4rem; overflow: hidden;
  }
  .icon img { width: 100%; height: 100%; object-fit: contain; }
  .idx {
    color: #5e503f; font-weight: 700; font-size: 0.75rem;
    letter-spacing: 0.08em; text-transform: uppercase;
  }
  :host-context([data-theme="dark"]) .idx { color: var(--teal); }
  .cap-grid h3 {
    margin: 0 0 0.45rem; font-weight: 700;
    font-size: clamp(1.05rem, 1.2vw, 1.15rem); line-height: 1.25; color: #22333b;
  }
  :host-context([data-theme="dark"]) .cap-grid h3 { color: var(--text); }
  .reasons h3, .process h3 {
    margin: 0 0 0.4rem; font-weight: 700;
    font-size: clamp(1.05rem, 1.25vw, 1.2rem); line-height: 1.25; color: #22333b;
  }
  :host-context([data-theme="dark"]) .reasons h3 { color: var(--text); }
  .cap-grid p {
    margin: 0; color: #6b5f52; font-size: var(--fs-small, 0.9375rem); line-height: 1.45; max-width: 28ch;
  }
  .reasons p {
    margin: 0; color: #6b5f52; font-size: var(--fs-body); line-height: 1.5;
  }
  :host-context([data-theme="dark"]) .cap-grid p,
  :host-context([data-theme="dark"]) .reasons p { color: var(--text-muted); }
  .tools-track-wrap {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  }
  .tools-track {
    display: flex; gap: 1rem; width: max-content; align-items: center;
    animation: tools-scroll 38s linear infinite;
  }
  .tool {
    flex: 0 0 auto; width: 140px; height: 128px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 0.55rem;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid color-mix(in srgb, var(--border, #c5c9cd) 80%, transparent);
    padding: 0.85rem 0.65rem 0.75rem;
  }
  .tool img {
    width: 72px; height: 72px;
    object-fit: contain;
    display: block;
    flex: 0 0 auto;
  }
  .tool span {
    color: #0a0908;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    max-width: 100%;
  }
  @keyframes tools-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .reasons {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }
  .reasons article {
    padding: var(--space-3);
    border-left: 3px solid #a9927d;
    background: #fff;
    border-radius: 0 6px 6px 0;
  }
  :host-context([data-theme="dark"]) .reasons article { background: var(--surface); }
  .reason-icon {
    width: 64px; height: 64px; margin-bottom: 0.75rem;
    display: grid; place-items: center; overflow: hidden;
    border-radius: 6px; background: #0a0908; padding: 0.4rem;
  }
  .reason-icon img { width: 100%; height: 100%; object-fit: contain; }
  .process {
    list-style: none; margin: 0; padding: 0;
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-2);
  }
  .process li {
    padding: var(--space-3);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px;
  }
  .process .step-icon {
    width: 56px; height: 56px; margin-bottom: 0.75rem;
    display: block; border-radius: 12px;
  }
  .process .step-num {
    display: block; font-weight: 700; color: #a9927d;
    font-size: 0.85rem; letter-spacing: 0.06em; margin-bottom: 0.55rem;
  }
  .process h3 { color: #fff; font-size: 1.05rem; }
  .scale {
    display: grid; grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(1.5rem, 3vw, 2.5rem); align-items: center;
  }
  .scale p {
    margin: 0 0 var(--space-3); color: var(--text-muted);
    font-size: var(--fs-body-lg); line-height: 1.55;
  }
  .scale ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.65rem; }
  .scale li {
    position: relative; padding-left: 1.35rem;
    color: var(--ink, #22333b); font-size: var(--fs-body); line-height: 1.45;
  }
  :host-context([data-theme="dark"]) .scale li { color: var(--text); }
  .scale li::before {
    content: ""; position: absolute; left: 0; top: 0.55em;
    width: 0.55rem; height: 0.55rem; border-radius: 2px; background: #a9927d;
  }
  .scale-media {
    margin: 0; border-radius: 6px; overflow: hidden;
    border: 1px solid var(--border, #c5c9cd); aspect-ratio: 4 / 3; background: #fff;
  }
  .scale-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
  @media (max-width: 1024px) {
    .cap-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 900px) {
    .hero-layout, .scale { grid-template-columns: 1fr; }
    .cap-grid, .reasons { grid-template-columns: 1fr 1fr; }
    .process { grid-template-columns: 1fr 1fr; }
    .media img { transform: none; width: 100%; max-width: 100%; }
  }
  @media (max-width: 560px) {
    .cap-grid, .reasons, .process { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tools-track { animation: none; flex-wrap: wrap; width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; justify-content: center; }
  }
`;

class SnDevopsPage extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const p = PAGE;

    const caps = p.features
      .map(
        (f, i) => `
      <article data-reveal>
        <div class="cap-top">
          ${f.icon ? `<div class="icon"><img src="${f.icon}" alt="" width="36" height="36" loading="lazy" /></div>` : '<span></span>'}
          <span class="idx">0${i + 1}</span>
        </div>
        <h3>${f.title}</h3>
        <p>${f.body}</p>
      </article>`
      )
      .join('');

    const tools = p.tools
      .map(
        (t) => `
      <div class="tool" title="${t.name}">
        <img src="${t.src}?v=3" alt="" width="72" height="72" loading="lazy" />
        <span>${t.name}</span>
      </div>`
      )
      .join('');

    const reasons = p.reasons
      .map(
        (r) => `
      <article data-reveal>
        ${r.icon ? `<div class="reason-icon"><img src="${r.icon}" alt="" width="56" height="56" loading="lazy" /></div>` : ''}
        <h3>${r.title}</h3>
        <p>${r.body}</p>
      </article>`
      )
      .join('');

    const process = p.process
      .map(
        (s, i) => `
      <li data-reveal>
        ${s.icon ? `<img class="step-icon" src="${s.icon}" alt="" width="56" height="56" loading="lazy" />` : ''}
        <span class="step-num">0${i + 1}</span>
        <h3>${s.title}</h3>
      </li>`
      )
      .join('');

    const bullets = p.scale.bullets.map((b) => `<li>${b}</li>`).join('');
    const overview = p.overview.map((t) => `<p>${t}</p>`).join('');

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
            <img src="/src/assets/images/placeholders/devops/clouddevops-hero.svg" alt="${p.hero}" width="800" height="600" loading="eager" />
          </div>
        </div>
      </section>

      <section class="band" aria-labelledby="devops-overview">
        <div class="inner">
          <p class="eyebrow" data-reveal>Platform-centric delivery</p>
          <h2 id="devops-overview" data-reveal>Built around your challenges</h2>
          <div class="overview" data-reveal>${overview}</div>
        </div>
      </section>

      <section class="band band-alt" aria-labelledby="devops-capabilities">
        <div class="inner">
          <p class="eyebrow" data-reveal>Capabilities</p>
          <h2 id="devops-capabilities" data-reveal>${p.capabilitiesHeading}</h2>
          <p class="lead" data-reveal>${p.capabilitiesLead}</p>
          <div class="cap-grid" data-reveal-stagger>${caps}</div>
        </div>
      </section>

      <section class="band" aria-labelledby="devops-tools">
        <div class="inner" style="margin-bottom: var(--space-3)">
          <p class="eyebrow" data-reveal>Toolchain</p>
          <h2 id="devops-tools" data-reveal>Tools we use</h2>
          <p class="lead" data-reveal>The platforms and automation tools our specialists use to design, ship and run reliable cloud-native delivery.</p>
        </div>
        <div class="tools-track-wrap" aria-label="DevOps tools">
          <div class="tools-track">${tools}${tools}</div>
        </div>
      </section>

      <section class="band band-alt" aria-labelledby="devops-why">
        <div class="inner">
          <p class="eyebrow" data-reveal>Partnership</p>
          <h2 id="devops-why" data-reveal>Why choose us?</h2>
          <div class="reasons" data-reveal-stagger>${reasons}</div>
        </div>
      </section>

      <section class="band band-dark" aria-labelledby="devops-process">
        <div class="inner">
          <p class="eyebrow" data-reveal>Engagement</p>
          <h2 id="devops-process" data-reveal>Process of hiring</h2>
          <p class="lead" data-reveal>A clear path from requirement to productive specialist — whether you need embedded DevOps talent or a managed delivery team.</p>
          <ol class="process" data-reveal-stagger>${process}</ol>
        </div>
      </section>

      <section class="band" aria-labelledby="devops-scale">
        <div class="inner scale">
          <div>
            <p class="eyebrow" data-reveal>Automation & analytics</p>
            <h2 id="devops-scale" data-reveal>${p.scale.heading}</h2>
            <p data-reveal>${p.scale.body}</p>
            <ul data-reveal>${bullets}</ul>
          </div>
          <figure class="scale-media" data-reveal>
            <img src="${p.scale.image}" alt="DevOps at scale" width="640" height="480" loading="lazy" />
          </figure>
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

if (!customElements.get('sn-devops-page')) {
  customElements.define('sn-devops-page', SnDevopsPage);
}
