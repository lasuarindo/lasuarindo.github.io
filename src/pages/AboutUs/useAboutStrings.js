import { useStrings } from '@/i18n/useStrings';
import idAbout from '@/i18n/locales/id/about.json';
import enAbout from '@/i18n/locales/en/about.json';

export function useAboutStrings() {
  return useStrings({ id: { about: idAbout }, en: { about: enAbout } });
}
