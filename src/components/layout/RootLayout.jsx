import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import { localized } from '@/utils/localized';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { RouteFallback } from '@/components/ui/RouteFallback';
import { StructuredData } from '@/components/ui/StructuredData';
import { resolvePageMetaKey } from '@/data/pageMeta';
import { getUnitBySlug } from '@/data/units';
import { usePageMeta } from '@/hooks/usePageMeta';
import { scrollToSection } from '@/utils/scrollToSection';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // The target lives in a lazy route: keep checking until it exists,
      // then hand off to the shared animated scroll helper.
      const id = decodeURIComponent(hash.replace(/^#/, ''));
      let attempts = 0;
      const timer = window.setInterval(() => {
        if (document.getElementById(id)) {
          window.clearInterval(timer);
          // Instant scroll avoids depending on animation frames, which are
          // throttled in background tabs and during reduced-motion mode.
          scrollToSection(id, { duration: 0 });
        } else if (++attempts >= 20) {
          window.clearInterval(timer);
        }
      }, 50);
      return () => window.clearInterval(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [pathname, hash]);

  return null;
}

function SkipLink() {
  const t = useStrings({ id: idCommon, en: enCommon });
  return (
    <a href="#main" className="skip-link">
      {t.skipLink}
    </a>
  );
}

function PageMeta() {
  const { pathname } = useLocation();
  const metaKey = resolvePageMetaKey(pathname);
  const match = pathname.match(/^\/units\/([^/]+)/);
  const unit = match ? getUnitBySlug(match[1]) : null;
  const override = unit
    ? {
        id: {
          title: `${unit.name} — Lasuarindo Group`,
          description: `${unit.name} adalah unit bisnis dalam ekosistem T46. ${localized(unit.desc, 'id')} ${localized(unit.overview, 'id')}`,
        },
        en: {
          title: `${unit.name} — Lasuarindo Group`,
          description: `${unit.name} is a business unit in the T46 ecosystem. ${localized(unit.desc, 'en')} ${localized(unit.overview, 'en')}`,
        },
      }
    : undefined;
  usePageMeta(metaKey, override);
  return null;
}

// Single source of chrome: header, main landmark, footer and back-to-top live
// here so individual pages only render their own content. The footer is
// route-aware (it shows the creative-ecosystem gallery on /businesses by itself).
export function RootLayout() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <PageMeta />
      <StructuredData />
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="main" className="page" key={location.pathname}>
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}

export default RootLayout;