import React from 'react';
import { Icon } from '@/components/ui/Icon';

/** Note distinguished by a brand left rule, not a tinted panel. */
export function PrivacyCallout({ icon = 'info', children }) {
  return (
    <div className="rounded-r-[2px] border-l-2 border-[var(--color-primary)] bg-white py-1 pl-5">
      <div className="flex items-start gap-3">
        <Icon
          name={icon}
          size={18}
          color="#b12600"
          className="mt-[3px] shrink-0"
          aria-hidden="true"
        />
        <div className="min-w-0 font-[var(--font-body)] text-[15px] leading-[1.7] text-[var(--color-ink)]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PrivacyCallout;
