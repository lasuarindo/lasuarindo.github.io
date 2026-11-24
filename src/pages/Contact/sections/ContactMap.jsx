import React from 'react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { GradientDivider } from '@/components/ui/GradientDivider';
import { useResponsive } from '@/hooks/useResponsive';
import { CONTAINER } from '@/constants/layout';
import { useContactStrings } from '../useContactStrings';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7983637172087!2d107.6119859!3d-6.9189088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6302dc3a29b%3A0x6002fef9a8f27807!2sJl.%20Tamblong%20No.46%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040112!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid';

export function ContactMap() {
  const { isMobile } = useResponsive();
  const t = useContactStrings();

  return (
    <section className="bg-[var(--color-surface-container-low)] py-20">
      <div className={CONTAINER}>
        <AnimatedReveal animation="up" delay={0}>
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-[var(--font-display)] text-[30px] font-bold text-[var(--color-on-background)] md:text-[40px]">{t.contact.locationHeading1}<span className="text-[var(--color-primary)]">{t.contact.locationHeading2}</span></h2>
            <GradientDivider center />
          </div>
          <div className="h-[450px] overflow-hidden rounded-2xl border border-[rgba(228,190,181,0.3)] bg-white shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)] max-[767px]:h-[320px]">
            <iframe src={MAP_EMBED_URL} width="100%" height={isMobile ? '320' : '450'} className="block border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Kantor Lasuarindo Group" />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default ContactMap;
