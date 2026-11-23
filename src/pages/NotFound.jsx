import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Colors } from '@/constants/theme';

export function NotFound() {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <div className="page">
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '16px',
          padding: '120px 24px 80px',
        }}
      >
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(64px, 12vw, 120px)',
            lineHeight: 1,
            color: Colors.primary,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(22px, 4vw, 32px)',
            color: Colors.onBackground,
          }}
        >
          {t.notFound.title}
        </h1>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: 1.6,
            color: Colors.secondary,
            maxWidth: '480px',
          }}
        >
          {t.notFound.message}
        </p>
        <Link
          to="/"
          style={{
            marginTop: '12px',
            display: 'inline-block',
            backgroundColor: Colors.primary,
            color: Colors.onPrimary,
            padding: '12px 28px',
            borderRadius: '8px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
          }}
        >
          {t.notFound.backHome}
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
