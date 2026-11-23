import { useLanguage } from './language.js'

/**
 * Pick the active language's strings from a `{ id, en }` bundle.
 * Each caller imports its own locale files, so the strings land in that
 * caller's chunk instead of the entry bundle.
 */
export function useStrings(bundle) {
  const { language } = useLanguage()
  return bundle[language] ?? bundle.id
}
