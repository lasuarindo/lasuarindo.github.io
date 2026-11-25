import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';
import { paths } from '@/app/paths';

/** id="visi" is the anchor target of the Home hero's "Visi Kami" button. */
export function AboutVision() {
  const t = useAboutStrings();

  return (
    <section id="visi" className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.about.visionHeading}
          titlePrimary={t.about.visionTitle}
          subtitle={t.about.visionDesc}
        />

        <div className="vision-block">
          <h3 className="display display--card">{t.about.missionTitle}</h3>
          <ol className="vision-list">
            {t.about.missions.map((mission, index) => (
              <li key={mission}>
                <span className="vision-list__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{mission}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <Link to={paths.businesses} className="link-arrow">
            <span>{t.about.visionLink}</span>
            <Icon name="arrow_forward" size={16} color="#b12600" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutVision;
