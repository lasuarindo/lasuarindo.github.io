import { pages } from './pages';

/**
 * Route table: path → page component. Kept free of layout/chrome concerns;
 * `RootLayout` wraps all of these in `router.jsx`.
 *
 * The old /services path was fully migrated to /businesses and is no longer
 * registered: /services now resolves to the NotFound fallback like any other
 * unknown path. There is no compatibility route to maintain.
 */
export const routes = [
  { path: '/', Component: pages.Home },
  { path: '/about-us', Component: pages.AboutUs },
  { path: '/businesses', Component: pages.Businesses },
  { path: '/ecosystems', Component: pages.Ecosystems },
  { path: '/ecosystems/:key', Component: pages.District },
  { path: '/units', Component: pages.Units },
  { path: '/units/:slug', Component: pages.UnitDetail },
  { path: '/licence', Component: pages.Licence },
  { path: '/contact', Component: pages.Contact },
  { path: '/legal', Component: pages.Legal },
  { path: '/legal/privacy-policy', Component: pages.PrivacyPolicy },
  { path: '/legal/term-condition', Component: pages.Terms },
  { path: '/faq', Component: pages.Faq },
  // Fallback
  { path: '*', Component: pages.NotFound },
];

export default routes;
