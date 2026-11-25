import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** id="visi" is the anchor target of the Home hero's "Visi Kami" button. */
export function AboutVision() {
  const t = useAboutStrings();

  return (
    <section id="visi" className="section section--surface">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mx-auto max-w-[860px]">
            <span className="mb-3 block font-[var(--font-display)] text-[13px] font-bold uppercase leading-[18px] tracking-[1.5px] text-[var(--color-primary)]">{t.about.visionHeading}</span>
            <h2 className="mb-3 font-[var(--font-display)] text-[30px] font-bold leading-[38px] text-[var(--color-on-background)] md:text-[42px] md:leading-[50px]">{t.about.visionTitle}</h2>
            <div className="mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)]" />
            <p className="m-0 font-[var(--font-body)] text-[17px] leading-[28px] text-[var(--color-secondary)]">{t.about.visionDesc}</p>
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={120}>
          <div className="mx-auto mt-12 max-w-[860px] rounded-2xl border border-[rgba(228,190,181,0.35)] bg-[var(--color-surface-container-lowest)] p-7 md:p-9">
            <h3 className="m-0 mb-5 font-[var(--font-display)] text-[22px] font-bold leading-[28px] text-[var(--color-on-background)]">{t.about.missionTitle}</h3>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {t.about.missions.map((mission) => (
                <li key={mission} className="flex items-start gap-3">
                  <span className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(177,38,0,0.1)]">
                    <Icon name="check_circle" size={15} color="#b12600" />
                  </span>
                  <span className="font-[var(--font-body)] text-[15px] leading-[25px] text-[var(--color-secondary)]">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>
        <AnimatedReveal animation="up" delay={180}>
          <div className="mx-auto mt-8 max-w-[860px]">
            <Link
              to="/businesses"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border-[1.5px] border-[var(--color-primary)] px-6 py-2 font-[var(--font-display)] text-[14px] font-bold text-[var(--color-primary)] no-underline transition-colors duration-200 hover:bg-[rgba(177,38,0,0.08)]"
            >
              <span>{t.about.visionLink}</span>
              <Icon name="arrow_forward" size={16} color="#b12600" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutVision;
