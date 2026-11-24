/* eslint-disable react/only-export-components */
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from '@/components/layout/RootLayout';

// Pages are code-split so the initial bundle only ships the shell.
// Stored in const variables first for clarity; each page uses a default
// export, so lazy() can load it directly (BMG-style).
const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const AboutUs = lazy(() => import('@/pages/AboutUs/AboutUs.jsx'));
const Services = lazy(() => import('@/pages/Services/Services.jsx'));
const Contact = lazy(() => import('@/pages/Contact/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy/PrivacyPolicy.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound.jsx'));

// BASE_URL is '/' locally and for *.github.io user sites, '/<repo>/' for project
// sites. React Router expects a basename without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: '/', Component: Home },
        { path: '/about-us', Component: AboutUs },
        { path: '/services', Component: Services },
        { path: '/contact', Component: Contact },
        { path: '/privacy-policy', Component: PrivacyPolicy },
        // Backward compatibility redirects for legacy Indonesian routes
        { path: '/tentang-kami', element: <Navigate to="/about-us" replace /> },
        { path: '/layanan', element: <Navigate to="/services" replace /> },
        { path: '/kontak', element: <Navigate to="/contact" replace /> },
        { path: '/kebijakan-privasi', element: <Navigate to="/privacy-policy" replace /> },
        // Fallback
        { path: '*', Component: NotFound },
      ],
    },
  ],
  { basename },
);
