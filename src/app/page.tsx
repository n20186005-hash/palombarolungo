import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import HomePageContent from '@/components/HomePageContent';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, localizedPath, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palombaro Lungo Matera: Orari, Biglietti, Prezzi e Visita 2026',
  description:
    'Guida al Palombaro Lungo di Matera: orari, biglietti, prezzo, durata della visita, foto, accesso da Piazza Vittorio Veneto e consigli pratici.',
  alternates: {
    canonical: absoluteUrl('/'),
    languages: {
      it: absoluteUrl('/'),
      'zh-Hant': absoluteUrl(localizedPath('zh-hant')),
      'x-default': absoluteUrl('/'),
    },
  },
  openGraph: {
    title: 'Palombaro Lungo Matera: Orari, Biglietti, Prezzi e Visita 2026',
    description:
      'Guida al Palombaro Lungo di Matera con informazioni aggiornate su visita, orari, biglietti, foto e posizione in Piazza Vittorio Veneto.',
    url: absoluteUrl('/'),
    siteName: siteConfig.siteName,
    locale: 'it_IT',
    type: 'website',
  },
};

const touristAttractionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Palombaro Lungo',
  url: absoluteUrl('/'),
  sameAs: [siteConfig.officialWebsite, siteConfig.googleMapsUrl],
  telephone: siteConfig.telephone,
  description:
    'Grande cisterna sotterranea sotto Piazza Vittorio Veneto, nel centro storico di Matera.',
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
};

export default function RootPage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={touristAttractionJsonLd} />
      <HomePageContent locale="it" />
    </NextIntlClientProvider>
  );
}
