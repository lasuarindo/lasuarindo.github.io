import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';

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
      className={`back-to-top-wrapper ${visible ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '24px',
          backgroundColor: '#b12600',
          color: '#ffffff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(177, 38, 0, 0.35)',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
          e.currentTarget.style.backgroundColor = '#8a1b00';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.backgroundColor = '#b12600';
        }}
      >
        <Icon name="keyboard-arrow-up" size={28} color="#ffffff" />
      </button>
    </div>
  );
}
