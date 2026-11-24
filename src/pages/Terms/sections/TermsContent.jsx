import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { BODY_FONT, CONTAINER, DISPLAY_FONT } from '@/constants/layout';
import { useTermsStrings } from '../useTermsStrings';

export function TermsContent() {
  const t = useTermsStrings();
  const sections = t.terms.sections;

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-[800px]">
          {sections.map((section, idx) => (
            <div key={section.title}>
              <AnimatedReveal animation="up" delay={Math.min(idx * 60, 240)}>
                <div className="mb-5 flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(177,38,0,0.1)]">
                    <Icon name="description" size={20} color="#b12600" />
                  </div>
                  <h2 className={`m-0 ${DISPLAY_FONT} text-[24px] font-semibold leading-[32px] text-[var(--color-on-background)]`}>
                    {section.title}
                  </h2>
                </div>
                <p className={`${BODY_FONT} mb-8 text-[16px] leading-[27px] text-[var(--color-secondary)]`}>
                  {section.body}
                </p>
              </AnimatedReveal>
              {idx < sections.length - 1 && (
                <div className="mb-8 h-px bg-[rgba(228,190,181,0.3)]" />
              )}
            </div>
          ))}

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-primary)] px-7 py-3 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-on-primary)] no-underline shadow-[0_4px_14px_rgba(177,38,0,0.25)] transition-colors duration-200 hover:bg-[var(--color-primary-container)]"
            >
              <span>{t.terms.contactCta}</span>
              <Icon name="arrow_forward" size={18} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsContent;