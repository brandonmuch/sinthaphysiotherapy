'use client';
import { LampEffect } from '@/components/ui/LampEffect';
import { Magnet } from '@/components/ui/Magnet';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { BlurText } from '@/components/ui/BlurText';
import { Noise } from '@/components/ui/Noise';
import { SmartImage } from '@/components/ui/SmartImage';

export function BookingCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-32">
      <div className="absolute inset-0">
        <SmartImage src="/images/cta-fullbleed.webp" alt="The Sintha consultation room" className="opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/80" />
      </div>
      <Noise opacity={0.04} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
        <LampEffect>
          <p className="section-label">Begin</p>
          <h2 className="display mt-6 text-[clamp(3rem,7vw,6rem)] text-charcoal">
            Your body<br /><em className="font-light">remembers.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-charcoal/70">
            <BlurText text="Book a first assessment. We will take the time your story deserves." delay={30} />
          </p>
        </LampEffect>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Magnet padding={100} strength={3}>
            <a href="mailto:hello@sintha.co.za" className="cta-primary">Book an Assessment</a>
          </Magnet>
          <ShimmerButton href="https://wa.me/27000000000">Chat on WhatsApp</ShimmerButton>
        </div>
      </div>
    </section>
  );
}