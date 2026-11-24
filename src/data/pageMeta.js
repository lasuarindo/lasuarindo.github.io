/**
 * Per-route SEO metadata. Titles and descriptions are written per language
 * (no auto-translation). `index.html` keeps the Home values as the static
 * fallback for crawlers that do not run JavaScript.
 */
export const pageMeta = {
  home: {
    id: {
      title: 'Lasuarindo Group — Membangun Bisnis, Menciptakan Dampak',
      description:
        'Perusahaan Bisnis & Investasi Terpadu yang mendorong pertumbuhan untuk masa depan yang lebih baik. Membangun Bisnis, Menciptakan Dampak.',
    },
    en: {
      title: 'Lasuarindo Group — Building Business, Creating Impact',
      description:
        'An integrated business and investment enterprise driving growth for a better future. Building business, creating impact.',
    },
  },
  about: {
    id: {
      title: 'Tentang Kami — Lasuarindo Group',
      description:
        'Kami berfokus pada inovasi, pertumbuhan berkelanjutan, dan memberikan nilai tambah bagi masyarakat dan mitra bisnis melalui ekosistem yang solid dan kolaboratif.',
    },
    en: {
      title: 'About Us — Lasuarindo Group',
      description:
        'We focus on innovation, sustainable growth, and delivering lasting value to communities and business partners through a solid, collaborative ecosystem.',
    },
  },
  services: {
    id: {
      title: 'Layanan — Lasuarindo Group',
      description:
        'Lasuarindo Group menghadirkan ekosistem bisnis terpadu yang mendorong pertumbuhan, inovasi, dan dampak nyata di sektor-sektor strategis Indonesia.',
    },
    en: {
      title: 'Services — Lasuarindo Group',
      description:
        'Lasuarindo Group presents an integrated business ecosystem driving growth, innovation, and real impact across Indonesia’s strategic sectors.',
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
        'Jawaban singkat atas pertanyaan yang sering diajukan tentang Lasuarindo Group.',
    },
    en: {
      title: 'FAQ Center — Lasuarindo Group',
      description: 'Quick answers to frequently asked questions about Lasuarindo Group.',
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

/** Map a pathname to a `pageMeta` key. Legacy routes resolve to their target. */
export function resolvePageMetaKey(pathname) {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/about-us')) return 'about';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/legal/privacy-policy')) return 'privacy';
  if (pathname.startsWith('/legal/term-condition')) return 'terms';
  if (pathname.startsWith('/faq')) return 'faq';
  return 'notFound';
}

export default pageMeta;