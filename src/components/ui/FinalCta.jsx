import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';

/**
 * One closing pattern for every main page: the same partnership invitation
 * and the same destination (/contact). The copy comes from each page's locale
 * so id/en stay independent, but the formula never changes.
 */
export function FinalCta({ title, text, button, to = '/contact' }) {
  return (
    <section className="section section--dark section--relative">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
            <span className="mb-4 block h-1 w-16 rounded-[2px] bg-[#ffb4a3]" />
            <h2 className="m-0 font-[var(--font-display)] text-[30px] font-bold leading-[38px] text-white md:text-[44px] md:leading-[52px]">{title}</h2>
            <p className="mb-8 mt-4 max-w-[560px] font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-surface-variant)]">{text}</p>
            <Link
              to={to}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-3 font-[var(--font-display)] text-[15px] font-bold text-white no-underline transition-colors duration-200 hover:bg-[var(--color-primary-container)]"
            >
              <span>{button}</span>
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default FinalCta;
