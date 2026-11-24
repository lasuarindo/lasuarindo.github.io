import React from 'react';
import { Link } from 'react-router';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { useResponsive } from '@/hooks/useResponsive';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';
import kemitraanImg from '@/assets/images/partnership_home_hd.png';

export function HomeJourney() {
  const t = useHomeStrings();
  const { isDesktop } = useResponsive();
  const partnershipLinks = [
    { title: t.home.strategicPartnership, icon: 'handshake', delay: 100 },
    { title: t.home.investorRelations, icon: 'trending_up', delay: 200 },
    { title: t.home.collaboration, icon: 'group_add', delay: 300 },
  ];

  return (
    <section className="section section--dark section--relative">
      {isDesktop && (
        <div className="absolute bottom-0 right-0 top-0 z-[1] w-1/2">
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" className="block h-full w-full rounded-l-[48px] object-cover" />
        </div>
      )}
      <div className={`relative z-[2] ${CONTAINER}`}>
        <div className="max-w-[576px]">
          <AnimatedReveal animation="up" delay={0}>
            <h2 className="mb-[14px] font-[var(--font-display)] text-[36px] font-bold leading-[44px] text-white md:text-[52px] md:leading-[60px]">{t.home.journeyHeading1}<br /><GradientText>{t.home.journeyHeading2}</GradientText></h2>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={100}>
            <div className="mb-8 h-1 w-16 bg-[#ffb4a3]" />
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={200}>
            <p className="mb-6 font-[var(--font-body)] text-[18px] leading-[29px] text-[var(--color-surface-variant)]">{t.home.journeyLead}</p>
          </AnimatedReveal>
          <AnimatedReveal animation="up" delay={300}>
            <p className="mb-10 font-[var(--font-body)] text-[16px] leading-[26px] text-[rgba(226,226,222,0.8)]">{t.home.journeyBody}</p>
          </AnimatedReveal>
          <div className="mb-12 flex flex-col gap-4">
            {partnershipLinks.map((link) => (
              <AnimatedReveal key={link.title} animation="left" delay={link.delay}>
                <Link to="/contact" className="flex w-full flex-row items-center gap-4 border-b border-[rgba(228,190,181,0.3)] bg-transparent py-4 text-left no-underline transition-transform hover:translate-x-[6px]">
                  <Icon name={link.icon} size={24} color="#ffb4a3" />
                  <span className="flex-1 font-[var(--font-display)] text-[18px] font-semibold uppercase leading-[26px] tracking-[0.5px] text-white">{link.title}</span>
                  <Icon name="arrow_forward" size={24} color="#e2e2e2" />
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
      {!isDesktop && (
        <div className={`mt-8 ${CONTAINER}`}>
          <img src={kemitraanImg} alt="Kemitraan Lasuarindo" className="block aspect-[16/9] max-h-[420px] w-full rounded-[20px] object-cover" />
        </div>
      )}
    </section>
  );
}

export default HomeJourney;
