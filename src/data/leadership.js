/**
 * Public leadership facts shown on the About page. Proper nouns are not
 * translated; roles and image alt text use { id, en } fields.
 *
 * Public-safe only: no legal name (N12 decision pending), no other names and
 * no internal positions. See fact-register F4/F6 and N3.
 */
export const leadership = [
  {
    key: 'founder',
    name: 'Mochamad Ryan Januar Akbar',
    role: { id: 'Founder & CEO', en: 'Founder & CEO' },
    imageAlt: {
      id: 'Potret Mochamad Ryan Januar Akbar, pendiri Lasuarindo Group',
      en: 'Portrait of Mochamad Ryan Januar Akbar, founder of Lasuarindo Group',
    },
  },
  {
    key: 'commissioner',
    name: 'Herawati',
    role: { id: 'Komisaris', en: 'Commissioner' },
    imageAlt: {
      id: 'Potret Herawati, komisaris Lasuarindo Group',
      en: 'Portrait of Herawati, commissioner of Lasuarindo Group',
    },
  },
];

export function getLeaderByKey(key) {
  return leadership.find((leader) => leader.key === key);
}

export default leadership;
