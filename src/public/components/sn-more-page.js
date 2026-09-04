/**
 * <sn-more-page slug="about-us"> — About / Blog / Contact / Consultation layouts
 * matching https://www.sninfotech.co.uk. ANS tokens (not Vite spectrum).
 */
function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const BASE_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--ink, #22333b); }
  *, *::before, *::after { box-sizing: border-box; }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .band { padding: var(--section-y) 0; }
  .band-alt { padding: var(--section-y) 0; background: #f7f6f3; }
  :host-context([data-theme="dark"]) .band-alt { background: #14181a; }
  .page-title {
    margin: 0 0 var(--space-3);
    font-family: var(--font-heading);
    font-size: var(--fs-h1);
    line-height: var(--lh-heading);
    letter-spacing: var(--ls-heading);
    text-transform: uppercase;
    color: #22333b;
  }
  :host-context([data-theme="dark"]) .page-title { color: #f4f7fb; }
  .intro p, .copy p, .copy {
    margin: 0 0 var(--space-2);
    color: #5e503f;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body);
    max-width: 62ch;
  }
  :host-context([data-theme="dark"]) .intro p,
  :host-context([data-theme="dark"]) .copy { color: #cfc6bb; }
  .section-kicker {
    margin: 0 0 var(--space-3);
    font-family: var(--font-heading);
    font-size: var(--fs-h2);
    text-transform: uppercase;
    color: #22333b;
  }
  :host-context([data-theme="dark"]) .section-kicker { color: #f4f7fb; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 48px; padding: 1rem 1.8rem; border-radius: 6px; border: 0;
    background: #5e503f; color: #fff; font-weight: 600;
    font-size: var(--fs-btn); text-decoration: none; cursor: pointer;
    font-family: var(--font-heading);
  }
  .btn:hover { background: #0a0908; }
  label {
    display: block; font-size: var(--fs-xs); font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: #5e503f; margin: 0 0 0.4rem;
  }
  input, textarea, select {
    width: 100%; min-height: 44px; border-radius: 6px; border: 1px solid #ddd6ce;
    background: #fff; color: #22333b;
    padding: 0.85rem 0.95rem; font-size: var(--fs-body); font-family: inherit;
  }
  textarea { min-height: 140px; resize: vertical; }
  .field { margin-bottom: var(--space-2); }
  .status { display: none; margin-top: var(--space-2); color: #2f9e6b; font-weight: 700; }
  .status.show { display: block; }
  img { max-width: 100%; display: block; }
  @media (max-width: 560px) {
    .btn { width: 100%; }
    .page-title { overflow-wrap: anywhere; }
  }
`;

class SnMorePage extends HTMLElement {
  static get observedAttributes() {
    return ['slug'];
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  getPage(slug) {
    return (globalThis.SN_MORE_PAGES || {})[slug] || null;
  }

  render() {
    const slug = this.getAttribute('slug') || '';
    const page = this.getPage(slug);
    if (!page) {
      this.shadowRoot.innerHTML = `<p class="inner">Page not found.</p>`;
      return;
    }
    const layout = page.layout || slug;
    const html =
      layout === 'about'
        ? this.aboutHtml(page)
        : layout === 'contact'
          ? this.contactHtml(page)
          : layout === 'consultation'
            ? this.consultationHtml(page)
            : layout === 'blog-post'
              ? this.blogPostHtml(page)
              : layout === 'legal'
                ? this.legalHtml(page)
                : this.blogHtml(page);
    this.shadowRoot.innerHTML = `<style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${BASE_CSS}${this.layoutCss(layout)}</style>${html}`;
    globalThis.SN_MOTION?.enhance(this.shadowRoot);
    this.bindForms();
  }

  layoutCss(layout) {
    if (layout === 'about') {
      return `
        .who-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: var(--space-5); align-items: start; }
        .who-figure { margin: 0; }
        .who-copy h3 { margin: 0 0 0.5rem; font-family: var(--font-heading); font-size: var(--fs-h3); color: #22333b; }
        :host-context([data-theme="dark"]) .who-copy h3 { color: #f4f7fb; }
        .who-copy article { margin-bottom: var(--space-4); }
        .who-copy p { margin: 0; color: #5e503f; font-size: var(--fs-body-lg); line-height: var(--lh-body); }
        .faq-list { max-width: 820px; margin: 0 auto; }
        details { border-top: 1px solid #ddd6ce; padding: var(--space-2) 0; }
        details:last-child { border-bottom: 1px solid #ddd6ce; }
        summary {
          cursor: pointer; list-style: none; font-weight: 600;
          font-family: var(--font-heading); font-size: var(--fs-body-lg);
          display: flex; justify-content: space-between; gap: var(--space-2); align-items: center;
        }
        summary::-webkit-details-marker { display: none; }
        summary::after { content: "+"; color: #5e503f; font-size: 1.25rem; }
        details[open] summary::after { content: "–"; }
        details p { margin: var(--space-1) 0 0; color: #5e503f; }
        .about-cta { background: #a9927d; color: #22333b; text-align: center; }
        .about-cta h2 {
          margin: 0 0 var(--space-2); font-family: var(--font-heading);
          font-size: var(--fs-h2); text-transform: none; color: #22333b;
        }
        .about-cta p { margin: 0 auto var(--space-3); max-width: 42rem; color: #5e503f; }
        .about-cta .phone {
          display: block; margin: 0 0 var(--space-1);
          font-family: var(--font-heading); font-size: var(--fs-h2);
          font-weight: 700; text-decoration: none; color: #22333b;
        }
        .about-cta .addr { display: block; margin-bottom: var(--space-3); color: #5e503f; }
        .about-cta .btn { background: #fff; color: #22333b; }
        @media (max-width: 900px) { .who-grid { grid-template-columns: 1fr; } }
      `;
    }
    if (layout === 'contact') {
      return `
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); align-items: start; }
        .reach h2 { margin: 0 0 var(--space-3); font-family: var(--font-heading); font-size: var(--fs-h2); text-transform: uppercase; }
        .reach-figure { margin: 0 0 var(--space-3); }
        .detail { margin: 0 0 var(--space-2); color: #22333b; }
        .detail a { color: #5e503f; font-weight: 700; text-decoration: none; }
        .form-card {
          padding: var(--space-4); border: 1px solid #ddd6ce;
          border-radius: 12px; background: #fff;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
        .blurb { margin: var(--space-5) 0 0; color: #5e503f; font-size: var(--fs-body-lg); max-width: 70ch; }
        @media (max-width: 900px) { .contact-grid, .form-row { grid-template-columns: 1fr; } }
      `;
    }
    if (layout === 'consultation') {
      return `
        .consult-hero { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); align-items: center; }
        .consult-figure { margin: 0; }
        .consult-copy h1 {
          margin: 0 0 var(--space-2); font-family: var(--font-heading);
          font-size: var(--fs-h1); text-transform: uppercase; color: #22333b;
        }
        :host-context([data-theme="dark"]) .consult-copy h1 { color: #f4f7fb; }
        .widget-title {
          display: inline-block; margin: var(--space-2) 0 0;
          font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #5e503f;
        }
        .book-card {
          margin-top: var(--space-4); padding: var(--space-4);
          border: 1px solid #ddd6ce; border-radius: 12px; background: #fff;
        }
        .book-card h2 { margin: 0 0 var(--space-2); font-family: var(--font-heading); font-size: var(--fs-h2); }
        .filter-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0 0 var(--space-3); }
        .chip {
          border: 1px solid #ddd6ce; background: #f7f6f3; color: #22333b;
          border-radius: 999px; padding: 0.45rem 0.9rem; font-size: var(--fs-small);
          cursor: pointer; font-family: inherit; min-height: 44px;
        }
        .chip[aria-pressed="true"] { background: #5e503f; color: #fff; border-color: #5e503f; }
        .book-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
        @media (max-width: 900px) { .consult-hero, .book-grid { grid-template-columns: 1fr; } }
      `;
    }
    if (layout === 'legal') {
      return `
        .legal { width: min(100% - (var(--gutter) * 2), 760px); margin: 0 auto; padding: var(--section-y) 0; }
        .legal h1 { margin-bottom: var(--space-1); }
        .legal .updated { margin: 0 0 var(--space-4); color: #a9927d; font-size: var(--fs-small); font-weight: 700; }
        .legal h2 {
          margin: var(--space-4) 0 var(--space-2); font-family: var(--font-heading);
          font-size: var(--fs-h3); color: #22333b; text-transform: none;
        }
        :host-context([data-theme="dark"]) .legal h2 { color: #f4f7fb; }
        .legal p { max-width: none; }
        .legal a { color: #5e503f; font-weight: 700; text-decoration: none; }
      `;
    }
    return `
      .blog-head {
        display: flex; align-items: flex-end; justify-content: space-between;
        gap: var(--space-2); margin-bottom: var(--space-4); flex-wrap: wrap;
      }
      .filter-chip {
        display: inline-flex; padding: 0.4rem 0.9rem; border-radius: 999px;
        background: #5e503f; color: #fff; font-size: var(--fs-small); font-weight: 600;
      }
      .posts { display: grid; gap: var(--space-5); max-width: 760px; }
      .post {
        display: grid; gap: var(--space-3); text-decoration: none; color: inherit;
        padding-bottom: var(--space-5); border-bottom: 1px solid #ddd6ce;
      }
      .post:hover h2 { color: #5e503f; }
      .post-media { margin: 0; border-radius: 12px; overflow: hidden; background: #f7f6f3; }
      .post-media img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
      .post-media.is-empty { display: none; }
      .post h2 { margin: 0 0 0.55rem; font-family: var(--font-heading); font-size: var(--fs-h3); color: #22333b; text-transform: none; }
      :host-context([data-theme="dark"]) .post h2 { color: #f4f7fb; }
      .post p { margin: 0 0 0.9rem; color: #5e503f; }
      .meta { display: flex; align-items: center; gap: 0.7rem; font-size: var(--fs-xs); color: #a9927d; font-weight: 600; }
      .meta img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
      .article { width: min(100% - (var(--gutter) * 2), 760px); margin: 0 auto; padding: var(--section-y) 0; }
      .back { display: inline-flex; margin-bottom: var(--space-3); color: #5e503f; font-weight: 700; text-decoration: none; font-size: var(--fs-small); }
      .article-title {
        margin: 0 0 var(--space-2); font-family: var(--font-heading);
        font-size: var(--fs-h1); line-height: var(--lh-heading); letter-spacing: var(--ls-heading);
        text-transform: none; color: #22333b;
      }
      :host-context([data-theme="dark"]) .article-title { color: #f4f7fb; }
      .article-hero { margin: var(--space-3) 0 var(--space-4); border-radius: 12px; overflow: hidden; }
      .article-hero img { width: 100%; height: auto; display: block; }
      .article-body h2 {
        margin: var(--space-4) 0 var(--space-2); font-family: var(--font-heading);
        font-size: var(--fs-h2); color: #22333b; text-transform: none;
      }
      .article-body h3 {
        margin: var(--space-3) 0 var(--space-1); font-family: var(--font-heading);
        font-size: var(--fs-h3); color: #22333b; text-transform: none;
      }
      :host-context([data-theme="dark"]) .article-body h2,
      :host-context([data-theme="dark"]) .article-body h3 { color: #f4f7fb; }
      .article-body p { margin: 0 0 var(--space-2); color: #5e503f; font-size: var(--fs-body-lg); line-height: var(--lh-body); }
      .article-body ul { margin: 0 0 var(--space-3); padding-left: 1.2rem; color: #5e503f; }
      .article-body li { margin: 0 0 0.45rem; line-height: var(--lh-body); }
      .article-body figure { margin: var(--space-3) 0; }
      .article-body figure img { width: 100%; height: auto; border-radius: 8px; }
      .article-body figcaption { margin-top: 0.5rem; font-size: var(--fs-xs); color: #a9927d; font-weight: 600; }
    `;
  }

  legalHtml(page) {
    const sections = (page.sections || [])
      .map(
        (s) => `
        <h2 data-reveal>${escapeHtml(s.heading)}</h2>
        ${(s.body || []).map((p) => `<p class="copy" data-reveal>${escapeHtml(p)}</p>`).join('')}`
      )
      .join('');
    return `
      <article class="legal">
        <h1 class="page-title" data-reveal>${escapeHtml(page.hero)}</h1>
        ${page.updated ? `<p class="updated" data-reveal>${escapeHtml(page.updated)}</p>` : ''}
        ${sections}
        <p class="copy" data-reveal>
          <a href="/contact-us">Contact us</a> ·
          <a href="/privacy-policy">Privacy Policy</a> ·
          <a href="/terms">Terms</a> ·
          <a href="/cookie-policy">Cookies</a>
        </p>
      </article>
    `;
  }

  aboutHtml(page) {
    const faqs = (page.faqs || [])
      .map(
        (f) => `
        <details data-reveal>
          <summary>${escapeHtml(f.q)}</summary>
          <p>${escapeHtml(f.a)}</p>
        </details>`
      )
      .join('');
    return `
      <section class="band">
        <div class="inner">
          <h1 class="page-title" data-reveal>${escapeHtml(page.hero)}</h1>
          <div class="intro" data-reveal>${(page.intro || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</div>
        </div>
      </section>
      <section class="band-alt">
        <div class="inner">
          <h2 class="section-kicker" data-reveal>${escapeHtml(page.whoHeading)}</h2>
          <div class="who-grid">
            <figure class="who-figure" data-reveal>
              <img src="${escapeHtml(page.whoImage)}" alt="${escapeHtml(page.whoImageAlt)}" width="640" height="400" />
            </figure>
            <div class="who-copy">
              <article data-reveal>
                <h3>${escapeHtml(page.team.title)}</h3>
                <p>${escapeHtml(page.team.body)}</p>
              </article>
              <article data-reveal>
                <h3>${escapeHtml(page.vision.title)}</h3>
                <p>${escapeHtml(page.vision.body)}</p>
              </article>
              <a class="btn" data-reveal href="${escapeHtml(page.callbackHref)}">${escapeHtml(page.callbackLabel)}</a>
            </div>
          </div>
        </div>
      </section>
      <section class="band">
        <div class="inner"><div class="faq-list">${faqs}</div></div>
      </section>
      <section class="band about-cta">
        <div class="inner" data-reveal>
          <h2>${escapeHtml(page.ctaHeading)}</h2>
          <p>${escapeHtml(page.ctaBody)}</p>
          <a class="phone" href="${escapeHtml(page.phoneHref)}">${escapeHtml(page.phone)}</a>
          <span class="addr">${escapeHtml(page.address)}</span>
          <a class="btn" href="${escapeHtml(page.callbackHref)}">${escapeHtml(page.callbackLabel)}</a>
        </div>
      </section>
    `;
  }

  contactHtml(page) {
    return `
      <section class="band">
        <div class="inner">
          <h1 class="page-title" data-reveal>${escapeHtml(page.hero)}</h1>
          <div class="contact-grid">
            <div class="reach" data-reveal>
              <h2>${escapeHtml(page.reachHeading)}</h2>
              <figure class="reach-figure">
                <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt)}" width="560" height="360" />
              </figure>
              <p class="detail">${escapeHtml(page.address)}</p>
              <p class="detail"><a href="mailto:${escapeHtml(page.email)}">${escapeHtml(page.email)}</a></p>
              <p class="detail"><a href="${escapeHtml(page.phoneHref)}">${escapeHtml(page.phone)}</a></p>
            </div>
            <form class="form-card" data-reveal data-more-form>
              <div class="form-row">
                <div class="field">
                  <label for="firstName">First Name</label>
                  <input id="firstName" name="firstName" required autocomplete="given-name" />
                </div>
                <div class="field">
                  <label for="lastName">Last Name</label>
                  <input id="lastName" name="lastName" required autocomplete="family-name" />
                </div>
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required autocomplete="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button class="btn" type="submit">Send</button>
              <p class="status" data-status>${escapeHtml(page.success)}</p>
            </form>
          </div>
          <p class="blurb" data-reveal>${escapeHtml(page.blurb)}</p>
        </div>
      </section>
    `;
  }

  consultationHtml(page) {
    const chips = (page.staffOptions || [])
      .map(
        (opt, i) =>
          `<button type="button" class="chip" data-staff aria-pressed="${i === 0 ? 'true' : 'false'}">${escapeHtml(opt)}</button>`
      )
      .join('');
    return `
      <section class="band">
        <div class="inner consult-hero">
          <figure class="consult-figure" data-reveal>
            <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt)}" width="640" height="420" />
          </figure>
          <div class="consult-copy" data-reveal>
            <h1>${escapeHtml(page.hero)}</h1>
            <p class="copy">${escapeHtml(page.lead)}</p>
            <span class="widget-title">${escapeHtml(page.widgetTitle)}</span>
          </div>
        </div>
      </section>
      <section class="band-alt">
        <div class="inner">
          <form class="book-card" data-reveal data-more-form>
            <h2>${escapeHtml(page.scheduleHeading)}</h2>
            <p class="copy">${escapeHtml(page.scheduleBody)}</p>
            <p class="copy"><strong>Filter by:</strong> Staff Member</p>
            <div class="filter-row">${chips}</div>
            <input type="hidden" name="staff" value="All" data-staff-input />
            <div class="book-grid">
              <div class="field">
                <label for="date">Date</label>
                <input id="date" name="date" type="date" required />
              </div>
              <div class="field">
                <label for="time">Time</label>
                <input id="time" name="time" type="time" required />
              </div>
              <div class="field">
                <label for="name">Name</label>
                <input id="name" name="name" required autocomplete="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required autocomplete="email" />
              </div>
            </div>
            <div class="field">
              <label for="service">Service to discuss</label>
              <textarea id="service" name="service" placeholder="Cloud, DevOps, Kubernetes, managed IT…"></textarea>
            </div>
            <button class="btn" type="submit">Book</button>
            <p class="status" data-status>${escapeHtml(page.success)}</p>
          </form>
        </div>
      </section>
    `;
  }

  blogHtml(page) {
    const posts = (page.posts || [])
      .map((post) => {
        const media = post.image
          ? `<figure class="post-media"><img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt || post.title)}" width="640" height="360" loading="lazy" /></figure>`
          : `<figure class="post-media is-empty"></figure>`;
        const avatar = post.avatar
          ? `<img src="${escapeHtml(post.avatar)}" alt="" width="36" height="36" />`
          : '';
        return `
        <a class="post" data-reveal href="${escapeHtml(post.href)}">
          ${media}
          <div>
            <h2>${escapeHtml(post.title)}</h2>
            <p>${escapeHtml(post.excerpt)}</p>
            <div class="meta">${avatar}<span>${escapeHtml(post.author)} · ${escapeHtml(post.date)} · ${escapeHtml(post.readTime)}</span></div>
          </div>
        </a>`;
      })
      .join('');
    return `
      <section class="band">
        <div class="inner">
          <div class="blog-head" data-reveal>
            <h1 class="page-title" style="margin:0">${escapeHtml(page.hero)}</h1>
            <span class="filter-chip">${escapeHtml(page.filterLabel)}</span>
          </div>
          <div class="posts">${posts}</div>
        </div>
      </section>
    `;
  }

  blogPostHtml(page) {
    const avatar = page.avatar
      ? `<img src="${escapeHtml(page.avatar)}" alt="" width="36" height="36" />`
      : '';
    const hero = page.image
      ? `<figure class="article-hero" data-reveal><img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt || page.title)}" width="1024" height="576" /></figure>`
      : '';
    const body = (page.body || [])
      .map((block) => {
        if (block.type === 'h2') return `<h2 data-reveal>${escapeHtml(block.text)}</h2>`;
        if (block.type === 'h3') return `<h3 data-reveal>${escapeHtml(block.text)}</h3>`;
        if (block.type === 'ul') {
          return `<ul data-reveal>${(block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
        }
        if (block.type === 'img') {
          if (page.image && block.src === page.image) return '';
          return `<figure data-reveal><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt || '')}" width="1024" height="576" loading="lazy" />${
            block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''
          }</figure>`;
        }
        return `<p data-reveal>${escapeHtml(block.text || '')}</p>`;
      })
      .join('');
    return `
      <article class="article">
        <a class="back" data-reveal href="/blog">← All Posts</a>
        <h1 class="article-title" data-reveal>${escapeHtml(page.title)}</h1>
        <div class="meta" data-reveal>${avatar}<span>${escapeHtml(page.author || '')} · ${escapeHtml(page.date || '')} · ${escapeHtml(page.readTime || '')}</span></div>
        ${hero}
        <div class="article-body">${body}</div>
      </article>
    `;
  }

  bindForms() {
    const form = this.shadowRoot.querySelector('[data-more-form]');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-status]');
      if (status) status.classList.add('show');
      form.reset();
    });
    this.shadowRoot.querySelectorAll('[data-staff]').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.shadowRoot.querySelectorAll('[data-staff]').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        chip.setAttribute('aria-pressed', 'true');
        const input = this.shadowRoot.querySelector('[data-staff-input]');
        if (input) input.value = chip.textContent.trim();
      });
    });
  }
}

customElements.define('sn-more-page', SnMorePage);
