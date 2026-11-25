import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Icon } from '@/components/ui/Icon';
import { DraftBadge, DraftNote } from '@/components/ui/DraftBadge';
import { useLanguage } from '@/i18n/language.js';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { CONTAINER } from '@/constants/layout';
import { timelineDetails } from '@/data/timelineDetails';
import { useAboutStrings } from '../useAboutStrings';

/** Swipeable year selector; the latest year is selected by default. */
export function AboutTimeline() {
  const t = useAboutStrings();
  const common = useStrings({ id: idCommon, en: enCommon });
  const { language } = useLanguage();
  const items = t.about.timeline.items;
  const [active, setActive] = useState(items.length - 1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
  });
  const selected = items[active];
  const details = timelineDetails[selected.year]?.[language] || selected.details;

  const goToYear = useCallback((index, jump = false) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index, jump);
    setActive(index);
  }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return undefined;
  //   const sync = () => setActive(emblaApi.selectedScrollSnap());
  //   emblaApi.on('select', sync);
  //   const frame = requestAnimationFrame(() => goToYear(items.length - 1, true));
  //   return () => {
  //     cancelAnimationFrame(frame);
  //     emblaApi.off('select', sync);
  //   };
  // }, [emblaApi, items.length, goToYear]);
  
  
  useEffect(() => {
    if (!emblaApi) return undefined;
    const frame = requestAnimationFrame(() => goToYear(items.length - 1, true));
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [emblaApi, items.length, goToYear]);

  const step = (direction) => {
    // const current = emblaApi?.selectedScrollSnap() ?? active;
    const current = active;
    
    const next = Math.max(0, Math.min(items.length - 1, current + direction));
    goToYear(next);
  };

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.about.timeline.eyebrow}
          titlePrimary={t.about.timeline.heading}
        />
        <div className="timeline-interactive">
          <div className="timeline-embla" ref={emblaRef}>
            <div className="timeline-embla__container" role="group" aria-label={t.about.timeline.heading}>
              {items.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  className="timeline-year"
                  aria-pressed={active === index}
                  onClick={() => goToYear(index)}
                >
                  <span className="timeline-year__dot" aria-hidden="true" />
                  <span className="timeline-year__label">{item.year}</span>
                  {item.status === 'draft' ? <DraftBadge /> : null}
                </button>
              ))}
            </div>
          </div>

          <div className="timeline-controls">
            <button type="button" onClick={() => step(-1)} aria-label={common.carousel.previous} className="carousel__btn">
              <Icon name="chevron_left" size={20} color="#b12600" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label={common.carousel.next} className="carousel__btn">
              <Icon name="chevron_right" size={20} color="#b12600" />
            </button>
          </div>

          <div className="timeline-detail" aria-live="polite">
            <span className="timeline-detail__year">
              {selected.year}
              {selected.status === 'draft' ? <DraftBadge className="ml-3 align-middle" /> : null}
            </span>
            <h3 className="timeline-detail__title">{selected.title}</h3>
            <p className="prose timeline-detail__desc">{selected.desc}</p>
            <div className="timeline-detail__rows">
              {Object.entries(t.about.timeline.detailLabels).map(([key, label]) => (
                <div key={key} className="timeline-detail__row">
                  <span>{label}</span>
                  <p>{details?.[key]}</p>
                </div>
              ))}
            </div>
            <DraftNote>{t.about.timeline.interactiveNote}</DraftNote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
