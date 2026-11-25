/**
 * Single source of truth for every internal destination.
 *
 * Components never write a route string inline: they use a key from `paths`
 * or a builder from `routePaths`. The route table, navigation data, and page
 * links all read from here, so changing a path never needs a scavenger hunt.
 */

export const paths = {
  home: '/',
  about: '/about-us',
  vision: '/about-us#visi',
  businesses: '/businesses',
  ecosystems: '/ecosystems',
  units: '/units',
  licence: '/licence',
  contact: '/contact',
  faq: '/faq',
  legal: '/legal',
  privacy: '/legal/privacy-policy',
  terms: '/legal/term-condition',

  // Engagement topics — merged here from the old navigation-only map.
  partnership: '/partnership',
  investor: '/investor',
  collaboration: '/collaboration',
};

export const routePaths = {
  ecosystem: (key) => `${paths.ecosystems}/${key}`,
  t46: () => routePaths.ecosystem('t46'),
  unit: (slug) => `${paths.units}/${slug}`,
  contactIntent: (intent) => `${paths.contact}?intent=${intent}`,
};

/** Key -> path + intent + locale label, used by journey links and engagement pages. */
export const engagementLinks = {
  partnership: {
    labelKey: 'engagement.partnership',
    to: paths.partnership,
    intent: 'partnership',
  },
  investor: {
    labelKey: 'engagement.investor',
    to: paths.investor,
    intent: 'investor',
  },
  collaboration: {
    labelKey: 'engagement.collaboration',
    to: paths.collaboration,
    intent: 'collaboration',
  },
};

export default paths;
