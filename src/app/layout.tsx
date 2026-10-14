import '@/styles/globals.css';
import IndependenceNotice from '@/components/IndependenceNotice';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: 'Palombaro Lungo Matera · Guida indipendente non ufficiale', template: '%s · Guida indipendente non ufficiale' },
  description: 'Guida indipendente non ufficiale al Palombaro Lungo di Matera con orari, biglietti, prezzi, foto e consigli pratici per la visita.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.removeAttribute('data-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen"
        style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}
      >
        <IndependenceNotice />
        {children}
      </body>
    </html>
  );
}
