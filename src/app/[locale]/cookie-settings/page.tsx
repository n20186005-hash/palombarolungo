import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = `https://palombarolungo.com/${locale}/cookie-settings/`;
  
  return {
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': 'https://palombarolungo.com/en/cookie-settings/',
        'it': 'https://palombarolungo.com/it/cookie-settings/',
        'zh-Hant': 'https://palombarolungo.com/zh-hant/cookie-settings/',
        'x-default': 'https://palombarolungo.com/en/cookie-settings/',
      },
    },
  };
}

export default function CookieSettingsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CookieSettingsClient locale={locale} />;
}
