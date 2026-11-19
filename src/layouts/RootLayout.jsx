import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Colors } from '@/constants/theme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Shown inside the <Outlet /> slot while a lazily loaded page chunk arrives,
// so the surrounding chrome is never torn down.
function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
      }}
    >
      <span className="route-spinner" aria-hidden="true" />
    </div>
  );
}

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default RootLayout;
