/**
 * Outsource IT — /outsource-it
 * SEO: src/seo/pages.json → outsource-it
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Outsource IT support that closes the skills gap';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'SN Infotech takes care of infrastructure, end users and applications. Our remote team boosts your IT department with 24/7 coverage so your people can focus on business development instead of ticket queues.';
  }
});
