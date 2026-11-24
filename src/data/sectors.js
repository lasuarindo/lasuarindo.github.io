/**
 * Shared sector catalogue for the Home page ecosystem grid and the Footer.
 * Localized fields use { id, en } objects — pick with `localized()` from
 * `@/utils/localized`.
 *
 * This is the single source of truth for the seven business sectors, so adding
 * or renaming a sector only touches this file.
 */

export const sectors = [
  {
    key: 'property',
    icon: 'domain',
    delay: 100,
    title: { id: 'PROPERTI', en: 'PROPERTY' },
    desc: {
      id: 'Mengembangkan properti berkualitas dengan desain modern dan nilai investasi yang berkelanjutan.',
      en: 'Developing quality properties with modern design and sustainable investment value.',
    },
  },
  {
    key: 'investment',
    icon: 'trending_up',
    delay: 200,
    title: { id: 'INVESTASI', en: 'INVESTMENT' },
    desc: {
      id: 'Berinvestasi pada peluang strategis untuk mendorong pertumbuhan dan nilai jangka panjang.',
      en: 'Investing in strategic opportunities to drive growth and long-term value creation.',
    },
  },
  {
    key: 'technology',
    icon: 'memory',
    delay: 300,
    highlight: true,
    title: { id: 'TEKNOLOGI', en: 'TECHNOLOGY' },
    desc: {
      id: 'Mendorong inovasi melalui teknologi digital untuk solusi yang cerdas, aman, dan berkelanjutan.',
      en: 'Driving innovation through digital technology for smart, secure, and sustainable solutions.',
    },
  },
  {
    key: 'commerce',
    icon: 'language',
    delay: 400,
    title: { id: 'PERDAGANGAN', en: 'COMMERCE' },
    desc: {
      id: 'Menjalin perdagangan yang efisien, terpercaya, dan berdaya saing di pasar domestik maupun global.',
      en: 'Building efficient, trusted, and competitive commerce in domestic and global markets.',
    },
  },
  {
    key: 'creative',
    icon: 'emoji_objects',
    delay: 100,
    title: { id: 'KREATIF', en: 'CREATIVE' },
    desc: {
      id: 'Menciptakan ide, konsep, dan karya kreatif yang memberi inspirasi dan menciptakan nilai baru.',
      en: 'Generating ideas, concepts, and creative works that inspire and create new value.',
    },
  },
  {
    key: 'media',
    icon: 'play_circle',
    delay: 200,
    title: { id: 'MEDIA', en: 'MEDIA' },
    desc: {
      id: 'Menyampaikan pesan, cerita, dan informasi melalui media yang relevan, inspiratif, dan berdampak.',
      en: 'Delivering stories, messages, and information through relevant, inspiring, and impactful media.',
    },
  },
  {
    key: 'tourism',
    icon: 'flight_takeoff',
    delay: 300,
    title: { id: 'PARIWISATA', en: 'TOURISM' },
    desc: {
      id: 'Mengembangkan destinasi dan pengalaman wisata terbaik yang mempromosikan keindahan.',
      en: 'Developing premier destinations and travel experiences that promote beauty and culture.',
    },
  },
];
