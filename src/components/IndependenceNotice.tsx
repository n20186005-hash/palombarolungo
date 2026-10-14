'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function IndependenceNotice() {
  const isChinese = usePathname().startsWith('/zh-hant');

  return (
    <aside
      aria-label={isChinese ? '獨立非官方旅遊指南聲明' : 'Guida indipendente non ufficiale'}
      lang={isChinese ? 'zh-Hant' : 'it'}
      className="section-container pt-24 pb-4 md:pt-24 md:pb-4"
    >
      <div className="card text-sm leading-relaxed">
        <p className="font-semibold mb-2">
          {isChinese ? '獨立旅遊指南 · 非官方網站' : 'Guida turistica indipendente · Sito non ufficiale'}
        </p>
        <p>
          {isChinese
            ? 'Palombarolungo.com 並非馬泰拉 Palombaro Lungo 景點的官方網站。本指南並非由景點所有者、管理者或政府機關營運、授權、贊助或認可。'
            : 'Palombarolungo.com non è il sito ufficiale del Palombaro Lungo di Matera. Non è gestito, autorizzato, sponsorizzato o approvato dai proprietari, dai gestori del sito culturale o da enti pubblici.'}
        </p>
        <p className="mt-2">
          {isChinese
            ? '開放時間、票價與參觀方式僅供參考，可能變動。出發前請至 '
            : 'Orari, prezzi e modalità di visita sono indicativi e possono cambiare. Verifica le informazioni prima della visita su '}
          <a href="https://www.palombarolungo.it/" target="_blank" rel="noopener noreferrer" className="underline">
            {isChinese ? 'palombarolungo.it（外部參觀資訊網站）' : 'palombarolungo.it (sito esterno di riferimento per la visita)'}
          </a>
          {isChinese ? ' 核實。' : '.'}
        </p>
        <nav aria-label={isChinese ? '本指南資訊' : 'Informazioni sulla guida'} className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
          <Link href="/chi-siamo/" className="underline">{isChinese ? '關於本指南（義大利文）' : 'Chi siamo'}</Link>
          <Link href="/note-legali/" className="underline">{isChinese ? '法律說明（義大利文）' : 'Note legali'}</Link>
          <Link href="/contatti/" className="underline">{isChinese ? '編輯部聯絡方式（義大利文）' : 'Contatti della redazione'}</Link>
        </nav>
      </div>
    </aside>
  );
}
