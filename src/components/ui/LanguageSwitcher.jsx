import React from 'react';
import { useLanguage } from '@/i18n/language.js';

const PILL_BASE =
  'cursor-pointer rounded-full border-none px-[10px] py-1 font-[var(--font-display)] text-[11px] font-bold transition-colors duration-200';
const COMPACT_BASE =
  'cursor-pointer rounded-full border-none px-2 py-[3px] font-[var(--font-display)] text-[10px] font-bold transition-colors duration-200';
const DRAWER_BASE =
  'flex-1 cursor-pointer rounded-lg border px-3 py-2 text-center font-[var(--font-display)] text-[12px] font-semibold transition-all duration-200';

const activePill = 'bg-[var(--color-primary)] text-white';
const idlePill = 'bg-transparent text-[var(--color-secondary)]';

/**
 * Single language control shared by the desktop header, the compact mobile
 * header and the mobile drawer. `variant` only changes the presentation.
 */
export function LanguageSwitcher({ variant = 'pill', className = '' }) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'drawer') {
    return (
      <div className={`flex gap-2 ${className}`.trim()}>
        <button
          type="button"
          onClick={() => setLanguage('id')}
          aria-pressed={language === 'id'}
          className={`${DRAWER_BASE} ${
            language === 'id'
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
              : 'border-[rgba(228,190,181,0.4)] bg-[#fafafa] text-[var(--color-on-surface)]'
          }`}
        >
          🇮🇩 Indonesia
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`${DRAWER_BASE} ${
            language === 'en'
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
              : 'border-[rgba(228,190,181,0.4)] bg-[#fafafa] text-[var(--color-on-surface)]'
          }`}
        >
          🇬🇧 English
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center rounded-full border border-[rgba(228,190,181,0.45)] bg-[rgba(255,255,255,0.85)] p-0.5 ${className}`.trim()}
      >
        <button
          type="button"
          onClick={() => setLanguage('id')}
          aria-pressed={language === 'id'}
          className={`${COMPACT_BASE} ${language === 'id' ? activePill : idlePill}`}
        >
          ID
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`${COMPACT_BASE} ${language === 'en' ? activePill : idlePill}`}
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center rounded-full border border-[rgba(228,190,181,0.45)] bg-[rgba(255,255,255,0.85)] p-[3px] ${className}`.trim()}
    >
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        className={`${PILL_BASE} ${language === 'id' ? activePill : idlePill}`}
      >
        ID
      </button>
      <div className="mx-px h-3 w-px bg-[rgba(228,190,181,0.5)]" />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`${PILL_BASE} ${language === 'en' ? activePill : idlePill}`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;