'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import CardNav from '@/components/ui/CardNav';

const ITEMS = [
  {
    label: 'Care',
    description: 'Specialised physiotherapy for children and adults.',
    links: [
      { label: 'Respiratory care', href: '/services#advanced-respiratory-care' },
      { label: 'Paediatric care', href: '/services#paediatric-respiratory-support' },
      { label: 'Rehabilitation', href: '/services#neurological-vestibular-rehabilitation' }
    ]
  },
  {
    label: 'Explore',
    description: 'Learn more about the clinic and its approach.',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Sintha', href: '/about' },
      { label: 'All services', href: '/services' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    label: 'Get in touch',
    description: 'Appointments and enquiries.',
    links: [
      { label: 'Contact the team', href: '/contact' },
      { label: 'Call 067 072 1908', href: 'tel:+27670721908' },
      { label: 'WhatsApp', href: 'https://wa.me/27670721908' }
    ]
  }
];

const NAV_STYLE = {
  '--cn-bar': '68px',
  '--cn-inset': '8px',
  '--cn-gap': '8px',
  '--cn-radius': '20px',
  '--cn-logo': '34px',
  '--cn-shadow': '0 18px 44px -34px rgba(48, 19, 62, 0.58), 0 4px 12px -8px rgba(48, 19, 62, 0.22)',
  '--cn-panel': 'rgba(255, 255, 255, 0.92)',
  '--cn-edge': 'rgba(48, 19, 62, 0.09)',
  '--cn-highlight': 'rgba(255, 255, 255, 0.9)',
  '--cn-text': '#30133E',
  '--cn-muted': 'rgba(48, 19, 62, 0.62)',
  '--cn-hover': 'rgba(48, 19, 62, 0.045)',
  '--cn-ring': 'rgba(139, 106, 154, 0.65)',
  '--cn-tile': 'linear-gradient(180deg, #F8F2FB 0%, #EEE3F3 100%)',
  '--cn-tile-rim': 'inset 0 0 0 1px rgba(139, 106, 154, 0.2), inset 0 1px 0 rgba(255,255,255,0.96), 0 8px 18px -12px rgba(48,19,62,0.28)',
  '--cn-cta': 'linear-gradient(180deg, #4D2B5B 0%, #30133E 100%)',
  '--cn-cta-ink': '#FFFFFF',
  '--cn-cta-shadow': 'inset 0 1px 0 rgba(255,255,255,0.18), 0 6px 14px -8px rgba(48,19,62,0.38)',
  '--cn-cta-hover': 'brightness(1.08)'
} as unknown as CSSProperties;

export function Nav() {
  return (
    <div className="sintha-nav-shell">
      <CardNav
        logo="/images/logo-long-dark.svg"
        logoAlt="Sintha Physiotherapy"
        logoHref="/"
        items={ITEMS}
        cta={{
          label: 'Book an assessment',
          href: 'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.'
        }}
        theme="light"
        surface="glass"
        maxWidth={1200}
        cardHeight={148}
        openOn="click"
        cardEffect="rise"
        accentColor="#30133E"
        linkComponent={Link}
        ariaLabel="Main navigation"
        className="sintha-card-nav"
        style={NAV_STYLE}
      />
    </div>
  );
}
