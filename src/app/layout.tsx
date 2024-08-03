import type { Metadata } from 'next';
import { Montserrat as FontSans } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';

const sans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'My roots',
  description: "Help the world's environment by making it more green",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="overflow-x-hidden overflow-y-scroll bg-zinc-900 text-zinc-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
