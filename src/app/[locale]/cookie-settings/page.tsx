import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';
import { absoluteUrl } from '@/lib/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = absoluteUrl(locale === 'it' ? '/it/cookie-settings/' : '/zh-hant/cookie-settings/');
  
  return {
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        it: absoluteUrl('/it/cookie-settings/'),
        'zh-Hant': absoluteUrl('/zh-hant/cookie-settings/'),
        'x-default': absoluteUrl('/it/cookie-settings/'),
      },
    },
  };
}

export default function CookieSettingsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CookieSettingsClient locale={locale} />;
}
