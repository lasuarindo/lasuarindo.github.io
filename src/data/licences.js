/**
 * Basic licence categories that are confirmed to exist. Number, issuer and
 * year are NOT available (N-notes in fact-register §2) and are deliberately
 * absent: never render a placeholder or invent a value. Only `name` and
 * `category` are public-safe today.
 */
export const licences = [
  {
    key: 'nib',
    name: {
      id: 'Nomor Induk Berusaha (NIB)',
      en: 'Business Identification Number (NIB)',
    },
    category: 'basic',
  },
];

export default licences;
