/**
 * Per-route SEO metadata. Titles and descriptions are written per language
 * (no auto-translation). `index.html` keeps the Home values as the static
 * fallback for crawlers that do not run JavaScript.
 *
 * Routes follow the final IA: /businesses (the former /services path was
 * fully migrated and is no longer registered), /ecosystems (+ /ecosystems/t46),
 * /units (+ /units/:slug), /licence and the optional /legal index. Resolver
 * order matters: the more specific nested routes must be checked before
 * their parents.
 */
export const pageMeta = {
  home: {
    id: {
      title: 'Lasuarindo Group — Membangun Bisnis, Menciptakan Dampak',
      description:
        'Lasuarindo Group menginvestasi, memiliki, dan mengelola bisnis di enam lini usaha. Membangun Bisnis, Menciptakan Dampak di kawasan T46, Bandung.',
    },
    en: {
      title: 'Lasuarindo Group — Building Business, Creating Impact',
      description:
        'Lasuarindo Group invests in, owns, and manages businesses across six business lines. Building business, creating impact at T46, Bandung.',
    },
  },
  about: {
    id: {
      title: 'Tentang Kami — Lasuarindo Group',
      description:
        'Kenali visi, misi, nilai, dan kepemimpinan Lasuarindo Group serta ekosistem bisnis yang kami bangun di kawasan T46, Bandung.',
    },
    en: {
      title: 'About Us — Lasuarindo Group',
      description:
        'Discover the vision, mission, values, and leadership of Lasuarindo Group and the business ecosystem we build at T46, Bandung.',
    },
  },
  businesses: {
    id: {
      title: 'Bisnis Kami — Lasuarindo Group',
      description:
        'Lasuarindo Group menginvestasi, memiliki, dan mengelola bisnis di enam lini usaha: investasi, properti, teknologi, media, F&B, dan gaya hidup.',
    },
    en: {
      title: 'Our Businesses — Lasuarindo Group',
      description:
        'Lasuarindo Group invests in, owns, and manages businesses in six lines: investment, property, technology, media, F&B, and lifestyle.',
    },
  },
  ecosystems: {
    id: {
      title: 'Ekosistem — Lasuarindo Group',
      description:
        'Ekosistem Lasuarindo Group berpusat di kawasan T46, Bandung. Lihat kawasan kami dan unit-unit yang berjalan di dalamnya.',
    },
    en: {
      title: 'Ecosystems — Lasuarindo Group',
      description:
        'The Lasuarindo Group ecosystem centres on the T46 district in Bandung. Explore our district and the units operating within it.',
    },
  },
  t46: {
    id: {
      title: 'Kawasan T46 — Lasuarindo Group',
      description:
        'Kawasan T46 di Bandung adalah rumah bagi dua belas unit bisnis Lasuarindo Group dalam tiga kategori: dikelola langsung, kemitraan, dan ekosistem kawasan.',
    },
    en: {
      title: 'T46 District — Lasuarindo Group',
      description:
        'T46 in Bandung is home to twelve Lasuarindo Group business units in three categories: directly managed, partnerships, and district ecosystem.',
    },
  },
  units: {
    id: {
      title: 'Unit Kami — Lasuarindo Group',
      description:
        'Jelajahi dua belas unit bisnis Lasuarindo Group di kawasan T46, dari investasi dan properti hingga F&B, gaya hidup, dan hiburan.',
    },
    en: {
      title: 'Our Units — Lasuarindo Group',
      description:
        'Explore twelve Lasuarindo Group business units in the T46 district, from investment and property to F&B, lifestyle, and entertainment.',
    },
  },
  unit: {
    id: {
      title: 'Unit Bisnis — Lasuarindo Group',
      description: 'Unit bisnis dalam ekosistem Lasuarindo Group di kawasan T46, Bandung.',
    },
    en: {
      title: 'Business Unit — Lasuarindo Group',
      description: 'A business unit in the Lasuarindo Group ecosystem at T46, Bandung.',
    },
  },
  licence: {
    id: {
      title: 'Legalitas — Lasuarindo Group',
      description:
        'Informasi legalitas dasar PT Lasuarindo Group, termasuk Nomor Induk Berusaha (NIB) dan izin usaha terkait.',
    },
    en: {
      title: 'Licensing — Lasuarindo Group',
      description:
        'Basic licensing information for PT Lasuarindo Group, including its Business Identification Number (NIB) and related permits.',
    },
  },
  legal: {
    id: {
      title: 'Informasi Legal — Lasuarindo Group',
      description: 'Dokumen kebijakan privasi dan syarat serta ketentuan penggunaan situs Lasuarindo Group.',
    },
    en: {
      title: 'Legal Information — Lasuarindo Group',
      description: 'Privacy policy and terms and conditions for using the Lasuarindo Group website.',
    },
  },
  contact: {
    id: {
      title: 'Kontak — Lasuarindo Group',
      description:
        'Punya pertanyaan atau ingin bermitra? Tim kami siap berdiskusi dan membantu mewujudkan kolaborasi terbaik bersama Anda.',
    },
    en: {
      title: 'Contact — Lasuarindo Group',
      description:
        'Have an inquiry or looking to partner? Our team is ready to discuss and build the best collaboration with you.',
    },
  },
  privacy: {
    id: {
      title: 'Kebijakan Privasi — Lasuarindo Group',
      description:
        'Komitmen kami dalam melindungi dan menghormati privasi Anda sebagai bagian dari integritas bisnis kami.',
    },
    en: {
      title: 'Privacy Policy — Lasuarindo Group',
      description:
        'Our commitment to protecting and respecting your privacy as part of our business integrity.',
    },
  },
  terms: {
    id: {
      title: 'Syarat & Ketentuan — Lasuarindo Group',
      description: 'Ketentuan penggunaan situs web Lasuarindo Group.',
    },
    en: {
      title: 'Terms & Conditions — Lasuarindo Group',
      description: 'Terms and conditions for using the Lasuarindo Group website.',
    },
  },
  faq: {
    id: {
      title: 'Pusat FAQ — Lasuarindo Group',
      description:
        'Jawaban singkat atas pertanyaan yang sering diajukan tentang Lasuarindo Group, bisnis, dan kawasan T46.',
    },
    en: {
      title: 'FAQ Center — Lasuarindo Group',
      description: 'Quick answers to frequently asked questions about Lasuarindo Group, its businesses, and T46.',
    },
  },
  notFound: {
    id: {
      title: 'Halaman Tidak Ditemukan — Lasuarindo Group',
      description: 'Halaman yang Anda cari tidak tersedia atau telah dipindahkan.',
    },
    en: {
      title: 'Page Not Found — Lasuarindo Group',
      description: 'The page you are looking for is unavailable or has been moved.',
    },
  },
};

/**
 * Map a pathname to a `pageMeta` key. More specific routes come first so
 * /ecosystems/t46 is not captured by /ecosystems and /units/:slug is not
 * captured by /units. The retired /services path is not handled here — it
 * resolves to notFound, matching the route table.
 */
export function resolvePageMetaKey(pathname) {
  if (pathname === '/') return 'home';
  if (/^\/units\/[^/]+/.test(pathname)) return 'unit';
  if (pathname.startsWith('/units')) return 'units';
  if (pathname === '/ecosystems/t46') return 't46';
  if (pathname.startsWith('/ecosystems')) return 'ecosystems';
  if (pathname.startsWith('/licence')) return 'licence';
  if (pathname.startsWith('/legal')) {
    if (pathname.startsWith('/legal/privacy-policy')) return 'privacy';
    if (pathname.startsWith('/legal/term-condition')) return 'terms';
    return 'legal';
  }
  if (pathname.startsWith('/businesses')) return 'businesses';
  if (pathname.startsWith('/about-us')) return 'about';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/faq')) return 'faq';
  return 'notFound';
}

export default pageMeta;
