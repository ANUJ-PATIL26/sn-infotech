/**
 * Free Consultation — /free-consultation
 * Preview: _free-consultation-preview.html (sn-service-page slug="free-consultation")
 * Add Wix Forms / Bookings for scheduling. Optional: embed <sn-consultation-modal>.
 * SEO: src/seo/pages.json → free-consultation
 */

import { saveConsultationLead } from 'backend/leads.jsw';
// [LOCAL-ONLY-ISSUE]: backend web module calls do not run in plain local browser preview
// [RESOLVES-ON-WIX]: Executed by Wix backend after publish / wix dev with auth

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'Book a free consultation';
  }
  if ($w('#pageLead')) {
    $w('#pageLead').text =
      'Tell us what you need help with — cloud platforms, DevOps delivery, Kubernetes, or day-to-day IT. We’ll review your setup and outline practical next steps, with no obligation to proceed.';
  }
  if ($w('#consultationForm')) {
    $w('#consultationForm').onSubmit(async (event) => {
      try {
        const values = event?.target?.value || {};
        await saveConsultationLead({
          name: values.name || values.fullName || '',
          email: values.email || '',
          phone: values.phone || '',
          interest: values.interest || 'Free consultation',
          message: values.message || '',
        });
      } catch (err) {
        console.error(err);
      }
    });
  }
});
