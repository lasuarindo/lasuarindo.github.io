import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n, { resources, useAppLanguage } from '@/i18n';

const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: resources.id.translation,
});

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => i18n.language || 'id');

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('lasuarindo_lang_pref', lang);
      } catch {
        // ignore
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLang === 'id' ? 'en' : 'id');
  };

  const t = resources[currentLang]?.translation || resources.id.translation;

  return (
    <LanguageContext.Provider value={{ language: currentLang, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
