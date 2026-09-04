/**
 * Contact Us — /contact-us
 * Preview: _contact-us-preview.html (sn-service-page slug="contact-us")
 * Wire a Wix Form for enquiries; Automation: form submit → email info@sninfotech.co.uk
 * SEO: src/seo/pages.json → contact-us
 */

$w.onReady(function () {
  if ($w('#contactPhone')) {
    $w('#contactPhone').text = '+44 7931 370076';
    $w('#contactPhone').link = 'tel:+447931370076';
  }
  if ($w('#contactEmail')) {
    $w('#contactEmail').text = 'info@sninfotech.co.uk';
    $w('#contactEmail').link = 'mailto:info@sninfotech.co.uk';
  }
  if ($w('#contactAddress')) {
    $w('#contactAddress').text =
      '17 Prospect Close, Hounslow, TW3 4JL, London';
  }
});
