
const FALLBACK_SVG = `/src/assets/images/placeholders/hero-office.svg`;
const HERO_VIDEO = '/src/assets/videos/sninfovideo.mp4';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function bindHeroVideo(host) {
  const video = host.shadowRoot?.querySelector?.('.bg-video');
  if (!video) return () => {};
  const reduced =
    typeof matchMedia !== 'undefined' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return () => {};

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

  let io = null;
  if (typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(
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
    );
    io.observe(host);
    requestAnimationFrame(() => {
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
      const ratio = visible / Math.max(rect.height, 1);
      if (ratio >= PLAY_RATIO && rect.top < vh * 0.72) {
        wantPlay = true;
        armAndPlay();
      }
    });
  } else {
    wantPlay = true;
    armAndPlay();
  }
  return () => {
    wantPlay = false;
    io?.disconnect();
    releaseDecode();
  };
}

/**
 * <sn-service-hero> — full-viewport service hero with video backdrop + SVG media.
 */
class SnServiceHero extends HTMLElement {
  static get observedAttributes() {
    return [
      'eyebrow',
      'title',
      'lead',
      'cta-label',
      'cta-href',
      'secondary-cta-label',
      'secondary-cta-href',
      'tint',
      'image',
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  disconnectedCallback() {
    this._unbindVideo?.();
    this._unbindVideo = null;
  }

  render() {
    const eyebrow = this.getAttribute('eyebrow') || 'SN Infotech';
    const title = this.getAttribute('title') || 'Page';
    const lead = this.getAttribute('lead') || '';
    const ctaLabel = this.getAttribute('cta-label') || 'Get in Touch';
    const ctaHref = this.getAttribute('cta-href') || '/free-consultation';
    const secondaryLabel = this.getAttribute('secondary-cta-label') || 'Contact us';
    const secondaryHref = this.getAttribute('secondary-cta-href') || '/contact-us';
    const tint = this.getAttribute('tint') || 'var(--accent)';
    const image = this.getAttribute('image') || FALLBACK_SVG;
    const isSvg = String(image).endsWith('.svg');
    const isIllustration = isSvg || String(image).endsWith('.png');

    this._unbindVideo?.();
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: var(--font-body);
          color: var(--text);
          --tint: ${tint};
        }
        *, *::before, *::after { box-sizing: border-box; }

        .hero {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: calc(100svh - var(--header-h, 80px));
          min-height: calc(100dvh - var(--header-h, 80px));
          display: flex;
          align-items: center;
          background: var(--bg, #0a0908);
          border-bottom: 1px solid var(--divider, rgba(255,255,255,0.1));
        }
        .bg-video {
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
            rgba(10,9,8,0.9) 0%,
            rgba(10,9,8,0.72) 28%,
            rgba(10,9,8,0.32) 48%,
            rgba(10,9,8,0) 65%,
            transparent 65%
          );
        }
        :host-context([data-theme="light"]) .hero::before {
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
          padding: clamp(2rem, 4vh, 3rem) 0;
        }

        .grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0 0 1.1rem;
          color: var(--tint);
          font-size: clamp(0.85rem, 1.1vw, 0.98rem);
          font-weight: 800;
          letter-spacing: var(--ls-eyebrow, 0.14em);
          text-transform: uppercase;
        }
        .eyebrow::before {
          content: "";
          width: 2rem;
          height: 3px;
          border-radius: 999px;
          background: var(--tint);
        }

        h1 {
          margin: 0 0 1.15rem;
          font-family: var(--font-heading);
          font-size: clamp(2.35rem, 4.8vw, 3.75rem);
          line-height: 1.06;
          letter-spacing: var(--ls-hero, -0.035em);
          color: var(--text);
          max-width: 12ch;
        }

        .lead {
          margin: 0 0 1.75rem;
          max-width: 38rem;
          color: var(--text-muted);
          font-size: clamp(1.05rem, 1.45vw, 1.22rem);
          line-height: 1.55;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 1.45rem;
          border-radius: 999px;
          font-weight: 800;
          font-size: clamp(0.98rem, 1.1vw, 1.08rem);
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .btn-primary {
          background: var(--accent);
          color: var(--on-accent, #fff);
          box-shadow: var(--shadow-cta, 0 10px 28px rgba(0,0,0,0.12));
        }
        .btn-primary:hover { background: var(--accent-hover, #0a0908); transform: translateY(-2px); }
        .btn-secondary {
          background: color-mix(in srgb, var(--surface, #22333b) 78%, transparent);
          color: var(--text);
          border: 1.5px solid var(--border, rgba(255,255,255,0.25));
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          border-color: var(--tint);
          color: var(--tint);
          transform: translateY(-2px);
        }

        .media {
          width: 100%;
          min-width: 0;
          align-self: stretch;
          min-height: min(52vh, 520px);
          border-radius: 0;
          overflow: visible;
          border: none;
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
          display: grid;
          place-items: center;
        }
        .media.is-svg {
          padding: 0;
          min-height: min(46vh, 460px);
          overflow: visible;
        }
        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .media.is-svg img {
          object-fit: contain;
          width: 112%;
          max-width: none;
          max-height: min(58vh, 580px);
          transform: translateX(20%);
          filter: drop-shadow(0 14px 32px rgba(10, 9, 8, 0.22));
        }

        @media (max-width: 900px) {
          .hero {
            min-height: 0;
            height: auto;
            align-items: flex-start;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          h1 { max-width: none; }
          .media {
            min-height: 280px;
            aspect-ratio: 16 / 11;
            align-self: auto;
          }
          .media.is-svg img {
            transform: none;
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 560px) {
          .actions { width: 100%; }
          .btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-video { display: none; }
          .btn:hover { transform: none; }
        }
      </style>
      <section class="hero" aria-labelledby="service-hero-title">
        <video
          class="bg-video"
          muted
          loop
          playsinline
          webkit-playsinline
          preload="none"
          poster="${escapeHtml(image)}"
          aria-hidden="true"
        >
          <source src="${HERO_VIDEO}" type="video/mp4" />
        </video>
        <div class="inner">
          <div class="grid">
            <div class="copy">
              <p class="eyebrow">${escapeHtml(eyebrow)}</p>
              <h1 id="service-hero-title">${escapeHtml(title)}</h1>
              ${lead ? `<p class="lead">${escapeHtml(lead)}</p>` : ''}
              <div class="actions">
                <a class="btn btn-primary" href="${escapeHtml(ctaHref)}">${escapeHtml(ctaLabel)}</a>
                <a class="btn btn-secondary" href="${escapeHtml(secondaryHref)}">${escapeHtml(secondaryLabel)}</a>
              </div>
            </div>
            <div class="media${isIllustration ? ' is-svg' : ''}">
              <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" width="1024" height="682" loading="eager" />
            </div>
          </div>
        </div>
      </section>
    `;
    this._unbindVideo = bindHeroVideo(this);
  }
}

if (!customElements.get('sn-service-hero')) {
  customElements.define('sn-service-hero', SnServiceHero);
}
