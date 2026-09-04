/**
 * Office 365 — /cloud-computing/office-365
 * SEO: src/seo/pages.json → office-365
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Office 365 / Microsoft 365';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Migration, configuration and ongoing administration for Microsoft 365 productivity suites.';
  }
});
