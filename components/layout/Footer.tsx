import Link from 'next/link';
import Image from 'next/image';
import SpecularButton from '@/components/ui/SpecularButton';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#30133E] pb-10 pt-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="relative mb-6 block h-[210px] w-[282px] max-w-full" aria-label="Sintha Physiotherapy home">
              <Image
                src="/images/sintha-full-logo.svg"
                alt="Sintha Physiotherapy, Wezi Nyimba Physiotherapists Inc."
                fill
                sizes="282px"
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white">
              Personalised rehabilitation and specialised respiratory care for children and adults.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.08em] text-[#DBC1E8]">Explore</p>
            <ul className="space-y-3 text-sm text-white">
              <li><Link href="/" className="transition hover:text-[#DBC1E8]">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-[#DBC1E8]">About us</Link></li>
              <li><Link href="/services" className="transition hover:text-[#DBC1E8]">Services</Link></li>
              <li><Link href="/blog" className="transition hover:text-[#DBC1E8]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#DBC1E8]">Get in touch</p>
            <ul className="space-y-3 text-sm text-white">
              <li><a href="tel:+27670721908" className="hover:text-[#DBC1E8]">067 072 1908</a></li>
              <li><a href="mailto:info@sinthaphysiotherapy.co.za" className="break-words hover:text-[#DBC1E8]">info@sinthaphysiotherapy.co.za</a></li>
              <li>Life Fourways Hospital, Suite C28B</li>
              <li>Fourways, Johannesburg</li>
              <li>Mon–Sun, by appointment</li>
            </ul>
            <SpecularButton
              className="mt-6"
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

        <div className="flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sintha Physiotherapy. All rights reserved.</p>
          <p>Wezi Nyimba Physiotherapists Inc.</p>
        </div>
      </div>
    </footer>
  );
}
