import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { paths, routePaths } from '@/app/paths';
import { formatAddress } from '@/data/company';

/**
 * Four closing compositions. Facts and destinations never change: the address
 * comes from `formatAddress()`, exits come from `paths`/`routePaths`. Only the
 * arrangement changes, and all variants stay on light surfaces because the
 * global FinalCta that follows is already an ink band.
 */
function useClosingData(t, ecosystem) {
  const { language } = useLanguage();
  const district = ecosystem ? localized(ecosystem.name, language) : '';
  return {
    district,
    lead: t('units.locationLead', {
      district,
      districtLabel: ecosystem ? localized(ecosystem.theme.label, language) : '',
      city: t.units.locationCity,
      province: t.units.locationProvince,
    }),
    address: formatAddress({ includeCountry: true }),
    districtLink: ecosystem ? t('units.districtLink', { district }) : '',
  };
}

function ClosingAddress({ address }) {
  return (
    <p className="prose unit-closing__address">
      <Icon name="location_on" size={18} color="#b12600" aria-hidden="true" />
      <span>{address}</span>
    </p>
  );
}

function ClosingActions({ t, ecosystem, districtLink, numbered = false, stack = false }) {
  const className = [
    'unit-closing__actions',
    numbered ? 'unit-closing__actions--numbered' : '',
    stack ? 'unit-closing__actions--stack' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={className}>
      {numbered ? <span className="unit-closing__step-num" aria-hidden="true">01</span> : null}
      <Link to={paths.units} className="btn btn--solid">
        <Icon name="arrow_forward" size={18} color="#ffffff" className="rotate-180" aria-hidden="true" />
        {t.units.backToCatalog}
      </Link>
      {ecosystem ? (
        <>
          {numbered ? <span className="unit-closing__step-num" aria-hidden="true">02</span> : null}
          <Link to={routePaths.ecosystem(ecosystem.key)} className="btn btn--outline">
            {districtLink}
            <Icon name="arrow_forward" size={18} color="#b12600" aria-hidden="true" />
          </Link>
        </>
      ) : null}
    </div>
  );
}

export function ClosingRail({ t, ecosystem }) {
  const data = useClosingData(t, ecosystem);
  return (
    <section className="section section--paper unit-closing--rail">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.units.locationHeading} />
        <p className="lead">{data.lead}</p>
        <ClosingAddress address={data.address} />
        <ClosingActions t={t} ecosystem={ecosystem} districtLink={data.districtLink} />
      </div>
    </section>
  );
}

export function ClosingSplit({ t, ecosystem }) {
  const data = useClosingData(t, ecosystem);
  return (
    <section className="section section--paper unit-closing--split">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.units.locationHeading} />
        <div className="unit-closing__grid">
          <div>
            <p className="lead">{data.lead}</p>
            <ClosingAddress address={data.address} />
          </div>
          <ClosingActions t={t} ecosystem={ecosystem} districtLink={data.districtLink} stack />
        </div>
      </div>
    </section>
  );
}

export function ClosingIndex({ t, ecosystem }) {
  const data = useClosingData(t, ecosystem);
  return (
    <section className="section section--neutral unit-closing--index">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.units.locationHeading} />
        <dl className="unit-closing__index">
          <div className="unit-closing__index-row">
            <dt>{t.units.locationHeading}</dt>
            <dd>
              <span className="prose">{data.lead}</span>
              <span className="prose unit-closing__index-address">{data.address}</span>
            </dd>
          </div>
        </dl>
        <ClosingActions t={t} ecosystem={ecosystem} districtLink={data.districtLink} numbered />
      </div>
    </section>
  );
}

export function ClosingQuiet({ t, ecosystem }) {
  const data = useClosingData(t, ecosystem);
  return (
    <section className="section section--paper unit-closing--quiet">
      <div className={CONTAINER}>
        <SectionHeader titlePrimary={t.units.locationHeading} />
        <p className="lead">{data.lead}</p>
        <ClosingAddress address={data.address} />
        <ClosingActions t={t} ecosystem={ecosystem} districtLink={data.districtLink} />
      </div>
    </section>
  );
}
