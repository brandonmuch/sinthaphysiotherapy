import Link from 'next/link';
import SpecularButton from '@/components/ui/SpecularButton';
import { FooterLogo } from '@/components/layout/FooterLogo';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#30133E] pb-10 pt-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="relative mb-6 block w-[282px] max-w-full" aria-label="Sintha Physiotherapy home">
              <FooterLogo />
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white">
              Personalised rehabilitation and specialised respiratory care for children and adults.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold text-white">Explore</h2>
            <ul className="space-y-3 text-sm text-white">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About us</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold text-white">Get in touch</h2>
            <ul className="space-y-3 text-sm text-white">
              <li><a href="tel:+27670721908" className="hover:text-white">067 072 1908</a></li>
              <li><a href="mailto:info@sinthaphysiotherapy.co.za" className="break-words hover:text-white">info@sinthaphysiotherapy.co.za</a></li>
              <li>Life Fourways Hospital, Suite C28B</li>
              <li>Fourways, Johannesburg</li>
              <li>Mon–Sun, by appointment</li>
            </ul>
            <div className="mt-12 flex">
              <SpecularButton
                size="sm"
                radius={999}
                tint="#DBC1E8"
                tintOpacity={0.14}
                textColor="#FFFFFF"
                lineColor="#DBC1E8"
                baseColor="#3D2548"
                intensity={0.78}
                idleIntensity={0.16}
                shineSize={10}
                shineFade={34}
                thickness={1.1}
                glow={0.26}
                followMouse
                href="/contact"
              >
                Booking information <span aria-hidden="true">↗</span>
              </SpecularButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sintha Physiotherapy. All rights reserved.</p>
          <p>Wezi Nyimba Physiotherapists Inc.</p>
          <Link href="/privacy-policy" className="transition-colors hover:text-[#DBC1E8]">Privacy policy</Link>
          <Link href="/privacy-policy#cookies" className="transition-colors hover:text-[#DBC1E8]">Cookie information</Link>
        </div>
      </div>
    </footer>
  );
}
