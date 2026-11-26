/**
 * Illustrative notes for the unit detail pages.
 *
 * Each sentence below only restates facts already public in `units.js` and
 * `sectors.js` — name, category, capabilities, sector and the T46 district.
 * It is NOT verified company information: the UI always renders these notes
 * with DraftBadge / DraftNote. No staff, contract, financial or schedule
 * detail is introduced here.
 */
const UNIT_NOTES = {
  pro: {
    id: 'Catatan ini menautkan kembali peran PRO ke lini investasi grup yang sudah tercatat.',
    en: 'This note ties PRO back to the group investment line already on record.',
  },
  win: {
    id: 'Catatan ini berangkat dari peran WIN pada pengelolaan kawasan dan fasilitas T46.',
    en: 'This note starts from the recorded role of WIN in managing the T46 district and its facilities.',
  },
  agt: {
    id: 'AGT dirangkum dari lini teknologi yang menaungi pengembangan perlindungan produk.',
    en: 'AGT is summarised from the technology line that covers product-protection development.',
  },
  idr: {
    id: 'IDR dirangkum dari pengelolaan food court yang disebut dalam lini F&B grup.',
    en: 'IDR is summarised from the food-court management named in the group F&B line.',
  },
  'lazura-koffie': {
    id: 'Lazura Koffie dirangkum dari operasional kafe dalam portofolio F&B grup.',
    en: 'Lazura Koffie is summarised from café operations within the group F&B portfolio.',
  },
  asyihan: {
    id: 'Asyihan dirangkum dari pengembangan produk parfum dalam portofolio konsumer grup.',
    en: 'Asyihan is summarised from perfume product development in the group consumer portfolio.',
  },
  'vps-vamos-padelon': {
    id: 'VPS dirangkum dari kegiatan padel dan gaya hidup yang tercatat di kawasan T46.',
    en: 'VPS is summarised from the padel and lifestyle activity recorded in the T46 district.',
  },
  'bmg-royal-hd-mahjong': {
    id: 'BMG dirangkum dari lini hiburan premium pada portofolio gaya hidup grup.',
    en: 'BMG is summarised from the premium entertainment line in the group lifestyle portfolio.',
  },
  'bizencio-business-hub': {
    id: 'Bizencio dirangkum dari penyediaan ruang kerja dan ruang kreatif untuk bisnis.',
    en: 'Bizencio is summarised from the provision of working and creative space for businesses.',
  },
  sare: {
    id: 'SARE dirangkum dari layanan beauty dan perawatan diri yang tercatat dalam data unit.',
    en: 'SARE is summarised from the beauty and personal-care services recorded in the unit data.',
  },
  cuanmie: {
    id: 'Cuanmie dirangkum dari penyajian mie yamin dalam pilihan F&B di T46.',
    en: 'Cuanmie is summarised from the mie yamin it serves within the T46 F&B offering.',
  },
  saa: {
    id: 'SAA dirangkum dari layanan parkir dan valet di kawasan T46.',
    en: 'SAA is summarised from the parking and valet services in the T46 district.',
  },
};

/** Returns null for an unknown slug so the shared template simply omits the note. */
export function getUnitNote(slug) {
  return UNIT_NOTES[slug] || null;
}

export default UNIT_NOTES;
