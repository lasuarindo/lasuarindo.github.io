import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

// Placeholder shown inside the <main> slot while a lazily loaded page chunk
// arrives, so the surrounding chrome (header/footer) is never torn down.
export function RouteFallback() {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={t.loader.title}
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[var(--color-surface)]"
    >
      <span className="route-spinner" aria-hidden="true" />
      <p className="font-[var(--font-body)] text-[14px] text-[var(--color-secondary)]">
        {t.loader.hint}
      </p>
    </div>
  );
}

export default RouteFallback;
