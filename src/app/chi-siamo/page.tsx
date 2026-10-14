import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: "Chi siamo · Guida indipendente",
  description: "Palombarolungo.com è una guida turistica indipendente dedicata alla storia e alla visita del Palombaro Lungo di Matera.",
  alternates: { canonical: absoluteUrl('/chi-siamo/') },
};

export default function Page() {
  unstable_setRequestLocale('it');
  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <GuidePageTemplate
        title={"Chi siamo · Guida indipendente"}
        intro={"Palombarolungo.com è una guida turistica indipendente dedicata alla storia e alla visita del Palombaro Lungo di Matera."}
        links={[
          { href: '/', label: 'Torna alla guida' },
          { href: '/chi-siamo/', label: 'Chi siamo' },
          { href: '/note-legali/', label: 'Note legali' },
          { href: '/contatti/', label: 'Contatti della redazione' },
        ]}
        sections={[
  {
    "title": "Identità e indipendenza",
    "paragraphs": [
      "Questa è una pubblicazione informativa di terze parti, non il sito ufficiale del luogo. Non è gestita, autorizzata, sponsorizzata o approvata dai proprietari o dai gestori del Palombaro Lungo, né da enti pubblici o organizzazioni turistiche ufficiali."
    ]
  },
  {
    "title": "Metodo editoriale",
    "paragraphs": [
      "Raccogliamo e rielaboriamo informazioni pubbliche e riferimenti utili per i viaggiatori. Le fonti sono indicate nella guida. Orari, prezzi, modalità di accesso, recapiti e valutazioni possono cambiare e devono essere verificati prima della visita.",
      "Il nome del luogo serve a identificare l’oggetto della guida. Non implica che la redazione possieda il sito culturale o rappresenti i suoi gestori."
    ]
  },
  {
    "title": "Correzioni e trasparenza",
    "paragraphs": [
      "Per segnalare errori, informazioni superate o questioni relative ai diritti, contatta la redazione tramite la pagina Contatti. Questa guida non vende biglietti e non gestisce visite, prenotazioni o rimborsi."
    ]
  }
]}
      />
    </NextIntlClientProvider>
  );
}
