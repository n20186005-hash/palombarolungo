import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import Gallery from '@/components/Gallery';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palombaro Lungo Foto: Interno della Cisterna di Matera',
  description:
    'Foto del Palombaro Lungo di Matera, cosa si vede all interno della cisterna e quali dettagli meritano uno scatto durante la visita.',
  alternates: {
    canonical: absoluteUrl('/foto/'),
    languages: {
      it: absoluteUrl('/foto/'),
      'x-default': absoluteUrl('/foto/'),
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Palombaro Lungo Foto',
  url: absoluteUrl('/foto/'),
};

export default function FotoPage() {
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
        title="Palombaro Lungo Foto: Interno della Cisterna di Matera"
        intro="Una foto dell’interno del Palombaro Lungo di Matera, con fonte, autore e licenza verificabili. Lo scatto del 2014 aiuta a osservare lo spazio sotterraneo, ma non certifica le condizioni di visita di oggi."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/orari-biglietti/', label: 'Controlla orari e biglietti' },
          { href: '/recensioni/', label: 'Scopri le impressioni dei visitatori' },
          { href: '/come-arrivare/', label: 'Vedi come arrivare' },
        ]}
        sections={[
          {
            title: 'Cosa fotografare all interno',
            paragraphs: [
              'La fotografia qui pubblicata mostra l’interno della cisterna. Osserva le proporzioni dello spazio e il percorso visibile, senza dedurre dalla foto le condizioni attuali di acqua, illuminazione o accesso.',
              'Per conoscere materiali e storia, consulta le fonti storiche: una fotografia da sola non permette di identificare con certezza ogni rivestimento.',
            ],
          },
          {
            title: 'Quando le foto rendono meglio',
            paragraphs: [
              'La luce e controllata artificialmente e l ambiente e piuttosto scuro, quindi un telefono recente o una fotocamera con buona resa in condizioni di poca luce aiutano molto. Non serve cercare il sole giusto, ma e utile avere una mano ferma e qualche secondo per comporre lo scatto.',
              'Prima di fotografare chiedi al personale le regole su foto, flash e treppiedi. Non è pubblicata una previsione di affluenza che garantisca momenti senza coda.',
            ],
          },
          {
            title: 'Foto e aspettative di visita',
            paragraphs: [
              'Le foto online rendono bene la monumentalita del luogo, e possono aiutare a riconoscere le passerelle, le volte e il rivestimento prima della visita. Non descrivono però in modo completo le condizioni di accesso del giorno.',
              'Se stai organizzando una visita breve, questa pagina puo aiutarti a capire in anticipo se le immagini del sito e della galleria corrispondono all esperienza che cerchi.',
            ],
          },
        ]}
      >
        <Gallery />
      </GuidePageTemplate>
    </NextIntlClientProvider>
  );
}
