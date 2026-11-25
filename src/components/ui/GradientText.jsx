import React from 'react';

/**
 * Kept for callers on dark heroes. The old gradient fill failed contrast
 * auditing, so the accent is now a single solid, accessible token.
 */
export function GradientText({ children, style = {}, reverse = false, className = '' }) {
  return (
    <span className={`${reverse ? 'text-gradient-reverse' : 'text-gradient'} ${className}`.trim()} style={style}>
      {children}
    </span>
  );
}

export default GradientText;
