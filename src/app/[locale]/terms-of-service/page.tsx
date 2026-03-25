import { unstable_setRequestLocale } from 'next-intl/server';
import TermsOfServiceClient from './TermsOfServiceClient';

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <TermsOfServiceClient locale={locale} />;
}
