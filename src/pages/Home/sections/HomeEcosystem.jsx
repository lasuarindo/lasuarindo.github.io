import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { sectors } from '@/data/sectors';
import { localized } from '@/utils/localized';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useResponsive } from '@/hooks/useResponsive';
import { BODY_FONT, CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';

const BENTO_COLUMNS = [[0, 4], [1, 5], [2], [3, 6]];

export function HomeEcosystem() {
  const { language } = useLanguage();
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();
  const ecosystemItems = sectors.map((sector) => ({
    title: localized(sector.title, language),
    icon: sector.icon,
    desc: localized(sector.desc, language),
    delay: sector.delay,
    highlight: sector.highlight,
    tag: sector.highlight ? t.home.focusTag : undefined,
  }));

  return (
    <section className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-[50px] max-w-[672px]">
            <h2 className="mb-[14px] font-[var(--font-display)] text-[36px] font-bold leading-[44px] text-[var(--color-on-background)] md:text-[52px] md:leading-[60px]">{t.home.ecosystemHeading1}{' '}<span className="text-[var(--color-primary)]">{t.home.ecosystemHeading2}</span></h2>
            <div className="mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[28px] text-[var(--color-secondary)]">{t.home.ecosystemLead}</p>
          </div>
        </AnimatedReveal>
        {isDesktop ? (
          <div className="flex flex-row items-stretch gap-6">
            {BENTO_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-1 flex-col gap-6">
                {col.map((itemIdx) => {
                  const item = ecosystemItems[itemIdx];
                  const isTall = item.highlight;
                  return (
                    <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift" className={isTall ? 'flex flex-1 flex-col' : 'flex flex-col'}>
                      <div className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border-[1.5px] border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-8 ${isTall ? 'min-h-[520px] flex-1' : ''}`}>
                        {isTall && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(240,240,240,0.6)_0%,rgba(230,230,230,0.9)_100%)]" />}
                        <div className="relative z-[2]">
                          <div className="mb-5 flex h-11 w-11 items-center justify-start"><Icon name={item.icon} size={28} color="#b12600" /></div>
                          <h3 className="mb-3 font-[var(--font-display)] text-[24px] font-semibold leading-[32px] tracking-[0.5px] text-[var(--color-on-background)]">{item.title}</h3>
                          <div className="mb-4 h-1 w-8 bg-[var(--color-primary)]" />
                          <p className={`m-0 ${BODY_FONT} text-[15px] leading-[25px] text-[var(--color-secondary)] ${item.tag ? 'mb-8' : ''}`}>{item.desc}</p>
                        </div>
                        {item.tag && <div className="relative z-[2] self-start rounded-full bg-[var(--color-primary)] px-[14px] py-[6px]"><span className="font-[var(--font-display)] text-[11px] font-semibold uppercase leading-[14px] tracking-[1.2px] text-white">{item.tag}</span></div>}
                      </div>
                    </AnimatedReveal>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ecosystemItems.map((item) => (
              <AnimatedReveal key={item.title} animation="up" delay={item.delay} hover="lift">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-[1.5px] border-[rgba(228,190,181,0.4)] bg-[var(--color-surface-container-lowest)] p-8">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-start"><Icon name={item.icon} size={28} color="#b12600" /></div>
                    <h3 className="mb-3 font-[var(--font-display)] text-[24px] font-semibold leading-[32px] tracking-[0.5px] text-[var(--color-on-background)]">{item.title}</h3>
                    <div className="mb-4 h-1 w-8 bg-[var(--color-primary)]" />
                    <p className={`m-0 ${BODY_FONT} text-[15px] leading-[25px] text-[var(--color-secondary)] ${item.tag ? 'mb-6' : ''}`}>{item.desc}</p>
                  </div>
                  {item.tag && <div className="self-start rounded-full bg-[var(--color-primary)] px-[14px] py-[6px]"><span className="font-[var(--font-display)] text-[11px] font-semibold uppercase leading-[14px] tracking-[1.2px] text-white">{item.tag}</span></div>}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        )}
        <AnimatedReveal animation="up" delay={200}>
          <div className="mt-16 text-center">
            <p className="mb-2 font-[var(--font-display)] text-[24px] font-bold leading-[32px] text-[var(--color-on-background)]"><span className="text-[32px] text-[var(--color-primary)]">"</span>{'  '}{t.home.quoteText}{'  '}<span className="text-[32px] text-[var(--color-primary)]">"</span></p>
            <h3 className="m-0 font-[var(--font-display)] text-[30px] font-semibold leading-[40px] text-[var(--color-on-background)]">{t.home.taglineMain1}{' '}<span className="text-[var(--color-primary)]">{t.home.taglineMain2}</span></h3>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default HomeEcosystem;
