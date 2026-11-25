import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { DraftBadge } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';
import partnershipImg from '@/assets/images/opt/partnership-1200.webp';

/** Three temporary treatments shown together so the right one can be picked. */
export function HomeJourney() {
  const t = useHomeStrings();
  const h = t.home;
  const links = [
    { title: h.strategicPartnership, icon: 'handshake' },
    { title: h.investorRelations, icon: 'trending_up' },
    { title: h.collaboration, icon: 'group_add' },
  ];

  const program = (
    <div className="dark-card mt-8">
      <div className="flex items-center gap-3">
        <h3 className="!m-0">{h.journeyProgramTitle}</h3>
        <DraftBadge />
      </div>
      <p className="mt-2">{h.journeyProgramDesc}</p>
    </div>
  );

  return (
    <>
      {/* A — photo and link list */}
      <section className="section section--ink">
        <div className={CONTAINER}>
          <div className="variant-block !mt-0 !border-0 !pt-0">
            <span className="variant-label">{h.journeyVariants.a}</span>
          </div>
          <div className="split mt-8">
            <div>
              <span className="eyebrow eyebrow--light">{h.journeyHeading1}</span>
              <h2 className="display display--section display--light">{h.journeyHeading2}</h2>
              <div className="rule rule--light" />
              <p className="lead lead--light">{h.journeyLead}</p>
              <p className="prose prose--light mt-5">{h.journeyBody}</p>
              <div className="journey-links">
                {links.map((link) => (
                  <Link key={link.title} to="/contact" className="journey-link">
                    <Icon name={link.icon} size={22} color="#ffb4a3" />
                    <span>{link.title}</span>
                    <Icon name="arrow_forward" size={18} color="#f7f5f1" />
                  </Link>
                ))}
              </div>
              {program}
            </div>
            <div className="figure figure--portrait">
              <img src={partnershipImg} alt={h.journeyImageAlt} width="1200" height="1200" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* B — statement and numbered steps */}
      <section className="section section--paper">
        <div className={CONTAINER}>
          <div className="variant-block !mt-0 !border-0 !pt-0">
            <span className="variant-label">{h.journeyVariants.b}</span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <span className="eyebrow">{h.journeyHeading1}</span>
              <h2 className="display display--section">{h.journeyHeading2}</h2>
              <div className="rule" />
              <p className="lead">{h.journeyLead}</p>
            </div>
            <div className="grid-3">
              {links.map((link, index) => (
                <div key={link.title} className="card card--grow">
                  <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="mt-6"><Icon name={link.icon} size={24} color="#b12600" /></div>
                  <h3 className="display display--card card__title">{link.title}</h3>
                  <p className="prose">{h.journeyBody}</p>
                  <Link to="/contact" className="card__cta mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-[var(--color-primary)]">
                    {h.journeyProgramTitle}
                    <Icon name="arrow_forward" size={16} color="#b12600" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C — partnership cards */}
      <section className="section section--neutral">
        <div className={CONTAINER}>
          <div className="variant-block !mt-0 !border-0 !pt-0">
            <span className="variant-label">{h.journeyVariants.c}</span>
          </div>
          <div className="mt-8">
            <span className="eyebrow">{h.journeyHeading1}</span>
            <h2 className="display display--section">{h.journeyHeading2}</h2>
            <div className="rule" />
            <p className="lead max-w-[62ch]">{h.journeyLead}</p>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {links.map((link) => (
                <Link key={link.title} to="/contact" className="card card--grow no-underline">
                  <Icon name={link.icon} size={26} color="#b12600" />
                  <h3 className="display display--card card__title">{link.title}</h3>
                  <p className="prose">{h.journeyProgramDesc}</p>
                  <span className="card__cta mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-bold text-[var(--color-primary)]">
                    {h.journeyProgramTitle}
                    <Icon name="arrow_forward" size={16} color="#b12600" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <p className="impact-note mt-8">{h.journeyVariants.note}</p>
        </div>
      </section>
    </>
  );
}

export default HomeJourney;
