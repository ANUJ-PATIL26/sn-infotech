/**
 * <sn-site-footer> — contact, two link columns, We Accept
 */
const FOOTER_CSS = `
  :host { display: block; font-family: var(--font-body); color: #c4b8ab; }
  *, *::before, *::after { box-sizing: border-box; }
  footer {
    background: #0a0908;
    padding: var(--space-6) 0 var(--space-3);
  }
  .inner { width: min(100% - (var(--gutter) * 2), var(--max)); margin: 0 auto; }
  .top {
    display: grid; grid-template-columns: minmax(14rem, 1fr) 0.85fr minmax(15rem, 1.05fr) minmax(20rem, 1.8fr);
    gap: var(--space-4);
    padding-bottom: var(--space-4); border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .brand { color: #fff; font-family: var(--font-heading); font-weight: 700; font-size: var(--fs-body-lg); margin-bottom: var(--space-1); }
  .brand a { color: inherit; text-decoration: none; }
  .contact a {
    display: flex; align-items: center; color: #d4cbc2; text-decoration: none;
    margin-bottom: 0.4rem; font-size: var(--fs-small); min-height: 44px;
    transition: color var(--duration) var(--ease);
  }
  .contact a:hover { color: #a9927d; }
  h3 {
    margin: 0 0 var(--space-2); color: #fff; font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 700;
  }
  ul { list-style: none; margin: 0; padding: 0; }
  li { margin-bottom: 0.2rem; }
  li a {
    color: #8a7d6e; text-decoration: none; font-size: var(--fs-small);
    transition: color var(--duration) var(--ease), transform var(--duration) var(--ease-out);
    display: inline-flex; align-items: center; min-height: 36px;
  }
  li a:hover { color: #fff; transform: translateX(3px); }
  .company li { margin-bottom: 0.55rem; }
  .company a {
    display: flex; flex-direction: column; align-items: flex-start; gap: 0.15rem;
    min-height: 44px; padding: 0.15rem 0;
  }
  .company a:hover { transform: none; }
  .company .label { color: #fff; font-weight: 700; }
  .company .desc { color: #8a7d6e; font-size: var(--fs-xs); font-weight: 400; line-height: 1.4; max-width: 28ch; }
  .company a:hover .label { color: #a9927d; }
  .accept-pair {
    display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); align-items: start;
  }
  .accept-media { display: block; width: min(100%, 220px); height: auto; margin: 0 0 var(--space-2); }
  .accept-media.pay { width: min(100%, 120px); }
  .blurb { margin: 0; font-size: var(--fs-small); max-width: 36ch; line-height: var(--lh-body); color: #8a7d6e; }
  .credit { margin: 0; font-size: var(--fs-xs); line-height: 1.55; max-width: 28ch; color: #8a7d6e; }
  .credit a { color: #e07a3d; text-decoration: underline; font-weight: 700; }
  .social { display: flex; align-items: center; gap: 0.55rem; margin-top: var(--space-2); }
  .social a {
    width: 40px; height: 40px; border-radius: 6px; display: grid; place-items: center; line-height: 0;
    border: 1px solid rgba(255,255,255,0.14); color: #d4cbc2; text-decoration: none;
    overflow: hidden;
    transition: border-color var(--duration) var(--ease), color var(--duration) var(--ease),
      transform var(--duration) var(--ease-out), background var(--duration) var(--ease);
  }
  .social a:hover {
    border-color: #5e503f; color: #5e503f; background: rgba(94,80,63,0.1); transform: translateY(-2px);
  }
  .social svg { width: 18px; height: 18px; display: block; }
  .social a[aria-label="YouTube"] svg { width: 20px; height: 20px; }
  .social a[aria-label="LinkedIn"] svg { width: 16px; height: 16px; }
  @media (max-width: 1024px) {
    .top { grid-template-columns: 1fr 1fr; }
    .accept-pair { grid-column: 1 / -1; }
  }
  @media (max-width: 560px) {
    .top { grid-template-columns: 1fr; }
    .accept-pair { grid-template-columns: 1fr; }
    .social { justify-content: center; }
  }
`;

