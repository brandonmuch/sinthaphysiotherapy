'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PatternWaves from '@/components/ui/PatternWaves';

const BOOKING_LINK = 'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.';

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(900px,100svh)] items-center justify-center overflow-hidden bg-[#30133E] px-6 py-28 text-center text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <PatternWaves
          preset="silk"
          color="#dbc1e8"
          backgroundColor="#30133e"
          fade="edges"
          interactive
          cursorSize={50}
          cursorStrength={0.6}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#30133E]/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-[#30133E]/45 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <h1 className="text-balance text-[clamp(3.1rem,8.5vw,7.5rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
          Empower Movement.
          <span className="mt-3 block font-light tracking-[-0.055em] text-[#dbc1e8]">Enhance Life.</span>
        </h1>

        <h2 className="mx-auto mt-8 max-w-3xl text-balance text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl md:text-[1.8rem]">
          Specialised Physiotherapy for Children and Adults
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-white/90 md:text-lg">
          At Sintha Physiotherapy, we’re all about helping you feel good and move even better!
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-pretty text-sm leading-7 text-white/80 md:text-base md:leading-8">
          We take a holistic, whole-person approach to your health, healing, and well-being. While we’re known for our expert care in respiratory physiotherapy, our services go way beyond just helping you breathe easier. Whether you’re bouncing back after surgery, navigating life after a stroke, caring for a little one with health challenges, or adjusting to the natural changes that come with age, we’re here for you. From neurological to vestibular conditions, or simply feeling a bit weaker than usual, our experienced team is ready to support and empower you every step of the way. With tailored physiotherapy plans designed just for you, we’ll help you move with more confidence, breathe with ease, and get back to doing the things you love.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#dbc1e8] px-8 py-4 text-sm font-semibold text-[#30133E] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Book an Assessment
            <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </a>
          <Link
            href="/services"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/45 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            View Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
