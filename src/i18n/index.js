import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import idCommon from '@/i18n/locales/id/common.json';
import idHome from '@/i18n/locales/id/home.json';
import idAbout from '@/i18n/locales/id/about.json';
import idServices from '@/i18n/locales/id/services.json';
import idContact from '@/i18n/locales/id/contact.json';
import idPrivacy from '@/i18n/locales/id/privacy.json';

import enCommon from '@/i18n/locales/en/common.json';
import enHome from '@/i18n/locales/en/home.json';
import enAbout from '@/i18n/locales/en/about.json';
import enServices from '@/i18n/locales/en/services.json';
import enContact from '@/i18n/locales/en/contact.json';
import enPrivacy from '@/i18n/locales/en/privacy.json';

export const resources = {
  id: {
    common: idCommon,
    home: idHome,
    about: idAbout,
    services: idServices,
    contact: idContact,
    privacy: idPrivacy,
    // Flat convenience tree so both t('home:badge') and t.home.badge work effortlessly
    translation: {
      ...idCommon,
      home: idHome,
      about: idAbout,
      services: idServices,
      contact: idContact,
      privacy: idPrivacy,
    },
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    services: enServices,
    contact: enContact,
    privacy: enPrivacy,
    translation: {
      ...enCommon,
      home: enHome,
      about: enAbout,
      services: enServices,
      contact: enContact,
      privacy: enPrivacy,
    },
  },
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('app_language') : null;
const initialLanguage = savedLang === 'en' || savedLang === 'id' ? savedLang : 'id';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'translation',
});

export default i18n;

export function useAppLanguage() {
  const { t: translate, i18n } = useTranslation();
  const currentLang = i18n.language === 'en' ? 'en' : 'id';

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_language', lang);
    }
  };

  // Direct access proxy matching t.home.sectors etc.
  const currentDict = resources[currentLang]?.translation || resources.id.translation;

  return {
    language: currentLang,
    setLanguage,
    t: currentDict,
    translate,
    i18n,
  };
}
