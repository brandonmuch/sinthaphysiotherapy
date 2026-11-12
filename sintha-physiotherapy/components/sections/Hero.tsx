'use client';
import { useEffect, useRef } from 'react';
import { BlurText } from '@/components/ui/BlurText';
import { CircularText } from '@/components/ui/CircularText';
import { Noise } from '@/components/ui/Noise';
import { AnimatedGradientText } from '@/components/ui/AnimatedGradientText';
import { SmartImage } from '@/components/ui/SmartImage';
import { gsap } from '@/lib/gsap';

const CYCLES = [
  'Respiratory Physiotherapy',
  'Paediatric Care',
  'Neurological Rehabilitation',
  'Home Visits',
];

export function Hero() {
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!cycleRef.current) return;
    const el = cycleRef.current;
    let i = 0;
    const tl = gsap.timeline({ repeat: -1 });
    CYCLES.forEach((word) => {
      tl.to(el, { duration: 0.4, text: { value: word, delimiter: '' }, ease: 'none' })
        .to(el, { duration: 0.6, text: { value: word, delimiter: '' } })
        .to(el, { duration: 0.4, text: { value: '', delimiter: '' } }, '+=2');
    });
    return () => tl.kill();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <SmartImage src="/images/hero-main.webp" alt="Sintha physiotherapist portrait" priority className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-cream/40" />
      </div>
      <Noise opacity={0.06} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="section-label mb-6">
            <AnimatedGradientText>Fourways · Johannesburg · HPCSA Registered</AnimatedGradientText>
          </p>
          <h1 className="display text-[clamp(3rem,9vw,7.5rem)] text-charcoal">
            Empower<br />Movement.<br />
            <em className="font-light">Enhance Life.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-charcoal/70 font-light">
            <BlurText text="Specialised physiotherapy for children and adults, delivered with editorial care." delay={40} />
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-terracotta">
            <span ref={cycleRef} className="font-medium">Respiratory Physiotherapy</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="cta-primary">Book an Assessment</a>
            <a href="#philosophy" className="text-xs uppercase tracking-[0.25em] text-charcoal/60 hover:text-terracotta transition-colors">
              Our Philosophy →
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:block">
          <CircularText
            text="HPCSA REGISTERED · FOURWAYS JHB · LIFE HOSPITAL · "
            radius={64}
            duration={28}
            className="text-[9px] tracking-[0.3em] text-charcoal/60"
          />
        </div>
      </div>
    </section>
  );
}