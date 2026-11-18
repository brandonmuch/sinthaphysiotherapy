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
