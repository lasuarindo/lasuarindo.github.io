import { useStrings } from '@/i18n/useStrings';
import idLegal from '@/i18n/locales/id/legal.json';
import enLegal from '@/i18n/locales/en/legal.json';

export function useLegalStrings() {
  return useStrings({ id: { legal: idLegal }, en: { legal: enLegal } });
}
