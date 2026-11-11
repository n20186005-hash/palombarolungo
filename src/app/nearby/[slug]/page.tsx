import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { nearbyAttractions, nearbyBySlug } from '@/lib/nearby';
import { absoluteUrl } from '@/lib/site';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import itMessages from '@/messages/it.json';

export function generateStaticParams(){return nearbyAttractions.map(item=>({slug:item.slug}));}
export function generateMetadata({params}:{params:{slug:string}}): Metadata {
 const a=nearbyBySlug(params.slug); if(!a) return {title:'Attrazione non trovata'};
 return {title:`${a.name} a Matera | Storia, foto, itinerario e mappa`,description:a.intro,alternates:{canonical:absoluteUrl(`/nearby/${a.slug}/`)}};
}
export default function NearbyDetail({params}:{params:{slug:string}}){
 unstable_setRequestLocale('it');
 const a=nearbyBySlug(params.slug);if(!a)notFound();
 const search=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.geoQuery)}`;
 const directions=`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Palombaro Lungo, Piazza Vittorio Veneto, Matera, Italia')}&destination=${encodeURIComponent(a.geoQuery)}&travelmode=walking`;
 const openAccess=/Quartiere|Panorama|Piazza/.test(a.kind);
 return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}>
 <GuidePageTemplate locale="it" title={a.name} intro={a.intro} links={[{href:'/nearby/',label:'Altre attrazioni nei dintorni'},{href:'/',label:'Palombaro Lungo — guida principale'},{href:'/come-arrivare/',label:'Come arrivare al Palombaro Lungo'}]}
 sections={[
 {title:'Perché visitare '+a.name,paragraphs:[a.visit,a.extra.history]},
 {title:'Storia del luogo',paragraphs:[a.extra.history,a.history]},
 {title:'Architettura e particolari da osservare',paragraphs:[a.extra.architecture,a.photo]},
 {title:'Consigli di visita',paragraphs:[a.visit,a.extra.walk]},
 {title:'Orari e biglietti',paragraphs:[openAccess?'Gli spazi pubblici all’aperto sono generalmente percorribili senza biglietto. Per musei, chiese ed eventi interni verifica le condizioni specifiche.':'Controlla presso il gestore orari, giorni di chiusura, accessibilità e biglietti prima di entrare. I prezzi non sono indicati se non confermati.']},
 {title:'Percorso a piedi dal Palombaro Lungo',paragraphs:[a.extra.walk,'Il punto di partenza è Piazza Vittorio Veneto. Usa il pulsante Indicazioni a piedi per ottenere il percorso aggiornato verso questa destinazione, non verso la piazza di partenza. Nei Sassi il dislivello può incidere sui tempi.']},
 {title:'Punti fotografici',paragraphs:[a.extra.photo,a.photo]},
 {title:'Accessibilità, famiglie e trasporti',paragraphs:['Il centro storico di Matera si esplora prevalentemente a piedi. Alcune strade dei Sassi prevedono gradini e pavimentazione irregolare; verifica un itinerario adatto a passeggini o sedie a ruote.','Per arrivare in auto considera la viabilità e le limitazioni del centro: parcheggia dove consentito e termina la visita a piedi.']},
 {title:'Domande frequenti',paragraphs:a.extra.faq.map(f=>f.q+' — '+f.a)},
 {title:'Continuare la giornata',paragraphs:['Dopo questa tappa puoi scegliere un altro punto nella guida dei dintorni, combinando monumenti, quartieri storici e belvedere.','Per soggiornare nei Sassi considera dislivelli, scale e trasporto bagagli; la zona del Piano è spesso più pratica per gli spostamenti.']}
 ]}>
 <section className="section-container pb-10">
 <h2 className="section-title">Foto del luogo</h2>
 <figure className="max-w-4xl mb-10">
 <a href={a.image.source} target="_blank" rel="noopener noreferrer" title="Apri la fonte fotografica">
 <img src={a.image.url} alt={a.image.caption} loading="lazy" className="w-full rounded-lg max-h-[520px] object-cover" />
 </a>
 <figcaption className="text-sm mt-3" style={{color:'var(--color-text-muted)'}}>{a.image.caption} · <a href={a.image.source} target="_blank" rel="noopener noreferrer" className="underline">Fonte e dettagli della fotografia</a></figcaption>
 </figure>
 <div className="card space-y-4">
 <h2 className="text-2xl font-semibold">Indirizzo e mappa</h2>
 <dl className="grid gap-3 sm:grid-cols-2 text-sm"><div><dt className="font-semibold">Luogo</dt><dd>{a.subtitle}</dd></div><div><dt className="font-semibold">Tipologia</dt><dd>{a.kind}</dd></div><div><dt className="font-semibold">Posizione</dt><dd>{a.address}</dd></div><div><dt className="font-semibold">Partenza itinerario</dt><dd>Palombaro Lungo, Piazza Vittorio Veneto</dd></div></dl>
 <div className="flex gap-3 flex-wrap"><a className="btn-primary" href={search} target="_blank" rel="noopener noreferrer">Apri luogo su Google Maps →</a><a className="btn-primary" href={directions} target="_blank" rel="noopener noreferrer">Indicazioni a piedi →</a></div>
 </div></section>
 </GuidePageTemplate></NextIntlClientProvider>;
}
