'use client';

import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const th = useTranslations('header');
  const tf = useTranslations('footer');
  const tags: string[] = t.raw('tags');

  return (
    <section className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
          {th('siteTitle')}
        </span>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </header>

      <div className="section-container pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}>
            <span className="text-yellow-500">&#9733;</span> {t('rating')}
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>({t('reviewCount')})</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}>
            <span className="text-green-500">&#9679;</span> {t('hours')}
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }} title={tf('priceNote')}>
            {t('ticket')} <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>*</span>
          </span>
        </div>

        <p className="text-xs mb-6" style={{ color: 'var(--color-text-muted)' }}>
          {tf('priceNote')}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="tag-pill">{tag}</span>
          ))}
        </div>

        <a
          href="https://maps.app.goo.gl/Q5HFzcgdtQLVFm1j9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t('openMaps')} &rarr;
        </a>
      </div>

      <div className="divider" />
    </section>
  );
}
