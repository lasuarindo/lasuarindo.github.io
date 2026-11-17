import React from 'react';

export function GradientText({ children, style = {}, reverse = false, className = '' }) {
  const gradient = reverse
    ? 'linear-gradient(135deg, #ffb68b 0%, #b12600 100%)'
    : 'linear-gradient(135deg, #b12600 0%, #ffb68b 100%)';

  return (
    <span
      className={`text-gradient ${className}`}
      style={{
        backgroundImage: gradient,
        WebkitBackgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
