/**
 * IT Recruitment — /it-recruitment
 * SEO: src/seo/pages.json → it-recruitment
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'IT recruitment for cloud and engineering roles';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Technology moves quickly — and every organisation’s worth is measured by its people. SN Infotech helps you hire specialists across cloud, DevOps and engineering so you stay ahead of the competition.';
  }
});
