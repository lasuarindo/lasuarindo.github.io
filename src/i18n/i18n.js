/* i18next configuration — DORMANT, not imported by the app yet.
 *
 * The app currently uses its own i18n (src/context/LanguageContext.jsx +
 * src/i18n/translations.js). This module mirrors the existing setup so it
 * can be swapped in later without touching translations.js.
 *
 * Activation steps (when ready to implement):
 *   1. Import this module once in src/main.jsx:  import './i18n/i18n';
 *   2. Replace LanguageContext internals with react-i18next
 *      (useTranslation / useTranslationReady), keeping the same
 *      localStorage key 'lasuarindo_lang_pref' for compatibility.
 *   3. Interpolation uses {{var}} by default; existing translations.js
 *      contains no placeholders today, so nothing to migrate.
 *
 * Safe to import in any environment (SSR/node): storage access is guarded.
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations.js';

const STORAGE_KEY = 'lasuarindo_lang_pref';

function detectInitialLanguage() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'id' || saved === 'en') return saved;
    }
  } catch {
    // ignore storage errors (private mode, disabled cookies, etc.)
  }
  return 'id';
}

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: translations.id },
    en: { translation: translations.en },
  },
  lng: detectInitialLanguage(),
  fallbackLng: 'id',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
