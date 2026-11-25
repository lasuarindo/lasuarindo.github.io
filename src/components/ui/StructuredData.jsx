import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { company } from '@/data/company';

/**
 * JSON-LD Organization on every page, plus LocalBusiness on the T46 district
 * page. All values come from verified facts in src/data/company.js (F2, F3,
 * F7–F10, F27). No coordinates, telephone, foundingDate or awards are added
 * because none are verified.
 */
export function StructuredData() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const origin = window.location.origin;
    const base = import.meta.env.BASE_URL || '/';
    const siteUrl = new URL(base, origin).href.replace(/\/$/, '');
    const address = {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postal,
      addressCountry: company.address.country,
    };
    const graph = [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: company.name,
        legalName: company.legalName,
        url: siteUrl,
        email: company.email,
        slogan:
          language === 'id'
            ? 'Membangun Bisnis, Menciptakan Dampak.'
            : 'Building Business, Creating Impact.',
        address,
        sameAs: company.social
          .filter((item) => /^https?:\/\//.test(item.url))
          .map((item) => item.url),
      },
    ];

    if (pathname === '/ecosystems/t46') {
      graph.push({
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/ecosystems/t46#localbusiness`,
        name: 'Lasuarindo Group — T46',
        url: `${siteUrl}/ecosystems/t46`,
        email: company.email,
        address,
        // Transcribed from company.hours (F9): Mon–Fri 08:30–17:00 WIB.
        openingHours: ['Mo-Fr 08:30-17:00', 'Sa-Su off'],
      });
    }

    let script = document.head.querySelector('script[data-structured-data]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', '');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }, [pathname, language]);

  return null;
}

export default StructuredData;
