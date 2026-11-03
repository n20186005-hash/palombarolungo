import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  "title": "Quanto dura la visita al Palombaro Lungo? Il percorso e l’attesa",
  "description": "La visita interna dura circa 15 minuti: come distinguere percorso e attesa, usare il volantino e inserire il Palombaro Lungo in una passeggiata a Matera.",
  "alternates": {
    "canonical": "https://www.palombarolungo.com/quanto-dura-la-visita/",
    "languages": {
      "it": "https://www.palombarolungo.com/quanto-dura-la-visita/",
      "x-default": "https://www.palombarolungo.com/quanto-dura-la-visita/"
    }
  }
};

const content = {
  "title": "Quanto dura la visita al Palombaro Lungo? Il percorso e l’attesa",
  "intro": "La durata pubblicata per il percorso interno è di circa 15 minuti. Questo dato descrive il tempo nella cisterna: non comprende un’attesa garantita alla cassa e non promette l’ingresso a un’ora scelta.",
  "sections": [
    {
      "title": "I quindici minuti dentro la cisterna",
      "paragraphs": [
        "La modalità pubblicata è autonoma. Non bisogna quindi aspettarsi che il normale biglietto includa una lunga visita guidata o un itinerario attraverso tutti gli ambienti sotterranei di Matera. Il percorso riguarda il Palombaro Lungo.",
        "Il tempo breve può essere un vantaggio quando si vuole conoscere una parte del sistema delle acque senza dedicare un’intera mattinata a un museo. Chi cerca soprattutto spiegazioni approfondite può leggere prima la storia della cisterna e usare il materiale distribuito all’ingresso."
      ]
    },
    {
      "title": "Il volantino aiuta a capire cosa si guarda",
      "paragraphs": [
        "All’ingresso viene fornita una descrizione scritta, disponibile in italiano, inglese, francese, spagnolo, tedesco, polacco e portoghese. Scegli la lingua più utile prima di iniziare: è il supporto informativo indicato dal sito del luogo.",
        "Un modo semplice per orientare l’osservazione è concentrarsi su tre elementi: il volume scavato, il rivestimento impermeabile e il rapporto fra acqua e passerelle. È un suggerimento editoriale per leggere il luogo, non un percorso obbligatorio."
      ]
    },
    {
      "title": "L’attesa non ha una durata pubblicata",
      "paragraphs": [
        "Il sito avvisa che, raggiunto il limite di visitatori, può essere necessario attendere. Non pubblica una previsione di coda per stagione: non è quindi possibile garantire cinque, venti o trenta minuti. Anche i gruppi entrano in modo scaglionato.",
        "Lascia un margine tra questa tappa e un appuntamento successivo. Il tempo totale dipende dall’affluenza all’arrivo; la durata interna di circa 15 minuti non basta da sola a calcolare l’orario di uscita."
      ]
    },
    {
      "title": "Come proseguire dopo la visita",
      "paragraphs": [
        "Tornati in Piazza Vittorio Veneto si può guardare il panorama dal belvedere Guerricchio, descritto nell’itinerario regionale, oppure proseguire per Via San Biagio verso Piazza San Giovanni. Sono possibili continuazioni della passeggiata, non parti del biglietto del Palombaro.",
        "Controlla separatamente l’accesso a ogni altro monumento. Una visita breve alla cisterna si può combinare con il centro storico, ma non comprende prenotazioni, ingressi o guide per le altre tappe."
      ]
    }
  ],
  "sources": [
    {
      "href": "https://palombarolungo.it/orari-e-modalita-di-visita",
      "label": "Palombarolungo.it — durata, visita autonoma, lingue e attesa"
    },
    {
      "href": "https://www.basilicataturistica.it/scopri-la-basilicata/matera-patrimonio-mondiale-dellumanita/scopri-gli-itinerari-di-matera/itinerario-il-piano-e-il-centro-storico/",
      "label": "Basilicata Turistica — passeggiata nel centro storico"
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
      "href": "/storia/",
      "label": "Storia del Palombaro Lungo: la riserva d’acqua di Matera"
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
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: content.title, url: absoluteUrl('/quanto-dura-la-visita/'), inLanguage: 'it' }} />
    <GuidePageTemplate {...content} />
  </NextIntlClientProvider>;
}
