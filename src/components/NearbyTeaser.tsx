'use client';
import Link from 'next/link';
import { nearbyAttractions } from '@/lib/nearby';
export default function NearbyTeaser({locale}:{locale:string}){
return <section className="section-container"><h2 className="section-title">{locale==='zh-hant'?'周邊景點與步行路線':'Cosa vedere nei dintorni'}</h2><p className="body-text mb-6">{locale==='zh-hant'?'由維托里奧威尼托廣場出發，探索馬泰拉石窟區、教堂、觀景台與博物館。':'Da Piazza Vittorio Veneto esplora belvedere, chiese, musei e quartieri storici dei Sassi.'}</p><div className="grid gap-4 md:grid-cols-3">{nearbyAttractions.slice(0,6).map(a=><Link key={a.slug} href={`/nearby/${a.slug}/`} className="card hover:opacity-90 transition-opacity"><p className="font-semibold">{a.name}</p><p className="text-sm mt-2" style={{color:'var(--color-text-secondary)'}}>{a.kind}</p></Link>)}</div><Link href="/nearby/" className="btn-primary inline-flex mt-8">{locale==='zh-hant'?'查看全部 12 個周邊景點':'Scopri tutte le 12 attrazioni'} →</Link><div className="divider mt-16" /></section>;
}
