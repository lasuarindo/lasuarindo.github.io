import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT } from '@/constants/layout';

export function LegalSection({ id, icon, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 pt-14 first:pt-0 ${className}`.trim()}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(177,38,0,0.08)]">
          <Icon name={icon} size={20} color="#b12600" aria-hidden="true" />
        </span>
        <h2 className="m-0 font-[var(--font-display)] text-[24px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--color-on-background)] md:text-[28px]">
          {title}
        </h2>
      </div>

      <div className={`${BODY_FONT} flex flex-col gap-6`}>{children}</div>
    </section>
  );
}

export default LegalSection;