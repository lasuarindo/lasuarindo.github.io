import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

const KEYWORD_ICONS = ['trending_up', 'domain', 'rocket_launch'];

/** Answers "what does this group actually do?" with verified facts only. */
export function BusinessesIntro() {
  const t = useBusinessesStrings();

  return (
    <section id="lini-usaha" className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto max-w-[860px] text-center">
            <span className="mb-3 block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.businesses.intro.eyebrow}</span>
            <h2 className="mb-4 font-[var(--font-display)] text-[30px] font-bold leading-[38px] text-[var(--color-on-background)] md:text-[42px] md:leading-[50px]">{t.businesses.intro.heading}</h2>
            <div className="mx-auto mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <p className="mx-auto mb-8 max-w-[720px] font-[var(--font-body)] text-[16px] leading-[27px] text-[var(--color-secondary)] md:text-[17px]">{t.businesses.intro.body}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {t.businesses.intro.keywords.map((keyword, idx) => (
                <span key={keyword} className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[rgba(177,38,0,0.25)] bg-[rgba(177,38,0,0.06)] px-4 py-2">
                  <Icon name={KEYWORD_ICONS[idx]} size={16} color="#b12600" />
                  <span className="font-[var(--font-display)] text-[13px] font-semibold text-[var(--color-primary)]">{keyword}</span>
                </span>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default BusinessesIntro;
