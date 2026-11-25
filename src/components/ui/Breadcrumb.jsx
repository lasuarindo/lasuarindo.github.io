import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { CONTAINER } from '@/constants/layout';
import { Icon } from '@/components/ui/Icon';

/**
 * Breadcrumb for nested routes. The final item is plain text with
 * aria-current="page"; every earlier item is a real link.
 */
export function Breadcrumb({ items }) {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <nav aria-label={t.nav.breadcrumb} className={`${CONTAINER} pt-[104px]`}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0 font-[var(--font-body)] text-[12px] leading-[18px] text-[var(--color-secondary)]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {idx > 0 && <Icon name="chevron_right" size={13} color="#907068" />}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-[var(--color-primary)]">{item.label}</span>
              ) : (
                <Link to={item.to} className="text-[var(--color-secondary)] no-underline underline-offset-2 hover:text-[var(--color-primary)] hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
