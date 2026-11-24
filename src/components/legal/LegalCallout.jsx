import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT } from '@/constants/layout';

/** Tinted note panel. Full border, leading icon — no one-sided accent bar. */
export function LegalCallout({ tone = 'brand', icon = 'info', title, children }) {
  const isBrand = tone === 'brand';

  return (
    <div
      className={`rounded-xl border p-5 ${
        isBrand
          ? 'border-[rgba(177,38,0,0.22)] bg-[rgba(177,38,0,0.05)]'
          : 'border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)]'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70">
          <Icon name={icon} size={17} color="#b12600" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          {title ? (
            <p className="m-0 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-on-background)]">
              {title}
            </p>
          ) : null}
          <div
            className={`${BODY_FONT} text-[15px] leading-[1.7] text-[var(--color-secondary)] ${
              title ? 'mt-1' : ''
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalCallout;