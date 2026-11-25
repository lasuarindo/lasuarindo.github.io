import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';

/** One question plus a link to the full FAQ — never a duplicate of /faq. */
export function FaqTeaser({ title, text, button }) {
  return (
    <section className="section section--sm section--surface-low">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto flex max-w-[760px] flex-col items-start gap-4 rounded-2xl border border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-7 md:flex-row md:items-center md:gap-8 md:p-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[rgba(177,38,0,0.1)]">
              <Icon name="help" size={26} color="#b12600" />
            </div>
            <div className="flex-1">
              <h2 className="m-0 mb-2 font-[var(--font-display)] text-[22px] font-bold leading-[30px] text-[var(--color-on-background)]">{title}</h2>
              <p className="m-0 font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{text}</p>
            </div>
            <Link
              to="/faq"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg border-[1.5px] border-[var(--color-primary)] px-5 py-2 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)] no-underline transition-colors duration-200 hover:bg-[rgba(177,38,0,0.08)]"
            >
              <span>{button}</span>
              <Icon name="arrow_forward" size={16} color="#b12600" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default FaqTeaser;
