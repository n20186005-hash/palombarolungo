import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://palombarolungo.com';

  const pages = [
    '',
    '/cookie-settings',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.5,
      });
    });
  });

  return sitemapEntries;
}