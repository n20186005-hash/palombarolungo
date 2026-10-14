import type { Metadata } from 'next';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import itMessages from '@/messages/it.json';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contatti · Redazione e sito culturale",
  description: "Scegli il contatto corretto: la redazione di questa guida e i responsabili delle visite sono soggetti distinti.",
  alternates: { canonical: absoluteUrl('/contatti/') },
};

export default function Page() {
  unstable_setRequestLocale('it');
  return (
    <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
      <GuidePageTemplate
        title={"Contatti · Redazione e sito culturale"}
        intro={"Scegli il contatto corretto: la redazione di questa guida e i responsabili delle visite sono soggetti distinti."}
        links={[
          { href: '/', label: 'Torna alla guida' },
          { href: '/chi-siamo/', label: 'Chi siamo' },
          { href: '/note-legali/', label: 'Note legali' },
          { href: '/contatti/', label: 'Contatti della redazione' },
        ]}
        sections={[
  {
    "title": "Redazione di palombarolungo.com",
    "paragraphs": [
      "Per correzioni dei testi, segnalazioni su immagini e copyright, o domande sui contenuti della guida: claritleonelmnicol@gmail.com. Indica il link della pagina e descrivi il problema.",
      "Questo indirizzo appartiene alla redazione della guida indipendente. Non è il contatto del Palombaro Lungo e non può gestire biglietti, visite, prenotazioni o rimborsi. Non inviare documenti di identità o dati di pagamento."
    ]
  },
  {
    "title": "Informazioni sul sito culturale e sulla visita",
    "paragraphs": [
      "Consulta palombarolungo.it per orari e modalità di visita. Il recapito telefonico +39 339 363 8332 è pubblicato su quel sito esterno; non è il telefono della redazione. Non è possibile prenotare telefonicamente. Verifica i recapiti aggiornati direttamente sul sito di riferimento."
    ]
  }
]}
      />
    </NextIntlClientProvider>
  );
}
