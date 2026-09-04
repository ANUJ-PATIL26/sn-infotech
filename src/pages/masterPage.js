/**
 * Site-wide master page code (header/footer + theme persistence).
 * Attach sn-site-header + sn-site-footer + sn-social-bookmarks Custom Elements on the master page.
 * Also load (via HTML embed or Custom Code): global.css, image-map.js, theme.js, icons.js, motion.js,
 * and public/components/sn-social-bookmarks.js
 */

import 'public/image-map.js';
import { local } from 'wix-storage';
// [LOCAL-ONLY-ISSUE]: wix-storage is not available in plain browser / Custom Element-only preview
// [RESOLVES-ON-WIX]: Wix provides session/local storage bindings in the Velo page runtime after publish

const THEME_KEY = 'sn-theme';

$w.onReady(function () {
  // Prefer enabling native Wix Chat from the App Market for baseline agentic support.

  try {
    // [LOCAL-ONLY-ISSUE]: Reading persisted theme via wix-storage fails outside the Wix runtime
    // [RESOLVES-ON-WIX]: local.getItem works on the published site / authenticated wix dev
    const saved = local.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      // [LOCAL-ONLY-ISSUE]: Custom Element ↔ Velo theme bridge needs the Wix page host
      // [RESOLVES-ON-WIX]: postMessage reaches Custom Elements embedded on the live page
      if (typeof window !== 'undefined') {
        window.postMessage({ type: 'sn-theme-apply', theme: saved }, '*');
        window.SN_THEME?.applyTheme?.(saved);
      }
    }
  } catch (e) {
    console.warn('Theme restore skipped', e);
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('message', (event) => {
      if (event?.data?.type !== 'sn-theme-change') return;
      const theme = event.data.theme;
      try {
        // [LOCAL-ONLY-ISSUE]: Persisting theme with wix-storage does not run in static HTML preview
        // [RESOLVES-ON-WIX]: Choice is stored for return visits once the site is published
        // Note: Custom Elements intentionally avoid localStorage due to sandbox inconsistencies.
        local.setItem(THEME_KEY, theme);
      } catch (err) {
        console.warn('Theme persist skipped', err);
      }
    });
  }
});
