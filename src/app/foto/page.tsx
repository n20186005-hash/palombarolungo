import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
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
        title="Palombaro Lungo Foto: Interno della Cisterna di Matera"
        intro="Chi cerca foto del Palombaro Lungo di solito vuole capire se la visita vale la pena. La risposta sta soprattutto negli spazi interni: volte altissime, colonne scolpite nella roccia, passerelle sopra l acqua e riflessi che rendono questo luogo uno dei piu fotogenici di Matera."
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
              'Le immagini piu riconoscibili del Palombaro Lungo mostrano le grandi volte in calcarenite e la prospettiva delle passerelle metalliche sospese sopra l acqua. Sono questi elementi a creare l effetto da "cattedrale d acqua" citato cosi spesso dai visitatori.',
              'Molto interessanti anche i dettagli del cocciopesto sulle pareti, i giochi di luce sulle superfici umide e le linee degli archi che si susseguono nello spazio sotterraneo.',
            ],
          },
          {
            title: 'Quando le foto rendono meglio',
            paragraphs: [
              'La luce e controllata artificialmente e l ambiente e piuttosto scuro, quindi un telefono recente o una fotocamera con buona resa in condizioni di poca luce aiutano molto. Non serve cercare il sole giusto, ma e utile avere una mano ferma e qualche secondo per comporre lo scatto.',
              'Se vuoi fotografare con piu calma, i momenti meno affollati sono in genere a inizio mattina o subito dopo la riapertura pomeridiana.',
            ],
          },
          {
            title: 'Foto e aspettative di visita',
            paragraphs: [
              'Le foto online rendono bene la monumentalita del luogo, ma dal vivo colpiscono soprattutto il silenzio, la temperatura fresca e la percezione della profondita sotto Piazza Vittorio Veneto. Per questo molte recensioni definiscono il Palombaro Lungo una sorpresa di Matera piu che una semplice tappa fotografica.',
              'Se stai organizzando una visita breve, questa pagina puo aiutarti a capire in anticipo se le immagini del sito e della galleria corrispondono all esperienza che cerchi.',
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
