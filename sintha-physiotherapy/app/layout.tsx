import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { CustomCursor } from '@/components/providers/CustomCursor';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['300', '400', '500'], style: ['normal', 'italic'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sintha Physiotherapy — Specialised Physiotherapy, Fourways Johannesburg',
  description: 'HPCSA-registered specialised physiotherapy for children and adults. Respiratory, paediatric, neurological, and home-based care from Fourways, Johannesburg.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}