const SERVICE_LINKS = [
  { label: 'Cloud Services', href: '/cloud-solution' },
  { label: 'DevOps', href: '/devops-services' },
  { label: 'Web Development', href: '/website-development' },
  { label: 'AI Consultations', href: '/services/ai-consultations/ai-consulting' },
  { label: 'CyberSecurity', href: '/services/cybersecurity/vapt' },
  { label: 'IT Management', href: '/services/it-management/managed-it-service' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about-us', description: 'Who we are and how we work with clients.' },
  { label: 'Blog', href: '/blog', description: 'Insights on cloud, DevOps, and managed IT.' },
  { label: 'Contact us', href: '/contact-us', description: 'Reach the SN Infotech team.' },
  { label: 'Free consultation', href: '/free-consultation', description: 'Book a no-obligation consultation.' },
];

function icon(name) {
  return (globalThis.SN_ICONS && globalThis.SN_ICONS[name]) || '';
}

function serviceLinksHtml(links) {
  return `<ul>${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>`;
}

function companyLinksHtml(links) {
  return `<ul class="company">${links
    .map(
      (l) => `<li>
        <a href="${l.href}">
          <span class="label">${l.label}</span>
          <span class="desc">${l.description}</span>
        </a>
      </li>`
    )
    .join('')}</ul>`;
}

class SnSiteFooter extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const badges = globalThis.SN_IMAGE_MAP?.badges || {};
    const payments = badges.payments || {};
    const payNow = badges.payNow || {};

    root.innerHTML = `
      <style>${FOOTER_CSS}</style>
      <footer>
        <div class="inner">
          <div class="top">
            <div>
              <div class="brand"><a href="/" aria-label="SN Infotech Ltd home">SN Infotech Ltd</a></div>
              <div class="contact">
                <a class="addr" href="/contact-us">17 Prospect Close, Hounslow,<br />TW3 4JL London</a>
                <a href="tel:+447931370076">+44 7931 370076</a>
                <a href="mailto:info@sninfotech.co.uk">info@sninfotech.co.uk</a>
              </div>
              <div class="social" aria-label="Social links">
                <a href="https://wa.me/447931370076" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${icon('whatsapp')}</a>
                <a href="https://www.linkedin.com/company/72387414/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
                <a href="https://www.youtube.com/@sninfotech9829" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${icon('youtube')}</a>
                <a href="https://www.facebook.com/people/SN-Infotech/100046295876059/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${icon('facebook')}</a>
              </div>
            </div>
            <div>
              <h3>Services</h3>
              ${serviceLinksHtml(SERVICE_LINKS)}
            </div>
            <div>
              ${companyLinksHtml(COMPANY_LINKS)}
            </div>
            <div class="accept-pair">
              <div>
                <h3>We Accept</h3>
                <img class="accept-media" src="${payments.src || ''}" alt="${payments.alt || 'We accept'}" width="198" height="35" loading="lazy" />
                <p class="blurb">At SN InfoTech, we use our extensive Cloud and Devops consulting, technology management, engineering competences to design, test, develop, deploy, sustain business and mission-critical solutions to our worldwide client base.</p>
              </div>
              <div>
                <h3>We Accept</h3>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amp;business=info@sninfotech.co.uk&amp;currency_code=GBP&amp;item_name=SN%20Infotech" target="_blank" rel="noopener noreferrer">
                  <img class="accept-media pay" src="${payNow.src || ''}" alt="${payNow.alt || 'Pay now'}" width="104" height="48" loading="lazy" />
                </a>
                <p class="credit">Copyright © 2020-${new Date().getFullYear()} Sninfotech. All Rights Reserved. | Designed &amp; Developed by <a href="https://corridorweb.com" target="_blank" rel="noopener noreferrer">CorridorWeb</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('sn-site-footer')) {
  customElements.define('sn-site-footer', SnSiteFooter);
}
