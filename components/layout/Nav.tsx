'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

const BOOKING_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Sintha Physiotherapy home">
          <img src="/images/logo-long-dark.svg" alt="Sintha Physiotherapy" />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="site-header__booking" href={BOOKING_LINK} target="_blank" rel="noreferrer">
          Book an Assessment
        </a>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="site-menu-toggle__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <nav className="site-mobile-panel" id="site-mobile-navigation" aria-label="Mobile navigation">
          {LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="site-mobile-panel__booking" href={BOOKING_LINK} target="_blank" rel="noreferrer">
            Book an Assessment
          </a>
        </nav>
      )}
    </header>
  );
}
