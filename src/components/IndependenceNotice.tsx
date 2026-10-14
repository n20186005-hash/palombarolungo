import Link from 'next/link';

export default function IndependenceNotice() {
  return (
    <aside aria-label="Guida indipendente non ufficiale" lang="it" className="section-container pt-24 pb-4 md:pt-24 md:pb-4">
      <div className="card text-sm leading-relaxed">
        <p className="font-semibold mb-2">Guida turistica indipendente · Sito non ufficiale</p>
        <p>Palombarolungo.com non è il sito ufficiale del Palombaro Lungo di Matera. Non è gestito, autorizzato, sponsorizzato o approvato dai proprietari, dai gestori del sito culturale o da enti pubblici.</p>
        <p className="mt-2">Orari, prezzi e modalità di visita sono indicativi e possono cambiare. Verifica le informazioni prima della visita su{' '}
          <a href="https://www.palombarolungo.it/" target="_blank" rel="noopener noreferrer" className="underline">palombarolungo.it (sito esterno di riferimento per la visita)</a>.
        </p>
        <nav aria-label="Informazioni sulla guida" className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
          <Link href="/chi-siamo/" className="underline">Chi siamo</Link>
          <Link href="/note-legali/" className="underline">Note legali</Link>
          <Link href="/contatti/" className="underline">Contatti della redazione</Link>
        </nav>
      </div>
    </aside>
  );
}
