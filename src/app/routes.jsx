import React from 'react';
import { Navigate } from 'react-router';
import { pages } from './pages';

/**
 * Route table: path → page component. Kept free of layout/chrome concerns;
 * `RootLayout` wraps all of these in `router.jsx`.
 */
export const routes = [
  { path: '/', Component: pages.Home },
  { path: '/about-us', Component: pages.AboutUs },
  { path: '/services', Component: pages.Services },
  { path: '/contact', Component: pages.Contact },
  { path: '/privacy-policy', Component: pages.PrivacyPolicy },
  // Backward compatibility redirects for legacy Indonesian routes
  { path: '/tentang-kami', element: <Navigate to="/about-us" replace /> },
  { path: '/layanan', element: <Navigate to="/services" replace /> },
  { path: '/kontak', element: <Navigate to="/contact" replace /> },
  { path: '/kebijakan-privasi', element: <Navigate to="/privacy-policy" replace /> },
  // Fallback
  { path: '*', Component: pages.NotFound },
];

export default routes;