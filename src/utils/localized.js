/**
 * Pick the right value from a `{ id, en }` field. Falls back to Indonesian or
 * English when the active language is missing, and returns plain values as-is.
 */
export function localized(value, language) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value.id ?? value.en ?? '';
  }
  return value;
}

export default localized;
