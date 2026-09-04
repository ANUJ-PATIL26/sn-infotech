/**
 * <sn-video-showcase> — homepage video band above Our Services.
 * Mirrors sn-infotech-site <video-showcase>.
 * YouTube embed; user starts playback (no autoplay).
 */
const YOUTUBE_ID = 'TNd-ZoCZoD4';
const YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`;

const SHOWCASE_CSS = `
  :host {
    display: block;
    font-family: var(--font-body);
    color: var(--text);
    scroll-margin-top: calc(var(--header-h, 88px) + 12px);
  }
  *, *::before, *::after { box-sizing: border-box; }
  .section {
    padding: var(--section-y, 4.5rem) 0;
    background: transparent;
  }
  .inner {
    width: min(100% - (var(--gutter, 1.5rem) * 2), var(--max, 1120px));
    margin: 0 auto;
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    color: var(--accent, #c45c26);
    font-size: var(--fs-xs, 0.75rem);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 var(--space-1, 0.5rem);
  }
  .eyebrow::before {
    content: "";
    width: 1.75rem;
    height: 2px;
    border-radius: 999px;
    background: var(--spectrum, linear-gradient(90deg, #c45c26, #e8a838));
  }
  h2 {
    margin: 0 0 var(--space-2, 0.75rem);
    font-family: var(--font-heading);
    font-size: var(--fs-h2, clamp(1.75rem, 3vw, 2.5rem));
    line-height: var(--lh-heading, 1.15);
    letter-spacing: var(--ls-heading, -0.02em);
    color: var(--text);
    max-width: 22ch;
  }
  .lead {
    margin: 0 0 clamp(1.5rem, 3vw, 2.25rem);
    max-width: 42rem;
    color: var(--text-muted, #5c6570);
    font-size: var(--fs-body-lg, 1.05rem);
    line-height: var(--lh-body, 1.6);
  }
  .frame {
    position: relative;
    width: min(100%, 960px);
    margin: 0 auto;
    border-radius: clamp(16px, 2vw, 28px);
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--border, #d0d5dc) 80%, transparent);
    background: #0b1016;
    box-shadow: var(--shadow-soft, 0 18px 50px rgba(15, 23, 42, 0.08));
    aspect-ratio: 16 / 9;
    max-height: min(72vh, 720px);
  }
  .yt-embed {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

class SnVideoShowcase extends HTMLElement {
  connectedCallback() {
    if (!this.id) this.id = 'home-video';
    const root = this.attachShadow({ mode: 'open' });

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${SHOWCASE_CSS}</style>
      <section class="section" aria-labelledby="home-video-title">
        <div class="inner">
          <p class="eyebrow" data-reveal>Watch us deliver</p>
          <h2 id="home-video-title" data-reveal>Cloud, DevOps and managed IT — in motion</h2>
          <p class="lead" data-reveal>
            See how SN Infotech builds, secures and runs platforms for UK organisations — the same delivery rhythm behind our cloud, Kubernetes and managed IT work.
          </p>
          <div class="frame" data-reveal>
            <iframe
              class="yt-embed"
              src="${YOUTUBE_EMBED}"
              title="SN Infotech delivery overview video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
    `;

    globalThis.SN_MOTION?.enhance?.(root);
  }
}

if (!customElements.get('sn-video-showcase')) {
  customElements.define('sn-video-showcase', SnVideoShowcase);
}
