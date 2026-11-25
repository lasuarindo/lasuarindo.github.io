import { lazy } from 'react';

/**
 * Lazy page imports kept separate from the route table so every code-split
 * entry is visible in one place. Each page uses a default export, so lazy()
 * can load it directly.
 */
export const pages = {
  Home: lazy(() => import('@/pages/Home/Home.jsx')),
  AboutUs: lazy(() => import('@/pages/AboutUs/AboutUs.jsx')),
  Businesses: lazy(() => import('@/pages/Businesses/Businesses.jsx')),
  Ecosystems: lazy(() => import('@/pages/Ecosystems/Ecosystems.jsx')),
  District: lazy(() => import('@/pages/Ecosystems/District.jsx')),
  Units: lazy(() => import('@/pages/Units/Units.jsx')),
  UnitDetail: lazy(() => import('@/pages/Units/UnitDetail.jsx')),
  Licence: lazy(() => import('@/pages/Licence/Licence.jsx')),
  Legal: lazy(() => import('@/pages/Legal/Legal.jsx')),
  Contact: lazy(() => import('@/pages/Contact/Contact.jsx')),
  PrivacyPolicy: lazy(() => import('@/pages/PrivacyPolicy/PrivacyPolicy.jsx')),
  Terms: lazy(() => import('@/pages/Terms/Terms.jsx')),
  Faq: lazy(() => import('@/pages/Faq/Faq.jsx')),
  NotFound: lazy(() => import('@/pages/NotFound/NotFound.jsx')),
};

export default pages;
