/**
 * <sn-hero> — Appvia-style split: copy left, visual right + stats.
 */
const HERO_VISUAL_SRC = '/src/assets/images/site/pages/home/Index1.png';

const HERO_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text, #fff); }
  *, *::before, *::after { box-sizing: border-box; }
  .hero {
    position: relative;
    height: 100vh;
    height: 100dvh;
    min-height: 100vh;
    min-height: 100dvh;
    max-height: 100vh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background: #0a0908;
    isolation: isolate;
  }
  :host-context([data-theme="light"]) .hero {
    background: #f7f6f3;
  }
  .bg-photo {
    position: absolute; inset: 0; z-index: 0;
    background-image: var(--hero-image, none);
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  .bg-photo::after {
    content: "";
    position: absolute; inset: 0;
    /* Fade fully done by 65% from left */
    background: linear-gradient(
      90deg,
      rgba(10,9,8,0.9) 0%,
      rgba(10,9,8,0.72) 28%,
      rgba(10,9,8,0.32) 48%,
      rgba(10,9,8,0) 65%,
      transparent 65%
    );
  }
  :host-context([data-theme="light"]) .bg-photo::after {
    background: linear-gradient(
      90deg,
      rgba(247,246,243,0.92) 0%,
      rgba(247,246,243,0.76) 28%,
      rgba(247,246,243,0.34) 48%,
      rgba(247,246,243,0) 65%,
      transparent 65%
    );
  }
  .inner {
    position: relative; z-index: 2;
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto;
    padding: calc(var(--header-h) + clamp(0.5rem, 2vh, 1.25rem)) 0 clamp(0.85rem, 2vh, 1.25rem);
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: clamp(1.25rem, 3.5vw, 3rem);
    align-items: center;
    flex: 1 1 auto;
    min-height: 0;
  }
  .copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    min-width: 0;
  }
  .badge {
    display: inline-flex; align-items: center; gap: 0.55rem;
    padding: 0.45rem 0.95rem; border-radius: 40px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
    color: #a9927d; font-size: clamp(0.75rem, 1vw, 0.88rem); font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem;
  }
  :host-context([data-theme="light"]) .badge {
    background: rgba(28,33,36,0.06); border-color: rgba(28,33,36,0.12); color: #5e503f;
  }
  h1 {
    margin: 0 0 0.75rem;
    font-family: var(--font-heading);
    font-size: clamp(2.1rem, 4vw, 3.4rem);
    line-height: 1.1;
    letter-spacing: var(--ls-hero);
    max-width: 15ch; color: #fff; font-weight: 400;
    text-shadow: 0 1px 2px rgba(10,9,8,0.55), 0 10px 32px rgba(10,9,8,0.35);
  }
  :host-context([data-theme="light"]) h1 {
    color: #1c2124;
    text-shadow: 0 1px 2px rgba(247,246,243,0.85), 0 10px 28px rgba(247,246,243,0.55);
  }
  .lead {
    margin: 0 0 1.35rem; max-width: 34rem;
    color: #d4cbc2; font-size: clamp(0.95rem, 1.25vw, 1.12rem);
    line-height: 1.55; font-weight: 400;
    text-shadow: 0 1px 2px rgba(10,9,8,0.45);
  }
  :host-context([data-theme="light"]) .lead {
    color: #3a4145;
    text-shadow: 0 1px 2px rgba(247,246,243,0.75);
  }
  .solutions {
    display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 0.55rem;
    margin-bottom: 1rem;
  }
  .lozenge {
    display: inline-flex; align-items: center; gap: 0.45rem;
    min-height: 40px; padding: 0.55rem 1.1rem;
    border-radius: 40px; background: #22333b; color: #fff;
    font-weight: 600; font-size: var(--fs-small); text-decoration: none;
    transition: transform var(--duration) var(--ease-out), background var(--duration) var(--ease);
  }
  :host-context([data-theme="light"]) .lozenge {
    background: #fff; color: #1c2124; border: 1px solid rgba(28,33,36,0.12);
  }
  .lozenge:hover { transform: translateY(-2px); background: #5e503f; color: #fff; }
  .lozenge svg { width: 16px; height: 16px; flex-shrink: 0; }
  .actions { display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 0.75rem; margin-bottom: 0; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 52px; padding: 0.9rem 1.55rem; border-radius: 6px;
    font-weight: 600; text-decoration: none; font-size: clamp(0.92rem, 1.05vw, 1.02rem);
    transition: transform var(--duration) var(--ease-out), background var(--duration) var(--ease),
      border-color var(--duration) var(--ease), color var(--duration) var(--ease);
  }
  .btn:hover { transform: translateY(-2px); }
  .btn-primary { background: #5e503f; color: #f2f4f3; }
  .btn-primary:hover { background: #0a0908; }
  .btn-ghost {
    border: 2px solid rgba(255,255,255,0.55); color: #fff; background: transparent;
  }
  .btn-ghost:hover { border-color: #a9927d; color: #a9927d; }
  :host-context([data-theme="light"]) .btn-ghost {
    border-color: rgba(28,33,36,0.35); color: #1c2124;
    background: color-mix(in srgb, #fff 70%, transparent);
  }
  :host-context([data-theme="light"]) .btn-ghost:hover {
    border-color: #5e503f; color: #5e503f;
  }
  .media {
    min-width: 0;
    width: 100%;
    display: grid;
    place-items: center;
    position: relative;
  }
  .media-frame {
    position: relative;
    width: min(100%, 540px);
    transform: translateX(20%) scale(1.1);
    animation: sn-hero-float 7s ease-in-out infinite;
  }
  .hero-visual {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 18px 40px rgba(10, 9, 8, 0.35));
  }
  .scroll-next {
    position: absolute;
    left: auto;
    right: clamp(1.75rem, 4.5vw, 3.5rem);
    top: 50%;
    bottom: auto;
    z-index: 8;
    width: 52px;
    height: 52px;
    margin: 0;
    padding: 0;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: linear-gradient(145deg, #e84a3f 0%, #f09d51 55%, #e8a838 120%);
    color: #fff;
    cursor: pointer;
    box-shadow:
      0 10px 28px rgba(232, 74, 63, 0.35),
      0 2px 0 rgba(255, 255, 255, 0.35) inset;
    transition: transform var(--duration, 220ms) var(--ease, ease),
      box-shadow var(--duration, 220ms) var(--ease, ease),
      opacity var(--duration, 220ms) var(--ease, ease);
  }
  .scroll-next::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px solid rgba(240, 157, 81, 0.55);
    opacity: 0.85;
    animation: sn-scroll-ring 1.8s ease-out infinite;
    pointer-events: none;
  }
  .scroll-chevrons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-top: 2px;
  }
  .scroll-chevrons span {
    display: block;
    width: 12px;
    height: 12px;
    border-right: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
    transform: rotate(45deg);
    opacity: 0.35;
    animation: sn-scroll-cascade 1.4s ease-in-out infinite;
  }
  .scroll-chevrons span:nth-child(1) { animation-delay: 0s; margin-bottom: -6px; }
  .scroll-chevrons span:nth-child(2) { animation-delay: 0.18s; margin-bottom: -6px; }
  .scroll-chevrons span:nth-child(3) { animation-delay: 0.36s; }
  .scroll-next:hover {
    transform: translateY(calc(-50% - 3px)) scale(1.06);
    box-shadow:
      0 14px 34px rgba(232, 74, 63, 0.45),
      0 2px 0 rgba(255, 255, 255, 0.4) inset;
  }
  .scroll-next:focus-visible {
    outline: 2px solid #3b7ddd;
    outline-offset: 5px;
  }
  @keyframes sn-scroll-ring {
    0% { transform: scale(0.92); opacity: 0.9; }
    100% { transform: scale(1.28); opacity: 0; }
  }
  @keyframes sn-scroll-cascade {
    0%, 100% { opacity: 0.25; }
    40% { opacity: 1; }
  }
  @keyframes sn-hero-float {
    0%, 100% { transform: translateX(20%) scale(1.1) translateY(0); }
    50% { transform: translateX(20%) scale(1.1) translateY(-8px); }
  }
  .stats {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.65rem; max-width: 860px;
    margin: clamp(0.85rem, 2.5vh, 1.5rem) auto 0;
    width: 100%;
    flex-shrink: 0;
  }
  .stat {
    padding: clamp(0.55rem, 1.2vh, 0.85rem) 0.7rem;
    border-radius: 6px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    transition: transform var(--duration) var(--ease-out), background var(--duration) var(--ease);
  }
  :host-context([data-theme="light"]) .stat {
    background: rgba(255,255,255,0.72);
    border-color: rgba(28,33,36,0.12);
  }
  .stat:hover { transform: translateY(-3px); background: rgba(255,255,255,0.1); }
  :host-context([data-theme="light"]) .stat:hover { background: rgba(255,255,255,0.92); }
  .stat strong {
    display: block; font-size: clamp(1.35rem, 2.2vw, 1.75rem); font-weight: 700; color: #fff;
    font-variant-numeric: tabular-nums; margin-bottom: 0.2rem;
  }
  :host-context([data-theme="light"]) .stat strong { color: #1c2124; }
  .stat span { font-size: var(--fs-xs); color: #8a7d6e; font-weight: 500; }
  :host-context([data-theme="light"]) .stat span { color: #5c6468; }
  @media (max-width: 900px) {
    .hero {
      height: auto;
      min-height: 0;
      max-height: none;
      overflow: visible;
    }
    .grid { grid-template-columns: 1fr; gap: 1.1rem; }
    .media { order: -1; }
    .media-frame {
      width: min(400px, 88vw);
      transform: none;
      animation: none;
    }
    h1 { max-width: none; }
    .copy { align-items: center; text-align: center; }
    .actions, .solutions { justify-content: center; }
  }
  @media (max-width: 700px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
    h1 { font-size: clamp(1.9rem, 8vw, 2.6rem); }
    .solutions { display: none; }
  }
  @media (max-width: 560px) {
    .hero { padding-bottom: 0.5rem; }
    .actions { width: 100%; }
    .btn { width: 100%; min-height: 48px; }
    .lozenge { min-height: 44px; }
    .media-frame { width: min(320px, 86vw); }
    .stats { gap: 0.45rem; }
    .scroll-next {
      position: fixed;
      left: auto;
      right: var(--space-2, 1rem);
      top: auto;
      bottom: calc(var(--space-2, 1rem) + 56px + 0.7rem);
      margin: 0;
      transform: none;
      z-index: 1400;
    }
    .scroll-next:hover {
      transform: translateY(-3px);
    }
    .scroll-next.is-away {
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  }
  @media (max-height: 720px) {
    .solutions { display: none; }
    h1 { font-size: clamp(1.85rem, 3.6vw, 2.75rem); }
    .lead { margin-bottom: var(--space-3); font-size: clamp(0.9rem, 1.15vw, 1.05rem); }
    .media-frame { width: min(100%, 380px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .media-frame { animation: none !important; transform: none; }
    .scroll-next { animation: none; }
    .scroll-next::before,
    .scroll-chevrons span { animation: none; }
  }
`;

function icon(name) {
  return (globalThis.SN_ICONS && globalThis.SN_ICONS[name]) || '';
}

class SnHero extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const heroImg = globalThis.SN_IMAGE_MAP?.hero?.homepage || {
      src: '/src/assets/images/site/hero/modern-office.jpg',
      alt: 'SN Infotech cloud and DevOps consultancy',
    };
    const poster = heroImg.src || '';

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${HERO_CSS}</style>
      <section class="hero" aria-label="${heroImg.alt}">
        <div class="bg-photo" style="--hero-image: url('${poster}')"></div>
        <div class="inner">
          <div class="grid">
            <div class="copy">
              <p class="badge" data-reveal>London · DevOps · Cloud · Managed IT</p>
              <h1 data-reveal>Your company is great. Your IT should be too.</h1>
              <p class="lead" data-reveal>
                SN Infotech helps your organisations build, manage, and optimise cloud platforms, accelerate DevOps delivery, and provide reliable managed IT services with the same discipline, efficiency, and strategic focus that support every part of your business operations.
              </p>
              <div class="solutions" data-reveal-stagger aria-label="Core solutions">
                <a class="lozenge" data-reveal href="/cloud-solution">${icon('cloud')} Cloud</a>
                <a class="lozenge" data-reveal href="/devops-services">${icon('devops')} DevOps</a>
                <a class="lozenge" data-reveal href="/kubernetes-services">${icon('k8s')} Kubernetes</a>
                <a class="lozenge" data-reveal href="/outsource-it">${icon('support')} Managed IT</a>
                <a class="lozenge" data-reveal href="/website-design">${icon('web')} Digital</a>
                <a class="lozenge" data-reveal href="/it-recruitment">${icon('people')} Recruitment</a>
              </div>
              <div class="actions" data-reveal>
                <a class="btn btn-primary" href="/free-consultation">Get in touch</a>
                <a class="btn btn-ghost" href="#services">Explore services</a>
              </div>
            </div>
            <div class="media" data-reveal>
              <div class="media-frame">
                <img
                  class="hero-visual"
                  src="${HERO_VISUAL_SRC}"
                  alt=""
                  width="807"
                  height="682"
                  decoding="async"
                  fetchpriority="high"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="stats" aria-label="Company highlights">
            <div class="stat">
              <strong data-count="25" data-suffix="+">0</strong>
              <span>Years’ experience</span>
            </div>
            <div class="stat">
              <strong data-count="125">0</strong>
              <span>Projects completed</span>
            </div>
            <div class="stat">
              <strong data-count="25">0</strong>
              <span>Awards</span>
            </div>
            <div class="stat">
              <strong data-count="400">0</strong>
              <span>Satisfied clients</span>
            </div>
          </div>
        </div>
        <button
          class="scroll-next"
          type="button"
          aria-label="Scroll down"
          title="Scroll down"
        >
          <span class="scroll-chevrons" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </section>
    `;

    globalThis.SN_MOTION?.enhance(root);
    root.querySelectorAll('.stats [data-count]').forEach((el) => {
      globalThis.SN_MOTION?.animateCount?.(el);
    });

    const cue = root.querySelector('.scroll-next');
    const onCue = (e) => {
      e.preventDefault();
      const target =
        document.getElementById('why-sn') ||
        document.querySelector('sn-value-proposition, value-proposition');
      if (!target) return;
      if (globalThis.SN_MOTION?.smoothScrollTo) {
        globalThis.SN_MOTION.smoothScrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    cue?.addEventListener('click', onCue);
    this._unbindCue = () => cue?.removeEventListener('click', onCue);

    if (cue && typeof IntersectionObserver !== 'undefined') {
      this._cueIo = new IntersectionObserver(
        ([entry]) => cue.classList.toggle('is-away', !entry?.isIntersecting),
        { threshold: 0.12 }
      );
      this._cueIo.observe(this);
    }
  }

  disconnectedCallback() {
    this._unbindCue?.();
    this._unbindCue = null;
    this._cueIo?.disconnect();
    this._cueIo = null;
  }
}

if (!customElements.get('sn-hero')) {
  customElements.define('sn-hero', SnHero);
}
