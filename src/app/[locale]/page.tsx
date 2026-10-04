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
        ? 'Palombaro Lungo｜馬泰拉地下蓄水池參觀指南'
        : 'Palombaro Lungo Matera: Orari, Biglietti, Prezzi e Visita 2026',
    description:
      locale === 'zh-hant'
        ? '探索馬泰拉 Palombaro Lungo，了解開放時間、票價、照片與前往方式。'
        : 'Guida al Palombaro Lungo di Matera: orari, biglietti, prezzo, durata della visita, foto e consigli pratici.',
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

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Palombaro Lungo',
    url: locale === 'zh-hant' ? absoluteUrl('/zh-hant/') : absoluteUrl('/'),
    sameAs: [siteConfig.officialWebsite, siteConfig.googleMapsUrl],
    telephone: siteConfig.telephone,
    description:
      locale === 'zh-hant'
        ? '位於馬泰拉維托里奧維內托廣場下方的大型地下蓄水池。'
        : 'Grande cisterna sotterranea sotto Piazza Vittorio Veneto, nel centro storico di Matera.',
    image: [absoluteUrl('/gallery/images%20(15).jpg')],
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.ratingValue,
      reviewCount: siteConfig.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    inLanguage: locale === 'zh-hant' ? 'zh-Hant' : 'it',
  };

  return (
    <>
      <StructuredData data={touristAttractionJsonLd} />
      <HomePageContent locale={locale} />
    </>
  );
}
