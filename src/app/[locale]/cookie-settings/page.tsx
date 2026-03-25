import { unstable_setRequestLocale } from 'next-intl/server';
import CookieSettingsClient from './CookieSettingsClient';

export default function CookieSettingsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CookieSettingsClient locale={locale} />;
}
