'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { localizedPath } from '@/lib/site';

export default function PrivacyPolicyClient({ locale }: { locale: string }) {
  const t = useTranslations('privacyPolicy');
  const content = t.raw('content') as Array<{ heading: string; text: string }>;

  return (
    <main>
      <SiteHeader locale={locale} />

      <div className="section-container pt-8">
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
          <Link href={localizedPath(locale)} className="text-sm font-medium hover:underline" style={{ color: 'var(--color-accent)' }}>
            &larr; {locale === 'it' ? 'Torna alla home' : '返回首頁'}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
