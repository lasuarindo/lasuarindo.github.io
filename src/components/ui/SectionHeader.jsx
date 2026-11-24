import React from 'react';

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
    <div className={`mb-8 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      {badge ? (
        <div
          className={`inline-block rounded-full border px-[14px] py-[5px] mb-[14px] text-[11px] font-[var(--font-display)] font-semibold tracking-[1.5px] uppercase ${darkTheme ? 'bg-[rgba(255,255,255,0.1)] border-[rgba(255,180,163,0.3)] text-[var(--color-primary-fixed-dim)]' : 'bg-[rgba(177,38,0,0.08)] border-[rgba(177,38,0,0.2)] text-[var(--color-primary)]'}`}
        >
          {badge}
        </div>
      ) : null}

      <h2
        className={`m-0 mb-[14px] font-[var(--font-display)] text-[32px] font-bold leading-[1.25] tracking-[-0.5px] ${darkTheme ? 'text-white' : 'text-[var(--color-on-background)]'}`}
      >
        {titlePrimary}{' '}
        {titleSecondary ? (
          <span className="text-[var(--color-primary)]">{titleSecondary}</span>
        ) : null}
      </h2>

      <div
        className={`section-divider mb-4 h-1 w-14 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)] ${isCenter ? 'self-center' : 'self-start'}`}
      />

      {subtitle ? (
        <p
          className={`m-0 max-w-[680px] font-[var(--font-body)] text-[16px] leading-[1.6] ${darkTheme ? 'text-[rgba(240,241,241,0.85)]' : 'text-[var(--color-secondary)]'}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
