import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

/**
 * One flat, square-cornered language control shared by the desktop header and
 * the mobile drawer. `variant` only sets the label width — never a new look.
 */
export function LanguageSwitcher({ variant = 'header', className = '' }) {
  const { language, setLanguage } = useLanguage();
  const t = useStrings({ id: idCommon, en: enCommon });
  const full = variant === 'drawer';
  const rootClass = `lang-switch ${full ? 'lang-switch--full' : ''} ${className}`.trim();

  return (
    <div className={rootClass} role="group" aria-label={t.nav.language}>
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        className="lang-switch__btn"
      >
        {full ? 'Indonesia' : 'ID'}
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className="lang-switch__btn"
      >
        {full ? 'English' : 'EN'}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
