import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';

/** Five capability compositions over the same approved capability list. */

export function NumberedCaps({ unit, v }) {
  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.capabilitiesHeading} />
        <ol className="unit-ledger__caps">
          {v.capabilities.map((capability, position) => (
            <li key={capability} className="unit-ledger__cap">
              <span aria-hidden="true">{String(position + 1).padStart(2, '0')}</span>
              <p className="prose">{capability}</p>
            </li>
          ))}
        </ol>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function TileCaps({ unit, v }) {
  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.capabilitiesHeading} />
        <ul className="unit-cap-tiles">
          {v.capabilities.map((capability) => (
            <li key={capability} className="unit-cap-tile">
              <Icon name="check_circle" size={20} color="#b12600" aria-hidden="true" />
              <p className="prose">{capability}</p>
            </li>
          ))}
        </ul>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function MenuCaps({ unit, v }) {
  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.capabilitiesHeading} />
        <ul className="unit-menu__list">
          {v.capabilities.map((capability) => (
            <li key={capability} className="unit-menu__item">
              <span className="unit-menu__dot" aria-hidden="true" />
              <span className="prose">{capability}</span>
            </li>
          ))}
        </ul>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function ProtocolCaps({ unit, v }) {
  return (
    <section className="section section--ink">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.capabilitiesHeading} darkTheme />
        <ol className="unit-protocol__list">
          {v.capabilities.map((capability, position) => (
            <li key={capability} className="unit-protocol__item">
              <span className="unit-protocol__index" aria-hidden="true">
                {String(position + 1).padStart(2, '0')}
              </span>
              <p className="prose prose--light">{capability}</p>
              <Icon name="arrow_forward" size={18} color="#ffb4a3" aria-hidden="true" />
            </li>
          ))}
        </ol>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}

export function StripCaps({ unit, v }) {
  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={v.t.units.capabilitiesHeading} />
        <ul className="unit-court__strip">
          {v.capabilities.map((capability, position) => (
            <li key={capability} className="unit-court__item">
              <span aria-hidden="true">{String(position + 1).padStart(2, '0')}</span>
              <p className="prose">{capability}</p>
            </li>
          ))}
        </ul>
        {unit.status === 'draft' ? <DraftNote /> : null}
      </div>
    </section>
  );
}
