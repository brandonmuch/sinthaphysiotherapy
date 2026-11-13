'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import SpecularButton from '@/components/ui/SpecularButton';
import PatternWaves from '@/components/ui/PatternWaves';

const BOOKING_LINK = 'https://wa.me/27670721908?text=Hello%20Sintha%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20assessment.';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();

  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#30133E] px-6 pb-20 pt-32 text-center text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <PatternWaves
          preset="silk"
          color="#BFA8CC"
          backgroundColor="#281032"
          opacity={0.58}
          shine={0.48}
          contrast={1.02}
          speed={0.24}
          fade="edges"
          interactive
          cursorSize={50}
          cursorStrength={0.45}
          style={{}}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#1B0D24]/38" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-[#30133E]/45 to-transparent" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <h1 className="text-balance text-[clamp(2.55rem,6.5vw,5.9rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
          Empower Movement.
          <span className="mt-2 block font-semibold tracking-[-0.05em] text-white">Enhance Life.</span>
        </h1>

        <h2 className="mx-auto mt-7 max-w-4xl text-balance text-[13px] font-medium tracking-[-0.01em] text-white sm:whitespace-nowrap sm:text-base md:text-lg">
          Specialised Physiotherapy for Children and Adults
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-pretty text-xs leading-6 text-white sm:whitespace-nowrap sm:text-sm md:text-base">
          At Sintha Physiotherapy, we’re all about helping you feel good and move even better!
        </p>


        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <SpecularButton
            size="lg"
            radius={18}
            tint="#DBC1E8"
            tintOpacity={0.1}
            textColor="#FFFFFF"
            lineColor="#DBC1E8"
            baseColor="#3D2548"
            intensity={0.85}
            idleIntensity={0.18}
            shineSize={10}
            shineFade={34}
            thickness={1.2}
            glow={0.45}
            followMouse
            proximity={220}
            onClick={() => window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer')}
          >
            Book an assessment <span aria-hidden="true">↗</span>
          </SpecularButton>
          <SpecularButton
            size="lg"
            radius={18}
            tint="#30133E"
            tintOpacity={0.16}
            textColor="#FFFFFF"
            lineColor="#BFA8CC"
            baseColor="#30133E"
            intensity={0.72}
            idleIntensity={0.12}
            shineSize={10}
            shineFade={34}
            thickness={1.1}
            glow={0.3}
            followMouse
            proximity={180}
            onClick={() => router.push('/services')}
          >
            Explore services <span aria-hidden="true">↗</span>
          </SpecularButton>
        </div>
      </motion.div>
    </section>
  );
}
