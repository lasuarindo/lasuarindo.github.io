import { useStrings } from '@/i18n/useStrings';
import idPrivacy from '@/i18n/locales/id/privacy.json';
import enPrivacy from '@/i18n/locales/en/privacy.json';

export function usePrivacyStrings() {
  return useStrings({ id: { privacy: idPrivacy }, en: { privacy: enPrivacy } });
}
