import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Sintha Physiotherapy | Wezi Nyimba Physiotherapists Inc.',
  description: 'Sintha Physiotherapy is a specialised physiotherapy practice. We offer comprehensive rehabilitation and specialised respiratory care.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}