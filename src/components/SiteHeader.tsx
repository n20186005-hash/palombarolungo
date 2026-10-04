'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader({
  locale,
  homeHref,
}: {
  locale: string;
  homeHref?: string;
}) {
  const t = useTranslations('header');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
    >
      <Link
        href={homeHref ?? (locale === 'it' ? '/' : `/${locale}/`)}
        className="text-sm font-semibold tracking-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {t('siteTitle')}
      </Link>
      <div className="flex items-center gap-3">
        <LanguageToggle locale={locale} />
        <ThemeToggle />
      </div>
    </header>
  );
}
