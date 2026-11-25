import React, { useEffect, useState } from 'react';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/ui/Icon';

export function BackToTop({ showOffset = 400 }) {
  const t = useStrings({ id: idCommon, en: enCommon });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`back-to-top-wrapper fixed bottom-8 right-8 z-[90] transition-[opacity,transform,translate] duration-300 ease-[ease] ${visible ? 'visible pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t.footer.backToTop}
        className="btn btn--solid h-12 w-12 px-0"
      >
        <Icon name="keyboard-arrow-up" size={24} color="#ffffff" />
      </button>
    </div>
  );
}

export default BackToTop;
