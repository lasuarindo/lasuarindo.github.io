import { useStrings } from '@/i18n/useStrings';
import idTerms from '@/i18n/locales/id/terms.json';
import enTerms from '@/i18n/locales/en/terms.json';

export function useTermsStrings() {
  return useStrings({ id: { terms: idTerms }, en: { terms: enTerms } });
}