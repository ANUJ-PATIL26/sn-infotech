/**
 * Salesforce — /cloud-consulting/salesforce
 * SEO: src/seo/pages.json → salesforce
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Salesforce consulting';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Advisory and support for Salesforce as part of a broader cloud consulting practice.';
  }
});
