export const siteConfig = {
  siteName: 'Palombarolungo.com · Guida indipendente',
  baseUrl: 'https://www.palombarolungo.com',
  attractionWebsite: 'https://www.palombarolungo.it/',
  editorialEmail: 'claritleonelmnicol@gmail.com',
  googleMapsUrl: 'https://maps.app.goo.gl/cUfXtK1QWiaNUHzB8',
  telephone: '+39 339 363 8332',
  reviewCount: 12972,
  ratingValue: 4.5,
  address: {
    streetAddress: 'Piazza Vittorio Veneto',
    postalCode: '75100',
    addressLocality: 'Matera',
    addressRegion: 'MT',
    addressCountry: 'IT',
  },
} as const;

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const lastSegment = pathname.split('/').filter(Boolean).at(-1);
  if (lastSegment?.includes('.')) {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function localizedPath(locale: string, pathname = '/') {
  const normalizedPath = normalizePath(pathname);

  if (locale === 'it') {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return `/${locale}/`;
  }

  return `/${locale}${normalizedPath}`;
}

export function absoluteUrl(pathname = '/') {
  return `${siteConfig.baseUrl}${normalizePath(pathname) === '/' ? '/' : normalizePath(pathname)}`;
}
