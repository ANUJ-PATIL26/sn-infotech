/**
 * Cloud Solution — /cloud-solution
 * SEO: src/seo/pages.json → cloud-solution
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Cloud solutions that meet you where you are';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Migration to remote servers is essential for organisations that need to stay relevant. SN Infotech helps you integrate and manage hybrid surroundings — on-premises, at the edge, and in the cloud — with managed services designed for real operations, not slideware.';
  }
});
