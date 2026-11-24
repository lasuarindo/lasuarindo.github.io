import React from 'react';

/**
 * Small brand divider shared by page sections. `center` matches the centered
 * section headings, otherwise the divider is left-aligned.
 */
export function GradientDivider({ center = false, className = '' }) {
  return (
    <div
      className={`mb-5 h-1 w-16 rounded-[2px] bg-[linear-gradient(to_right,#b12600,#ffb68b)] ${
        center ? 'mx-auto' : ''
      } ${className}`.trim()}
    />
  );
}

export default GradientDivider;
