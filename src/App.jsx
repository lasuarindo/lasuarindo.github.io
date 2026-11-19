import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { LanguageProvider } from './context/LanguageContext';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

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
