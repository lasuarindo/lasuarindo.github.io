import { useStrings } from '@/i18n/useStrings';
import idFaq from '@/i18n/locales/id/faq.json';
import enFaq from '@/i18n/locales/en/faq.json';

export function useFaqStrings() {
  return useStrings({ id: { faq: idFaq }, en: { faq: enFaq } });
}