/**
 * About Us — /about-us
 * Preview: _about-us-preview.html (sn-service-page slug="about-us")
 * SEO: src/seo/pages.json → about-us
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'About Us';
  }
  if ($w('#pageLead')) {
    $w('#pageLead').text =
      'At SN InfoTech, we use our all-encompassing consulting, technology, management, and engineering competences to design, develop, deploy, test, and sustain business and mission-critical solutions to our worldwide client base.';
  }
});
