import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-purple text-white pt-24 pb-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="relative block w-56 h-32 mb-6">
              <Image src="/images/logo-stacked-light.png" alt="Sintha Physiotherapy" fill className="object-contain object-left" />
            </Link>
            <p className="max-w-sm text-sm text-lilac/80 leading-relaxed">
              Sintha Physiotherapy is a specialised physiotherapy practice. We offer comprehensive rehabilitation and specialised respiratory care to help you move and breathe better.
            </p>
          </div>

          <div>
            <p className="text-lilac font-semibold uppercase tracking-widest text-xs mb-4">Explore</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/" className="hover:text-lilac">Home</Link></li>
              <li><Link href="/about" className="hover:text-lilac">About Us</Link></li>
              <li><Link href="/services" className="hover:text-lilac">Services</Link></li>
              <li><Link href="/blog" className="hover:text-lilac">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lilac font-semibold uppercase tracking-widest text-xs mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>info@sinthaphysiotherapy.co.za</li>
              <li>+27 (0) 10 000 0000</li>
              <li>Mon–Sat, by appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sintha Physiotherapy. All rights reserved.</p>
          <p>Wezi Nyimba Physiotherapists Inc.</p>
        </div>
      </div>

      {/* THE BREATHING LUNGS */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-[400px] h-[400px] translate-x-1/4 translate-y-1/4">
        <div className="relative w-full h-full animate-breathe">
           <Image src="/images/icon-lungs-light.png" alt="Breathing Lungs" fill className="object-contain" />
        </div>
      </div>
    </footer>
  );
}