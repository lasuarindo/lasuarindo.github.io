import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const STORAGE_KEY = 'lasuarindo-language'
const LEGACY_KEYS = ['app_language', 'lasuarindo_lang_pref']

function migrateLanguageKey() {
  if (typeof window === 'undefined') return
  try {
    if (!localStorage.getItem(STORAGE_KEY)) {
      for (const key of LEGACY_KEYS) {
        const value = localStorage.getItem(key)
        if (value === 'id' || value === 'en') {
          localStorage.setItem(STORAGE_KEY, value)
          break
        }
      }
    }
    for (const key of LEGACY_KEYS) {
      localStorage.removeItem(key)
    }
  } catch {
    // Ignore storage errors (private mode, etc.).
  }
}

migrateLanguageKey()

const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const initialLanguage = savedLang === 'en' || savedLang === 'id' ? savedLang : 'id'

// No resources are registered here on purpose. Each page/component registers
// only its own namespace via `registerNamespace(...)` (called from useStrings),
// so locale JSON lands in that page's chunk instead of the entry bundle.
i18n.use(initReactI18next).init({
  lng: initialLanguage,
  fallbackLng: 'id',
  interpolation: { escapeValue: false },
  defaultNS: 'translation',
  initImmediate: false,
})

/**
 * Register a `{ id, en }` bundle under a namespace, once per language.
 * Deep merge so multiple contributors can extend the same namespace safely.
 */
export function registerNamespace(namespace, bundle) {
  for (const [lng, resources] of Object.entries(bundle)) {
    // Always add: i18next deep-merges, so each page can extend the same
    // namespace with its own keys without wiping the others.
    i18n.addResourceBundle(lng, namespace, resources, true, true)
  }
}

export default i18n
