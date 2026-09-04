/**
 * Shared SEO / structured-data helpers for page code.
 * Apply titles & descriptions via $w or the Wix SEO panel using values from src/seo/pages.json.
 */

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SN Infotech Ltd',
  url: 'https://www.sninfotech.co.uk',
  email: 'info@sninfotech.co.uk',
  telephone: '+44-7348-648904',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Prospect Close',
    addressLocality: 'Hounslow',
    postalCode: 'TW3 4JL',
    addressRegion: 'London',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://wa.me/447931370076',
    'https://www.linkedin.com/company/72387414/',
    'https://www.youtube.com/@sninfotech9829',
    'https://www.facebook.com/people/SN-Infotech/100046295876059/',
  ],
};

/**
 * Inject Organization JSON-LD when a placeholder HTML element exists.
 * In Wix Editor, add an HTML iframe/embed element with id="seoSchemaHost" or set via SEO settings.
 */
export function getOrganizationJsonLd() {
  return JSON.stringify(ORGANIZATION_SCHEMA);
}
