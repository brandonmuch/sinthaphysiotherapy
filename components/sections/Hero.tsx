'use client';
import { useEffect, useRef } from 'react';
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
    
    // THE FIX IS HERE:
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F0EA] pt-32">
      <div className="absolute inset-0 z-0">
        <SmartImage src="/images/team-physio-a.jpg" alt="Sintha physiotherapist" priority className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0EA] via-[#F5F0EA]/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C4826A] mb-6">
            Fourways · Johannesburg
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2724] leading-[0.95]">
            Empower<br />Movement.<br />
            <em className="font-light">Enhance Life.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-[#2A2724]/70 font-light">
            Specialised physiotherapy for children and adults, delivered with editorial care.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#C4826A]">
            <span ref={cycleRef} className="font-medium">Respiratory Physiotherapy</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-block bg-[#2A2724] text-[#F5F0EA] px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-[#C4826A] transition-colors">Book an Assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
}
