export const locales = ['it', 'zh-hant'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  'zh-hant': '繁體中文',
};
