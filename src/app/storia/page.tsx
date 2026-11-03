import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  "title": "Storia del Palombaro Lungo: la riserva d’acqua di Matera",
  "description": "Come funzionava il Palombaro Lungo: scavo nella calcarenite, raccolta dell’acqua, cocciopesto e riscoperta della cisterna sotto Piazza Vittorio Veneto.",
  "alternates": {
    "canonical": "https://www.palombarolungo.com/storia/",
    "languages": {
      "it": "https://www.palombarolungo.com/storia/",
      "x-default": "https://www.palombarolungo.com/storia/"
    }
  }
};

const content = {
  "title": "Storia del Palombaro Lungo: la riserva d’acqua di Matera",
  "intro": "Prima di essere un luogo da visitare, il Palombaro Lungo era un’infrastruttura pubblica: conservava l’acqua necessaria alla città. Capire questa funzione cambia il modo di leggere le pareti e le grandi cavità sotto Piazza Vittorio Veneto.",
  "sections": [
    {
      "title": "Una cisterna, non una grotta naturale",
      "paragraphs": [
        "Il sito del Palombaro descrive uno scavo artificiale realizzato in più fasi a partire dal XVI secolo. La grande cavità è quindi il risultato del lavoro umano nella roccia: non nasce come chiesa, né come ambiente naturale adattato a una visita turistica.",
        "La scheda regionale sull’itinerario del centro storico identifica il materiale come calcarenite e il serbatoio come pubblico. È utile osservare il volume scavato pensando alla sua funzione originaria: trattenere una risorsa, anziché ospitare persone."
      ]
    },
    {
      "title": "Dimensioni da leggere con una fonte",
      "paragraphs": [
        "Il sito del luogo indica una capacità di circa cinque milioni di litri, una profondità di 16 metri e una lunghezza di 50 metri. Sono le misure qui adottate; la capacità è confermata anche dalla descrizione dell’Agenzia di Promozione Territoriale della Basilicata.",
        "Profondità, altezza della cavità e distanza dalla piazza non sono la stessa misura. Quando si confrontano racconti o fotografie, conviene evitare di trasformare numeri diversi in una cronologia di ampliamenti senza una fonte specifica."
      ]
    },
    {
      "title": "Perché le pareti sono rivestite",
      "paragraphs": [
        "Il cocciopesto è il rivestimento impermeabile descritto dal sito del Palombaro: un intonaco a base di terracotta. La roccia scavata e il suo rivestimento hanno funzioni complementari: la prima forma il grande contenitore, il secondo ne limita la perdita d’acqua.",
        "Nella visita, cercare il rivestimento sulle superfici aiuta a distinguere la struttura dalla sua finitura. Le pareti non sono soltanto uno sfondo per le fotografie: raccontano la soluzione pratica adottata per conservare l’acqua."
      ]
    },
    {
      "title": "Dalla funzione idrica alla visita",
      "paragraphs": [
        "Il sito del Palombaro indica il 1991 come anno della prima esplorazione e descrive l’attuale percorso su passerelle sospese sull’acqua. Il camminamento di oggi permette di vedere l’interno, ma non riproduce il modo in cui il serbatoio veniva utilizzato.",
        "Per preparare la visita, separa quindi due domande: come funzionava la cisterna e come si entra oggi. La prima riguarda la storia del sistema idrico; la seconda richiede di controllare modalità e orari aggiornati."
      ]
    }
  ],
  "sources": [
    {
      "href": "https://palombarolungo.it/",
      "label": "Palombarolungo.it — storia, dimensioni e rivestimento"
    },
    {
      "href": "https://www.basilicataturistica.it/scopri-la-basilicata/matera-patrimonio-mondiale-dellumanita/scopri-gli-itinerari-di-matera/itinerario-il-piano-e-il-centro-storico/",
      "label": "Basilicata Turistica — il serbatoio pubblico nel centro storico"
    }
  ],
  "checkedDate": "2 novembre 2026",
  "links": [
    {
      "href": "/",
      "label": "Guida generale al Palombaro Lungo"
    },
    {
      "href": "/orari-biglietti/",
      "label": "Orari, biglietti e modalità di ingresso"
    },
    {
      "href": "/quanto-dura-la-visita/",
      "label": "Quanto dura la visita al Palombaro Lungo? Il percorso e l’attesa"
    },
    {
      "href": "/visita-con-bambini/",
      "label": "Palombaro Lungo con bambini e scuole: come preparare la visita"
    },
    {
      "href": "/matera-sotterranea/",
      "label": "Matera sotterranea: Palombaro Lungo, MateraSum e Casa Cava"
    }
  ]
};

export default function EditorialPage() {
  unstable_setRequestLocale('it');
  return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: content.title, url: absoluteUrl('/storia/'), inLanguage: 'it' }} />
    <GuidePageTemplate {...content} />
  </NextIntlClientProvider>;
}
