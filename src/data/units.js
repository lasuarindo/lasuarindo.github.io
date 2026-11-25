/**
 * T46 business ecosystem catalogue. Names, categories and icons are facts
 * (fact-register F13–F15). Overview and capabilities are the temporary
 * illustrative content recorded in drafts.md §E (C1/N6) — use the values,
 * never render the document marker.
 *
 * Public whitelist: slug, sector, ecosystem, name, category, icon, desc,
 * overview, capabilities, status. `status: 'draft'` marks the temporary overview and
 * capabilities. Internal staff and contract fields are deliberately absent.
 */

export const unitCategories = [
  {
    key: 'managed',
    label: { id: 'Dikelola Langsung', en: 'Directly Managed' },
    units: [
      {
        slug: 'pro',
        sector: 'investment',
        ecosystem: 't46',
        status: 'draft',
        name: 'PRO',
        category: 'managed',
        icon: 'trending_up',
        desc: { id: 'Investasi & kepemilikan bisnis.', en: 'Investment & business ownership.' },
        overview: {
          id: 'PRO mengelola investasi dan kepemilikan bisnis dalam grup.',
          en: "PRO manages the group's investments and business ownership.",
        },
        capabilities: [
          { id: 'Investasi strategis', en: 'Strategic investments' },
          { id: 'Pengelolaan aset', en: 'Asset management' },
        ],
      },
      {
        slug: 'win',
        sector: 'property',
        ecosystem: 't46',
        status: 'draft',
        name: 'WIN',
        category: 'managed',
        icon: 'domain',
        desc: { id: 'Pengelolaan kawasan & fasilitas T46.', en: 'T46 area & facility management.' },
        overview: {
          id: 'WIN mengelola kawasan dan fasilitas T46, termasuk keamanan dan hubungan dengan tenant.',
          en: 'WIN manages the T46 district and its facilities, including security and tenant relations.',
        },
        capabilities: [
          { id: 'Manajemen kawasan', en: 'District management' },
          { id: 'Manajemen fasilitas', en: 'Facility management' },
        ],
      },
      {
        slug: 'agt',
        sector: 'technology',
        ecosystem: 't46',
        status: 'draft',
        name: 'AGT',
        category: 'managed',
        icon: 'shield',
        desc: {
          id: 'Teknologi & perlindungan anti-pemalsuan.',
          en: 'Technology & anti-counterfeiting solutions.',
        },
        overview: {
          id: 'AGT mengembangkan teknologi perlindungan produk dari pemalsuan.',
          en: 'AGT develops technology that protects products from counterfeiting.',
        },
        capabilities: [
          { id: 'Verifikasi digital', en: 'Digital verification' },
          { id: 'Perlindungan merek', en: 'Brand protection' },
        ],
      },
      {
        slug: 'idr',
        sector: 'food',
        ecosystem: 't46',
        status: 'draft',
        name: 'IDR',
        category: 'managed',
        icon: 'storefront',
        desc: {
          id: 'Pengelolaan food court & tenant kuliner.',
          en: 'Food court & culinary tenant management.',
        },
        overview: {
          id: 'IDR mengelola food court dan tenant kuliner di kawasan T46.',
          en: 'IDR manages the food court and culinary tenants in T46.',
        },
        capabilities: [
          { id: 'Manajemen tenant', en: 'Tenant management' },
          { id: 'Operasional food court', en: 'Food court operations' },
        ],
      },
      {
        slug: 'lazura-koffie',
        sector: 'food',
        ecosystem: 't46',
        status: 'draft',
        name: 'Lazura Koffie',
        category: 'managed',
        icon: 'coffee',
        desc: { id: 'Operasional kopi & F&B.', en: 'Coffee & F&B operations.' },
        overview: {
          id: 'Lazura Koffie menjalankan operasional kafe dan layanan F&B.',
          en: 'Lazura Koffie runs café operations and F&B service.',
        },
        capabilities: [
          { id: 'Operasional kafe', en: 'Café operations' },
          { id: 'Layanan pelanggan', en: 'Customer service' },
        ],
      },
      {
        slug: 'asyihan',
        sector: 'food',
        ecosystem: 't46',
        status: 'draft',
        name: 'Asyihan',
        category: 'managed',
        icon: 'spray_can',
        desc: { id: 'Brand parfum & fragrance.', en: 'Perfume & fragrance brand.' },
        overview: {
          id: 'Asyihan mengembangkan produk parfum dan membangun mereknya.',
          en: 'Asyihan develops perfume products and builds its brand.',
        },
        capabilities: [
          { id: 'Pengembangan produk', en: 'Product development' },
          { id: 'Distribusi brand', en: 'Brand distribution' },
        ],
      },
    ],
  },
  {
    key: 'partnership',
    label: { id: 'Kemitraan', en: 'Partnerships' },
    units: [
      {
        slug: 'vps-vamos-padelon',
        sector: 'lifestyle',
        ecosystem: 't46',
        status: 'draft',
        name: 'VPS — Vamos Padelon',
        category: 'partnership',
        icon: 'sports_tennis',
        desc: { id: 'Olahraga padel & gaya hidup.', en: 'Padel sports & lifestyle.' },
        overview: {
          id: 'VPS menyelenggarakan lapangan padel dan kegiatan gaya hidup di T46.',
          en: 'VPS operates padel courts and lifestyle activities in T46.',
        },
        capabilities: [
          { id: 'Lapangan padel', en: 'Padel courts' },
          { id: 'Event komunitas', en: 'Community events' },
        ],
      },
      {
        slug: 'bmg-royal-hd-mahjong',
        sector: 'lifestyle',
        ecosystem: 't46',
        status: 'draft',
        name: 'BMG — Royal HD Mahjong',
        category: 'partnership',
        icon: 'gamepad_2',
        desc: {
          id: 'Hiburan & permainan premium.',
          en: 'Entertainment & premium gaming.',
        },
        overview: {
          id: 'BMG menghadirkan hiburan mahjong premium di kawasan T46.',
          en: 'BMG offers premium mahjong entertainment in T46.',
        },
        capabilities: [
          { id: 'Hiburan premium', en: 'Premium entertainment' },
          { id: 'Keanggotaan', en: 'Membership' },
        ],
      },
    ],
  },
  {
    key: 'spaces',
    label: { id: 'Ekosistem Kawasan', en: 'District Ecosystem' },
    units: [
      {
        slug: 'bizencio-business-hub',
        sector: 'property',
        ecosystem: 't46',
        status: 'draft',
        name: 'Bizencio Business Hub',
        category: 'spaces',
        icon: 'work',
        desc: { id: 'Business hub & creative space.', en: 'Business hub & creative space.' },
        overview: {
          id: 'Bizencio menyediakan ruang kerja dan ruang kreatif untuk bisnis.',
          en: 'Bizencio provides working space and creative space for businesses.',
        },
        capabilities: [
          { id: 'Ruang kerja kreatif', en: 'Creative workspace' },
          { id: 'Fasilitas pertemuan', en: 'Meeting facilities' },
        ],
      },
      {
        slug: 'sare',
        sector: 'lifestyle',
        ecosystem: 't46',
        status: 'draft',
        name: 'SARE',
        category: 'spaces',
        icon: 'sparkles',
        desc: { id: 'Beauty & personal care.', en: 'Beauty & personal care.' },
        overview: {
          id: 'SARE menyediakan layanan beauty dan perawatan diri.',
          en: 'SARE provides beauty and personal care services.',
        },
        capabilities: [
          { id: 'Perawatan kecantikan', en: 'Beauty treatments' },
          { id: 'Produk personal care', en: 'Personal care products' },
        ],
      },
      {
        slug: 'cuanmie',
        sector: 'food',
        ecosystem: 't46',
        status: 'draft',
        name: 'Cuanmie',
        category: 'spaces',
        icon: 'restaurant',
        desc: { id: 'Food & beverage — mie yamin.', en: 'Food & beverage — mie yamin.' },
        overview: {
          id: 'Cuanmie menyajikan mie yamin sebagai bagian dari pilihan F&B di T46.',
          en: "Cuanmie serves mie yamin as part of T46's F&B offering.",
        },
        capabilities: [
          { id: 'Mie yamin', en: 'Mie yamin' },
          { id: 'Layanan F&B', en: 'F&B service' },
        ],
      },
      {
        slug: 'saa',
        sector: 'property',
        ecosystem: 't46',
        status: 'draft',
        name: 'SAA',
        category: 'spaces',
        icon: 'local_parking',
        desc: { id: 'Pengelolaan parkir & valet.', en: 'Parking & valet management.' },
        overview: {
          id: 'SAA mengelola layanan parkir dan valet di kawasan T46.',
          en: 'SAA manages parking and valet services in T46.',
        },
        capabilities: [
          { id: 'Pengelolaan parkir', en: 'Parking management' },
          { id: 'Layanan valet', en: 'Valet service' },
        ],
      },
    ],
  },
];

/** All 12 units as one flat list, in the public order above. */
export const units = unitCategories.flatMap((category) => category.units);

/** Returns undefined for an unknown slug so the page can render <NotFound />. */
export function getUnitBySlug(slug) {
  return units.find((unit) => unit.slug === slug);
}

export function getUnitCategory(categoryKey) {
  return unitCategories.find((category) => category.key === categoryKey);
}

export default unitCategories;
