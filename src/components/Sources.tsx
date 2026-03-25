'use client';

import { useTranslations } from 'next-intl';

export default function Sources() {
  const t = useTranslations('sources');
  const items: string[] = t.raw('items');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-6 text-sm">{t('description')}</p>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-text-muted)' }} />
            {item}
          </li>
        ))}
      </ul>
      <div className="divider mt-16" />
    </section>
  );
}
