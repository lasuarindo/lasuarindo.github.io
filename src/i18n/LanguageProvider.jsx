import { useEffect, useState } from 'react'
import { LanguageContext } from './language.js'

const STORAGE_KEY = 'lasuarindo-language'
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

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'id') return saved
    }
    return 'id'
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Ignore storage errors.
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
