/**
 * Services hub — /services
 * Embed <sn-services-grid> and links to each service detail page.
 * SEO: src/seo/pages.json → services
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Services built for modern IT delivery';
  }
});
