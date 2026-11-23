import React from 'react';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Colors } from '@/constants/theme';

// Placeholder shown inside the <main> slot while a lazily loaded page chunk
// arrives, so the surrounding chrome (header/footer) is never torn down.
export function RouteFallback() {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={t.loader.title}
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        backgroundColor: Colors.background,
      }}
    >
      <span className="route-spinner" aria-hidden="true" />
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: Colors.secondary }}>
        {t.loader.hint}
      </p>
    </div>
  );
}

export default RouteFallback;
