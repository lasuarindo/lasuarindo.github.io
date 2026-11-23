import React from 'react';
import { RouterProvider } from 'react-router';
import { LanguageProvider } from '@/context/LanguageContext';
import { router } from '@/app/router';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
