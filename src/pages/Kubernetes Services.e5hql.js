/**
 * Kubernetes Services — /kubernetes-services
 * Embed <sn-kubernetes-page> (and optionally <sn-cta-banner>) on this page in the Editor.
 * Local preview: src/pages/_kubernetes-preview.html
 * SEO: src/seo/pages.json → kubernetes-services
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Kubernetes Services';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'Managed Kubernetes brings fully automated cluster setup with maximum transparency and control — security fixes, versioning, high availability, persistent storage and full admin API access across hybrid environments.';
  }
});
