/**
 * T46 business ecosystem catalogue. Names are proper nouns; descriptions and
 * category labels are translatable { id, en } fields. Public data only — no
 * PIC, headcount, contracts or authority matrix.
 */
export const unitCategories = [
  {
    key: 'managed',
    label: { id: 'Dikelola Langsung', en: 'Directly Managed' },
    units: [
      {
        name: 'PRO',
        icon: 'trending_up',
        desc: { id: 'Investasi & kepemilikan bisnis.', en: 'Investment & business ownership.' },
      },
      {
        name: 'WIN',
        icon: 'domain',
        desc: { id: 'Pengelolaan kawasan & fasilitas T46.', en: 'T46 area & facility management.' },
      },
      {
        name: 'AGT',
        icon: 'shield',
        desc: {
          id: 'Teknologi & perlindungan anti-pemalsuan.',
          en: 'Technology & anti-counterfeiting solutions.',
        },
      },
      {
        name: 'IDR',
        icon: 'storefront',
        desc: {
          id: 'Pengelolaan food court & tenant kuliner.',
          en: 'Food court & culinary tenant management.',
        },
      },
      {
        name: 'Lazura Koffie',
        icon: 'coffee',
        desc: { id: 'Operasional kopi & F&B.', en: 'Coffee & F&B operations.' },
      },
      {
        name: 'Asyihan',
        icon: 'spray_can',
        desc: { id: 'Brand parfum & fragrance.', en: 'Perfume & fragrance brand.' },
      },
    ],
  },
  {
    key: 'partnership',
    label: { id: 'Kemitraan', en: 'Partnerships' },
    units: [
      {
        name: 'VPS — Vamos Padelon',
        icon: 'sports_tennis',
        desc: { id: 'Olahraga padel & gaya hidup.', en: 'Padel sports & lifestyle.' },
      },
      {
        name: 'BMG — Royal HD Mahjong',
        icon: 'gamepad_2',
        desc: {
          id: 'Hiburan & permainan premium.',
          en: 'Entertainment & premium gaming.',
        },
      },
    ],
  },
  {
    key: 'spaces',
    label: { id: 'Ekosistem Kawasan', en: 'District Ecosystem' },
    units: [
      {
        name: 'Bizencio Business Hub',
        icon: 'work',
        desc: { id: 'Business hub & creative space.', en: 'Business hub & creative space.' },
      },
      {
        name: 'SARE',
        icon: 'sparkles',
        desc: { id: 'Beauty & personal care.', en: 'Beauty & personal care.' },
      },
      {
        name: 'Cuanmie',
        icon: 'restaurant',
        desc: { id: 'Food & beverage — mie yamin.', en: 'Food & beverage — mie yamin.' },
      },
      {
        name: 'SAA',
        icon: 'local_parking',
        desc: { id: 'Pengelolaan parkir & valet.', en: 'Parking & valet management.' },
      },
    ],
  },
];

export default unitCategories;