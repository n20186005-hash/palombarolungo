'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const photos = Array.from({ length: 15 }, (_, i) => ({
  url: `/gallery/images (${i + 1}).jpg`,
  alt: `Palombaro Lungo Gallery Image ${i + 1}`,
}));

const IMAGES_PER_PAGE = 6;

export default function Gallery() {
  const t = useTranslations('gallery');
  const captions: string[] = t.raw('captions') || [];
  
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(photos.length / IMAGES_PER_PAGE);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % photos.length);
    }
  };
  
  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
    }
  };

  const currentPhotos = photos.slice(currentPage * IMAGES_PER_PAGE, (currentPage + 1) * IMAGES_PER_PAGE);

  return (
    <section className="section-container relative z-10">
      <h2 className="section-title">{t('title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPhotos.map((photo, i) => {
          const globalIndex = currentPage * IMAGES_PER_PAGE + i;
          return (
            <figure 
              key={globalIndex} 
              className="group overflow-hidden rounded-lg cursor-pointer" 
              style={{ border: '1px solid var(--color-border)' }}
              onClick={() => openLightbox(globalIndex)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={photo.url}
                  alt={captions[globalIndex] || photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm truncate" style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-card)' }}>
                {captions[globalIndex] || photo.alt}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          onClick={prevPage}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Previous page"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
          {currentPage + 1} / {totalPages}
        </span>
        <button 
          onClick={nextPage}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Next page"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="mt-12 text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        <a 
          href={t('googleMapsLink')} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
        >
          {t('googleMapsDesc')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>

      <div className="divider mt-16" />

      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={prevLightboxImage}
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <img 
            src={photos[lightboxIndex].url} 
            alt={captions[lightboxIndex] || photos[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={nextLightboxImage}
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
            {captions[lightboxIndex] || photos[lightboxIndex].alt} ({lightboxIndex + 1} / {photos.length})
          </div>
        </div>
      )}
    </section>
  );
}
