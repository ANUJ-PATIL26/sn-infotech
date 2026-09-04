/**
 * Shared host styles for Custom Elements (inherits document theme tokens).
 * Loaded before components in preview; components also inline critical vars.
 */
(function (root) {
  root.SN_HOST_CSS = `
    :host {
      display: block;
      font-family: var(--font-body);
      color: var(--text);
      font-size: var(--fs-body);
      line-height: var(--lh-body);
    }
    *, *::before, *::after { box-sizing: border-box; }
  `;

  root.snGetImages = function snGetImages() {
    return root.SN_IMAGE_MAP || {};
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
