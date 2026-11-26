import { useStrings } from '@/i18n/useStrings';
import idContact from '@/i18n/locales/id/contact.json';
import enContact from '@/i18n/locales/en/contact.json';

/** The contact page owns its labels; it no longer borrows from the Home bundle. */
export function useContactStrings() {
  return useStrings({ id: { contact: idContact }, en: { contact: enContact } });
}
