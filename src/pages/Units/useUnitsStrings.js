import { useStrings } from '@/i18n/useStrings';
import idUnits from '@/i18n/locales/id/units.json';
import enUnits from '@/i18n/locales/en/units.json';

export function useUnitsStrings() {
  return useStrings({ id: { units: idUnits }, en: { units: enUnits } });
}
