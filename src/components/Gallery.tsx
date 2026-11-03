'use client';

import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('gallery');
  return (
    <section className="section-container relative z-10" id="foto">
      <h2 className="section-title">{t('title')}</h2>
      <figure className="max-w-3xl mx-auto">
        <a href="/photos/palombaro-lungo-theklan.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/photos/palombaro-lungo-theklan.jpg" alt={t('caption')} width={2592} height={3872}
            className="w-full h-auto max-h-[75vh] object-contain" loading="lazy" />
        </a>
        <figcaption className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>{t('caption')}</p>
          <p>{t('credit')} <a className="underline" href="https://commons.wikimedia.org/wiki/User:Theklan">Theklan</a> · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Palombaro_Lungo,_Matera,_Italia.jpg">{t('source')}</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
          <p>{t('changes')}</p>
          <p>{t('historicalNote')}</p>
        </figcaption>
      </figure>
      <p className="mt-8 text-center text-sm"><a className="underline" href={t('googleMapsLink')} target="_blank" rel="noopener noreferrer">{t('googleMapsDesc')}</a></p>
      <div className="divider mt-16" />
    </section>
  );
}
