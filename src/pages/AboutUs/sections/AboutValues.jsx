import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** Editorial value rows — no icon tiles, no identical generated cards. */
export function AboutValues() {
  const t = useAboutStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={`${t.about.valuesHeading1} ${t.about.valuesHeading2}`}
          subtitle={t.about.valuesSub}
        />
        <div className="value-list">
          {t.about.values.map((value, index) => (
            <div key={value.icon} className="value-row">
              <span className="value-row__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="value-row__label">{t.about.valueLabels[index]}</h3>
              <p className="prose value-row__text">{localized(value.text, language)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
