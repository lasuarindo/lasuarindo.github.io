import { useStrings } from '@/i18n/useStrings';
import idContact from '@/i18n/locales/id/contact.json';
import enContact from '@/i18n/locales/en/contact.json';
import idHome from '@/i18n/locales/id/home.json';
import enHome from '@/i18n/locales/en/home.json';

/**
 * The contact page reuses the partnership labels from the Home page, so both
 * bundles are registered together.
 */
export function useContactStrings() {
  const contactBundle = { id: { contact: idContact }, en: { contact: enContact } };
  const homeBundle = { id: { home: idHome }, en: { home: enHome } };
  return useStrings({
    id: Object.assign({}, contactBundle.id, homeBundle.id),
    en: Object.assign({}, contactBundle.en, homeBundle.en),
  });
}
