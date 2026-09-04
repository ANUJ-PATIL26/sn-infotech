/**
 * Website Design — /website-design
 * SEO: src/seo/pages.json → website-design
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Website design for growing businesses';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'We design and deliver modern, conversion-focused websites that reflect how your organisation works — clear messaging, strong performance, and a structure ready for ongoing content and campaigns.';
  }
});
