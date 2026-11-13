import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

// Load Open Sans locally from your app/fonts folder
const openSans = localFont({
  src: [
    {
      path: './fonts/OpenSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-open-sans',
});

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