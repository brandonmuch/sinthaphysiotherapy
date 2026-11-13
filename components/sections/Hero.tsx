'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PatternWaves from '@/components/ui/PatternWaves'; 

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#30133E]">
      
      {/* 1. THE INTERACTIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <PatternWaves
          preset="silk"
          color="#DBC1E8"           // Lilac waves
          backgroundColor="#30133E" // Deep purple background
          fade="edges"
          interactive
          cursorSize={50}
          cursorStrength={0.6}
        />
      </div>

      {/* 2. CENTERED TYPOGRAPHY OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow Text - Highly tracked for editorial feel */}
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-[#DBC1E8] mb-6">
            Wezi Nyimba Physiotherapists Inc.
          </p>

          {/* Main Headline - Huge, tight line-height, high contrast */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.95] tracking-tighter mb-8">
            Empower<br/>Movement.<br/>
            <span className="italic font-light text-[#DBC1E8]">Enhance Life.</span>
          </h1>

          {/* Subheadline - Light, readable, max-width for perfect line breaks */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Sintha Physiotherapy is a specialised physiotherapy practice. We offer comprehensive rehabilitation and specialised respiratory care.
          </p>

          {/* CTA Button - High contrast against the dark background */}
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#DBC1E8] text-[#30133E] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}