import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/i18n/language.js';
import { sectors } from '@/data/sectors';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useHomeStrings } from '../useHomeStrings';

export function HomeEcosystem() {
  const { language } = useLanguage();
  const t = useHomeStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.home.ecosystemHeading1}
          titleSecondary={t.home.ecosystemHeading2}
          subtitle={t.home.ecosystemLead}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <div key={sector.key} className="card">
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
              {sector.highlight ? (
                <span className="mt-auto block pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  {t.home.focusTag}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/businesses" className="link-arrow">
            <span>{t.home.sectorsCta}</span>
            <Icon name="arrow_forward" size={16} color="#b12600" />
          </Link>
        </div>

        {/* The one dealt moment on this page: type-led, static, no scroll link. */}
        <div className="statement">
          <p className="statement__quote">“{t.home.quoteText}”</p>
          <p className="statement__tagline">
            {t.home.taglineMain1} {t.home.taglineMain2}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeEcosystem;
