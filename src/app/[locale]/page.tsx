import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Science from '@/components/Science';
import History from '@/components/History';
import Interior from '@/components/Interior';
import WorthIt from '@/components/WorthIt';
import Duration from '@/components/Duration';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Tips from '@/components/Tips';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const currentUrl = `https://palombarolungo.com/${locale}/`;
  
  return {
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': 'https://palombarolungo.com/en/',
        'it': 'https://palombarolungo.com/it/',
        'zh-Hant': 'https://palombarolungo.com/zh-hant/',
        'x-default': 'https://palombarolungo.com/en/',
      },
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Hero locale={locale} />
      <Introduction />
      <Science />
      <History />
      <Interior />
      <WorthIt />
      <Duration />
      <Gallery />
      <Reviews />
      <Tips />
      <MapEmbed />
      <Sources />
      <Footer locale={locale} />
    </main>
  );
}
