import { pages } from './pages';
import { paths } from './paths';

/**
 * Route table: path → page component. Kept free of layout/chrome concerns;
 * `RootLayout` wraps all of these in `router.jsx`.
 *
 * The old /services path was fully migrated to /businesses and is no longer
 * registered: /services now resolves to the NotFound fallback like any other
 * unknown path. There is no compatibility route to maintain.
 */
export const routes = [
  { path: paths.home, Component: pages.Home },
  { path: paths.about, Component: pages.AboutUs },
  { path: paths.businesses, Component: pages.Businesses },
  { path: paths.ecosystems, Component: pages.Ecosystems },
  { path: `${paths.ecosystems}/:key`, Component: pages.District },
  { path: paths.units, Component: pages.Units },
  { path: `${paths.units}/:slug`, Component: pages.UnitDetail },
  { path: paths.licence, Component: pages.Licence },
  { path: paths.contact, Component: pages.Contact },
  { path: paths.legal, Component: pages.Legal },
  { path: paths.privacy, Component: pages.PrivacyPolicy },
  { path: paths.terms, Component: pages.Terms },
  { path: paths.faq, Component: pages.Faq },
  { path: paths.partnership, Component: pages.Partnership },
  { path: paths.investor, Component: pages.Investor },
  { path: paths.collaboration, Component: pages.Collaboration },
  // Fallback
  { path: '*', Component: pages.NotFound },
];

export default routes;
