import React from 'react';
import { CONTAINER } from '@/constants/layout';
import { UnitBreadcrumb, UnitFigure } from './UnitShared';

/** Seven hero compositions. All read the same `v` view data. */

export function LedgerHero({ unit, v }) {
  return (
    <>
      <section className="unit-hero unit-hero--ledger">
        <div className={CONTAINER}>
          <UnitBreadcrumb unit={unit} common={v.common} />
          <div className="unit-hero__grid">
            <div className="unit-hero__copy">
              <span className="eyebrow enter-once">{v.categoryLabel}</span>
              <p className="unit-hero__numeral enter-once">
                {v.number}<span> / {v.total}</span>
              </p>
              <h1 className="display display--hero enter-once">{unit.name}</h1>
              <p className="lead enter-once">{v.desc}</p>
            </div>
            <UnitFigure image={v.theme.media} className="unit-hero__figure figure--portrait" priority />
          </div>
        </div>
      </section>
      <section className="unit-band">
        <div className={CONTAINER}>
          <UnitFigure image={v.theme.band} className="unit-band__figure figure--wide" />
        </div>
      </section>
    </>
  );
}

export function SiteHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--site">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <UnitFigure image={v.theme.media} className="unit-hero__figure figure--wide" priority />
        <div className="unit-hero__grid">
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead enter-once">{v.desc}</p>
          </div>
          <div className="unit-hero__aside">
            <span className="unit-hero__numeral">{v.number}<span> / {v.total}</span></span>
            <span className="unit-hero__aside-label">{v.sectorLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProtocolHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--protocol section--ink">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <div className="unit-hero__grid">
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <p className="unit-hero__numeral enter-once">
              {v.number}<span> / {v.total}</span>
            </p>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead lead--light enter-once">{v.desc}</p>
          </div>
          <UnitFigure image={v.theme.media} className="unit-hero__figure figure--square" priority />
        </div>
      </div>
    </section>
  );
}

export function MenuHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--menu">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <div className="unit-hero__grid">
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead enter-once">{v.desc}</p>
            <p className="unit-hero__numeral enter-once">
              {v.number}<span> / {v.total}</span>
            </p>
          </div>
          <UnitFigure image={v.theme.media} className="unit-hero__figure figure--square" priority />
        </div>
      </div>
    </section>
  );
}

export function CourtHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--court">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <div className="unit-hero__grid">
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead enter-once">{v.desc}</p>
          </div>
          <div className="unit-hero__aside">
            <span className="unit-hero__numeral">{v.number}<span> / {v.total}</span></span>
            <span className="unit-hero__aside-label">{v.sectorLabel}</span>
          </div>
        </div>
        <UnitFigure image={v.theme.media} className="unit-hero__figure figure--wide" priority />
      </div>
    </section>
  );
}

export function IndexHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--index">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <div className="unit-hero__grid">
          <p className="unit-hero__numeral unit-hero__numeral--oversized enter-once" aria-hidden="true">
            {v.number}
          </p>
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead enter-once">{v.desc}</p>
            <p className="unit-hero__aside-label enter-once">{v.sectorLabel}</p>
          </div>
        </div>
        <UnitFigure image={v.theme.media} className="unit-hero__figure figure--wide" priority />
      </div>
    </section>
  );
}

export function PosterHero({ unit, v }) {
  return (
    <section className="unit-hero unit-hero--poster">
      <div className={CONTAINER}>
        <UnitBreadcrumb unit={unit} common={v.common} />
        <div className="unit-hero__grid">
          <div className="unit-hero__copy">
            <span className="eyebrow enter-once">{v.categoryLabel}</span>
            <h1 className="display display--hero enter-once">{unit.name}</h1>
            <p className="lead enter-once">{v.desc}</p>
            <p className="unit-hero__numeral enter-once">
              {v.number}<span> / {v.total}</span>
            </p>
          </div>
          <UnitFigure image={v.theme.media} className="unit-hero__figure figure--portrait" priority />
        </div>
      </div>
    </section>
  );
}
