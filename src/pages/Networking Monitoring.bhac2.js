/**
 * Networking Monitoring — /cloud-computing/networking-monitoring
 * SEO: src/seo/pages.json → networking-monitoring
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Networking monitoring';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Continuous visibility and alerting so network issues are found before users feel them.';
  }
});
