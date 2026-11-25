import { useStrings } from '@/i18n/useStrings';
import idEcosystems from '@/i18n/locales/id/ecosystems.json';
import enEcosystems from '@/i18n/locales/en/ecosystems.json';

export function useEcosystemsStrings() {
  return useStrings({ id: { ecosystems: idEcosystems }, en: { ecosystems: enEcosystems } });
}
