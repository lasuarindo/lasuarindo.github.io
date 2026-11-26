import React from 'react';

/**
 * Long-form section head: a single section number, the title, and one thin
 * rule. No icon tile, no tinted panel — the hierarchy comes from type and space.
 */
export function TermsSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 pt-14 first:pt-0">
      <div className="border-t border-[var(--color-line)] pt-4">
        <div className="flex items-baseline gap-4">
          <span className="font-[var(--font-display)] text-[12px] font-bold tabular-nums tracking-[0.14em] text-[var(--color-primary)]">
            {String(number).padStart(2, '0')}
          </span>
          <h2 className="display text-[22px] md:text-[26px]">{title}</h2>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-5">{children}</div>
    </section>
  );
}

export default TermsSection;
