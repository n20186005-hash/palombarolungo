'use client';

import { useTranslations } from 'next-intl';

export default function WorthIt() {
  const t = useTranslations('worthIt');
  const tf = useTranslations('footer');
  const pros: string[] = t.raw('pros');
  const cons: string[] = t.raw('cons');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-10 max-w-3xl">{t('description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <ul className="space-y-3">
            {pros.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="mt-0.5 flex-shrink-0 text-green-500 font-bold">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {cons.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="mt-0.5 flex-shrink-0 text-red-400 font-bold">&minus;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card max-w-3xl">
        <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--color-text-primary)' }}>
          {t('verdict')}
        </p>
        <p className="text-xs mt-3 italic" style={{ color: 'var(--color-text-muted)' }}>
          {tf('priceNote')}
        </p>
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
