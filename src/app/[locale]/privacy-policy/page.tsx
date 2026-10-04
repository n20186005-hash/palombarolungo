import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';
import { absoluteUrl } from '@/lib/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = absoluteUrl(locale === 'it' ? '/it/privacy-policy/' : '/zh-hant/privacy-policy/');
  
  return {
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        it: absoluteUrl('/it/privacy-policy/'),
        'zh-Hant': absoluteUrl('/zh-hant/privacy-policy/'),
        'x-default': absoluteUrl('/it/privacy-policy/'),
      },
    },
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <PrivacyPolicyClient locale={locale} />;
}
