import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = `https://palombarolungo.com/${locale}/privacy-policy`;
  
  return {
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': 'https://palombarolungo.com/en/privacy-policy',
        'it': 'https://palombarolungo.com/it/privacy-policy',
        'zh-Hant': 'https://palombarolungo.com/zh-hant/privacy-policy',
        'x-default': 'https://palombarolungo.com/en/privacy-policy',
      },
    },
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <PrivacyPolicyClient locale={locale} />;
}
