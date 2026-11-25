import React from 'react';

/**
 * Kept for callers that still use it; now renders the single editorial rule
 * instead of the old two-colour gradient bar.
 */
export function GradientDivider({ center = false, className = '' }) {
  return (
    <div
      className={`rule ${center ? 'rule--center' : ''} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default GradientDivider;
