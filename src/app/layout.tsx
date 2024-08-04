import type { Metadata } from 'next';
import { Montserrat as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '@/components/Footer';
import { MouseTrackerProvider } from '@/components/MouseTracker';

const sans = FontSans({ subsets: ['latin'], variable: '--font-sans' });
const serif = localFont({
  src: '../../public/PPFragment-GlareLight.otf',
  variable: '--font-serif',
});

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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <MouseTrackerProvider>
        <body className="relative size-full overflow-x-hidden overflow-y-scroll bg-grass6/80 text-dark-grass2">
          <Header />
          {children}
          <Footer />
        </body>
      </MouseTrackerProvider>
    </html>
  );
}
