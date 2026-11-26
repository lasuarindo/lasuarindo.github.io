import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { paths } from '@/app/paths';

/** The same breadcrumb sits at the top of every themed dossier. */
export function UnitBreadcrumb({ unit, common }) {
  return (
    <Breadcrumb
      inside
      items={[
        { label: common.nav.home, to: paths.home },
        { label: common.nav.units, to: paths.units },
        { label: unit.name },
      ]}
    />
  );
}

/** Decorative group imagery; `priority` is used only for the hero frame. */
export function UnitFigure({ image, className = '', priority = false }) {
  return (
    <figure className={`figure ${className}`.trim()}>
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </figure>
  );
}
