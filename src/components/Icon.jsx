import React from 'react';

export function Icon({ name, size = 24, color = 'currentColor', className = '', style = {} }) {
  if (!name) return null;
  let iconName = String(name).replace(/-/g, '_');

  // Map legacy Material Icon outline suffixes to Material Symbols standard names
  const ICON_MAP = {
    play_circle_outline: 'play_circle',
    play_circle_filled: 'play_circle',
    help_outline: 'help',
    info_outline: 'info',
    lightbulb_outline: 'lightbulb',
    error_outline: 'error',
    check_circle_outline: 'check_circle',
    highlight_off: 'cancel',
  };

  if (ICON_MAP[iconName]) {
    iconName = ICON_MAP[iconName];
  }

  return (
    <span
      className={`material-symbols-outlined material-icons ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        verticalAlign: 'middle',
        userSelect: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      {iconName}
    </span>
  );
}
