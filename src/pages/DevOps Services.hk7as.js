/**
 * DevOps Services — /devops-services
 * Embed <sn-devops-page> (and optionally <sn-cta-banner>) on this page in the Editor.
 * Local preview: src/pages/_devops-preview.html
 * SEO: src/seo/pages.json → devops-services
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'DevOps Services';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'SN InfoTech carves your path towards modern IT with platform-centric architecture. Our DevOps Automation Specialists manage cloud-native and traditional workloads while ensuring seamless application development and delivery — with release time cut from hours to minutes and at least 25% reduction in time.';
  }
});
