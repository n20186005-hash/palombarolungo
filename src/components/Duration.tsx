'use client';

import { useTranslations } from 'next-intl';

export default function Duration() {
  const t = useTranslations('duration');
  const items = t.raw('items') as Array<{
    heading: string;
    text: string;
  }>;

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-10 max-w-3xl">{t('description')}</p>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="card">
            <h3 className="font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
              {item.heading}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
