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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-4 md:px-6 py-4"
      style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
    >
      <Link
        href={homeHref ?? (locale === 'it' ? '/' : `/${locale}/`)}
        className="min-w-0 text-xs sm:text-sm font-semibold tracking-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {t('siteTitle')}
        <span className="block text-[10px] sm:text-xs font-normal">{t('siteRole')}</span>
      </Link>
      <div className="flex shrink-0 items-center gap-3">
        <LanguageToggle locale={locale} />
        <ThemeToggle />
      </div>
    </header>
  );
}
