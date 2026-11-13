'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FlowingMenu from '@/components/ui/FlowingMenu';
import SpecularButton from '@/components/ui/SpecularButton';

const MENU_ITEMS = [
  { text: 'Home', link: '/', image: '/uploads/physio-tools-mat.jpg', marquee: 'Move with confidence' },
  { text: 'About us', link: '/about', image: '/uploads/patient-grandfather-grandson.jpg', marquee: 'Care for the whole person' },
  { text: 'Our services', link: '/services', image: '/uploads/patient-elderly-recovery.jpg', marquee: 'Support at every stage' },
  { text: 'Blog', link: '/blog', image: '/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg', marquee: 'Guidance and insights' },
  { text: 'Contact', link: '/contact', image: '/uploads/physio-home-visit.jpg', marquee: 'Let’s take the next step' },
];

const BOOKING_LINK =
  'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.';

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeIndex = Math.max(0, MENU_ITEMS.findIndex(item => item.link === pathname));

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <div className="sintha-nav-shell">
        <div className="sintha-nav-bar">
          <Link href="/" className="sintha-nav-logo" aria-label="Sintha Physiotherapy home">
            <img src="/images/logo-long-dark.svg" alt="Sintha Physiotherapy" />
          </Link>

          <div className="sintha-nav-actions">
            <SpecularButton
              size="sm"
              radius={999}
              tint="#DBC1E8"
              tintOpacity={0.12}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#30133E"
              intensity={0.72}
              idleIntensity={0.16}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.24}
              followMouse
              proximity={150}
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="sintha-fullscreen-menu"
            >
              Menu <span aria-hidden="true">☰</span>
            </SpecularButton>

            <SpecularButton
              size="sm"
              radius={999}
              tint="#DBC1E8"
              tintOpacity={0.16}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#30133E"
              intensity={0.82}
              idleIntensity={0.18}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.3}
              followMouse
              proximity={180}
              href={BOOKING_LINK}
              external
            >
              Book an assessment <span aria-hidden="true">↗</span>
            </SpecularButton>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="sintha-fullscreen-menu"
          className="sintha-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          <div className="sintha-menu-topbar">
            <Link href="/" onClick={() => setOpen(false)} className="sintha-menu-logo" aria-label="Sintha Physiotherapy home">
              <img src="/images/logo-long-dark.svg" alt="Sintha Physiotherapy" />
            </Link>
            <SpecularButton
              size="sm"
              radius={999}
              tint="#FFFFFF"
              tintOpacity={0.08}
              textColor="#FFFFFF"
              lineColor="#DBC1E8"
              baseColor="#30133E"
              intensity={0.8}
              idleIntensity={0.18}
              shineSize={10}
              shineFade={34}
              thickness={1.1}
              glow={0.28}
              followMouse
              proximity={160}
              onClick={() => setOpen(false)}
            >
              Close <span aria-hidden="true">×</span>
            </SpecularButton>
          </div>

          <div className="sintha-menu-flow">
            <FlowingMenu
              items={MENU_ITEMS}
              speed={60}
              stretch={0.6}
              magnet={0.25}
              followCursor={0.4}
              textColor="#FFFFFF"
              bgColor="#30133E"
              marqueeBgColor="#FFFFFF"
              marqueeTextColor="#30133E"
              borderColor="rgba(255,255,255,0.18)"
              dimInactive
              align="left"
              showIndex
              showArrow
              imageShape="rounded"
              activeIndex={activeIndex}
              onItemClick={() => setOpen(false)}
              ariaLabel="Main navigation"
              intro
            />
          </div>

          <div className="sintha-menu-bottom">
            <span>Sintha Physiotherapy</span>
            <span>Fourways, Johannesburg</span>
            <a href="tel:+27670721908">067 072 1908</a>
          </div>
        </div>
      )}
    </>
  );
}
