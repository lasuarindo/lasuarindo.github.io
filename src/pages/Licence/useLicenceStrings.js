import { useStrings } from '@/i18n/useStrings';
import idLicence from '@/i18n/locales/id/licence.json';
import enLicence from '@/i18n/locales/en/licence.json';

export function useLicenceStrings() {
  return useStrings({ id: { licence: idLicence }, en: { licence: enLicence } });
}
