import type { Feature, SocialLink as ISocialLink } from '@rspress/core';
import '@rspress/core/dist/theme/components/HomeFeature/index.css';
import '@rspress/core/dist/theme/components/SocialLinks/index.css';
import { socialLinks as socialLinkIcons, useFrontmatter, useSite } from '@rspress/core/runtime';
import {
  HomeLayout as BasicHomeLayout,
  renderHtmlOrText,
  SvgWrapper,
} from '@rspress/core/theme-original';

/**
 * Rspress renders the home hero without an h1 and the feature cards as clickable
 * <article> elements. These wrappers keep the built-in layout and styling but
 * give the page a heading order and real links.
 */
export function HomeLayout() {
  return (
    <BasicHomeLayout beforeHero={<h1 className="rp-visually-hidden">Lasuarindo Docs</h1>} />
  );
}

const gridClass = (feature: Feature): string => {
  switch (feature.span) {
    case 2:
      return 'rp-home-feature__item--span-2';
    case 3:
      return 'rp-home-feature__item--span-3';
    case 4:
      return 'rp-home-feature__item--span-4';
    case 6:
      return 'rp-home-feature__item--span-6';
    default:
      return 'rp-home-feature__item--span-4';
  }
};

function FeatureCard({ feature }: { feature: Feature }) {
  const { icon, title, details, link } = feature;
  const body = (
    <>
      <div className="rp-home-feature__title-wrapper">
        {icon ? (
          <div className="rp-home-feature__icon">
            <SvgWrapper icon={icon} />
          </div>
        ) : null}
        <h2 className="rp-home-feature__title">{title}</h2>
      </div>
      <p className="rp-home-feature__detail" {...renderHtmlOrText(details)} />
    </>
  );

  return (
    <div className={`rp-home-feature__item ${gridClass(feature)}`}>
      <div className="rp-home-feature__item-wrapper">
        {link ? (
          <a className="rp-home-feature__card rp-home-feature__card--clickable" href={link}>
            {body}
          </a>
        ) : (
          <div className="rp-home-feature__card">{body}</div>
        )}
      </div>
    </div>
  );
}

export function HomeFeature({ features: featuresProp }: { features?: Feature[] }) {
  const { frontmatter } = useFrontmatter();
  const features = featuresProp ?? frontmatter?.features;

  return (
    <div className="rp-home-feature">
      {features?.map(feature => <FeatureCard key={feature.title} feature={feature} />)}
    </div>
  );
}

/** The GitHub icon link needs an accessible name; Rspress omits one by default. */
export function SocialLinks({ socialLinks: linksProp }: { socialLinks?: ISocialLink[] }) {
  const { site } = useSite();
  const links = site.themeConfig.socialLinks || linksProp || [];

  return (
    <div className="rp-social-links">
      {links.map(link => {
        const { icon, content } = link;
        const html = typeof icon === 'string' ? socialLinkIcons[icon] : icon?.svg;
        const label = typeof icon === 'string' ? icon : 'Social link';
        return (
          <a
            key={content}
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            className="rp-social-links__item"
            aria-label={`${label} (opens in a new tab)`}
          >
            <div className="rp-social-links__icon" dangerouslySetInnerHTML={{ __html: html ?? '' }} />
          </a>
        );
      })}
    </div>
  );
}

// oxlint-disable-next-line react/only-export-components -- Rspress requires this star re-export for ESM overrides.
export * from '@rspress/core/theme-original';
