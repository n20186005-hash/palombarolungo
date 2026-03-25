'use client';

import { useTranslations } from 'next-intl';

export default function Introduction() {
  const t = useTranslations('introduction');
  const highlights: string[] = t.raw('highlights');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-8 max-w-3xl">{t('description')}</p>
      <ul className="space-y-3">
        {highlights.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 body-text">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
            {item}
          </li>
        ))}
      </ul>
      <div className="divider mt-16" />
    </section>
  );
}
