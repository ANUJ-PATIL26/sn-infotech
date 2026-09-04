/**
 * IT Support — /cloud-consulting/it-support
 * SEO: src/seo/pages.json → it-support
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'IT support';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Responsive, expert IT support aligned to how your teams actually work day to day.';
  }
});
