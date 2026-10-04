import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import TermsOfServiceClient from './TermsOfServiceClient';
import { absoluteUrl } from '@/lib/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = absoluteUrl(locale === 'it' ? '/it/terms-of-service/' : '/zh-hant/terms-of-service/');
  
  return {
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        it: absoluteUrl('/it/terms-of-service/'),
        'zh-Hant': absoluteUrl('/zh-hant/terms-of-service/'),
        'x-default': absoluteUrl('/it/terms-of-service/'),
      },
    },
  };
}

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <TermsOfServiceClient locale={locale} />;
}
