import { useEffect } from 'react';
import { useLanguage } from '@/i18n/language.js';
import { pageMeta } from '@/data/pageMeta';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keep document title and the description/Open Graph tags in sync with the
 * active route and language. No dependency required; runs after render.
 */
export function usePageMeta(metaKey) {
  const { language } = useLanguage();

  useEffect(() => {
    const entry = pageMeta[metaKey] || pageMeta.notFound;
    const meta = entry[language] || entry.id;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
  }, [metaKey, language]);
}

export default usePageMeta;