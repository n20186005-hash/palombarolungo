'use client';

import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

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
}: {
  title: string;
  intro: string;
  sections: Section[];
  links: LinkItem[];
}) {
  return (
    <main>
      <SiteHeader locale="it" homeHref="/" />

      <section className="section-container pt-32 pb-10 md:pt-40">
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
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="divider mt-16" />
        </section>
      ))}

      <Footer locale="it" />
    </main>
  );
}
