import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Nothing is published yet — show an honest, designed empty state. */
export function BusinessesProjects() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <div className="section-head section-head--plain">
          <div className="section-head__body">
            <h2 className="display display--section">
              {t.businesses.projectsHeading1}
              <span className="section-head__accent">
                {t.businesses.projectsHeading2}
              </span>
              {t.businesses.projectsHeading3}
            </h2>
            <p className="lead">{t.businesses.projectsDesc}</p>
          </div>
        </div>

        <div className="empty-state !max-w-none">
          <span className="flex h-14 w-14 items-center justify-center border border-[var(--color-line-strong)]">
            <Icon name="architecture" size={26} color="#b12600" />
          </span>
          <h3 className="display display--section mt-6">{t.businesses.projectsEmptyHeading}</h3>
          <p className="lead mt-4">{t.businesses.projectsEmptyLead}</p>
          <p className="impact-note mt-6">{t.businesses.projectsEmptyNote}</p>
          <Link to="/contact" className="btn btn--outline mt-8">
            {t.businesses.partnerBtn}
            <Icon name="arrow_forward" size={18} color="#b12600" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessesProjects;
