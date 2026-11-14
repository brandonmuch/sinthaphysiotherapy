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
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="Sintha Physiotherapy home">
              <FooterLogo />
            </Link>
            <p>
              Specialised physiotherapy for children and adults, with personalised care to help you
              move better, breathe easier and recover with confidence.
            </p>
          </div>

          <div>
            <h2>Contact us</h2>
            <address>
              Life Fourways Hospital, Suite C28B
              <br />
              Corner Cedar Avenue &amp; Cedar Road
              <br />
              Fourways, Johannesburg, 2055
              <br />
              <br />
              <a href="tel:+27670721908">067 072 1908</a>
              <br />
              <a href="mailto:info@sinthaphysiotherapy.co.za">info@sinthaphysiotherapy.co.za</a>
            </address>
          </div>

          <div>
            <h2>Hours</h2>
            <ul>
              <li>Monday – Sunday</li>
              <li>Closed Wednesday afternoons after 12:00</li>
              <li>All sessions are by appointment</li>
            </ul>
            <div className="site-footer__social" aria-label="Social media">
              <a
                href="https://www.instagram.com/sintha.physiotherapy"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578639355974"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>©2025 Sintha Physiotherapy</span>
          <nav className="site-footer__links" aria-label="Footer navigation">
            {FOOTER_LINKS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
