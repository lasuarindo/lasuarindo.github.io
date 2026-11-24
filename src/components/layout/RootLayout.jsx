import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { RouteFallback } from '@/components/ui/RouteFallback';
import { resolvePageMetaKey } from '@/data/pageMeta';
import { usePageMeta } from '@/hooks/usePageMeta';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

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
  usePageMeta(resolvePageMetaKey(pathname));
  return null;
}

// Single source of chrome: header, main landmark, footer and back-to-top live
// here so individual pages only render their own content. The footer is
// route-aware (it shows the services gallery on /services by itself).
export function RootLayout() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <PageMeta />
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