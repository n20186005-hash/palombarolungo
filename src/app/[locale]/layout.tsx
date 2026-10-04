import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/config';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  unstable_setRequestLocale(locale);

  return {
    title: locale === 'zh-hant' ? 'Palombaro Lungo' : 'Palombaro Lungo Matera',
    description:
      locale === 'zh-hant'
        ? '探索 Palombaro Lungo，了解馬泰拉地下蓄水池的參觀資訊、票價與實用建議。'
        : 'Guida al Palombaro Lungo di Matera con orari, biglietti, prezzi, foto e consigli pratici per la visita.',
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
