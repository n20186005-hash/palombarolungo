import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Come Arrivare al Palombaro Lungo di Matera',
  description:
    'Come arrivare al Palombaro Lungo di Matera da Piazza Vittorio Veneto, dai Sassi e dalle principali aree di accesso al centro storico.',
  alternates: {
    canonical: absoluteUrl('/come-arrivare/'),
    languages: {
      it: absoluteUrl('/come-arrivare/'),
      'x-default': absoluteUrl('/come-arrivare/'),
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Map',
  name: 'Come arrivare al Palombaro Lungo di Matera',
  url: absoluteUrl('/come-arrivare/'),
  about: {
    '@type': 'TouristAttraction',
    name: 'Palombaro Lungo',
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
  },
};

export default function ComeArrivarePage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={jsonLd} />
      <GuidePageTemplate
        title="Come Arrivare al Palombaro Lungo di Matera"
        intro="Il Palombaro Lungo si trova sotto Piazza Vittorio Veneto, in una delle zone piu centrali e facili da raggiungere del centro storico di Matera. Per questo motivo e una visita comoda sia se arrivi a piedi dai Sassi, sia se parti dalle aree di parcheggio o dagli accessi principali alla citta."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/orari-biglietti/', label: 'Controlla orari e biglietti' },
          { href: '/foto/', label: 'Guarda le foto della cisterna' },
          { href: '/recensioni/', label: 'Leggi la sintesi delle recensioni' },
        ]}
        sections={[
          {
            title: 'Indirizzo esatto',
            paragraphs: [
              `L indirizzo di riferimento e ${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} Matera MT, Italy. Nelle mappe puoi trovare anche il plus code MJ84+QJ Matera, Province of Matera, Italy.`,
              'Essendo sotto la piazza, conviene usare Piazza Vittorio Veneto come punto di orientamento principale e poi seguire la segnaletica locale verso l ingresso.',
            ],
          },
          {
            title: 'A piedi nel centro di Matera',
            paragraphs: [
              'Dal cuore dei Sassi il Palombaro Lungo e facilmente raggiungibile a piedi e si combina bene con una visita alla Cattedrale, a Casa Grotta o a una passeggiata panoramica tra i belvedere della citta.',
              'Se stai gia visitando il centro storico, questa e una tappa molto semplice da inserire senza deviazioni lunghe.',
            ],
          },
          {
            title: 'Indicazioni pratiche',
            paragraphs: [
              `Per aprire la posizione esatta sul telefono puoi usare direttamente Google Maps: ${siteConfig.googleMapsUrl}. Se preferisci verificare prima i dettagli della visita, il numero di riferimento e ${siteConfig.telephone}.`,
              'Chi arriva in auto farebbe bene a lasciare il veicolo nelle aree consentite intorno al centro e completare l ultimo tratto a piedi, visto che l area storica di Matera ha accessi limitati e strade strette.',
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
