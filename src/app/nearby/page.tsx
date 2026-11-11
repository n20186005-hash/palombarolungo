import type { Metadata } from 'next';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import itMessages from '@/messages/it.json';
import { nearbyAttractions } from '@/lib/nearby';
import { absoluteUrl } from '@/lib/site';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
export const metadata: Metadata={title:'Cosa vedere vicino al Palombaro Lungo | 12 tappe a Matera',description:'Scopri 12 attrazioni intorno al Palombaro Lungo: Sassi, belvedere, chiese, musei, castello e itinerari a piedi a Matera.',alternates:{canonical:absoluteUrl('/nearby/')}};
export default function NearbyIndex(){
 unstable_setRequestLocale('it');
 return <NextIntlClientProvider locale="it" messages={itMessages as unknown as AbstractIntlMessages}><main>
 <SiteHeader locale="it" /><section className="section-container pt-28 pb-12"><p className="text-sm mb-4" style={{color:'var(--color-text-muted)'}}>Matera · Itinerari a piedi</p><h1 className="text-4xl md:text-5xl font-bold mb-6">Cosa vedere vicino al Palombaro Lungo</h1><p className="body-text max-w-3xl">Dalla cisterna sotto Piazza Vittorio Veneto puoi raggiungere piazze, belvedere, chiese e i rioni dei Sassi. Le dodici schede ti aiutano a scegliere un percorso a piedi con storia, consigli e navigazione.</p><Link className="underline inline-block mt-5" href="/">← Torna al Palombaro Lungo</Link></section>
 <section className="section-container pb-16"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{nearbyAttractions.map(a=><Link className="card hover:opacity-90 transition-opacity" href={`/nearby/${a.slug}/`} key={a.slug}><p className="text-xs mb-2" style={{color:'var(--color-text-muted)'}}>{a.kind}</p><h2 className="text-lg font-bold mb-3">{a.name}</h2><p className="text-sm" style={{color:'var(--color-text-secondary)'}}>{a.intro}</p><span className="inline-block mt-4 underline text-sm">Leggi la guida →</span></Link>)}</div></section>
 <Footer locale="it"/></main></NextIntlClientProvider>;
}
