'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShinyText } from '@/components/ui/ShinyText';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-cream/85 backdrop-blur-md py-3' : 'bg-transparent py-6',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="display text-lg tracking-tight">
          <ShinyText text="Sintha Physiotherapy" speed={5} />
        </Link>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] md:flex">
          <a href="#philosophy" className="hover:text-terracotta transition-colors">Philosophy</a>
          <a href="#treatments" className="hover:text-terracotta transition-colors">Treatments</a>
          <a href="#practitioners" className="hover:text-terracotta transition-colors">Practitioners</a>
          <a href="#contact" className="cta-primary !py-2.5 !px-5 !text-[10px]">Book Assessment</a>
        </nav>
      </div>
    </header>
  );
}