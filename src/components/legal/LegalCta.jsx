import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT } from '@/constants/layout';

/** Closing contact panel with the brand's dark surface and warm glow. */
export function LegalCta({ text, buttonText }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--color-inverse-surface)] px-6 py-12 text-center md:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,107,61,0.25),transparent_65%)] blur-2xl"
      />

      <div className="relative">
        <p
          className={`${BODY_FONT} mx-auto max-w-[52ch] text-[15px] leading-[1.7] text-[rgba(240,241,241,0.72)]`}
        >
          {text}
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-on-primary)] no-underline transition-colors duration-150 hover:bg-[var(--color-primary-container)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-fixed-dim)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-inverse-surface)]"
        >
          <span>{buttonText}</span>
          <Icon name="arrow_forward" size={18} color="#ffffff" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default LegalCta;