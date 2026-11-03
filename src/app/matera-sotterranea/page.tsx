import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  "title": "Matera sotterranea: Palombaro Lungo, MateraSum e Casa Cava",
  "description": "Palombaro Lungo, MateraSum e Casa Cava sono luoghi diversi: come riconoscere la cisterna e organizzare una visita senza confondere nomi e biglietti.",
  "alternates": {
    "canonical": "https://www.palombarolungo.com/matera-sotterranea/",
    "languages": {
      "it": "https://www.palombarolungo.com/matera-sotterranea/",
      "x-default": "https://www.palombarolungo.com/matera-sotterranea/"
    }
  }
};

const content = {
  "title": "Matera sotterranea: Palombaro Lungo, MateraSum e Casa Cava",
  "intro": "“Matera sotterranea” descrive un tema di visita, ma non identifica un unico percorso o un biglietto comune. La cartina turistica regionale elenca separatamente Palombaro Lungo, MateraSum e Casa Cava.",
  "sections": [
    {
      "title": "Qual è il Palombaro Lungo?",
      "paragraphs": [
        "Il Palombaro Lungo è la grande cisterna sotto Piazza Vittorio Veneto. La sua funzione originaria è conservare l’acqua; l’elemento centrale della visita è quindi l’interno di un serbatoio pubblico, scavato nella calcarenite e rivestito in cocciopesto.",
        "Se una proposta parla della cisterna, controlla che indichi il nome completo e la posizione sotto la piazza. Il solo riferimento ai “sotterranei di Matera” non basta a stabilire quale luogo sia incluso."
      ]
    },
    {
      "title": "Tre nomi, tre punti sulla mappa",
      "paragraphs": [
        "Nella cartina ufficiale APT dei Sassi, Casa Cava è identificata con il numero 22, MateraSum con il 25 e Palombaro Lungo con il 26. La presenza di tre voci distinte è un riferimento utile quando si confrontano una mappa e la descrizione di un’escursione.",
        "Questa distinzione non stabilisce prezzi, orari o contenuti attuali degli altri luoghi. Per scegliere una seconda tappa, consulta il suo canale diretto e verifica cosa sia effettivamente visitabile nel giorno previsto."
      ]
    },
    {
      "title": "Una visita autonoma non è un tour di tutta la città",
      "paragraphs": [
        "Il sito del Palombaro pubblica una visita autonoma di circa quindici minuti, con un volantino informativo. Non descrive il normale ingresso come un tour guidato di più ipogei. Un’escursione venduta da un operatore esterno può avere un programma diverso.",
        "Prima di acquistare un tour, cerca l’elenco preciso delle tappe, gli ingressi inclusi e la modalità di incontro. Non presumere che la parola “sotterranea” comprenda automaticamente il Palombaro o che il suo biglietto dia accesso ad altri spazi."
      ]
    },
    {
      "title": "Scegliere la tappa in base all’interesse",
      "paragraphs": [
        "Se vuoi capire il sistema delle acque, la cisterna offre un riferimento concreto: dimensioni, rivestimento e posizione sotto la piazza raccontano la conservazione dell’acqua. Per una visione del centro storico, puoi collegarla alla passeggiata descritta dall’ente turistico regionale.",
        "Se cerchi un percorso più lungo, confronta prima le descrizioni dei singoli luoghi. Il numero di tappe non dice da solo quanto tempo serva o quali condizioni di accesso siano presenti: verifica ciascuna sede e lascia un margine fra gli appuntamenti."
      ]
    }
  ],
  "sources": [
    {
      "href": "https://www.basilicataturistica.it/wp-content/uploads/2023/05/APT_cartina_turistica_SassiDiMatera_2022-23.pdf",
      "label": "APT Basilicata — cartina turistica dei Sassi 2022–23 (PDF)"
    },
    {
      "href": "https://www.basilicataturistica.it/scopri-la-basilicata/matera-patrimonio-mondiale-dellumanita/scopri-gli-itinerari-di-matera/itinerario-il-piano-e-il-centro-storico/",
      "label": "Basilicata Turistica — il sistema delle acque nel centro storico"
    },
    {
      "href": "https://palombarolungo.it/orari-e-modalita-di-visita",
      "label": "Palombarolungo.it — formato della visita alla cisterna"
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
      "href": "/quanto-dura-la-visita/",
      "label": "Quanto dura la visita al Palombaro Lungo? Il percorso e l’attesa"
    },
    {
      "href": "/visita-con-bambini/",
      "label": "Palombaro Lungo con bambini e scuole: come preparare la visita"
    }
  ]
};

export default function EditorialPage() {
  unstable_setRequestLocale('it');
  return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: content.title, url: absoluteUrl('/matera-sotterranea/'), inLanguage: 'it' }} />
    <GuidePageTemplate {...content} />
  </NextIntlClientProvider>;
}
