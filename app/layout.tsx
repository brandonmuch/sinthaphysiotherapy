import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@/components/ui/PatternWaves.css';
import '@/components/ui/SplashCursor.css';
import '@/components/ui/AccordionGallery.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import SplashCursor from '@/components/ui/SplashCursor';

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
  title: 'Sintha Physiotherapy | Wezi Nyimba Physiotherapists Inc.',
  description: 'Specialised physiotherapy for children and adults in Fourways, Johannesburg. Personalised rehabilitation and respiratory care.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased">
        <SplashCursor
          style={{}}
          rainbow={false}
          adaptive
          colors={['#1F0A29', '#DBC1E8']}
          colorSpeed={0.35}
          size={0.7}
          force={0.58}
          swirl={3.5}
          trail={0.9}
          clickSplash
          intensity={1.05}
          glow={0.22}
          quality="medium"
          zIndex={40}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
