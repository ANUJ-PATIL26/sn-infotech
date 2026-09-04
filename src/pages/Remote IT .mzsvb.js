/**
 * Remote IT — /cloud-consulting/remote-it
 * SEO: src/seo/pages.json → remote-it
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Remote IT';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Extend your internal capability with remote specialists who already know modern cloud stacks.';
  }
});
