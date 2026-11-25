import React from 'react';
import { Link } from 'react-router';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';
import { Icon } from '@/components/ui/Icon';

/**
 * Breadcrumb for nested routes. The final item is plain text with
 * aria-current="page"; every earlier item is a real link.
 */
export function Breadcrumb({ items }) {
  const t = useStrings({ id: idCommon, en: enCommon });

  return (
    <nav aria-label={t.nav.breadcrumb} className="breadcrumb-bar">
      <ol className="breadcrumb-list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label}>
              {idx > 0 ? <Icon name="chevron_right" size={13} color="#907068" aria-hidden="true" /> : null}
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
