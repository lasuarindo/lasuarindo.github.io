import React from 'react';
import { Link } from 'react-router';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { engagementLinks } from '@/app/paths';
import { CONTAINER } from '@/constants/layout';
import { useContactStrings } from '../useContactStrings';

const CARDS = [
  { key: 'partnership', descKey: 'strategicPartnership' },
  { key: 'investor', descKey: 'investorRelations' },
  { key: 'collaboration', descKey: 'collaboration' },
];

export function ContactPartnership() {
  const t = useContactStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <AnimatedReveal>
          <SectionHeader
            titlePrimary={t.contact.partnerTitle}
            subtitle={t.contact.partnerDesc}
          />
          <div className="grid-3">
            {CARDS.map((card, index) => (
              <Link key={card.key} to={engagementLinks[card.key].to} className="card">
                <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="display display--card card__title">
                  {t.contact.partnerCardTitles[card.key]}
                </h3>
                <p className="prose">{t.contact.partnerCardsDesc[card.descKey]}</p>
                <span className="link-arrow mt-auto pt-3">
                  <span>{t.contact.partnerCta}</span>
                  <Icon name="arrow_forward" size={16} color="#b12600" />
                </span>
              </Link>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ContactPartnership;
