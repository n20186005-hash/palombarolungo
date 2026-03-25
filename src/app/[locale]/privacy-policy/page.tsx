import { unstable_setRequestLocale } from 'next-intl/server';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <PrivacyPolicyClient locale={locale} />;
}
