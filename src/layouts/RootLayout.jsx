import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';
import { BackToTop } from '@/components/BackToTop';
import { RouteFallback } from '@/components/RouteFallback';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Single source of chrome: header, main landmark, footer and back-to-top live
// here so individual pages only render their own content. The footer is
// route-aware (it shows the services gallery on /services by itself).
export function RootLayout() {
  const t = useStrings({ id: idCommon, en: enCommon });
  const location = useLocation();

  return (
    <LanguageProvider>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
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
