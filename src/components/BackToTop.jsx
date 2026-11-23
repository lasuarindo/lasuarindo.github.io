import React, { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';

export function BackToTop({ showOffset = 400 }) {
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
        aria-label="Kembali ke atas"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[24px] border-0 bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[0_4px_15px_rgba(177,38,0,0.35)] transition-[transform,translate,scale,background-color] duration-200 ease-[ease] hover:-translate-y-0.5 hover:scale-105 hover:bg-[var(--color-on-primary-fixed-variant)]"
      >
        <Icon name="keyboard-arrow-up" size={28} color="#ffffff" />
      </button>
    </div>
  );
}
