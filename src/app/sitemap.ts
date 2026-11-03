import { MetadataRoute } from 'next';
import { absoluteUrl, localizedPath } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...["storia", "quanto-dura-la-visita", "visita-con-bambini", "matera-sotterranea"].map(slug => ({ url: absoluteUrl(`/${slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...['chi-siamo', 'note-legali', 'contatti'].flatMap((slug) => [
      { url: absoluteUrl(`/${slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.4 },
      { url: absoluteUrl(`/zh-hant/${slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.4 },
    ]),
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl(localizedPath('zh-hant')),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/orari-biglietti/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/foto/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/recensioni/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/come-arrivare/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
