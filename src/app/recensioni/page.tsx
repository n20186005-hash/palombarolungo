import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palombaro Lungo Recensioni: Vale la Pena Visitarlo?',
  description:
    'Sintesi delle recensioni sul Palombaro Lungo di Matera: cosa piace di piu ai visitatori, possibili limiti della visita e per chi e consigliato.',
  alternates: {
    canonical: absoluteUrl('/recensioni/'),
    languages: {
      it: absoluteUrl('/recensioni/'),
      'x-default': absoluteUrl('/recensioni/'),
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Palombaro Lungo Recensioni',
  url: absoluteUrl('/recensioni/'),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.ratingValue,
    reviewCount: siteConfig.reviewCount,
  },
};

export default function RecensioniPage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={jsonLd} />
      <GuidePageTemplate
        title="Palombaro Lungo Recensioni: Vale la Pena Visitarlo?"
        intro="Le recensioni del Palombaro Lungo convergono su un punto molto chiaro: e una visita breve ma sorprendente. Il contesto sotto Piazza Vittorio Veneto, l atmosfera sotterranea e il prezzo contenuto fanno percepire questa tappa come una delle esperienze con il miglior rapporto qualita-prezzo a Matera."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/orari-biglietti/', label: 'Verifica orari e prezzi' },
          { href: '/foto/', label: 'Guarda le foto del sito' },
          { href: '/come-arrivare/', label: 'Come arrivare al Palombaro Lungo' },
        ]}
        sections={[
          {
            title: 'Cosa piace di piu ai visitatori',
            paragraphs: [
              'Le persone apprezzano soprattutto l effetto scenografico delle volte, il contrasto tra la piazza in superficie e il grande spazio sotterraneo, la posizione centrale e la facilita con cui la visita si inserisce in un itinerario a piedi nel centro storico di Matera.',
              `Anche il prezzo gioca un ruolo importante: con una valutazione media di ${siteConfig.ratingValue.toFixed(1)} su 5 e ${siteConfig.reviewCount.toLocaleString('it-IT')} recensioni su Google Maps, il Palombaro Lungo viene spesso considerato una tappa consigliabile quasi a prescindere dalla durata ridotta.`,
            ],
          },
          {
            title: 'Le osservazioni piu frequenti',
            paragraphs: [
              'Il limite citato piu spesso e la brevissima durata della visita. Chi si aspetta un percorso esteso o una lunga esperienza museale potrebbe trovarlo piu rapido del previsto.',
              'Un altro aspetto da considerare e l accesso: la presenza di scale e passerelle rende la visita meno comoda per chi ha difficolta motorie.',
            ],
          },
          {
            title: 'Vale la pena visitarlo?',
            paragraphs: [
              'Per la maggior parte dei visitatori la risposta e si, soprattutto se e la prima volta a Matera. Non e il luogo in cui passare ore, ma e uno di quelli che si ricordano meglio per atmosfera e particolarita.',
              'Se vuoi verificare le recensioni direttamente alla fonte, la soluzione piu affidabile resta sempre la pagina Google Maps ufficiale collegata da questo sito.',
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
