import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { CONTAINER } from '@/constants/layout';
import { useAboutStrings } from '../useAboutStrings';

/** Interactive year selector. Milestone copy stays temporary until verified. */
export function AboutTimeline() {
  const t = useAboutStrings();
  const [active, setActive] = useState(0);
  const items = t.about.timeline.items;
  const selected = items[active];

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.about.timeline.eyebrow}
          titlePrimary={t.about.timeline.heading}
        />
        <div className="timeline-interactive">
          <div className="timeline-years" role="group" aria-label={t.about.timeline.heading}>
            {items.map((item, index) => (
              <button
                key={item.year}
                type="button"
                className="timeline-year"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <span className="timeline-year__dot" aria-hidden="true" />
                {item.year}
                {item.status === 'draft' ? <DraftBadge /> : null}
              </button>
            ))}
          </div>
          <div className="timeline-detail" aria-live="polite">
            <span className="timeline-detail__year">
              {selected.year}
              {selected.status === 'draft' ? <DraftBadge className="ml-3 align-middle" /> : null}
            </span>
            <h3 className="timeline-detail__title">{selected.title}</h3>
            <p className="prose timeline-detail__desc">{selected.desc}</p>
            <DraftNote>{t.about.timeline.interactiveNote}</DraftNote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
