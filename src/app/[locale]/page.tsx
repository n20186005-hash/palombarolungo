import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, localizedPath, siteConfig } from '@/lib/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const canonicalPath = localizedPath(locale);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const isItalianDuplicate = locale === 'it';
  
  return {
    title:
      locale === 'zh-hant'
        ? 'Palombaro Lungo｜獨立非官方馬泰拉參觀指南'
        : 'Palombaro Lungo Matera: Orari, Biglietti, Prezzi e Visita 2026',
    description:
      locale === 'zh-hant'
        ? '獨立非官方旅遊指南：馬泰拉 Palombaro Lungo，了解開放時間、票價、照片與前往方式。'
        : 'Guida indipendente non ufficiale al Palombaro Lungo di Matera: orari, biglietti, prezzo, durata della visita, foto e consigli pratici.',
    alternates: {
      canonical: isItalianDuplicate ? absoluteUrl('/') : canonicalUrl,
      languages: {
        it: absoluteUrl('/'),
        'zh-Hant': absoluteUrl(localizedPath('zh-hant')),
        'x-default': absoluteUrl('/'),
      },
    },
    robots: isItalianDuplicate ? { index: false, follow: true } : undefined,
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const guideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: absoluteUrl('/'),
    description: 'Guida turistica indipendente e non ufficiale sul Palombaro Lungo di Matera.',
    about: { '@type': 'TouristAttraction', name: 'Palombaro Lungo', url: siteConfig.attractionWebsite },
  };

  return (
    <>
      <StructuredData data={guideJsonLd} />
      <HomePageContent locale={locale} />
    </>
  );
}
