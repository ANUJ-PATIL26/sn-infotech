/**
 * Custom Element registry map for the Wix Editor.
 *
 * Load these scripts on the master page / Custom Code (in order):
 * 1. styles/global.css (fonts + tokens + themes)
 * 2. assets/images/image-map.js
 * 3. public/theme.js
 * 4. public/icons.js
 * 5. public/motion.js (scroll reveal, counters, parallax)
 * 6. Each Custom Element script below
 *
 * | Tag                     | Script                                      |
 * |-------------------------|---------------------------------------------|
 * | sn-site-header          | public/components/sn-site-header.js         |
 * | sn-hero                 | public/components/sn-hero.js                |
 * | sn-value-proposition    | public/components/sn-value-proposition.js   |
 * | sn-logo-marquee         | public/components/sn-logo-marquee.js        |
 * | sn-about-strip          | public/components/sn-about-strip.js         |
 * | sn-video-showcase       | public/components/sn-video-showcase.js      |
 * | sn-services-grid        | public/components/sn-services-grid.js       |
 * | sn-k8s-features         | public/components/sn-k8s-features.js        |
 * | sn-devops-features      | public/components/sn-devops-features.js     |
 * | sn-devops-page          | public/components/sn-devops-page.js         |
 * | sn-kubernetes-page      | public/components/sn-kubernetes-page.js     |
 * | sn-service-page         | public/components/sn-service-page.js        |
 * | sn-more-page            | public/components/sn-more-page.js           |
 *                           | Load public/more-pages.js before this tag   |
 * | sn-recruitment-features | public/components/sn-recruitment-features.js|
 * | sn-onboarding           | public/components/sn-onboarding.js          |
 * | sn-testimonials         | public/components/sn-testimonials.js        |
 * | sn-cta-banner           | public/components/sn-cta-banner.js          |
 * | sn-site-footer          | public/components/sn-site-footer.js         |
 * | sn-social-bookmarks     | public/components/sn-social-bookmarks.js    |
 * | sn-consultation-modal   | public/components/sn-consultation-modal.js  |
 * | sn-faqs                 | public/components/sn-faqs.js                |
 * | sn-agent-chat           | public/chat/sn-agent-chat.js                |
 */

export const CUSTOM_ELEMENTS = [
  'sn-site-header',
  'sn-hero',
  'sn-value-proposition',
  'sn-logo-marquee',
  'sn-about-strip',
  'sn-video-showcase',
  'sn-services-grid',
  'sn-k8s-features',
  'sn-devops-features',
  'sn-devops-page',
  'sn-kubernetes-page',
  'sn-service-page',
  'sn-more-page',
  'sn-recruitment-features',
  'sn-onboarding',
  'sn-testimonials',
  'sn-faqs',
  'sn-cta-banner',
  'sn-site-footer',
  'sn-social-bookmarks',
  'sn-consultation-modal',
  'sn-agent-chat',
];
