import { useStrings } from '@/i18n/useStrings';
import idHome from '@/i18n/locales/id/home.json';
import enHome from '@/i18n/locales/en/home.json';

export function useHomeStrings() {
  return useStrings({ id: { home: idHome }, en: { home: enHome } });
}
