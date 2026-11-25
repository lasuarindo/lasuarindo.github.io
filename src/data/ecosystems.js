/**
 * District catalogue. Adding a new district is a data change here — never a
 * new header item or a new page structure. One shared page component renders
 * every district by key.
 *
 * The address is deliberately NOT copied here: T46 uses company.address via
 * formatAddress() (fact-register F27) so the text cannot drift from the
 * Footer and Contact pages.
 *
 * `status: 'draft'` marks an entry that is a planned placeholder, not a
 * confirmed district. `theme` gives each district its own quiet accent while
 * staying inside the approved brand tokens.
 */
export const ecosystems = [
  {
    key: 't46',
    name: { id: 'T46', en: 'T46' },
    addressRef: 'company.address',
    status: 'actual',
    theme: {
      accent: 'var(--color-primary)',
      label: { id: 'Kawasan Bisnis', en: 'Business District' },
    },
    intro: {
      id: 'T46 adalah kawasan bisnis Lasuarindo Group di Bandung, tempat dua belas unit berjalan dalam satu ekosistem.',
      en: 'T46 is a Lasuarindo Group business district in Bandung, where twelve units operate within one ecosystem.',
    },
  },
  {
    key: 'upcoming',
    name: { id: 'Ekosistem Berikutnya', en: 'Upcoming Ecosystem' },
    addressRef: null,
    status: 'draft',
    theme: {
      accent: 'var(--color-tertiary)',
      label: { id: 'Rencana', en: 'Planned' },
    },
    intro: {
      id: 'Detail ekosistem ini akan ditambahkan setelah data tersedia.',
      en: 'Details of this ecosystem will be added once data is available.',
    },
  },
];

export function getEcosystemByKey(key) {
  return ecosystems.find((ecosystem) => ecosystem.key === key);
}

export default ecosystems;
