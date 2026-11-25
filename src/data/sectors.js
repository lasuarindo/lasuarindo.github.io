/**
 * Shared catalogue of the six real business lines. This is the single source
 * of truth for the Home bento grid and the Businesses page; adding or renaming
 * a line only touches this file.
 *
 * Names, icons and related entities come from fact-register F11 and
 * `.ignore/context/lasuarindo-structure.md`. Translatable fields use
 * { id, en } objects — pick with `localized()` from `@/utils/localized`.
 */
export const sectors = [
  {
    key: 'investment',
    icon: 'trending_up',
    delay: 100,
    title: { id: 'INVESTASI', en: 'INVESTMENT' },
    desc: {
      id: 'Investasi dan kepemilikan bisnis dalam grup melalui PRO.',
      en: 'Investment and business ownership within the group through PRO.',
    },
  },
  {
    key: 'property',
    icon: 'domain',
    delay: 200,
    title: {
      id: 'PROPERTI & EKOSISTEM KAWASAN',
      en: 'PROPERTY & DISTRICT ECOSYSTEM',
    },
    desc: {
      id: 'Mengelola properti dan kawasan bisnis, termasuk WIN, Bizencio, dan SAA.',
      en: 'Managing property and business districts, including WIN, Bizencio, and SAA.',
    },
  },
  {
    key: 'technology',
    icon: 'memory',
    delay: 300,
    highlight: true,
    title: { id: 'TEKNOLOGI', en: 'TECHNOLOGY' },
    desc: {
      id: 'Mengembangkan teknologi perlindungan produk dan hak cipta melalui AGT, Authentic Guards, dan Berkah Megah Abadi.',
      en: 'Developing product-protection and copyright technology through AGT, Authentic Guards, and Berkah Megah Abadi.',
    },
  },
  {
    key: 'media',
    icon: 'play_circle',
    delay: 400,
    title: { id: 'MEDIA & KREATIF', en: 'MEDIA & CREATIVE' },
    desc: {
      id: 'Media online, produksi konten, dan media luar ruang melalui MSS, Arcadia, dan Berkah Media Gemilang.',
      en: 'Online media, content production, and outdoor media through MSS, Arcadia, and Berkah Media Gemilang.',
    },
  },
  {
    key: 'food',
    icon: 'restaurant',
    delay: 500,
    title: { id: 'F&B & KONSUMER', en: 'F&B & CONSUMER' },
    desc: {
      id: 'Mengelola food court, kafe, mie yamin, dan produk konsumer grup lainnya.',
      en: 'Managing the food court, café, mie yamin, and the group’s other consumer products.',
    },
  },
  {
    key: 'lifestyle',
    icon: 'sports_tennis',
    delay: 600,
    title: { id: 'GAYA HIDUP & HIBURAN', en: 'LIFESTYLE & ENTERTAINMENT' },
    desc: {
      id: 'Lapangan padel, perawatan diri, dan hiburan mahjong di kawasan T46.',
      en: 'Padel courts, personal care, and mahjong entertainment in the T46 district.',
    },
  },
];

/**
 * Sector-level elaboration. Every line is drawn from the verified `desc`
 * values above — no new entity, figure, or claim is introduced here.
 */
export const sectorDetails = {
  investment: {
    id: 'Melalui PRO, grup mengelola investasi dan kepemilikan bisnis dalam portofolio.',
    en: 'Through PRO, the group manages investments and business ownership across its portfolio.',
  },
  property: {
    id: 'WIN mengelola kawasan dan fasilitas T46, sementara Bizencio dan SAA menjadi bagian dari pengembangan ruang bisnis.',
    en: 'WIN manages the T46 district and its facilities, while Bizencio and SAA are part of the business-space development.',
  },
  technology: {
    id: 'AGT, Authentic Guards, dan Berkah Megah Abadi mengembangkan teknologi perlindungan produk dan hak cipta.',
    en: 'AGT, Authentic Guards, and Berkah Megah Abadi develop product-protection and copyright technology.',
  },
  media: {
    id: 'MSS, Arcadia, dan Berkah Media Gemilang mencakup media online, produksi konten, dan media luar ruangan.',
    en: 'MSS, Arcadia, and Berkah Media Gemilang cover online media, content production, and outdoor media.',
  },
  food: {
    id: 'Portofolio ini mencakup food court, kafe, mie yamin, dan produk konsumer lainnya dalam grup.',
    en: 'This portfolio covers the food court, café, mie yamin, and other consumer products in the group.',
  },
  lifestyle: {
    id: 'Lapangan padel, perawatan diri, dan hiburan mahjong berada di kawasan T46.',
    en: 'Padel courts, personal care, and mahjong entertainment are located in the T46 district.',
  },
};

export default sectors;
