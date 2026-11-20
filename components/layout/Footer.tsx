import Link from 'next/link';
import { FooterLogo } from '@/components/layout/FooterLogo';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__main">
          <div className="site-footer__details">
            <div className="site-footer__contact">
              <h2>Contact us</h2>
              <address>
                Life Fourways Hospital, Suite C28B
                <br />
                Cedar Ave West, Cedar Road, Fourways
                <br />
                Johannesburg
                <br />
                2055
                <br />
                <br />
                <a href="tel:+27670721908">067 072 1908</a>
                <br />
                <a href="mailto:info@sinthaphysiotherapy.co.za">info@sinthaphysiotherapy.co.za</a>
              </address>
            </div>

            <div className="site-footer__hours">
              <h2>Hours</h2>
              <ul>
                <li>Monday – Sunday</li>
                <li>Closed Wednesday afternoons after 12:00</li>
              </ul>
              <div className="site-footer__social">
                <p>Find us on social media</p>
                <div className="site-footer__social-links">
                  <a
                    href="https://www.instagram.com/sintha.physiotherapy"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="17.6" cy="6.5" r="1.15" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578639355974"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.02 10.125 11.888v-8.41H7.078v-3.478h3.047V9.422c0-3.021 1.792-4.693 4.533-4.693 1.312 0 2.686.236 2.686.236v2.953h-1.513c-1.49 0-1.955.93-1.955 1.886v2.269h3.328l-.532 3.478h-2.796v8.41C19.612 23.093 24 18.092 24 12.073Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            {FOOTER_LINKS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="site-footer__copyright">©2025 Sintha Physiotherapy</p>
      </div>

      <div className="site-footer__brand-band">
        <div className="site-container">
          <Link href="/" className="site-footer__logo" aria-label="Sintha Physiotherapy home">
            <FooterLogo />
          </Link>
        </div>
      </div>
    </footer>
  );
}
