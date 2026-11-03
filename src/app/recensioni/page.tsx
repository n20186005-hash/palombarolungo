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
    'Valutazione Google Maps con data e consigli della redazione per decidere se visitare il Palombaro Lungo: durata, formato autonomo e accesso.',
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
};

export default function RecensioniPage() {
  unstable_setRequestLocale('it');

  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <StructuredData data={jsonLd} />
      <GuidePageTemplate
        checkedDate="2 novembre 2026"
        sources={[
          { href: 'https://palombarolungo.it/', label: 'Palombarolungo.it — il luogo e la posizione' },
          { href: 'https://palombarolungo.it/orari-e-modalita-di-visita', label: 'Palombarolungo.it — modalità di visita' },
        ]}
        title="Palombaro Lungo Recensioni: Vale la Pena Visitarlo?"
        intro="Questa pagina distingue la valutazione numerica pubblicata da Google Maps dai consigli della redazione. Non è un’analisi statistica delle recensioni: propone criteri per capire se una breve visita autonoma alla cisterna corrisponde alle tue aspettative."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/orari-biglietti/', label: 'Verifica orari e prezzi' },
          { href: '/foto/', label: 'Guarda le foto del sito' },
          { href: '/come-arrivare/', label: 'Come arrivare al Palombaro Lungo' },
        ]}
        sections={[
          {
            title: 'Il punto di vista della redazione',
            paragraphs: [
              'La redazione suggerisce questa tappa a chi vuole osservare un esempio del sistema delle acque di Matera. Il volume scavato e il rivestimento impermeabile permettono di leggere la funzione della cisterna, oltre al suo aspetto visivo.',
              `Rilevazione Google Maps del 2 novembre 2026: valutazione media di ${siteConfig.ratingValue.toFixed(1)} su 5 e ${siteConfig.reviewCount.toLocaleString('it-IT')} recensioni. Sono dati di una piattaforma esterna e possono cambiare; questa guida non raccoglie proprie recensioni.`,
            ],
          },
          {
            title: 'Limiti da confrontare con le proprie aspettative',
            paragraphs: [
              'Il sito del luogo indica una visita autonoma di circa 15 minuti. Se cerchi un percorso lungo o spiegazioni guidate incluse, verifica prima che questa modalità sia adatta al tuo programma.',
              'Un altro aspetto da considerare e l accesso: le condizioni delle passerelle e del percorso devono essere verificate direttamente se si hanno esigenze di mobilità.',
            ],
          },
          {
            title: 'Vale la pena visitarlo?',
            paragraphs: [
              'Il consiglio della redazione è di considerarlo se ti interessa la storia della raccolta dell’acqua e cerchi una tappa breve nel centro storico. La scelta dipende dal tuo interesse e dal tempo disponibile, non dal solo punteggio di una piattaforma.',
              'Se vuoi verificare le recensioni direttamente alla fonte, la soluzione piu affidabile resta sempre la scheda del luogo su Google Maps collegata da questa guida indipendente.',
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
