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
        checkedDate="2 novembre 2026"
        sources={[
          { href: 'https://palombarolungo.it/', label: 'Palombarolungo.it — il luogo e la posizione' },
          { href: 'https://palombarolungo.it/orari-e-modalita-di-visita', label: 'Palombarolungo.it — modalità di visita' },
        ]}
        title="Palombaro Lungo: Orari, Biglietti e Prezzi 2026"
        intro="Questa pagina raccoglie le informazioni pratiche che i visitatori cercano piu spesso prima di entrare nel Palombaro Lungo di Matera: orari di apertura, prezzo del biglietto, tempi di visita e consigli per evitare la coda."
        links={[
          { href: '/', label: 'Torna alla guida completa del Palombaro Lungo Matera' },
          { href: '/quanto-dura-la-visita/', label: 'Percorso, durata e attesa' },
          { href: '/visita-con-bambini/', label: 'Informazioni per famiglie e scuole' },
          { href: '/foto/', label: 'Guarda le foto del Palombaro Lungo' },
          { href: '/recensioni/', label: 'Leggi cosa dicono i visitatori' },
          { href: '/come-arrivare/', label: 'Come arrivare da Piazza Vittorio Veneto' },
        ]}
        sections={[
          {
            title: 'Orari del Palombaro Lungo',
            paragraphs: [
              'La pagina “Orari e modalità di visita” di palombarolungo.it, controllata il 2 novembre 2026, pubblica apertura tutti i giorni 10:00–13:00 e 15:00–18:00. È prevista una pausa fra le due fasce; controlla eventuali aggiornamenti prima di partire.',
              'Il sito segnala possibili attese quando viene raggiunto il numero massimo di visitatori. Non pubblica fasce garantite senza coda né una durata prevista delle attese.',
            ],
          },
          {
            title: 'Biglietti e prezzi',
            paragraphs: [
              'Il listino pubblicato indica 3 euro per gli adulti, ingresso gratuito per i minori e 1,50 euro per le scolastiche. Minori e scolastiche sono categorie distinte; per condizioni non specificate, come accompagnatori o documenti richiesti, chiedi al luogo.',
              'Non è prevista la prenotazione né per singoli né per gruppi. Il pagamento alla cassa è possibile in contanti o con carta; i gruppi oltre venti partecipanti possono anche pagare con bonifico, concordando le modalità con il luogo.',
            ],
          },
          {
            title: 'Quanto dura la visita',
            paragraphs: [
              'La visita interna è autonoma e dura circa 15 minuti secondo il sito del luogo. All’ingresso è disponibile un volantino in italiano, inglese, francese, spagnolo, tedesco, polacco e portoghese. Aggiungi un margine per acquisto e possibili attese, senza presumere una durata totale garantita.',
              'Questo rende il Palombaro Lungo una tappa facile da inserire in un itinerario piu ampio tra Piazza Vittorio Veneto, i Sassi di Matera e gli altri luoghi storici del centro.',
            ],
          },
          {
            title: 'Consigli pratici prima di entrare',
            paragraphs: [
              'Gli animali non sono ammessi secondo la pagina di visita. Per esigenze specifiche di accesso, mobilità o passeggini, chiedi direttamente informazioni sul percorso: le fonti consultate non forniscono una scheda completa di accessibilità.',
              `Questa guida non vende biglietti e non gestisce prenotazioni. Verifica orari, prezzi e modalità di accesso su ${siteConfig.attractionWebsite}. Il recapito ${siteConfig.telephone} è pubblicato dal sito di riferimento per la visita e non appartiene alla nostra redazione; non è possibile prenotare telefonicamente.`,
            ],
          },
        ]}
      />
    </NextIntlClientProvider>
  );
}
