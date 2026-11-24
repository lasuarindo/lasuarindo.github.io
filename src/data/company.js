/**
 * Public company facts shared by the Footer and the Contact page. This is the
 * single source of truth for contact details, so the two pages cannot drift.
 * Translatable values use { id, en } objects; pick with `localized()`.
 */

export const company = {
  name: 'Lasuarindo Group',
  legalName: 'PT Lasuarindo Group',
  email: 'contact@lasuarindo.co.id',
  address: {
    street: 'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung',
    city: 'Kota Bandung',
    province: 'Jawa Barat',
    postal: '40112',
    country: 'Indonesia',
  },
  hours: {
    weekdays: {
      id: 'Senin - Jumat: 08:30 - 17:00 WIB',
      en: 'Monday - Friday: 08:30 - 17:00 WIB',
    },
    weekend: {
      id: 'Sabtu - Minggu: Tutup',
      en: 'Saturday - Sunday: Closed',
    },
  },
  social: [
    { label: 'Website', icon: 'language', url: 'https://www.lasuarindo.co.id' },
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/lasuarindogroup' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com' },
    { label: 'Email', icon: 'mail', url: 'mailto:contact@lasuarindo.co.id' },
  ],
};

/**
 * Format the postal address as a single line. The Contact page appends the
 * country; the Footer keeps the shorter domestic form.
 */
export function formatAddress({ includeCountry = false } = {}) {
  const { street, city, province, postal, country } = company.address;
  const line = `${street}, ${city}, ${province} ${postal}`;
  return includeCountry ? `${line}, ${country}` : line;
}

export default company;