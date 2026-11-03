'use client';

import { useTranslations } from 'next-intl';

export default function Sources() {
  const t = useTranslations('sources');
  const items: string[] = t.raw('items');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-6 text-sm">{t('description')}</p>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-text-muted)' }} />
            {item}
          </li>
        ))}
      </ul>
      <ul className="space-y-3 mt-6 text-sm">
        <li><a className="underline" href="https://palombarolungo.it/" target="_blank" rel="noopener noreferrer">Palombarolungo.it</a></li>
        <li><a className="underline" href="https://palombarolungo.it/orari-e-modalita-di-visita" target="_blank" rel="noopener noreferrer">Palombarolungo.it — Orari e modalità di visita</a></li>
        <li><a className="underline" href="https://www.basilicataturistica.it/scopri-la-basilicata/matera-patrimonio-mondiale-dellumanita/scopri-gli-itinerari-di-matera/itinerario-il-piano-e-il-centro-storico/" target="_blank" rel="noopener noreferrer">Basilicata Turistica</a></li>
        <li><a className="underline" href="https://maps.app.goo.gl/cUfXtK1QWiaNUHzB8" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
      </ul>
      <div className="divider mt-16" />
    </section>
  );
}
