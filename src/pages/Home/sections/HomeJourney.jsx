import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { engagementLinks, paths } from '@/app/paths';
import { useHomeStrings } from '../useHomeStrings';
import partnershipImg from '@/assets/images/opt/partnership-1200.webp';

export function HomeJourney() {
  const t = useHomeStrings();
  const h = t.home;
  const links = [
    { title: h.strategicPartnership, icon: 'handshake', to: engagementLinks.partnership.to },
    { title: h.investorRelations, icon: 'trending_up', to: engagementLinks.investor.to },
    { title: h.collaboration, icon: 'group_add', to: engagementLinks.collaboration.to },
  ];

  return (
    <section className="section section--ink">
      <div className={CONTAINER}>
        <div className="split">
          <div>
            <span className="eyebrow eyebrow--light">{h.journeyHeading1}</span>
            <h2 className="display display--section display--light">{h.journeyHeading2}</h2>
            <div className="rule rule--light" />
            <p className="lead lead--light">{h.journeyLead}</p>
            <p className="prose prose--light mt-5">{h.journeyBody}</p>

            <div className="journey-links">
              {links.map((link) => (
                <Link key={link.title} to={link.to} className="journey-link">
                  <Icon name={link.icon} size={22} color="#ffb4a3" />
                  <span>{link.title}</span>
                  <Icon name="arrow_forward" size={18} color="#f7f5f1" />
                </Link>
              ))}
            </div>

            <p className="prose prose--light mt-8">{h.journeyJoined}</p>

            <div className="dark-card mt-6">
              <h3>{h.journeyProgramTitle}</h3>
              <p className="mt-2">{h.journeyProgramDesc}</p>
              <Link to={paths.contact} className="btn btn--light mt-6">
                {h.journeyProgramCta}
                <Icon name="arrow_forward" size={18} color="#ffffff" />
              </Link>
            </div>
          </div>

          <div className="figure figure--portrait">
            <img src={partnershipImg} alt={h.journeyImageAlt} width="1200" height="1200" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeJourney;
