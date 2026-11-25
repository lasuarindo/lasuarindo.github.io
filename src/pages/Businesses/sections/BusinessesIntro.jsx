import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

/** Answers "what does this group actually do?" with verified facts only. */
export function BusinessesIntro() {
  const t = useBusinessesStrings();

  return (
    <section id="lini-usaha" className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.businesses.intro.eyebrow}
          titlePrimary={t.businesses.intro.heading}
          subtitle={t.businesses.intro.body}
        />
        <div className="keyword-row">
          {t.businesses.intro.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessesIntro;
