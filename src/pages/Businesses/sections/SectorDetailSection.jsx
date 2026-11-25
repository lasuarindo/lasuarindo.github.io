import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';
import { getSectorByKey, sectorSummaries, sectorDetails, sectorUnits } from '@/data/sectors';
import cityImg from '@/assets/images/opt/hero-city-800.webp';
import propertyImg from '@/assets/images/opt/property-hero-1000.webp';
import technologyImg from '@/assets/images/opt/technology-grid-900.webp';
import mediaImg from '@/assets/images/opt/creative-media-900.webp';
import foodImg from '@/assets/images/opt/ecosystem-service-1200.webp';
import lifestyleImg from '@/assets/images/opt/vamos-1200.webp';

const SECTOR_IMAGES = {
  investment: cityImg,
  property: propertyImg,
  technology: technologyImg,
  media: mediaImg,
  food: foodImg,
  lifestyle: lifestyleImg,
};

/** One dedicated section per sector, with a short unit mention. */
export function SectorDetailSection({ sectorKey, index }) {
  const { language } = useLanguage();
  const sector = getSectorByKey(sectorKey);

  return (
    <section className={`section ${index % 2 ? 'section--neutral' : 'section--paper'}`}>
      <div className={CONTAINER}>
        <div className="split">
          <div>
            <span className="eyebrow">
              {String(index + 1).padStart(2, '0')} / 06
            </span>
            <h2 className="display display--section">
              {localized(sector.title, language)}
            </h2>
            <div className="rule" />
            <p className="lead">{localized(sectorSummaries[sectorKey], language)}</p>
            <p className="prose mt-4 max-w-[62ch]">
              {localized(sectorDetails[sectorKey], language)}
            </p>
            <p className="sector-detail-row__units">
              <Icon name="apartment" size={16} color="#6b665f" />
              {localized(sectorUnits[sectorKey], language)}
            </p>
          </div>
          <div className="figure figure--wide">
            <img src={SECTOR_IMAGES[sectorKey]} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectorDetailSection;
