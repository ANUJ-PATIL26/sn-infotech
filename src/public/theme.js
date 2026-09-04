/**
 * Theme bootstrap — light by default; toggle switches to dark.
 * Session preference held in-memory (no localStorage in Custom Elements).
 */
(function (root) {
  const KEY = 'sn-theme';
  let sessionTheme = null;

  function preferred() {
    return sessionTheme || 'light';
  }

  function applyTheme(theme) {
    const next = theme === 'dark' ? 'dark' : 'light';
    sessionTheme = next;
    const doc = root.document;
    if (doc?.documentElement) {
      doc.documentElement.setAttribute('data-theme', next);
    }
    root.dispatchEvent?.(new CustomEvent('sn-theme-change', { detail: { theme: next } }));
    return next;
  }

  function toggleTheme() {
    const current =
      root.document?.documentElement?.getAttribute('data-theme') || preferred();
    return applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function getTheme() {
    return root.document?.documentElement?.getAttribute('data-theme') || preferred();
  }

  if (root.document?.documentElement) {
    applyTheme(preferred());
  }

  root.addEventListener?.('message', (event) => {
    if (event?.data?.type === 'sn-theme-apply' && event.data.theme) {
      applyTheme(event.data.theme);
    }
  });

  root.SN_THEME = { applyTheme, toggleTheme, getTheme, KEY };
})(typeof globalThis !== 'undefined' ? globalThis : window);
