import React from 'react';

export function GradientText({ children, style = {}, reverse = false, className = '' }) {
  const gradientClass = reverse
    ? 'bg-[linear-gradient(135deg,#ffb68b_0%,#b12600_100%)]'
    : 'bg-[linear-gradient(135deg,#b12600_0%,#ffb68b_100%)]';

  return (
    <span
      className={`text-gradient inline-block bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ${gradientClass} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
