import React from 'react';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';
import proyekPropertiImg from '@/assets/images/opt/future-property-1200.webp';
import proyekTeknologiImg from '@/assets/images/opt/future-technology-1200.webp';
import proyekEkosistemImg from '@/assets/images/opt/ecosystem-wide-1800.webp';
import proyekKarbonImg from '@/assets/images/opt/future-carbon-900.webp';

// Images map to the `projects` array in businesses.json by position.
const PROJECT_IMAGES = [proyekPropertiImg, proyekTeknologiImg, proyekEkosistemImg, proyekKarbonImg];

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.businesses.projects.map((item, idx) => (
            <article key={item.title} className="project-card">
              <div className="figure">
                <img
                  src={PROJECT_IMAGES[idx]}
                  alt={item.title}
                  width="1200"
                  height="1500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-card__meta">
                <span className="project-card__tag">{item.tag}</span>
                <h3 className="project-card__title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesProjects;
