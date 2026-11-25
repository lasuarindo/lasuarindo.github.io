import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';

/**
 * One closing pattern for every main page: the same partnership invitation
 * and the same destination (/contact). Copy comes from each page's locale so
 * id/en stay independent, but the formula never changes.
 */
export function FinalCta({ title, text, button, to = '/contact' }) {
  return (
    <section className="cta-band">
      <div className={CONTAINER}>
        <div className="cta-band__inner">
          <div>
            <div className="rule rule--light" />
            <h2 className="display display--section">{title}</h2>
            <p className="lead">{text}</p>
          </div>
          <Link to={to} className="btn btn--solid">
            <span>{button}</span>
            <Icon name="arrow_forward" size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
