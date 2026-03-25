'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';

export default function PrivacyPolicyClient({ locale }: { locale: string }) {
  const t = useTranslations('privacyPolicy');
  const th = useTranslations('header');
  const content = t.raw('content') as Array<{ heading: string; text: string }>;

  return (
    <main>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
          {th('siteTitle')}
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </header>

      <div className="section-container pt-32">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-sm mb-10" style={{ color: 'var(--color-text-muted)' }}>{t('lastUpdated')}</p>
        <div className="space-y-8 max-w-3xl">
          {content.map((section, i) => (
            <div key={i}>
              <h2 className="font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>{section.heading}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-16">
          <Link href={`/${locale}`} className="text-sm font-medium hover:underline" style={{ color: 'var(--color-accent)' }}>
            &larr; {locale === 'it' ? 'Torna alla home' : '返回首頁'}
          </Link>
        </div>
      </div>
    </main>
  );
}
