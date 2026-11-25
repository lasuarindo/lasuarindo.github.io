import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { sectors, sectorDetails, sectorUnits } from '@/data/sectors';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** All six sectors, with a short scope and the units active in each. */
export function BusinessesSectorDetails() {
  const t = useBusinessesStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.businesses.sectorDetailsHeading}
          subtitle={t.businesses.sectorDetailsLead}
        />
        <div className="sector-detail-list">
          {sectors.map((sector, index) => (
            <article key={sector.key} className="sector-detail-row">
              <div className="sector-detail-row__meta">
                <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
                <Icon name={sector.icon} size={28} color="#b12600" />
              </div>
              <div>
                <h3 className="display display--card">{localized(sector.title, language)}</h3>
                <p className="prose mt-3">{localized(sectorDetails[sector.key], language)}</p>
                <p className="sector-detail-row__units">
                  <Icon name="apartment" size={16} color="#6b665f" />
                  {localized(sectorUnits[sector.key], language)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesSectorDetails;
