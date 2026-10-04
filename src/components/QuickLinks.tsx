'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function QuickLinks() {
  const t = useTranslations('quickLinks');
  const items = t.raw('items') as Array<{
    href: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="section-container pt-10">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-8 max-w-3xl">{t('description')}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="card hover:opacity-90 transition-opacity">
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              {item.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {item.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
