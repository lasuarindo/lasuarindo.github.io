import { useStrings } from '@/i18n/useStrings';
import idServices from '@/i18n/locales/id/services.json';
import enServices from '@/i18n/locales/en/services.json';

export function useServicesStrings() {
  return useStrings({ id: { services: idServices }, en: { services: enServices } });
}
