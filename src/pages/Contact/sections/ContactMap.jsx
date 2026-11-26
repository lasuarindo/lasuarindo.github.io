import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTAINER } from '@/constants/layout';
import { formatAddress } from '@/data/company';
import { useContactStrings } from '../useContactStrings';

export function ContactMap() {
  const t = useContactStrings();
  // Built from the approved company address — no copied house number,
  // postcode or coordinates in the component.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    formatAddress({ includeCountry: true })
  )}&output=embed`;

  return (
    <section className="section section--neutral">
      <div className={CONTAINER}>
        <AnimatedReveal>
          <SectionHeader
            titlePrimary={t.contact.locationHeading1}
            titleSecondary={t.contact.locationHeading2}
          />
          <div className="overflow-hidden rounded-[2px] border border-[var(--color-line)] bg-white">
            <iframe
              src={mapSrc}
              className="block h-[320px] w-full border-0 md:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.contact.mapTitle}
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ContactMap;
