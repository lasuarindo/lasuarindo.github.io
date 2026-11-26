import React from 'react';
import { BODY_FONT } from '@/constants/layout';

/** Editorial long-form section: number, title, thin rule — no icon tile. */
export function PrivacySection({ id, number, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 pt-14 first:pt-0 ${className}`.trim()}>
      <div className="mb-6 flex items-baseline gap-4 border-b border-[var(--color-line)] pb-4">
        <span className="font-[var(--font-display)] text-[12px] font-bold tabular-nums tracking-[0.1em] text-[var(--color-primary)]">
          {String(number).padStart(2, '0')}
        </span>
        <h2 className="m-0 font-[var(--font-display)] text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--color-ink)]">
          {title}
        </h2>
      </div>

      <div className={`${BODY_FONT} flex flex-col gap-6`}>{children}</div>
    </section>
  );
}

export default PrivacySection;
