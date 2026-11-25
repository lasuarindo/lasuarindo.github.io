import { useStrings } from '@/i18n/useStrings';
import idBusinesses from '@/i18n/locales/id/businesses.json';
import enBusinesses from '@/i18n/locales/en/businesses.json';

export function useBusinessesStrings() {
  return useStrings({ id: { businesses: idBusinesses }, en: { businesses: enBusinesses } });
}
