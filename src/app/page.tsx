import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import HomePageContent from '@/components/HomePageContent';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, localizedPath, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palombaro Lungo Matera: Orari, Biglietti, Prezzi e Visita 2026 · Guida indipendente non ufficiale',
  description:
    'Guida indipendente non ufficiale al Palombaro Lungo di Matera: orari, biglietti, prezzo, durata della visita, foto, accesso da Piazza Vittorio Veneto e consigli pratici.',
  alternates: {
    canonical: absoluteUrl('/'),
    languages: {
      it: absoluteUrl('/'),
      'zh-Hant': absoluteUrl(localizedPath('zh-hant')),
      'x-default': absoluteUrl('/'),
    },
  },
  openGraph: {
    title: 'Palombaro Lungo Matera · Guida indipendente non ufficiale',
    description:
      'Guida indipendente non ufficiale al Palombaro Lungo di Matera con informazioni indicative su visita, orari, biglietti, foto e posizione in Piazza Vittorio Veneto.',
    url: absoluteUrl('/'),
    siteName: siteConfig.siteName,
    locale: 'it_IT',
    type: 'website',
  },
};

const guideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: absoluteUrl('/'),
    description: 'Guida turistica indipendente e non ufficiale sul Palombaro Lungo di Matera.',
    about: { '@type': 'TouristAttraction', name: 'Palombaro Lungo', url: siteConfig.attractionWebsite },
  };

export default function RootPage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={guideJsonLd} />
      <HomePageContent locale="it" />
    </NextIntlClientProvider>
  );
}
