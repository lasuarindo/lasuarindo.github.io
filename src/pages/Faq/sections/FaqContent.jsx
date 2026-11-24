import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT, CONTAINER } from '@/constants/layout';
import { useFaqStrings } from '../useFaqStrings';

export function FaqContent() {
  const t = useFaqStrings();

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-[800px]">
          {t.faq.items.map((item, idx) => (
            <AnimatedReveal key={item.question} animation="up" delay={Math.min(idx * 60, 240)}>
              <details className="group mb-3 rounded-xl border border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[var(--font-display)] text-[16px] font-semibold leading-[24px] text-[var(--color-on-background)] [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <Icon
                    name="chevron_right"
                    size={20}
                    color="#b12600"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-90"
                  />
                </summary>
                <p className={`${BODY_FONT} mb-0 mt-3 text-[15px] leading-[25px] text-[var(--color-secondary)]`}>
                  {item.answer}
                </p>
              </details>
            </AnimatedReveal>
          ))}

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-primary)] px-7 py-3 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-on-primary)] no-underline shadow-[0_4px_14px_rgba(177,38,0,0.25)] transition-colors duration-200 hover:bg-[var(--color-primary-container)]"
            >
              <span>{t.faq.contactCta}</span>
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqContent;