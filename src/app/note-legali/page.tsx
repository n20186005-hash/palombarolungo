import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: "Note legali · Sito non ufficiale",
  description: "Informazioni sull’identità di questa guida, sull’uso dei contenuti e sui riferimenti esterni.",
  alternates: { canonical: absoluteUrl('/note-legali/') },
};

export default function Page() {
  unstable_setRequestLocale('it');
  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <GuidePageTemplate
        title={"Note legali · Sito non ufficiale"}
        intro={"Informazioni sull’identità di questa guida, sull’uso dei contenuti e sui riferimenti esterni."}
        links={[
          { href: '/', label: 'Torna alla guida' },
          { href: '/chi-siamo/', label: 'Chi siamo' },
          { href: '/note-legali/', label: 'Note legali' },
          { href: '/contatti/', label: 'Contatti della redazione' },
        ]}
        sections={[
  {
    "title": "Nessuna affiliazione ufficiale",
    "paragraphs": [
      "Palombarolungo.com non è il sito ufficiale del Palombaro Lungo di Matera. Non è gestito, autorizzato, sponsorizzato o approvato dai proprietari o gestori del luogo, né da enti pubblici. La redazione non agisce per loro conto."
    ]
  },
  {
    "title": "Informazioni per la visita",
    "paragraphs": [
      "Orari, prezzi, agevolazioni, accessibilità e modalità di visita sono indicativi. Non costituiscono comunicazioni ufficiali, offerte di vendita o garanzie di ingresso. Verifica le informazioni sul sito esterno palombarolungo.it prima di partire. Il servizio di visita dipende dal gestore del luogo; questa guida non vende biglietti o gestisce prenotazioni."
    ]
  },
  {
    "title": "Nomi, immagini e diritti",
    "paragraphs": [
      "Nomi e denominazioni sono usati per identificare il luogo descritto. I diritti su marchi, fotografie, mappe e contenuti di terzi restano ai rispettivi titolari. Nessuna indicazione di fonte sostituisce una licenza o un’autorizzazione.",
      "Per segnalazioni di copyright indica il tuo recapito, l’URL della pagina, il materiale interessato e gli elementi che documentano la titolarità o l’autorizzazione a rappresentare il titolare. La redazione esaminerà la segnalazione e valuterà correzioni o rimozioni."
    ]
  },
  {
    "title": "Collegamenti e responsabilità",
    "paragraphs": [
      "I siti esterni sono gestiti da terzi e seguono le proprie condizioni e informative. Il collegamento non implica collaborazione o approvazione. La guida ha finalità informativa; restano ferme le responsabilità e i diritti previsti dalla legge applicabile."
    ]
  }
]}
      />
    </NextIntlClientProvider>
  );
}
