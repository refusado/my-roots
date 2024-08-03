import type { Metadata } from 'next';
import { Montserrat as FontSans } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '@/components/Footer';

const sans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'My roots',
  description: "Help the world's environment by making it more green",
  icons: 'plant.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="bg-grass7 text-dark-grass2 relative size-full overflow-x-hidden overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
