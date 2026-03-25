'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');

  return (
    <footer className="section-container py-12">
      {/* Disclaimer */}
      <div
        className="mb-10 px-5 py-4 rounded-lg text-xs leading-relaxed space-y-2"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
      >
        <p>{t('disclaimer')}</p>
        <p className="italic">{t('disclaimerEn')}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <Link href={`/${locale}/privacy-policy`} className="hover:underline">
            {t('privacyPolicy')}
          </Link>
          <Link href={`/${locale}/terms-of-service`} className="hover:underline">
            {t('termsOfService')}
          </Link>
          <Link href={`/${locale}/cookie-settings`} className="hover:underline">
            {t('cookieSettings')}
          </Link>
        </div>
        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          {t('support')}:{' '}
          <a href="mailto:claritleonelmnicol@gmail.com" className="hover:underline">
            claritleonelmnicol@gmail.com
          </a>
        </div>
      </div>
      <p className="text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
        {t('copyright')}
      </p>
    </footer>
  );
}
