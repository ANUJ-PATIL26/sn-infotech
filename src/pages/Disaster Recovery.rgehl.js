/**
 * Disaster Recovery — /cloud-computing/disaster-recovery
 * SEO: src/seo/pages.json → disaster-recovery
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Disaster recovery';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Design and test recovery paths so critical systems can return quickly when something fails.';
  }
});
