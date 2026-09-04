/**
 * <sn-faqs> — aqua FAQ accordion.
 */
const FAQ_CSS = `
  :host { display: block; font-family: var(--font-body); color: var(--text); }
  *, *::before, *::after { box-sizing: border-box; }
  .section { padding: var(--section-y) 0; background: var(--bg-accent); }
  .inner { width: min(100% - (var(--gutter) * 2), 820px); margin: 0 auto; }
  .head { text-align: center; margin-bottom: var(--space-4); }
  .eyebrow {
    color: var(--teal); font-size: var(--fs-xs); letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 600; margin: 0 0 var(--space-1);
  }
  h2 {
    margin: 0; font-family: var(--font-heading);
    font-size: var(--fs-h2); line-height: var(--lh-heading); color: var(--ink); font-weight: 700;
  }
  :host-context([data-theme="dark"]) h2 { color: var(--text); }
  details {
    border-top: 1px solid var(--border); padding: 1.15rem 0;
    transition: background var(--duration) var(--ease);
  }
  details:last-child { border-bottom: 1px solid var(--border); }
  summary {
    cursor: pointer; list-style: none; font-weight: 600; color: var(--ink); font-size: var(--fs-body-lg);
    display: flex; justify-content: space-between; gap: var(--space-2); align-items: center;
    min-height: 44px;
  }
  :host-context([data-theme="dark"]) summary { color: var(--text); }
  summary:hover { color: var(--blue); }
  summary::-webkit-details-marker { display: none; }
  summary::after {
    content: "+"; color: var(--blue); font-size: 1.35rem; font-weight: 400;
    transition: transform var(--duration) var(--ease-spring);
  }
  details[open] summary::after { content: "–"; }
  p { margin: 0.75rem 0 0; color: var(--text-muted); font-size: var(--fs-body); }
`;

const FAQS = [
  {
    q: 'What Makes SN InfoTech the Best Choice?',
    a: 'We help businesses leverage their cloud and data to stay ahead. Our advanced hybrid, on-prem, cloud, and multi-cloud solutions tackle the toughest data challenges faster and more effectively.',
  },
  {
    q: 'How Do Our ERP Solutions Boost Your Business Efficiency?',
    a: 'Our ERP solutions at SN Infotech are tailored to your business needs. We streamline and automate your financial, customer relationship, and supply chain processes, giving you better insights, managed growth, enhanced productivity, and reduced IT costs.',
  },
  {
    q: 'Why Are Cloud Solutions the Future?',
    a: 'Cloud solutions are the future, driving business operations with vast data processing. At SN Infotech, our Big Data backbone creates innovative solutions. With 20 years of experience, we simplify process automation, making businesses efficient and user-friendly. Our customer-centric approach ensures your business thrives.',
  },
  {
    q: 'What are the benefits of cloud migration?',
    a: 'Migrating to the cloud with SN InfoTech allows your business to scale efficiently, reduce IT costs, and enhance security. Our expert team ensures a smooth transition, minimising downtime and maximising performance.',
  },
  {
    q: 'What cloud platforms do we support?',
    a: 'We support major cloud platforms including AWS, Google Cloud Platform, and Microsoft Azure. Our expertise in these platforms allows us to provide tailored solutions that meet your specific business needs.',
  },
  {
    q: 'How do we ensure cloud security?',
    a: 'At SN InfoTech, we prioritise cloud security by implementing robust measures such as encryption, access controls, and regular security audits. Our partnerships with leading cloud providers ensure your data is protected.',
  },
  {
    q: 'How does our DevOps-as-a-Service model work?',
    a: 'Our DevOps-as-a-Service model integrates development and operations teams, automating workflows and improving collaboration. This results in faster deployment, higher quality software, and reduced time to market.',
  },
  {
    q: 'What can you expect from our managed IT support services?',
    a: 'With SN InfoTech’s managed IT support, you get 24/7 monitoring, proactive maintenance, and rapid issue resolution. Our team ensures your IT infrastructure runs smoothly, allowing you to focus on your core business.',
  },
];

class SnFaqs extends HTMLElement {
  connectedCallback() {
    if (!this.id) this.id = 'faqs';
    const root = this.attachShadow({ mode: 'open' });
    this._onHash = () => {
      const id = decodeURIComponent((window.location.hash || '').replace(/^#/, ''));
      if (id === 'faqs') this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.addEventListener('hashchange', this._onHash);
    requestAnimationFrame(() => this._onHash());
    const items = FAQS.map(
      (f) => `
      <details data-reveal>
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
    ).join('');

    root.innerHTML = `
      <style>${globalThis.SN_MOTION?.REVEAL_CSS || ''}${FAQ_CSS}</style>
      <section class="section" id="faqs" aria-labelledby="faq-title">
        <div class="inner">
          <div class="head" data-reveal>
            <p class="eyebrow">FAQ's</p>
            <h2 id="faq-title">Common questions about our services</h2>
          </div>
          <div data-reveal-stagger>${items}</div>
        </div>
      </section>
    `;
    globalThis.SN_MOTION?.enhance(root);
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange', this._onHash);
  }
}

if (!customElements.get('sn-faqs')) {
  customElements.define('sn-faqs', SnFaqs);
}
