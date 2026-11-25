import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { useStrings } from '@/i18n/useStrings';
import idCommon from '@/i18n/locales/id/common.json';
import enCommon from '@/i18n/locales/en/common.json';

/**
 * A compact, swipe-friendly image frame. One image is visible at a time, so
 * a long photo stack never runs past its neighbouring copy. Kept for future
 * use on image-led sections.
 */
export function ImageCarousel({ images, className = '' }) {
  const t = useStrings({ id: idCommon, en: enCommon });
  const [index, setIndex] = useState(0);
  const count = images.length;
  if (!count) return null;

  const go = (step) => setIndex((current) => (current + step + count) % count);

  return (
    <div className={`carousel ${className}`.trim()}>
      <div className="carousel__frame figure" aria-live="polite">
        {images.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt={i === index ? image.alt : ''}
            width={image.width || 1200}
            height={image.height || 900}
            loading="lazy"
            decoding="async"
            className={i === index ? 'is-active' : ''}
            aria-hidden={i === index ? undefined : 'true'}
          />
        ))}
      </div>
      {count > 1 ? (
        <div className="carousel__controls">
          <button type="button" onClick={() => go(-1)} aria-label={t.carousel.previous} className="carousel__btn">
            <Icon name="chevron_left" size={20} color="#b12600" />
          </button>
          <div className="carousel__dots" role="group" aria-label={t.carousel.label}>
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`${t.carousel.goTo} ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className={`carousel__dot ${i === index ? 'is-active' : ''}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label={t.carousel.next} className="carousel__btn">
            <Icon name="chevron_right" size={20} color="#b12600" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ImageCarousel;
