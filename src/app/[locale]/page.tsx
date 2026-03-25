import { unstable_setRequestLocale } from 'next-intl/server';
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
