import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meeting Programs',
    template: '%s | Laketown Ward',
  },
  description: 'Sacrament meeting programs and agendas for Laketown Ward.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} flex min-h-screen flex-col`}>
        <Header wardName="Laketown Ward" />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}