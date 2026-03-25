'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { localeNames, type Locale } from '@/i18n/config';

export default function LanguageToggle({ locale }: { locale: string }) {
  const pathname = usePathname();

  const getTargetPath = (targetLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  const otherLocale: Locale = locale === 'it' ? 'zh-hant' : 'it';

  return (
    <Link
      href={getTargetPath(otherLocale)}
      className="text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-secondary)',
      }}
    >
      {localeNames[otherLocale]}
    </Link>
  );
}
