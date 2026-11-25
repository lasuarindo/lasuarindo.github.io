/**
 * District catalogue. Adding a new district is a data change here — never a
 * new header item or a new page structure. One shared page component renders
 * every district by key.
 *
 * The address is deliberately NOT copied here: T46 uses company.address via
 * formatAddress() (fact-register F27) so the text cannot drift from the
 * Footer and Contact pages.
 */
export const ecosystems = [
  {
    key: 't46',
    name: 'T46',
    addressRef: 'company.address',
    intro: {
      id: 'T46 adalah kawasan bisnis Lasuarindo Group di Bandung, tempat dua belas unit berjalan dalam satu ekosistem.',
      en: 'T46 is a Lasuarindo Group business district in Bandung, where twelve units operate within one ecosystem.',
    },
  },
];

export function getEcosystemByKey(key) {
  return ecosystems.find((ecosystem) => ecosystem.key === key);
}

export default ecosystems;
