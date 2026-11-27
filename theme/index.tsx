import type { Feature, SocialLink as ISocialLink } from '@rspress/core';
import '@rspress/core/dist/theme/components/SocialLinks/index.css';
import { useFrontmatter, useSite, socialLinks as socialLinkIcons } from '@rspress/core/runtime';
import { Link } from '@rspress/core/theme-original';

type HeroCopy = {
  name?: string;
  text?: string;
  tagline?: string;
  actions?: { text: string; link: string }[];
};

/**
 * The home is a masthead followed by one numbered index, not a centred hero
 * with six emoji cards. All copy still comes from docs/index.md front matter.
 */
export function HomeHero() {
  const { frontmatter } = useFrontmatter();
  const hero = (frontmatter?.hero ?? {}) as HeroCopy;
  const [primary, secondary] = hero.actions ?? [];

  return (
    <section className="docs-hero">
      <div className="docs-hero__inner">
        <div className="docs-hero__meta">
          <span className="docs-hero__rule" aria-hidden="true" />
          <span>Documentation</span>
          <span aria-hidden="true">·</span>
          <span>Four sections</span>
        </div>
        <h1 className="docs-hero__title">{hero.name}</h1>
        <p className="docs-hero__lead">{hero.text}</p>
        <p className="docs-hero__tagline">{hero.tagline}</p>
        <div className="docs-hero__actions">
          {primary ? (
            <Link href={primary.link} className="docs-hero__cta">
              {primary.text}
            </Link>
          ) : null}
          {secondary ? (
            <Link href={secondary.link} className="docs-hero__link">
              {secondary.text}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function HomeFeature({ features: featuresProp }: { features?: Feature[] }) {
  const { frontmatter } = useFrontmatter();
  const features = featuresProp ?? (frontmatter?.features as Feature[] | undefined) ?? [];

  return (
    <section className="docs-index">
      <div className="docs-index__head">
        <span className="docs-index__eyebrow">Where to go</span>
        <h2 className="docs-index__title">Read the part that fits.</h2>
      </div>
      <ol className="docs-index__list">
        {features.map((feature, index) => (
          <li className="docs-index__row" key={feature.title}>
            <Link href={feature.link ?? '/'} className="docs-index__link">
              <span className="docs-index__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="docs-index__name">{feature.title}</span>
              <span className="docs-index__detail">{feature.details}</span>
              <span className="docs-index__arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
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
