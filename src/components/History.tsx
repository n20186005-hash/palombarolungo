'use client';

import { useTranslations } from 'next-intl';

export default function History() {
  const t = useTranslations('history');
  const timeline = t.raw('timeline') as Array<{
    year: string;
    text: string;
  }>;

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-10 max-w-3xl">{t('description')}</p>
      <div className="space-y-6">
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-5">
            <div
              className="flex-shrink-0 w-24 text-right pt-0.5"
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                {item.year}
              </span>
            </div>
            <div
              className="flex-shrink-0 w-px self-stretch"
              style={{ backgroundColor: 'var(--color-border)' }}
            />
            <div className="pb-2">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
