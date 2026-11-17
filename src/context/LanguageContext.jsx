import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.id,
});

const STORAGE_KEY = 'lasuarindo_lang_pref';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('id');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === 'id' || saved === 'en') {
          setLanguageState(saved);
        }
      } catch {
        // ignore storage error
      }
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // ignore
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const t = translations[language] || translations.id;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
