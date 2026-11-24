import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { Colors } from '@/constants/theme';

/** Five-star rating mark used next to the founder and commissioner names. */
export function Stars({ size = 14, color = Colors.primary }) {
  return (
    <div className="flex flex-row gap-[2px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <Icon key={s} name="star" size={size} color={color} />
      ))}
    </div>
  );
}

export default Stars;
