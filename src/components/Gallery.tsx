'use client';

import { useTranslations } from 'next-intl';

const photos = [
  { url: 'https://images.unsplash.com/photo-1567093528685-0b888e5a3281?w=800', alt: 'Palombaro Lungo vaulted ceilings' },
  { url: 'https://images.unsplash.com/photo-1599230876064-5bf7a9e37fa3?w=800', alt: 'Underground cistern walkways' },
  { url: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800', alt: 'Matera stone arches and columns' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800', alt: 'Water reflections underground' },
  { url: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800', alt: 'Underground water cathedral atmosphere' },
  { url: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800', alt: 'Cocciopesto walls detail' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const captions: string[] = t.raw('captions');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <figure key={i} className="group overflow-hidden rounded-lg" style={{ border: '1px solid var(--color-border)' }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={photo.url}
                alt={captions[i] || photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-card)' }}>
              {captions[i]}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
