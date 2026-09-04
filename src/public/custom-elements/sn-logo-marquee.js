/**
 * <sn-logo-marquee> — ANS-style "Trusted by" aqua band.
 * Duplicates logos until the track fills wide/4K viewports.
 */
const MARQUEE_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text-muted); }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap {
    --logo-gap: clamp(1.5rem, 3vw, 2.5rem);
    --logo-size: min(220px, 70vw);
    --logo-img-h: 64px;
    --marquee-duration: 32s;
    background: var(--bg);
    padding: calc(var(--space-5) * 2) 0 calc(var(--space-4) * 2);
    overflow: hidden;
  }
  .label {
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto var(--space-3);
    text-align: center;
    font-family: var(--font-heading);
    font-size: var(--fs-h3); font-weight: 700; color: var(--ink);
  }
  :host-context([data-theme="dark"]) .label { color: var(--text); }
  .sub {
    width: min(100% - (var(--gutter) * 2), var(--max));
    margin: 0 auto var(--space-8);
    text-align: center; color: var(--text-muted); font-size: var(--fs-small);
  }
  .track-wrap { overflow: hidden; mask-image: var(--marquee-fade); }
  .track {
    display: flex; gap: var(--logo-gap); width: max-content; align-items: center;
    animation: scroll var(--marquee-duration) linear infinite;
    will-change: transform;
  }
  .item {
    display: inline-flex; align-items: center; justify-content: center;
    flex: 0 0 var(--logo-size);
    width: var(--logo-size);
    padding: var(--space-3) var(--space-4);
    background: #fff;
    border: 1px solid #000;
    border-radius: var(--radius-md, 12px);
    opacity: 0.9; filter: grayscale(1);
    transition: opacity var(--duration) var(--ease), filter var(--duration) var(--ease),
      transform var(--duration) var(--ease-out);
  }
  :host-context([data-theme="dark"]) .item {
    border-color: transparent;
  }
  .item:hover { opacity: 1; filter: none; transform: scale(1.05); }
  .item img { width: min(160px, 72%); height: var(--logo-img-h); object-fit: contain; }
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @media (max-width: 900px) {
    .wrap { --logo-size: min(180px, 62vw); --logo-img-h: 52px; }
  }
  @media (min-width: 1800px) and (max-width: 2499px) {
    .wrap {
      --logo-size: 260px;
      --logo-img-h: 72px;
      --logo-gap: 2.25rem;
      --marquee-duration: 42s;
    }
  }
  @media (min-width: 2500px) and (max-width: 2700px) {
    .wrap {
      --logo-gap: 2.75rem;
      --logo-size: 320px;
      --logo-img-h: 88px;
      --marquee-duration: 55s;
      padding: 3.5rem 0 3rem;
    }
    .label { width: min(100% - 5rem, 2100px); font-size: 2rem; }
    .sub { width: min(100% - 5rem, 2100px); font-size: 1.15rem; }
    .item { padding: 1.5rem 1.75rem; border-radius: 16px; }
    .item img { width: min(220px, 78%); }
  }
  @media (prefers-reduced-motion: reduce) {
    .track { animation: none; flex-wrap: wrap; width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; justify-content: center; }
    .item { flex-basis: calc(50% - var(--logo-gap)); width: calc(50% - var(--logo-gap)); }
  }
`;

class SnLogoMarquee extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const map = globalThis.SN_IMAGE_MAP?.partners || {};
    const partners = [
      map.aws,
      map.googleCloud,
      map.microsoft,
      map.kubernetes,
      map.devops,
      map.cloudNative,
      map.w1,
      map.w3,
      map.w4,
      map.w5,
      map.w6,
    ].filter(Boolean);

    const unique = partners.length
      ? partners
      : Object.values(map).filter((p) => p && p.src);

    const setHtml = (unique.length ? unique : [{ src: '', alt: 'Partner' }])
      .map(
        (p) => `
        <div class="item">
          <img src="${p.src}" alt="${p.alt || ''}" width="187" height="64" loading="lazy" />
        </div>`
      )
      .join('');

    root.innerHTML = `
      <style>${MARQUEE_CSS}</style>
      <section class="wrap" aria-label="Trusted by and certified partners">
        <h2 class="label">Trusted by leading brands</h2>
        <p class="sub">Elite accreditations. Partnerships that deliver.</p>
        <div class="track-wrap">
          <div class="track" data-track>${setHtml}${setHtml}</div>
        </div>
      </section>
    `;

    this._track = root.querySelector('[data-track]');
    this._trackWrap = root.querySelector('.track-wrap');
    this._wrap = root.querySelector('.wrap');
    this._setHtml = setHtml;

    const fill = () => this._ensureTrackFill();
    fill();
    requestAnimationFrame(fill);
    this._ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => fill())
        : null;
    this._ro?.observe(this._trackWrap || this);
    window.addEventListener('resize', fill, { passive: true });
    this._onResize = fill;
  }

  _ensureTrackFill() {
    const track = this._track;
    const wrap = this._trackWrap;
    if (!track || !wrap || !this._setHtml) return;
    if (
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const need = Math.max(wrap.clientWidth, window.innerWidth || 0) * 1.05;
    let copies = 2;
    track.innerHTML = this._setHtml.repeat(copies);

    while (copies < 12) {
      const half = track.scrollWidth / 2;
      if (half >= need && half > 0) break;
      track.insertAdjacentHTML('beforeend', this._setHtml + this._setHtml);
      copies += 2;
    }

    const halfPx = track.scrollWidth / 2;
    if (halfPx > 0) {
      const seconds = Math.max(32, Math.min(70, halfPx / 42));
      this._wrap?.style.setProperty('--marquee-duration', `${seconds}s`);
    }
  }

  disconnectedCallback() {
    this._ro?.disconnect();
    if (this._onResize) window.removeEventListener('resize', this._onResize);
  }
}

if (!customElements.get('sn-logo-marquee')) {
  customElements.define('sn-logo-marquee', SnLogoMarquee);
}
