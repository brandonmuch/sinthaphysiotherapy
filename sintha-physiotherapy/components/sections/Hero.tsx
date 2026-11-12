'use client';
import { SmartImage } from '@/components/ui/SmartImage';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F0EA] pt-32">
      <div className="absolute inset-0 z-0">
        <SmartImage src="/images/team-physio-a.jpg" alt="Sintha physiotherapist" priority className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0EA] via-[#F5F0EA]/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2724]">
            Empower<br />Movement.<br />
            <em className="font-light">Enhance Life.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-[#2A2724]/70 font-light">
            Specialised physiotherapy for children and adults, delivered with editorial care.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-block bg-[#2A2724] text-[#F5F0EA] px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-[#C4826A] transition-colors">Book an Assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
}