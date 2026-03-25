'use client';

import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as Array<{
    name: string;
    date: string;
    stars: number;
    text: string;
  }>;

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-10 text-sm max-w-3xl" style={{ color: 'var(--color-text-muted)' }}>
        {t('declaration')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((review, i) => (
          <div key={i} className="card">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>
                {review.name}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {review.date}
              </span>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <span key={si} className={si < review.stars ? 'text-yellow-500' : 'text-gray-300'} style={{ fontSize: '14px' }}>
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://maps.app.goo.gl/umLVuP6GABSLL3dN9"
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
