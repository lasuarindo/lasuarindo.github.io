import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useContactStrings } from '../useContactStrings';

export function ContactPartnership() {
  const t = useContactStrings();
  const partnerCards = [
    { icon: 'handshake', title: t.home.strategicPartnership, desc: t.contact.partnerCardsDesc.strategicPartnership },
    { icon: 'trending_up', title: t.home.investorRelations, desc: t.contact.partnerCardsDesc.investorRelations },
    { icon: 'group_add', title: t.home.collaboration, desc: t.contact.partnerCardsDesc.collaboration },
  ];

  return (
    <section className="section--dark py-20 max-[767px]:py-14">
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${CONTAINER}`}>
        {partnerCards.map((card, i) => (
          <AnimatedReveal key={card.title} animation="up" delay={100 * (i + 1)} hover="lift">
            <div className="box-border flex h-full flex-col items-center rounded-2xl border border-[rgba(228,190,181,0.2)] bg-[rgba(255,255,255,0.08)] p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(177,38,0,0.2)]"><Icon name={card.icon} size={36} color="#ffb4a3" /></div>
              <h3 className="mb-3 font-[var(--font-display)] text-[28px] font-bold leading-9 text-[var(--color-on-primary)]">{card.title}</h3>
              <p className="m-0 font-[var(--font-body)] text-[16px] leading-[26px] text-[var(--color-surface-variant)]">{card.desc}</p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}

export default ContactPartnership;
