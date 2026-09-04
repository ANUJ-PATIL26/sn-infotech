/**
 * Blog — /blog
 * Preview: _blog-preview.html (sn-more-page slug="blog")
 * Posts and images come from public/more-pages.js (exact copy from sninfotech.co.uk/blog).
 * Individual posts: <sn-more-page slug="blog/{post-slug}">
 * SEO: src/seo/pages.json → blog
 */

$w.onReady(function () {
  if ($w('#pageTitle')) {
    $w('#pageTitle').text = 'All Posts';
  }
});
