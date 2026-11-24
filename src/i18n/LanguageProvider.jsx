import { useEffect, useState } from 'react'
import i18n, { STORAGE_KEY } from './index.js'
import { LanguageContext } from './language.js'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => i18n.language.split('-')[0] || 'id')

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Ignore storage errors.
    }
    // Keep i18next in sync so useStrings sees the same active language.
    if (i18n.language !== language) i18n.changeLanguage(language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
