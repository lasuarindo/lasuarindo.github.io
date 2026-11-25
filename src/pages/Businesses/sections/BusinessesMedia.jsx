import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { useBusinessesStrings } from '../useBusinessesStrings';

export function BusinessesMedia() {
  const t = useBusinessesStrings();

  return (
    <section className="section section--paper">
      <div className={CONTAINER}>
        <SectionHeader
          badge={t.businesses.mediaSubheading}
          titlePrimary={t.businesses.mediaHeadingLead}
          titleSecondary={t.businesses.mediaHeadingAccent}
          subtitle={t.businesses.mediaDesc}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.businesses.mediaCards.map((card) => (
            <div key={card.title} className="card">
              <Icon name={card.icon} size={26} color="#b12600" />
              <h3 className="display display--card card__title">{card.title}</h3>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                {card.tag}
              </span>
              <p className="prose mt-4">{card.desc}</p>
              <ul className="mt-6 border-t border-[var(--color-line)] pt-4 text-[14px] leading-[1.7] text-[var(--color-muted)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon name="check_circle" size={15} color="#b12600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="platform-row">
          <span>{t.businesses.ourPlatform}:</span>
          <div className="flex flex-wrap gap-4">
            {['share', 'videocam', 'music_note', 'podcasts', 'article'].map((icon) => (
              <Icon key={icon} name={icon} size={20} color="#6b665f" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessesMedia;
