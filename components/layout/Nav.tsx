'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#30133E]/5 bg-white/95 py-3 shadow-sm shadow-[#30133E]/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Sintha Physiotherapy home" className="relative h-12 w-52 md:h-14 md:w-60">
          <Image
            src="/images/logo-long-dark.svg"
            alt="Sintha Physiotherapy"
            fill
            priority
            sizes="240px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#30133E] md:flex">
          <Link href="/" className="transition-colors hover:text-[#8B6A9A]">Home</Link>
          <Link href="/about" className="transition-colors hover:text-[#8B6A9A]">About</Link>
          <Link href="/services" className="transition-colors hover:text-[#8B6A9A]">Services</Link>
          <Link href="/blog" className="transition-colors hover:text-[#8B6A9A]">Journal</Link>
          <Link href="/contact" className="rounded-full bg-[#30133E] px-6 py-3 text-white transition-colors hover:bg-[#4B255F]">Book now</Link>
        </nav>

        <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full bg-[#30133E] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4B255F] md:hidden">
          Book now
        </Link>
      </div>
    </header>
  );
}
