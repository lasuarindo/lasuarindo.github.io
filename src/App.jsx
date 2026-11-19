import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { LanguageProvider } from './context/LanguageContext';
import { RootLayout } from './layouts/RootLayout';

// Pages are code-split so the initial bundle only ships the shell.
// Each module uses named exports, so map them to `default` for React.lazy.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const AboutUs = lazy(() => import('./pages/AboutUs').then((m) => ({ default: m.AboutUs })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })),
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      // Backward compatibility redirects for legacy Indonesian routes
      {
        path: '/tentang-kami',
        element: <Navigate to="/about-us" replace />,
      },
      {
        path: '/layanan',
        element: <Navigate to="/services" replace />,
      },
      {
        path: '/kontak',
        element: <Navigate to="/contact" replace />,
      },
      {
        path: '/kebijakan-privasi',
        element: <Navigate to="/privacy-policy" replace />,
      },
      // Fallback
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
