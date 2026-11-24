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
  { path: '/legal/privacy-policy', Component: pages.PrivacyPolicy },
  { path: '/legal/term-condition', Component: pages.Terms },
  { path: '/faq', Component: pages.Faq },
  // Backward compatibility redirects for the previous legal paths
  { path: '/privacy-policy', element: <Navigate to="/legal/privacy-policy" replace /> },
  { path: '/terms', element: <Navigate to="/legal/term-condition" replace /> },
  // Backward compatibility redirects for legacy Indonesian routes
  { path: '/tentang-kami', element: <Navigate to="/about-us" replace /> },
  { path: '/layanan', element: <Navigate to="/services" replace /> },
  { path: '/kontak', element: <Navigate to="/contact" replace /> },
  { path: '/kebijakan-privasi', element: <Navigate to="/legal/privacy-policy" replace /> },
  { path: '/syarat-ketentuan', element: <Navigate to="/legal/term-condition" replace /> },
  // Fallback
  { path: '*', Component: pages.NotFound },
];

export default routes;