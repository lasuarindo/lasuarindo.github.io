import React, { useEffect, useRef, useState } from 'react';

export function AnimatedReveal({
  children,
  animation = 'up',
  delay = 0,
  hover = 'none',
  style = {},
  className = '',
}) {
  const [revealed, setRevealed] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const el = domRef.current;
    if (!el) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '60px' }
    );

    observer.observe(el);
    return () => {
      try {
        observer.disconnect();
      } catch {
        // ignore
      }
    };
  }, []);

  const animationClass =
    animation === 'up'
      ? 'reveal'
      : animation === 'left'
      ? 'reveal-left'
      : animation === 'right'
      ? 'reveal-right'
      : animation === 'scale'
      ? 'reveal-scale'
      : animation === 'fade'
      ? 'reveal-fade'
      : 'reveal';

  const hoverClass =
    hover === 'lift'
      ? 'hover-lift'
      : hover === 'scale'
      ? 'hover-scale'
      : '';

  return (
    <div
      ref={domRef}
      className={`${animationClass} ${revealed ? 'revealed' : ''} ${hoverClass} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function FadeInView({ children, delay = 0, animation = 'up', style = {}, className = '' }) {
  return (
    <AnimatedReveal animation={animation} delay={delay} style={style} className={className}>
      {children}
    </AnimatedReveal>
  );
}
