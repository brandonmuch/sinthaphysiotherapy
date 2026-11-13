'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PatternWaves from '@/components/ui/PatternWaves';

export function Hero() {
  return (
    <section className="relative isolate min-h-[90svh] overflow-hidden bg-[#30133E] pt-24 text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <PatternWaves
          preset="silk"
          color="#DBC1E8"
          backgroundColor="#30133E"
          fade="edges"
          interactive
          cursorSize={50}
          cursorStrength={0.6}
          pattern=""
          wave={{}}
          spacing={{}}
          markSize={{}}
          depth={{}}
          light={{}}
          shine={{}}
          contrast={{}}
          speed={{}}
          scale={{}}
          direction={{}}
          style={{}}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#30133E]/90 via-[#30133E]/65 to-[#30133E]/25" />

      <div className="relative z-10 mx-auto grid min-h-[calc(90svh-6rem)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:px-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8D8F0] md:text-sm">
            Specialised physiotherapy for children and adults
          </p>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            Empower movement.
            <span className="mt-2 block font-light italic text-[#DBC1E8]">Enhance life.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Personalised rehabilitation and specialised respiratory care to help you move with confidence, breathe easier and get back to the things you love.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Book an assessment
              <span aria-hidden="true" className="ml-3 text-lg">↗</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
            <span>Respiratory care</span>
            <span>Rehabilitation</span>
            <span>Children & adults</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-[4/4.35] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl shadow-black/30">
            <Image
              src="/uploads/patient-balance-exercise.jpg"
              alt="A physiotherapist supporting a patient during a balance and strength exercise"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C0C25]/85 via-[#1C0C25]/20 to-transparent p-7 pt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D8F0]">Care that moves with you</p>
              <p className="mt-2 max-w-sm text-xl font-medium leading-snug text-white">A considered plan. Personal attention. Progress at your pace.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-white px-5 py-4 text-[#30133E] shadow-xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6A4A78]">Find us at</p>
            <p className="mt-1 text-sm font-semibold">Life Fourways Hospital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
