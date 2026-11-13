'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-tight text-charcoal">Sintha Physiotherapy</Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-charcoal md:flex">
          <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
          <Link href="/about" className="hover:text-terracotta transition-colors">About</Link>
          <Link href="/services" className="hover:text-terracotta transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-terracotta transition-colors">Blog</Link>
          <Link href="/contact" className="bg-charcoal text-cream px-6 py-3 rounded-full hover:bg-terracotta transition-colors">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}