import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { nearbyAttractions, nearbyBySlug } from '@/lib/nearby';
import { absoluteUrl } from '@/lib/site';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import itMessages from '@/messages/it.json';

export function generateStaticParams(){ return nearbyAttractions.map(item=>({slug:item.slug})); }
export function generateMetadata({params}:{params:{slug:string}}): Metadata {
 const item=nearbyBySlug(params.slug);
 if(!item) return {title:'Attrazione non trovata'};
 return {title:`${item.name} a Matera | Cosa vedere e come arrivare`,description:item.intro,alternates:{canonical:absoluteUrl(`/nearby/${item.slug}/`)}};
}
const source = 'https://www.basilicataturistica.it/scopri-la-basilicata/matera-patrimonio-mondiale-dellumanita/scopri-gli-itinerari-di-matera/itinerario-il-piano-e-il-centro-storico/';
export default function NearbyDetail({params}:{params:{slug:string}}){
 unstable_setRequestLocale('it');
 const a=nearbyBySlug(params.slug); if(!a) notFound();
 const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.query)}`;
 return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
  <GuidePageTemplate locale="it" title={a.name} intro={a.intro} links={[{href:'/nearby/',label:'Tutte le attrazioni nei dintorni'},{href:'/',label:'Palombaro Lungo · guida principale'},{href:'/come-arrivare/',label:'Come arrivare a Piazza Vittorio Veneto'}]}
  sections={[
   {title:'Esplora il luogo',paragraphs:[a.visit,'Questa tappa si inserisce in una visita a piedi nel centro di Matera: scegli il percorso in base al tempo disponibile e alle condizioni delle strade del centro storico.']},
   {title:'Consigli di visita e punti d’interesse',paragraphs:[a.intro,a.photo]},
   {title:'Storia, architettura e cultura',paragraphs:[a.history,'Osserva i materiali e il rapporto tra le forme dell’edificio, gli spazi urbani e il paesaggio dei Sassi, senza limitarti a una fotografia di passaggio.']},
   {title:'Orari di apertura e biglietti',paragraphs:[a.kind.includes('Quartiere') || a.kind.includes('Panorama') || a.kind.includes('Piazza') ? 'Le strade e le piazze pubbliche si percorrono generalmente senza biglietto; eventuali spazi interni, eventi o aree regolamentate hanno regole proprie.' : 'Per la visita agli interni, controlla orari, giorni di chiusura ed eventuali biglietti presso il gestore del luogo prima di organizzare la giornata. Non viene indicato un prezzo non verificato.']},
   {title:'Come arrivare dal Palombaro Lungo',paragraphs:[`Parti da Piazza Vittorio Veneto, dove si trova l’ingresso del Palombaro Lungo. Cerca “${a.name}” sulla mappa e segui il percorso pedonale aggiornato; i Sassi presentano salite, scalinate e tratti di pavimentazione irregolare.`, 'Evita di considerare i tempi di percorrenza come fissi: dislivelli e soste fotografiche incidono più della distanza in linea d’aria.']},
   {title:'Itinerario a piedi in tre tappe',paragraphs:['1. Inizia dalla grande cisterna sotterranea del Palombaro Lungo, e osserva l’antico sistema delle acque.','2. Raggiungi la destinazione seguendo le strade pubbliche e dedica una sosta alla sua storia e ai dettagli principali.','3. Completa la passeggiata con un belvedere o un quartiere dei Sassi vicino, scegliendo una via di ritorno compatibile con la tua mobilità.']},
   {title:'Foto, famiglie e consigli pratici',paragraphs:[a.photo,'Con bambini o persone con mobilità ridotta valuta preventivamente scalini, fondo stradale e eventuali accessi interni. Per fotografare dentro chiese e musei, rispetta le regole esposte.']},
   {title:'Dove soggiornare e cosa vedere dopo',paragraphs:['Scegliere un alloggio nel centro permette di raggiungere molti punti a piedi; nei rioni Sassi considera il trasporto dei bagagli e la presenza di scalinate.','Continua con un’altra tappa della guida ai dintorni: il centro storico offre panorami, chiese, musei e quartieri rupestri con caratteristiche differenti.']}
  ]}>
  <section className="section-container pb-10"><div className="card space-y-4">
   <h2 className="text-2xl font-semibold">Informazioni essenziali e navigazione</h2>
   <dl className="grid gap-3 sm:grid-cols-2 text-sm"><div><dt className="font-semibold">Nome</dt><dd>{a.subtitle}</dd></div><div><dt className="font-semibold">Categoria</dt><dd>{a.kind}</dd></div><div><dt className="font-semibold">Posizione</dt><dd>{a.address}</dd></div><div><dt className="font-semibold">Punto di partenza</dt><dd>Piazza Vittorio Veneto, Matera</dd></div></dl>
   <a href={maps} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">Apri posizione e indicazioni su Google Maps →</a>
  </div></section>
 </GuidePageTemplate>
 </NextIntlClientProvider>;
}
