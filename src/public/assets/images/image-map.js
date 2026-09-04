/**
 * Central image map — replace each `src` with your final asset path/URL.
 * Every component pulls images from globalThis.SN_IMAGE_MAP (set below).
 * Do not hardcode image paths in components.
 *
 * Load this file before Custom Element scripts (master page / preview HTML).
 * For ESM/Velo: `import '/src/assets/images/image-map.js'` then read SN_IMAGE_MAP,
 * or re-export: `export const imageMap = globalThis.SN_IMAGE_MAP`.
 */

const imageMap = {
  brand: {
    logo: {
      src: '/src/assets/images/placeholders/logo-sn-infotech.svg',
      alt: 'SN Infotech Ltd logo',
    },
  },
  hero: {
    homepage: {
      src: '/src/assets/images/placeholders/homepage-hero.svg',
      alt: 'SN Infotech cloud, DevOps and managed IT platform',
    },
  },
  services: {
    cloudServices: {
      src: '/src/assets/images/placeholders/icon-cloud-services.svg',
      alt: 'Cloud Services icon',
    },
    devOpsService: {
      src: '/src/assets/images/placeholders/icon-devops.svg',
      alt: 'DevOps as a Service icon',
    },
    itMaintenance: {
      src: '/src/assets/images/placeholders/icon-it-maintenance.svg',
      alt: 'Full Managed IT Maintenance icon',
    },
    outsourceIt: {
      src: '/src/assets/images/placeholders/icon-outsource-it.svg',
      alt: 'Outsource IT Support icon',
    },
  },
  partners: {
    aws: {
      src: '/src/assets/images/placeholders/partner-logo-aws.svg',
      alt: 'AWS partner logo',
    },
    googleCloud: {
      src: '/src/assets/images/placeholders/partner-logo-gcp.svg',
      alt: 'Google Cloud partner logo',
    },
    microsoft: {
      src: '/src/assets/images/placeholders/partner-logo-microsoft.svg',
      alt: 'Microsoft partner logo',
    },
    kubernetes: {
      src: '/src/assets/images/placeholders/partner-logo-kubernetes.svg',
      alt: 'Kubernetes partner logo',
    },
    devops: {
      src: '/src/assets/images/placeholders/partner-logo-devops.svg',
      alt: 'DevOps Alliance logo',
    },
    cloudNative: {
      src: '/src/assets/images/placeholders/partner-logo-cloud-native.svg',
      alt: 'Cloud Native logo',
    },
  },
  team: {
    about: {
      src: '/src/assets/images/placeholders/about-team.svg',
      alt: 'SN Infotech consultants collaborating',
    },
  },
  caseStudies: {
    one: {
      src: '/src/assets/images/placeholders/case-study-1.svg',
      alt: 'Cloud migration case study visual',
    },
    two: {
      src: '/src/assets/images/placeholders/case-study-2.svg',
      alt: 'DevOps platform case study visual',
    },
    three: {
      src: '/src/assets/images/placeholders/case-study-3.svg',
      alt: 'Outsourced IT support case study visual',
    },
  },
  blog: {
    devops: {
      src: '/src/assets/images/site/pages/blog/devops-cover.png',
      alt: 'Streamlining Your Development with DevOps Services Benefits',
    },
    itSupport: {
      src: '/src/assets/images/site/pages/blog/it-support-cover.png',
      alt: 'Key Qualities of Effective IT Support Services',
    },
    gdpr: {
      src: '/src/assets/images/site/pages/blog/gdpr-cover.png',
      alt: 'How GDPR Shapes Data Privacy Standards',
    },
    ids: {
      src: '/src/assets/images/site/pages/blog/ids-cover.png',
      alt: 'Understanding Intrusion Detection in Cybersecurity',
    },
    author: {
      src: '/src/assets/images/site/pages/blog/author-sohail.png',
      alt: 'sohail0786',
    },
  },
  badges: {
    payments: {
      src: '/src/assets/images/site/misc/payments.png',
      alt: 'PayPal, Mastercard, Visa, American Express and Discover',
    },
    payNow: {
      src: '/src/assets/images/site/misc/pay-now.png',
      alt: 'Pay now',
    },
    aws: {
      src: '/src/assets/images/placeholders/badge-aws-partner.svg',
      alt: 'AWS Partner badge',
    },
    gcp: {
      src: '/src/assets/images/placeholders/badge-gcp-partner.svg',
      alt: 'Google Cloud Partner badge',
    },
    iso: {
      src: '/src/assets/images/placeholders/badge-iso-ready.svg',
      alt: 'ISO-ready operations badge',
    },
  },
  seo: {
    ogDefault: {
      src: '/src/assets/images/placeholders/og-default.svg',
      alt: 'SN Infotech Open Graph share image',
    },
  },
};

if (typeof globalThis !== 'undefined') {
  // When opening _homepage-preview.html via file://, rewrite root paths so <img> loads.
  // [LOCAL-ONLY-ISSUE]: file:// preview cannot resolve absolute /src/... asset URLs
  // [RESOLVES-ON-WIX]: Use Wix Media Manager URLs in this map (or serve locally from project root)
  const rewrite = (src) => {
    try {
      if (
        typeof location !== 'undefined' &&
        location.protocol === 'file:' &&
        typeof src === 'string' &&
        src.startsWith('/src/assets/')
      ) {
        return `../assets/${src.slice('/src/assets/'.length)}`;
      }
    } catch (_) {
      /* ignore */
    }
    return src;
  };

  const walk = (node) => {
    if (!node || typeof node !== 'object') return node;
    if (typeof node.src === 'string') {
      return { ...node, src: rewrite(node.src) };
    }
    const out = Array.isArray(node) ? [] : {};
    Object.keys(node).forEach((k) => {
      out[k] = walk(node[k]);
    });
    return out;
  };

  globalThis.SN_IMAGE_MAP = walk(imageMap);
}