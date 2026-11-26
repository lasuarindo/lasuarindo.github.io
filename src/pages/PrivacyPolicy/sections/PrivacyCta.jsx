import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { paths } from '@/app/paths';

/** Flat closing band with a single route to /contact via paths.contact. */
export function PrivacyCta({ text, buttonText }) {
  return (
    <div className="bg-[var(--color-ink)] px-6 py-12 md:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 max-w-[46ch] font-[var(--font-body)] text-[15px] leading-[1.7] text-[#c9c6c0]">
          {text}
        </p>
        <Link to={paths.contact} className="btn btn--solid shrink-0">
          <span>{buttonText}</span>
          <Icon name="arrow_forward" size={18} color="#ffffff" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default PrivacyCta;
