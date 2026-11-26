import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { getSectorByKey } from '@/data/sectors';
import { getUnitCategory } from '@/data/units';
import { unitImage } from '@/data/unitVisual';
import { routePaths } from '@/app/paths';

/** One card for a unit, shared by the Home preview and the Units directory. */
export function UnitCard({ unit, detailLabel }) {
  const { language } = useLanguage();
  const sector = getSectorByKey(unit.sector);
  const category = getUnitCategory(unit.category);

  return (
    <Link
      to={routePaths.unit(unit.slug)}
      aria-label={`${detailLabel}: ${unit.name}`}
      className="card card--grow unit-card no-underline"
    >
      <div className="unit-card__media">
        <img src={unitImage(unit)} alt="" loading="lazy" decoding="async" />
        <span className="unit-card__badge">
          {category ? localized(category.label, language) : unit.name}
        </span>
      </div>
      <div className="unit-card__body">
        <div className="flex items-start justify-between gap-3">
          <Icon name={unit.icon} size={24} color="#b12600" />
          {sector ? <span className="unit-chip">{localized(sector.title, language)}</span> : null}
        </div>
        <h3 className="display display--card card__title">{unit.name}</h3>
        <p className="prose">{localized(unit.desc, language)}</p>
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2 pb-3">
            <span className="unit-chip">{unit.ecosystem === 't46' ? 'T46' : unit.ecosystem}</span>
            {category ? <span className="unit-chip">{localized(category.label, language)}</span> : null}
          </div>
          <span className="card__cta inline-flex items-center gap-2 text-[13px] font-bold text-[var(--color-primary)]">
            {detailLabel}
            <Icon name="arrow_forward" size={16} color="#b12600" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default UnitCard;
