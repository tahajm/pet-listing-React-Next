import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const title = 'Pets B.V.';
const description = 'Browse and filter pets available for adoption at Pets B.V.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
  },
};

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
