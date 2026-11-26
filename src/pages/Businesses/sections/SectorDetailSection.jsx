import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { routePaths } from '@/app/paths';
import { getSectorByKey, sectorSummaries, sectorDetails, sectorUnits } from '@/data/sectors';
import { units } from '@/data/units';
import { useBusinessesStrings } from '../useBusinessesStrings';
import cityImg from '@/assets/images/opt/hero-city-800.webp';
import propertyImg from '@/assets/images/opt/property-hero-1000.webp';
import technologyImg from '@/assets/images/opt/technology-grid-900.webp';
import mediaImg from '@/assets/images/opt/creative-media-900.webp';
import foodImg from '@/assets/images/opt/ecosystem-service-1200.webp';
import lifestyleImg from '@/assets/images/opt/vamos-1200.webp';

/** The six sections share one editorial spine and one different composition each. */
const SECTOR_MEDIA = {
  investment: { src: cityImg, width: 800, height: 950 },
  property: { src: propertyImg, width: 1000, height: 1000 },
  technology: { src: technologyImg, width: 900, height: 900 },
  media: { src: mediaImg, width: 900, height: 900 },
  food: { src: foodImg, width: 1200, height: 1192 },
  lifestyle: { src: lifestyleImg, width: 1200, height: 900 },
};

const SECTOR_MOTIFS = {
  investment: 'ledger',
  property: 'site',
  technology: 'protocol',
  media: 'sheet',
  food: 'menu',
  lifestyle: 'court',
};

/** One dedicated section per sector, with a data-derived, marked unit directory. */
export function SectorDetailSection({ sectorKey, index }) {
  const { language } = useLanguage();
  const t = useBusinessesStrings();
  const sector = getSectorByKey(sectorKey);
  const media = SECTOR_MEDIA[sectorKey];
  const motif = SECTOR_MOTIFS[sectorKey];
  const isDark = motif === 'protocol';
  const relatedUnits = units.filter((unit) => unit.sector === sectorKey);

  return (
    <section
      className={`section ${isDark ? 'section--ink' : index % 2 ? 'section--neutral' : 'section--paper'}`}
      data-sector={sectorKey}
    >
      <div className={CONTAINER}>
        <div className={`dossier dossier--${motif}`}>
          <div className="dossier__head">
            <span className="dossier__index">
              {String(index + 1).padStart(2, '0')} / 06
            </span>
            <h2 className="display display--section">
              {localized(sector.title, language)}
            </h2>
            <span className={`rule ${isDark ? 'rule--light' : ''}`} />
          </div>

          <div className="dossier__copy">
            <p className={`lead ${isDark ? 'lead--light' : ''}`}>
              {localized(sectorSummaries[sectorKey], language)}
            </p>
            <p className={`prose mt-4 ${isDark ? 'prose--light' : ''}`}>
              {localized(sectorDetails[sectorKey], language)}
            </p>
            <p className="sector-detail-row__units">
              <Icon name="apartment" size={16} color={isDark ? '#c9c6c0' : '#6b665f'} />
              {localized(sectorUnits[sectorKey], language)}
            </p>
          </div>

          <div className="dossier__media">
            <figure className="figure figure--wide">
              <img
                src={media.src}
                alt=""
                width={media.width}
                height={media.height}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="dossier__extra">
            <div className="dossier__extra-head">
              <span className="eyebrow">{t.businesses.sectorEnrichment.unitsLabel}</span>
              <DraftBadge />
            </div>
            <ul className="dossier__units">
              {relatedUnits.map((unit) => (
                <li key={unit.slug} className="dossier__unit">
                  <Link className="dossier__unit-link" to={routePaths.unit(unit.slug)}>
                    <span className="dossier__unit-name">{unit.name}</span>
                    <span className="dossier__unit-desc">{localized(unit.desc, language)}</span>
                  </Link>
                  <ul className="dossier__caps">
                    {unit.capabilities.map((capability) => (
                      <li key={capability.id}>{localized(capability, language)}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <DraftNote>{t.businesses.sectorEnrichment.note}</DraftNote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectorDetailSection;
