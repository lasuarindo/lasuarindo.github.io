import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider, usePathname, useRouter } from './router/Router';
import { Beranda } from './pages/Beranda';
import { TentangKami } from './pages/TentangKami';
import { Layanan } from './pages/Layanan';
import { Kontak } from './pages/Kontak';
import { KebijakanPrivasi } from './pages/KebijakanPrivasi';

function AppRoutes() {
  const pathname = usePathname();
  const { replace } = useRouter();

  // Normalize path (handle trailing slashes and hashes)
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  // Backward compatibility: redirect legacy Indonesian URLs to English URLs
  useEffect(() => {
    const legacyRedirects = {
      '/tentang-kami': '/about-us',
      '/layanan': '/services',
      '/kontak': '/contact',
      '/kebijakan-privasi': '/privacy-policy',
    };
    if (legacyRedirects[cleanPath]) {
      replace(legacyRedirects[cleanPath]);
    }
  }, [cleanPath, replace]);

  switch (cleanPath) {
    case '/about-us':
    case '/tentang-kami':
      return <TentangKami />;
    case '/services':
    case '/layanan':
      return <Layanan />;
    case '/contact':
    case '/kontak':
      return <Kontak />;
    case '/privacy-policy':
    case '/kebijakan-privasi':
      return <KebijakanPrivasi />;
    case '/':
    default:
      return <Beranda />;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </LanguageProvider>
  );
}
