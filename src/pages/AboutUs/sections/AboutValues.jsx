import React from 'react';
import { useLanguage } from '@/i18n/language.js';
import { localized } from '@/utils/localized';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** Icons belong to the value itself, not to its position in the array. */
export function AboutValues() {
  const t = useAboutStrings();
  const { language } = useLanguage();

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <SectionHeader
          titlePrimary={t.about.valuesHeading1}
          titleSecondary={t.about.valuesHeading2}
          subtitle={t.about.valuesSub}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.values.map((value, index) => (
            <div key={value.icon} className="card">
              <span className="card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mt-6">
                <Icon name={value.icon} size={24} color="#b12600" />
              </div>
              <p className="prose mt-4">{localized(value.text, language)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
