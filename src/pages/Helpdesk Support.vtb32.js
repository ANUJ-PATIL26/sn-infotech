/**
 * Helpdesk Support — /cloud-consulting/helpdesk-support
 * SEO: src/seo/pages.json → helpdesk-support
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Helpdesk support';
  }
  if ($w('#pageBody')) {
    $w('#pageBody').text =
      'End-user helpdesk coverage that keeps people productive while your staff focus on priorities.';
  }
});
