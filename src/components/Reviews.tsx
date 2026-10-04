'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/site';

export default function Reviews() {
  const t = useTranslations('reviews');
  const highlights = t.raw('highlights') as string[];

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-10 text-sm max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
        {t('declaration')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            Google Maps
          </p>
          <p className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {siteConfig.ratingValue.toFixed(1)} / 5
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {t('stats', { reviewCount: siteConfig.reviewCount.toLocaleString('it-IT') })}
          </p>
        </div>
        <div className="card">
          <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            {t('whatVisitorsSay')}
          </p>
          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t('seeMore')} &rarr;
        </a>
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
