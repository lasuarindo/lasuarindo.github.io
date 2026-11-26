import React from 'react';
import { localized } from '@/utils/localized';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { getSectorByKey } from '@/data/sectors';

/** Four overview compositions over the same approved overview text. */

export function LedgerOverview({ unit, v }) {
  const sector = getSectorByKey(unit.sector);
  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.overviewHeading} />
        <dl className="unit-ledger">
          <div className="unit-ledger__row">
            <dt>{v.t.units.overviewHeading}</dt>
            <dd className="lead">{v.overview}</dd>
          </div>
          <div className="unit-ledger__row">
            <dt>{v.sectorLabel}</dt>
            <dd className="prose">{sector ? localized(sector.desc, v.language) : ''}</dd>
          </div>
        </dl>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function SplitOverview({ unit, v }) {
  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.overviewHeading} />
        <div className="unit-site__grid">
          <div>
            <p className="lead">{v.overview}</p>
            {unit.status === 'draft' ? <DraftNote /> : null}
          </div>
          <ul className="unit-site__facts">
            <li><span>{v.categoryLabel}</span><strong>{v.sectorLabel}</strong></li>
            <li>
              <span>{v.ecosystem ? localized(v.ecosystem.name, v.language) : unit.ecosystem}</span>
              <strong>
                {v.ecosystem ? localized(v.ecosystem.theme.label, v.language) : v.categoryLabel}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function QuoteOverview({ unit, v }) {
  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.overviewHeading} />
        <p className="unit-menu__lead">{v.overview}</p>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function GridOverview({ unit, v }) {
  const sector = getSectorByKey(unit.sector);
  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.overviewHeading} />
        <ul className="unit-overview-grid">
          <li>
            <span>{v.t.units.overviewHeading}</span>
            <p className="prose">{v.overview}</p>
          </li>
          <li>
            <span>{v.sectorLabel}</span>
            <p className="prose">{sector ? localized(sector.desc, v.language) : ''}</p>
          </li>
          <li>
            <span>{v.categoryLabel}</span>
            <p className="prose">{v.desc}</p>
          </li>
        </ul>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}
