import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { registerNamespace } from './index.js'

/**
 * Register a caller-owned `{ id, en }` bundle with i18next and return a `t`
 * that supports BOTH styles:
 *   - object access: t.home.badge  (what all current pages use)
 *   - key access:    t('home.badge') (native i18next, namespace 'app')
 *
 * Because each caller imports only its own locale JSON, those strings land in
 * the caller's chunk (React.lazy route chunk) — no eager locale bundle. All
 * callers share the 'app' namespace; i18next deep-merges each contribution.
 */
export function useStrings(bundle, namespace = 'app') {
  registerNamespace(namespace, bundle)
  const { t, i18n: instance } = useTranslation(namespace)
  const language = (instance.language || 'id').split('-')[0]

  return useMemo(() => {
    const dict = instance.getResourceBundle(language, namespace) || {}
    const translator = (key, options) => t(key, options)
    // Keep object-style access working for existing call sites.
    return Object.assign(translator, dict)
  }, [t, instance, language, namespace])
}
