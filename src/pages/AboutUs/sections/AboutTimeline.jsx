import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** Four milestones from drafts.md §B, used as temporary published content. */
export function AboutTimeline() {
  const t = useAboutStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.about.timeline.eyebrow}
          titlePrimary={t.about.timeline.heading}
        />
        <div className="timeline">
          {t.about.timeline.items.map((item) => (
            <div key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <span className="timeline__title">{item.title}</span>
              <span className="timeline__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
