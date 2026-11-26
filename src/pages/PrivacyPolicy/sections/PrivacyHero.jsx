import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { usePrivacyStrings } from '../usePrivacyStrings';

/**
 * Dark editorial cover: solid rules, one type scale, no blur or gradient.
 * Generous top padding keeps the h1 clear of the sticky header.
 */
export function PrivacyHero() {
  const t = usePrivacyStrings();
  const count = t.privacy.toc.length;

  return (
    <section className="bg-[var(--color-ink)] pb-16 pt-32 text-[#f7f5f1] md:pb-24 md:pt-40">
      <div className="wrap">
        <div className="max-w-[860px]">
          <span className="eyebrow eyebrow--light enter-once">{t.privacy.documentLabel}</span>
          <h1
            className="display display--hero display--light enter-once"
            style={{ animationDelay: '60ms' }}
          >
            {t.privacy.heroTitle1}
            <br />
            <span className="text-[var(--color-primary-fixed-dim)]">{t.privacy.heroTitle2}</span>
          </h1>
          <div
            className="rule rule--light enter-once"
            style={{ animationDelay: '120ms' }}
            aria-hidden="true"
          />
          <p
            className="lead lead--light enter-once max-w-[62ch]"
            style={{ animationDelay: '160ms' }}
          >
            {t.privacy.heroSubtitle}
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/20 pt-5">
            <li className="flex items-center gap-2.5">
              <Icon name="schedule" size={16} color="#ffb4a3" aria-hidden="true" />
              <span className="font-[var(--font-body)] text-[13px] text-[#c9c6c0]">
                {t.privacy.lastUpdated} {t.privacy.lastUpdatedDate}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="description" size={16} color="#ffb4a3" aria-hidden="true" />
              <span className="font-[var(--font-body)] text-[13px] text-[#c9c6c0]">
                {count} {t.privacy.partsLabel}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PrivacyHero;
