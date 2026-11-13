import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sintha Physiotherapy — Specialised Physiotherapy, Fourways Johannesburg',
  description: 'HPCSA-registered specialised physiotherapy for children and adults.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Load fonts directly via standard link tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=Inter:wght@300..700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}