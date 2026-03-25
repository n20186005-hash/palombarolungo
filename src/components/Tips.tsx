'use client';

import { useTranslations } from 'next-intl';

export default function Tips() {
  const t = useTranslations('tips');
  const items = t.raw('items') as Array<{
    number: number;
    title: string;
    text: string;
  }>;

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <div className="space-y-6">
        {items.map((tip) => (
          <div key={tip.number} className="flex gap-5">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            >
              {tip.number}
            </div>
            <div>
              <h3 className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>
                {tip.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {tip.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
