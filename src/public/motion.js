/**
 * Shared motion system for Wix custom elements (classic script).
 * Load via <script src="../public/motion.js"> — assigns globalThis.SN_MOTION.
 * Prefer transform + opacity. Content stays visible until JS arms wait state.
 * Respects prefers-reduced-motion. Mobile uses shorter distances (not zero motion).
 */
(function (global) {
  'use strict';

  var EASE = 'var(--ease, cubic-bezier(0.22, 1, 0.36, 1))';
  var D_FAST = 'var(--duration-fast, 200ms)';
  var D_MED = 'var(--duration-medium, 400ms)';
  var D_SLOW = 'var(--duration-slow-motion, 700ms)';
  var D_CINE = 'var(--duration-cinematic, 1000ms)';

  var REVEAL_CSS =
    '' +
    '@keyframes sn-fade-up {' +
    '  from { opacity: 0; transform: translate3d(0, 16px, 0); }' +
    '  to { opacity: 1; transform: translate3d(0, 0, 0); }' +
    '}' +
    '@keyframes sn-fade-up-sm {' +
    '  from { opacity: 0; transform: translate3d(0, 10px, 0); }' +
    '  to { opacity: 1; transform: translate3d(0, 0, 0); }' +
    '}' +
    '@keyframes sn-fade-in {' +
    '  from { opacity: 0; }' +
    '  to { opacity: 1; }' +
    '}' +
    '@keyframes sn-fade-left {' +
    '  from { opacity: 0; transform: translate3d(-16px, 0, 0); }' +
    '  to { opacity: 1; transform: translate3d(0, 0, 0); }' +
    '}' +
    '@keyframes sn-fade-right {' +
    '  from { opacity: 0; transform: translate3d(16px, 0, 0); }' +
    '  to { opacity: 1; transform: translate3d(0, 0, 0); }' +
    '}' +
    '@keyframes sn-scale-in {' +
    '  from { opacity: 0; transform: scale(0.97); }' +
    '  to { opacity: 1; transform: scale(1); }' +
    '}' +
    '@keyframes sn-img-settle {' +
    '  from { opacity: 0; transform: scale(1.04); }' +
    '  to { opacity: 1; transform: scale(1); }' +
    '}' +
    '@keyframes sn-float {' +
    '  0%, 100% { transform: translate3d(0, 0, 0); }' +
    '  50% { transform: translate3d(0, -8px, 0); }' +
    '}' +
    /* —— Scroll reveal: visible by default; JS arms [data-reveal-wait] —— */
    '[data-reveal] {' +
    '  opacity: 1;' +
    '  transform: none;' +
    '  transition:' +
    '    opacity ' +
    D_SLOW +
    ' ' +
    EASE +
    ',' +
    '    transform ' +
    D_SLOW +
    ' ' +
    EASE +
    ';' +
    '  will-change: auto;' +
    '}' +
    '[data-reveal][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '  opacity: 0;' +
    '  transform: translate3d(0, 18px, 0);' +
    '  animation: sn-fade-in 0.4s 1.2s ' +
    EASE +
    ' forwards;' +
    '}' +
    '[data-reveal="left"][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '  transform: translate3d(-18px, 0, 0);' +
    '}' +
    '[data-reveal="right"][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '  transform: translate3d(18px, 0, 0);' +
    '}' +
    '[data-reveal="scale"][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '  transform: scale(0.97);' +
    '}' +
    '[data-reveal].is-in,' +
    '[data-reveal][data-in] {' +
    '  opacity: 1;' +
    '  transform: none;' +
    '  animation: none;' +
    '}' +
    /* Stagger ~80ms steps on [data-reveal-stagger] children */
    '[data-reveal-stagger] > [data-reveal]:nth-child(1) { transition-delay: 0.04s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(2) { transition-delay: 0.12s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(3) { transition-delay: 0.2s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(4) { transition-delay: 0.28s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(5) { transition-delay: 0.36s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(6) { transition-delay: 0.44s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(7) { transition-delay: 0.52s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(8) { transition-delay: 0.6s; }' +
    '[data-reveal-stagger] > [data-reveal]:nth-child(n+9) { transition-delay: 0.68s; }' +
    /* Hero entrance helpers */
    '.sn-hero-anim .eyebrow,' +
    '.sn-hero-anim .badge,' +
    '.sn-hero-anim h1,' +
    '.sn-hero-anim .lead,' +
    '.sn-hero-anim .actions,' +
    '.sn-hero-anim .solutions,' +
    '.sn-hero-anim .media,' +
    '.sn-hero-anim .media-frame {' +
    '  opacity: 1;' +
    '  transform: none;' +
    '}' +
    '@media (prefers-reduced-motion: no-preference) {' +
    '  .sn-hero-anim .eyebrow,' +
    '  .sn-hero-anim .badge {' +
    '    animation: sn-fade-up ' +
    D_SLOW +
    ' ' +
    EASE +
    ' both;' +
    '  }' +
    '  .sn-hero-anim h1 {' +
    '    animation: sn-fade-up ' +
    D_CINE +
    ' 0.08s ' +
    EASE +
    ' both;' +
    '  }' +
    '  .sn-hero-anim .lead {' +
    '    animation: sn-fade-up ' +
    D_SLOW +
    ' 0.16s ' +
    EASE +
    ' both;' +
    '  }' +
    '  .sn-hero-anim .solutions {' +
    '    animation: sn-fade-up ' +
    D_SLOW +
    ' 0.22s ' +
    EASE +
    ' both;' +
    '  }' +
    '  .sn-hero-anim .actions {' +
    '    animation: sn-fade-up ' +
    D_SLOW +
    ' 0.28s ' +
    EASE +
    ' both;' +
    '  }' +
    '  .sn-hero-anim .media {' +
    '    animation: sn-img-settle ' +
    D_CINE +
    ' 0.2s ' +
    EASE +
    ' both;' +
    '  }' +
    '}' +
    '.sn-float {' +
    '  animation: sn-float 7s ease-in-out infinite;' +
    '}' +
    '.sn-lift {' +
    '  transition:' +
    '    transform ' +
    D_MED +
    ' ' +
    EASE +
    ',' +
    '    box-shadow ' +
    D_MED +
    ' ' +
    EASE +
    ';' +
    '}' +
    '.sn-lift:hover { transform: translate3d(0, -4px, 0); }' +
    '.sn-btn-motion {' +
    '  transition:' +
    '    transform ' +
    D_FAST +
    ' ' +
    EASE +
    ',' +
    '    background ' +
    D_FAST +
    ' ' +
    EASE +
    ',' +
    '    border-color ' +
    D_FAST +
    ' ' +
    EASE +
    ',' +
    '    box-shadow ' +
    D_FAST +
    ' ' +
    EASE +
    ',' +
    '    color ' +
    D_FAST +
    ' ' +
    EASE +
    ';' +
    '}' +
    '.sn-btn-motion:hover { transform: translate3d(0, -2px, 0); }' +
    '@media (max-width: 900px) {' +
    '  [data-reveal][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '    transform: translate3d(0, 10px, 0);' +
    '  }' +
    '  [data-reveal="left"][data-reveal-wait]:not(.is-in):not([data-in]),' +
    '  [data-reveal="right"][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '    transform: translate3d(0, 10px, 0);' +
    '  }' +
    '  .sn-float {' +
    '    animation: none !important;' +
    '    transform: none !important;' +
    '  }' +
    '  .sn-lift:hover { transform: translate3d(0, -2px, 0); }' +
    '}' +
    '@media (max-width: 768px) {' +
    '  [data-reveal] { transition-duration: 0.45s; }' +
    '  [data-reveal-stagger] > [data-reveal]:nth-child(n) {' +
    '    transition-delay: 0.03s !important;' +
    '  }' +
    '}' +
    '@media (prefers-reduced-motion: reduce) {' +
    '  [data-reveal],' +
    '  [data-reveal][data-reveal-wait]:not(.is-in):not([data-in]) {' +
    '    opacity: 1 !important;' +
    '    transform: none !important;' +
    '    transition: none !important;' +
    '    animation: none !important;' +
    '  }' +
    '  .sn-hero-anim .eyebrow,' +
    '  .sn-hero-anim .badge,' +
    '  .sn-hero-anim h1,' +
    '  .sn-hero-anim .lead,' +
    '  .sn-hero-anim .actions,' +
    '  .sn-hero-anim .solutions,' +
    '  .sn-hero-anim .media,' +
    '  .sn-hero-anim .media-frame,' +
    '  .sn-float {' +
    '    animation: none !important;' +
    '  }' +
    '  .sn-lift:hover,' +
    '  .sn-btn-motion:hover {' +
    '    transform: none !important;' +
    '  }' +
    '}';

  var pending = new Set();
  var sharedIo = null;
  var scrollBound = false;
  var pageshowBound = false;
  var rafId = 0;
  var safetyInterval = 0;
  var scrollGen = 0;
  var counted = new WeakSet();

  function prefersReducedMotion() {
    return (
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function isRevealed(el) {
    return !!(el && (el.classList.contains('is-in') || el.hasAttribute('data-in')));
  }

  function markIn(el) {
    if (!el || isRevealed(el)) return;
    el.classList.add('is-in');
    el.setAttribute('data-in', '');
    el.removeAttribute('data-reveal-wait');
    el.classList.remove('sn-reveal-wait');
    pending.delete(el);
    if (sharedIo) sharedIo.unobserve(el);
  }

  function shouldReveal(el) {
    if (!el || isRevealed(el)) return false;
    var rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0 && rect.top === 0 && rect.bottom === 0) {
      return false;
    }
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    var margin = 160;
    var inOrNearView = rect.bottom > -margin && rect.top < vh + margin;
    var scrolledPast = rect.bottom < vh * 0.35;
    return inOrNearView || scrolledPast;
  }

  function syncPending() {
    rafId = 0;
    if (!pending.size) return;
    Array.prototype.slice.call(pending).forEach(function (el) {
      if (!el.isConnected) {
        pending.delete(el);
        return;
      }
      if (shouldReveal(el)) markIn(el);
    });
  }

  function scheduleSync() {
    if (rafId) return;
    rafId = requestAnimationFrame(syncPending);
  }

  function ensureSafetyInterval() {
    if (safetyInterval || typeof window === 'undefined') return;
    safetyInterval = window.setInterval(function () {
      if (!pending.size) {
        window.clearInterval(safetyInterval);
        safetyInterval = 0;
        return;
      }
      scheduleSync();
    }, 480);
  }

  function ensureSharedRuntime() {
    if (typeof IntersectionObserver !== 'undefined' && !sharedIo) {
      sharedIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) markIn(entry.target);
          });
        },
        { root: null, threshold: [0, 0.01, 0.12], rootMargin: '180px 0px 120px 0px' }
      );
    }

    if (!scrollBound && typeof window !== 'undefined') {
      scrollBound = true;
      document.documentElement.classList.remove('sn-slide-lock');
      window.addEventListener('scroll', scheduleSync, { passive: true });
      window.addEventListener('resize', scheduleSync, { passive: true });
      window.addEventListener('hashchange', scheduleSync);
      window.addEventListener('popstate', scheduleSync);
    }

    if (!pageshowBound && typeof window !== 'undefined') {
      pageshowBound = true;
      window.addEventListener('pageshow', scheduleSync);
      window.addEventListener('load', scheduleSync);
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') scheduleSync();
      });
    }
  }

  /**
   * Observe [data-reveal] under root (or document). Shared IntersectionObserver.
   * Mobile keeps motion with shorter CSS distances — does not skip entirely.
   */
  function enhance(root) {
    var scope = root && typeof root.querySelectorAll === 'function' ? root : document;
    var nodes = Array.prototype.slice.call(scope.querySelectorAll('[data-reveal]'));
    var countNodes = Array.prototype.slice.call(scope.querySelectorAll('[data-count]'));

    countNodes.forEach(function (el) {
      animateCount(el);
    });

    if (!nodes.length) return;

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      nodes.forEach(function (el) {
        markIn(el);
      });
      return;
    }

    ensureSharedRuntime();
    ensureSafetyInterval();

    nodes.forEach(function (el) {
      if (isRevealed(el)) return;
      pending.add(el);
      if (sharedIo) sharedIo.observe(el);
      if (shouldReveal(el)) {
        markIn(el);
      } else {
        el.setAttribute('data-reveal-wait', '');
        el.classList.add('sn-reveal-wait');
      }
    });

    scheduleSync();
    requestAnimationFrame(function () {
      scheduleSync();
      requestAnimationFrame(scheduleSync);
    });
    [100, 400, 1200, 2500].forEach(function (ms) {
      setTimeout(scheduleSync, ms);
    });
  }

  /**
   * Count-up once when the element enters the viewport.
   * data-count, optional data-suffix / data-prefix. Cubic ease-out ~1200ms.
   */
  function animateCount(el, opts) {
    opts = opts || {};
    var duration = opts.duration != null ? opts.duration : 1200;

    if (!el) return function () {};

    if (counted.has(el)) return function () {};

    var target = Number(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion()) {
      counted.add(el);
      el.textContent = prefix + (Number.isFinite(target) ? target : 0) + suffix;
      return function () {};
    }

    if (!Number.isFinite(target)) return function () {};

    counted.add(el);
    var started = false;
    var raf = 0;
    var io = null;

    function run() {
      if (started) return;
      started = true;
      var t0 = performance.now();
      function tick(now) {
        var p = Math.min(1, (now - t0) / duration);
        var eased = 1 - Math.pow(1 - p, 3);
        var value = Math.round(target * eased);
        el.textContent = prefix + value + suffix;
        if (p < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return function () {
        cancelAnimationFrame(raf);
      };
    }

    io = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        if (entry && entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    return function () {
      if (io) io.disconnect();
      cancelAnimationFrame(raf);
    };
  }

  var SLIDE_SKIP = {
    'CHAT-WIDGET': 1,
    'SOCIAL-BOOKMARKS': 1,
    'SN-AGENT-CHAT': 1,
    'SN-SOCIAL-BOOKMARKS': 1,
    'SN-CONSULTATION-MODAL': 1,
  };

  function ensureSlideStyles() {
    if (document.getElementById('sn-slide-style')) return;
    var style = document.createElement('style');
    style.id = 'sn-slide-style';
    style.textContent =
      'html.sn-slide-lock, html.sn-slide-lock body { overflow: hidden !important; }';
    document.head.appendChild(style);
  }

  function isFixedChrome(node) {
    var root = node && node.shadowRoot;
    if (!root) return getComputedStyle(node).position === 'fixed';
    var chrome = root.querySelector('.shell') || root.querySelector('.bar');
    if (chrome && getComputedStyle(chrome).position === 'fixed') return true;
    return getComputedStyle(node).position === 'fixed';
  }

  function slidingNodes() {
    return Array.prototype.slice.call(document.body.children).filter(function (n) {
      return n.nodeType === 1 && !SLIDE_SKIP[n.tagName] && !isFixedChrome(n);
    });
  }

  function coveringOffset() {
    var bottom = 0;
    document.querySelectorAll('site-header, sn-site-header').forEach(function (host) {
      var root = host.shadowRoot;
      var shell = root && root.querySelector('.shell');
      var bar = root && root.querySelector('.bar');
      var pinned = [shell, bar, host].filter(Boolean).find(function (n) {
        return getComputedStyle(n).position === 'fixed';
      });
      if (!pinned) return;
      var rect = (bar || pinned).getBoundingClientRect();
      if (rect.height > 0) bottom = Math.max(bottom, rect.bottom);
    });
    return bottom + 28;
  }

  function resolveAnchor(el) {
    if (!el) return null;
    var root = el.shadowRoot;
    if (!root) return el;
    return (
      root.querySelector('.intro') ||
      root.querySelector('.head') ||
      root.querySelector('.eyebrow') ||
      root.querySelector('#value-title, #services-title') ||
      el
    );
  }

  function readTranslateY(node) {
    var t = getComputedStyle(node).transform;
    if (!t || t === 'none') return 0;
    try {
      return new DOMMatrixReadOnly(t).m42;
    } catch (err) {
      var parts = t.replace(/^matrix3d\(|^matrix\(|\)$/g, '').split(',');
      return Number(parts.length === 16 ? parts[13] : parts[5]) || 0;
    }
  }

  function smoothScrollTo(el, opts) {
    opts = opts || {};
    var duration = opts.duration != null ? opts.duration : 1450;
    if (!el || typeof window === 'undefined') return;

    var anchor = resolveAnchor(el);
    var start = window.scrollY || window.pageYOffset || 0;
    var end = Math.max(0, anchor.getBoundingClientRect().top + start - coveringOffset());
    var dist = end - start;
    var html = document.documentElement;
    var prevBehavior = html.style.scrollBehavior;
    var gen = ++scrollGen;

    function restore() {
      if (gen !== scrollGen) return;
      html.style.scrollBehavior = prevBehavior;
      html.classList.remove('sn-slide-lock');
    }

    html.style.scrollBehavior = 'auto';

    var isCoarse =
      typeof matchMedia !== 'undefined' &&
      (matchMedia('(max-width: 900px)').matches || matchMedia('(pointer: coarse)').matches);

    if (Math.abs(dist) < 2 || prefersReducedMotion() || isCoarse) {
      window.scrollTo({
        top: end,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
      restore();
      return;
    }

    ensureSlideStyles();
    html.classList.add('sn-slide-lock');
    var nodes = slidingNodes();
    if (!nodes.length) {
      window.scrollTo(0, end);
      restore();
      return;
    }

    var done = false;

    function clearNode(n) {
      n.style.transition = 'none';
      n.style.transform = '';
      n.style.willChange = '';
    }

    function finish(cancelled) {
      if (done) return;
      done = true;
      window.removeEventListener('wheel', onCancel);
      window.removeEventListener('touchmove', onCancel);
      window.removeEventListener('keydown', onKey);
      if (gen !== scrollGen) return;
      var y = cancelled ? start - readTranslateY(nodes[0]) : end;
      nodes.forEach(clearNode);
      window.scrollTo(0, Math.max(0, y));
      restore();
    }

    function onCancel() {
      finish(true);
    }

    function onKey(e) {
      if (
        [' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'Escape'].indexOf(
          e.key
        ) !== -1
      ) {
        finish(true);
      }
    }

    window.addEventListener('wheel', onCancel, { passive: true });
    window.addEventListener('touchmove', onCancel, { passive: true });
    window.addEventListener('keydown', onKey);

    nodes.forEach(function (n) {
      n.style.willChange = 'transform';
      n.style.transition = 'none';
      n.style.transform = 'translate3d(0,0,0)';
    });
    void html.offsetHeight;
    var ease = 'cubic-bezier(0.8, 0, 0.2, 1)';
    nodes.forEach(function (n) {
      n.style.transition = 'transform ' + duration + 'ms ' + ease;
      n.style.transform = 'translate3d(0, ' + -dist + 'px, 0)';
    });

    var lead = nodes[0];
    function onEnd(e) {
      if (e.propertyName && e.propertyName !== 'transform') return;
      lead.removeEventListener('transitionend', onEnd);
      finish(false);
    }
    lead.addEventListener('transitionend', onEnd);
    window.setTimeout(function () {
      finish(false);
    }, duration + 80);
  }

  var HASH_FALLBACKS = {
    services: 'service-cards, sn-services-grid',
    'why-sn': 'value-proposition, sn-value-proposition',
    'contact-cta': 'cta-banner, sn-cta-banner',
    faqs: 'faq-section, sn-faqs',
    'home-video': 'video-showcase, sn-video-showcase',
  };

  function scrollToId(id) {
    if (!id) return false;
    var el =
      document.getElementById(id) || document.querySelector(HASH_FALLBACKS[id] || '');
    if (!el) return false;
    smoothScrollTo(el);
    return true;
  }

  function bindParallax() {
    return function () {};
  }

  var api = {
    REVEAL_CSS: REVEAL_CSS,
    enhance: enhance,
    animateCount: animateCount,
    smoothScrollTo: smoothScrollTo,
    scrollToId: scrollToId,
    bindParallax: bindParallax,
  };

  Object.defineProperty(api, 'reduce', {
    enumerable: true,
    configurable: true,
    get: function () {
      return prefersReducedMotion();
    },
  });

  global.SN_MOTION = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
