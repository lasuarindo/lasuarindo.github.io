import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@/components/ui/Icon';
import { CONTAINER } from '@/constants/layout';

/** One question plus a link to the full FAQ — never a duplicate of /faq. */
export function FaqTeaser({ title, text, button }) {
  return (
    <section className="section section--tight section--paper">
      <div className={CONTAINER}>
        <div className="faq-teaser">
          <div>
            <div className="rule" />
            <h2 className="display display--card">{title}</h2>
            <p className="prose">{text}</p>
          </div>
          <Link to="/faq" className="btn btn--outline">
            <span>{button}</span>
            <Icon name="arrow_forward" size={16} color="#b12600" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FaqTeaser;
