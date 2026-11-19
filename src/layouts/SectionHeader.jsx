import React from 'react';
import { Colors } from '@/constants/theme';

export function SectionHeader({
  badge,
  titlePrimary,
  titleSecondary,
  subtitle,
  align = 'left',
  darkTheme = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      style={{
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : 'flex-start',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {badge ? (
        <div
          style={{
            display: 'inline-block',
            padding: '5px 14px',
            borderRadius: '999px',
            backgroundColor: darkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(177, 38, 0, 0.08)',
            border: `1px solid ${darkTheme ? 'rgba(255, 180, 163, 0.3)' : 'rgba(177, 38, 0, 0.2)'}`,
            marginBottom: '14px',
            fontSize: '11px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: darkTheme ? Colors.primaryFixedDim : Colors.primary,
            textTransform: 'uppercase',
          }}
        >
          {badge}
        </div>
      ) : null}

      <h2
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: 1.25,
          color: darkTheme ? '#ffffff' : Colors.onBackground,
          margin: 0,
          marginBottom: '14px',
          letterSpacing: '-0.5px',
        }}
      >
        {titlePrimary}{' '}
        {titleSecondary ? (
          <span style={{ color: Colors.primary }}>{titleSecondary}</span>
        ) : null}
      </h2>

      <div
        className="section-divider"
        style={{
          width: '56px',
          height: '4px',
          borderRadius: '2px',
          background: 'linear-gradient(to right, #b12600, #ffb68b)',
          marginBottom: '16px',
          alignSelf: isCenter ? 'center' : 'flex-start',
        }}
      />

      {subtitle ? (
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: 1.6,
            color: darkTheme ? 'rgba(240, 241, 241, 0.85)' : Colors.secondary,
            margin: 0,
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
