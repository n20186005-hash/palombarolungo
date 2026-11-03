import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import StructuredData from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  "title": "Palombaro Lungo con bambini e scuole: come preparare la visita",
  "description": "Informazioni per famiglie e scuole: gratuità per minori, tariffa scolastiche, visita autonoma, gruppi e aspetti da verificare prima di entrare.",
  "alternates": {
    "canonical": "https://www.palombarolungo.com/visita-con-bambini/",
    "languages": {
      "it": "https://www.palombarolungo.com/visita-con-bambini/",
      "x-default": "https://www.palombarolungo.com/visita-con-bambini/"
    }
  }
};

const content = {
  "title": "Palombaro Lungo con bambini e scuole: come preparare la visita",
  "intro": "Per una famiglia o una classe, la preparazione riguarda sia il biglietto sia il tipo di esperienza. Il Palombaro Lungo propone un breve percorso autonomo dentro una cisterna. La pagina delle modalità di visita non elenca laboratori o visite animate per bambini; per eventuali attività specifiche chiedi direttamente al luogo.",
  "sections": [
    {
      "title": "Minori e scolastiche sono categorie distinte",
      "paragraphs": [
        "La pagina delle modalità di visita pubblica l’ingresso gratuito per i minori e una tariffa di 1,50 euro per le scolastiche. Sono due voci diverse: una classe non dovrebbe presumere che la gratuità individuale elimini la tariffa scolastica.",
        "La stessa pagina non specifica una soglia minima di alunni, una tariffa per accompagnatori o documenti da presentare. Prima di calcolare un preventivo di classe, chiedi chiarimenti al recapito del sito culturale, distinto dai contatti editoriali di questa guida."
      ]
    },
    {
      "title": "Come organizzare una classe",
      "paragraphs": [
        "Non è prevista la prenotazione né per singoli né per gruppi, e l’accesso dei gruppi è scaglionato. Organizza gli appuntamenti successivi con un margine: l’arrivo della classe non equivale a un ingresso simultaneo di tutti i partecipanti.",
        "Il pagamento avviene alla cassa in contanti o con carta. Per gruppi con più di venti partecipanti il sito ammette anche il bonifico; le condizioni pratiche vanno concordate con il luogo, senza inviare denaro o dati di pagamento a questa guida indipendente."
      ]
    },
    {
      "title": "Un’idea per spiegare la cisterna ai bambini",
      "paragraphs": [
        "Prima di scendere, può essere utile porre una domanda concreta: dove si conservava l’acqua prima di averla in casa? Nel percorso si possono poi cercare il grande contenitore scavato nella roccia e il rivestimento che lo rendeva impermeabile.",
        "È una proposta della redazione per accompagnare l’osservazione. Il supporto pubblicato dal sito è un volantino in più lingue; non sono indicati un programma didattico incluso, giochi o personale dedicato alle famiglie."
      ]
    },
    {
      "title": "Passeggini e necessità di accesso",
      "paragraphs": [
        "Le informazioni consultate descrivono passerelle sull’acqua ma non forniscono una scheda completa di accessibilità. Se servono un passeggino, assistenza nel percorso o informazioni su gradini e larghezze, verifica la situazione direttamente prima di acquistare.",
        "Non dedurre dalla brevità della visita che il percorso sia adatto a ogni esigenza. Chiedi anche come gestire un’uscita anticipata se il bambino non si trova a proprio agio. Il sito segnala inoltre che gli animali non sono ammessi; per esigenze specifiche chiedi chiarimenti al gestore."
      ]
    }
  ],
  "sources": [
    {
      "href": "https://palombarolungo.it/orari-e-modalita-di-visita",
      "label": "Palombarolungo.it — categorie di biglietto, gruppi e regole"
    },
    {
      "href": "https://palombarolungo.it/",
      "label": "Palombarolungo.it — percorso sulle passerelle"
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
      "href": "/matera-sotterranea/",
      "label": "Matera sotterranea: Palombaro Lungo, MateraSum e Casa Cava"
    }
  ]
};

export default function EditorialPage() {
  unstable_setRequestLocale('it');
  return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: content.title, url: absoluteUrl('/visita-con-bambini/'), inLanguage: 'it' }} />
    <GuidePageTemplate {...content} />
  </NextIntlClientProvider>;
}
