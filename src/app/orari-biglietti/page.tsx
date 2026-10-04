import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palombaro Lungo: Orari, Biglietti e Prezzi 2026',
  description:
    'Orari, biglietti e prezzi del Palombaro Lungo di Matera: quando andare, quanto dura la visita e cosa sapere prima di entrare.',
  alternates: {
    canonical: absoluteUrl('/orari-biglietti/'),
    languages: {
      it: absoluteUrl('/orari-biglietti/'),
      'x-default': absoluteUrl('/orari-biglietti/'),
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Palombaro Lungo: Orari, Biglietti e Prezzi 2026',
  url: absoluteUrl('/orari-biglietti/'),
  about: {
    '@type': 'TouristAttraction',
    name: 'Palombaro Lungo',
    telephone: siteConfig.telephone,
  },
};

export default function OrariBigliettiPage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={jsonLd} />
      <GuidePageTemplate
        title="Palombaro Lungo: Orari, Biglietti e Prezzi 2026"
        intro="Questa pagina raccoglie le informazioni pratiche che i visitatori cercano piu spesso prima di entrare nel Palombaro Lungo di Matera: orari di apertura, prezzo del biglietto, tempi di visita e consigli per evitare la coda."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/foto/', label: 'Guarda le foto del Palombaro Lungo' },
          { href: '/recensioni/', label: 'Leggi cosa dicono i visitatori' },
          { href: '/come-arrivare/', label: 'Come arrivare da Piazza Vittorio Veneto' },
        ]}
        sections={[
          {
            title: 'Orari del Palombaro Lungo',
            paragraphs: [
              'Gli orari indicati sul sito e sulle fonti pubbliche piu consultate sono 10:00-13:00 e 15:00-18:00 tutti i giorni. Prima della visita conviene comunque verificare eventuali variazioni stagionali o chiusure straordinarie tramite i canali ufficiali.',
              'Per chi cerca su Google "palombaro lungo orari" oppure "palombaro lungo matera orari", i momenti migliori per visitarlo sono l apertura del mattino e la riapertura pomeridiana, quando l ingresso e in genere piu scorrevole.',
            ],
          },
          {
            title: 'Biglietti e prezzi',
            paragraphs: [
              'Il prezzo piu citato per il biglietto intero e di 3 euro, con agevolazioni o gratuitita per alcune categorie. I biglietti vengono normalmente acquistati sul posto, quindi non e una visita da organizzare con largo anticipo, ma nei periodi piu affollati e meglio arrivare con un piccolo margine.',
              'Chi cerca "palombaro lungo biglietti" o "biglietti per palombaro lungo" di solito vuole soprattutto una risposta rapida: visita breve, costo contenuto e accesso molto centrale nel cuore di Matera.',
            ],
          },
          {
            title: 'Quanto dura la visita',
            paragraphs: [
              'La visita all interno della cisterna dura in media circa 15 minuti. Considerando l acquisto del biglietto e un eventuale breve tempo di attesa, e realistico prevedere 30-45 minuti complessivi.',
              'Questo rende il Palombaro Lungo una tappa facile da inserire in un itinerario piu ampio tra Piazza Vittorio Veneto, i Sassi di Matera e gli altri luoghi storici del centro.',
            ],
          },
          {
            title: 'Consigli pratici prima di entrare',
            paragraphs: [
              'All interno la temperatura e piu fresca rispetto all esterno e il percorso richiede scale e passerelle. Scarpe comode e una giacca leggera possono essere utili, soprattutto nelle mezze stagioni o dopo il tramonto.',
              `Per informazioni aggiornate, puoi consultare anche il sito ufficiale ${siteConfig.officialWebsite} oppure chiamare ${siteConfig.telephone}.`,
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
