import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';
import partnershipImg from '@/assets/images/opt/partnership-1200.webp';

export function HomeJourney() {
  const t = useHomeStrings();
  const partnershipLinks = [
    { title: t.home.strategicPartnership, icon: 'handshake' },
    { title: t.home.investorRelations, icon: 'trending_up' },
    { title: t.home.collaboration, icon: 'group_add' },
  ];

  return (
    <section className="section section--ink">
      <div className={CONTAINER}>
        <div className="split">
          <div>
            <span className="eyebrow eyebrow--light">{t.home.journeyHeading1}</span>
            <h2 className="display display--section display--light">
              {t.home.journeyHeading2}
            </h2>
            <div className="rule rule--light" />
            <p className="lead lead--light">{t.home.journeyLead}</p>
            <p className="prose prose--light mt-5">{t.home.journeyBody}</p>

            <div className="journey-links">
              {partnershipLinks.map((link) => (
                <Link key={link.title} to="/contact" className="journey-link">
                  <Icon name={link.icon} size={22} color="#ffb4a3" />
                  <span>{link.title}</span>
                  <Icon name="arrow_forward" size={18} color="#f7f5f1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="figure figure--portrait">
            <img
              src={partnershipImg}
              alt={t.home.journeyImageAlt}
              width="1200"
              height="1200"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeJourney;
