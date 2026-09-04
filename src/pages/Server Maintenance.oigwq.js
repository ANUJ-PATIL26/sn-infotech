/**
 * Server Maintenance — /cloud-computing/server-maintenance
 * SEO: src/seo/pages.json → server-maintenance
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Server maintenance';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Proactive patching, hardening and care for the servers that keep your business online.';
  }
});
