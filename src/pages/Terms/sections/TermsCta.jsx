import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { paths } from '@/app/paths';

/** One closing action, using the shared editorial button. */
export function TermsCta({ text, buttonText }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band__inner">
        <p className="lead lead--light">{text}</p>
        <Link to={paths.contact} className="btn btn--solid">
          {buttonText}
          <Icon name="arrow_forward" size={18} color="#ffffff" />
        </Link>
      </div>
    </section>
  );
}

export default TermsCta;
