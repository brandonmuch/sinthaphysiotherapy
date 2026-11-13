'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        
        {/* UPDATED TO USE YOUR SVG LOGO */}
        <Link href="/" className="relative w-56 h-10 md:w-64 md:h-12">
          <Image 
            src="/images/logo-long-dark.svg" 
            alt="Sintha Physiotherapy" 
            fill 
            className="object-contain object-left" 
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#30133E] md:flex">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <Link href="/contact" className="bg-[#30133E] text-white px-6 py-3 rounded-full hover:bg-black transition-colors">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}