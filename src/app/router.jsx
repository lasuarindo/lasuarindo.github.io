import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@/components/layout/RootLayout';
import { routes } from './routes';

// BASE_URL is '/' locally and for *.github.io user sites, '/<repo>/' for project
// sites. React Router expects a basename without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: routes,
    },
  ],
  { basename },
);