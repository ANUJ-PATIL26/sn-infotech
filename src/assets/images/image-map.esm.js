/**
 * ESM re-export of the central image map.
 * Prefer loading `image-map.js` as a classic script so Custom Elements can read SN_IMAGE_MAP.
 */
import './image-map.js';

export const imageMap =
  typeof globalThis !== 'undefined' ? globalThis.SN_IMAGE_MAP : {};
