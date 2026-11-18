import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './original-site.css';
import './original-site-structure.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const openSans = localFont({
  src: [
    { path: './fonts/OpenSans-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/OpenSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/OpenSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/OpenSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/OpenSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Sintha Physiotherapy | Wezi Nyimba Physiotherapists Inc.',
    template: '%s | Sintha Physiotherapy',
  },
  description:
    'Specialised physiotherapy for children and adults in Fourways, Johannesburg. Personalised rehabilitation and respiratory care.',
  metadataBase: new URL('https://www.sinthaphysiotherapy.co.za'),
  alternates: { canonical: './' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
