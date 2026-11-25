import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { pageMeta } from '@/data/pageMeta';

// Temporary og:image (owner decision 25 Nov 2026): a licensed stock photo
// stands in until the company supplies its own 1200×630 social asset (N11).
// It is an external absolute URL, so it is independent of the base path.
const OG_IMAGE =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=80';
const OG_IMAGE_ALT = 'Illustration of a team collaborating in a modern workspace';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function canonicalUrl(pathname, search = '') {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return `${window.location.origin}${clean}${search}`;
}

/**
 * Keep document title and the description/Open Graph/canonical tags in sync
 * with the active route and language. No dependency required; runs after
 * render. The canonical uses the current origin and pathname, so it honours
 * the GitHub Pages base path without hardcoding a domain or prefix.
 */
export function usePageMeta(metaKey, override) {
  const { language } = useLanguage();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const entry = pageMeta[metaKey] || pageMeta.notFound;
    const meta = (override && (override[language] || override.id)) || entry[language] || entry.id;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', OG_IMAGE_ALT);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertLink('canonical', canonicalUrl(pathname, search));
  }, [metaKey, language, pathname, search, override]);
}

export default usePageMeta;
