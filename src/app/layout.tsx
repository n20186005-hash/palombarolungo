import '@/styles/globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'Palombaro Lungo Matera',
  description: 'Guida al Palombaro Lungo di Matera con orari, biglietti, prezzi, foto e consigli pratici per la visita.',
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
        {children}
      </body>
    </html>
  );
}
