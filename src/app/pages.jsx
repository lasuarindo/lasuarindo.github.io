import { lazy } from 'react';

/**
 * Lazy page imports kept separate from the route table so every code-split
 * entry is visible in one place. Each page uses a default export, so lazy()
 * can load it directly.
 */
export const pages = {
  Home: lazy(() => import('@/pages/Home/Home.jsx')),
  AboutUs: lazy(() => import('@/pages/AboutUs/AboutUs.jsx')),
  Services: lazy(() => import('@/pages/Services/Services.jsx')),
  Contact: lazy(() => import('@/pages/Contact/Contact.jsx')),
  PrivacyPolicy: lazy(() => import('@/pages/PrivacyPolicy/PrivacyPolicy.jsx')),
  Terms: lazy(() => import('@/pages/Terms/Terms.jsx')),
  Faq: lazy(() => import('@/pages/Faq/Faq.jsx')),
  NotFound: lazy(() => import('@/pages/NotFound/NotFound.jsx')),
};

export default pages;