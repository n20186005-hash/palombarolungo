const articleUrl = 'https://www.sassilive.it/cultura-e-spettacoli/terza-pagina/online-il-sito-www-palombarolungo-com-per-scoprire-lipogeo-nel-cuore-del-centro-storico-di-matera/';

export default function MediaCoverage({ locale = 'it' }: { locale?: string }) {
  const chinese = locale === 'zh-hant';
  return (
    <section className="section-container" aria-labelledby="media-coverage-title">
      <div className="max-w-4xl">
        <h2 id="media-coverage-title" className="section-title">{chinese ? '媒體報導' : 'Rassegna stampa'}</h2>
        <p className="body-text mb-3"><strong>SassiLive</strong> · <time dateTime="2026-11-02">{chinese ? '2026 年 11 月 2 日' : '2 novembre 2026'}</time></p>
        <p className="body-text mb-4">{chinese
          ? 'SassiLive 介紹了我們的獨立、非官方 Palombaro Lungo 指南，以及協助旅客認識馬泰拉文化遺產的項目。'
          : 'Il 2 novembre 2026, SassiLive ha presentato il nostro progetto di guida indipendente e non ufficiale dedicata al Palombaro Lungo e alla conoscenza del patrimonio di Matera.'}</p>
        <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="underline">{chinese ? '閱讀 SassiLive 原文報導' : 'Leggi l’articolo su SassiLive'}</a>
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
