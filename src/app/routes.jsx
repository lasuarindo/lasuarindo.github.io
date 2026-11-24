import React from 'react';
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
  // Fallback
  { path: '*', Component: pages.NotFound },
];

export default routes;