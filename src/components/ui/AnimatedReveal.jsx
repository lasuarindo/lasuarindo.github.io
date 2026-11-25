import React from 'react';

/**
 * A single on-load entrance — never a scroll-linked reveal. One page deals
 * this moment once; cards only answer the pointer. CSS owns the motion so
 * prefers-reduced-motion can turn it all off in one place.
 */
export function AnimatedReveal({
  children,
  animation: _animation = 'up',
  delay = 0,
  hover = 'none',
  style = {},
  className = '',
  disabled = false,
  ...props
}) {
  const hoverClass =
    hover === 'lift' ? 'hover-lift' : hover === 'scale' ? 'hover-scale' : '';

  return (
    <div
      className={`${disabled ? '' : 'enter-once'} ${hoverClass} ${className}`.trim()}
      style={{
        animationDelay: delay ? `${Math.min(delay, 240)}ms` : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function FadeInView({ children, delay = 0, animation: _animation = 'up', style = {}, className = '', ...props }) {
  return (
    <AnimatedReveal delay={delay} style={style} className={className} {...props}>
      {children}
    </AnimatedReveal>
  );
}
