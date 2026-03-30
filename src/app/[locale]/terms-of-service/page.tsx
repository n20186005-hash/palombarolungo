import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import TermsOfServiceClient from './TermsOfServiceClient';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = `https://palombarolungo.com/${locale}/terms-of-service/`;
  
  return {
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': 'https://palombarolungo.com/en/terms-of-service/',
        'it': 'https://palombarolungo.com/it/terms-of-service/',
        'zh-Hant': 'https://palombarolungo.com/zh-hant/terms-of-service/',
        'x-default': 'https://palombarolungo.com/en/terms-of-service/',
      },
    },
  };
}

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <TermsOfServiceClient locale={locale} />;
}
