import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from 'next/font/google';
import { BrokerReferencePersistence } from '@/features/attribution/components/broker-reference-persistence';
import { SiteFooter } from '@/shared/components/layout/site-footer';
import { SiteHeader } from '@/shared/components/layout/site-header';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vemari.com.br'),
  title: { default: 'Vemari Empreendimentos', template: '%s | Vemari' },
  description: 'Empreendimentos Vemari. Conheça territórios, projetos e especialistas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-vemari-ivory font-sans text-vemari-ink antialiased">
        <Suspense fallback={null}>
          <BrokerReferencePersistence />
        </Suspense>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
