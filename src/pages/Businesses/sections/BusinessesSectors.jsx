import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { sectors, sectorDetails } from '@/data/sectors';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** The six business lines — sector level only, never individual units. */
export function BusinessesSectors() {
  const t = useBusinessesStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.businesses.sectorsHeading}
          subtitle={t.businesses.sectorsDesc}
        />
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <div key={sector.key} className="card card--grow">
              <span className="card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mt-6">
                <Icon name={sector.icon} size={26} color="#b12600" />
              </div>
              <h3 className="display display--card card__title">
                {localized(sector.title, language)}
              </h3>
              <p className="prose">{localized(sector.desc, language)}</p>
              <p className="prose mt-4 border-t border-[var(--color-line)] pt-4">
                {localized(sectorDetails[sector.key], language)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/ecosystems/t46" className="link-arrow">
            <span>{t.businesses.ecosystemCta}</span>
            <Icon name="arrow_forward" size={16} color="#b12600" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessesSectors;
