'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

function LinkedParagraph({ text }: { text: string }) {
  return <>{text.split(/(https:\/\/www\.palombarolungo\.it\/|palombarolungo\.it|claritleonelmnicol@gmail\.com)/g).map((part, i) => {
    if (part === 'claritleonelmnicol@gmail.com') return <a key={i} href={`mailto:${part}`} className="underline">{part}</a>;
    if (part === 'palombarolungo.it' || part.startsWith('https://')) return <a key={i} href={part.startsWith('https://') ? part : `https://www.${part}/`} target="_blank" rel="noopener noreferrer" className="underline">{part}</a>;
    return part;
  })}</>;
}

type Section = {
  title: string;
  paragraphs: string[];
};

type LinkItem = {
  href: string;
  label: string;
};

export default function GuidePageTemplate({
  title,
  intro,
  sections,
  links,
  locale = 'it',
  sources = [],
  checkedDate,
  children,

}: {
  title: string;
  intro: string;
  sections: Section[];
  links: LinkItem[];
  locale?: 'it' | 'zh-hant';
  sources?: LinkItem[];
  checkedDate?: string;
  children?: ReactNode;
}) {
  return (
    <main>
      <SiteHeader locale={locale} homeHref={locale === 'it' ? '/' : '/zh-hant/'} />

      <section className="section-container pt-28 pb-10 md:pt-28">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Palombaro Lungo Matera
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>
            {intro}
          </p>
        </div>
      </section>

      <section className="section-container pb-6">
        <div className="grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="card hover:opacity-90 transition-opacity">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {link.label} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {children}

      {sections.map((section) => (
        <section key={section.title} className="section-container">
          <div className="max-w-4xl">
            <h2 className="section-title">{section.title}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.title}-${index}`}
                  className="body-text"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <LinkedParagraph text={paragraph} />
                </p>
              ))}
            </div>
          </div>
          <div className="divider mt-16" />
        </section>
      ))}

      {checkedDate && <section className="section-container pb-10">
        <p className="body-text text-sm">{locale === 'it' ? 'A cura della redazione della guida indipendente. Fonti controllate il ' : '獨立指南編輯整理，資料核查日期：'}{checkedDate}.</p>
        <ul className="space-y-3 mt-4">
          {sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="underline">{source.label}</a></li>)}
        </ul>
      </section>}
      <Footer locale={locale} />
    </main>
  );
}
