import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Palombaro Lungo',
  description: 'Underground water cistern beneath Piazza Vittorio Veneto, Matera, Italy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
