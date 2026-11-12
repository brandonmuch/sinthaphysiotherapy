'use client';
import { useRef, useEffect } from 'react';
import { SplitText } from '@/components/ui/SplitText';
import { GradientText } from '@/components/ui/GradientText';
import { FadeContent } from '@/components/ui/FadeContent';
import { Aurora } from '@/components/ui/Aurora';
import { Noise } from '@/components/ui/Noise';
import { SmartImage } from '@/components/ui/SmartImage';
import { gsap } from '@/lib/gsap';

export function Philosophy() {
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    if (!quoteRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(quoteRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 1.6, ease: 'power3.inOut',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 70%', once: true },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" className="relative overflow-hidden bg-cream py-32">
      <Aurora className="opacity-40" />
      <Noise opacity={0.03} />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <SmartImage src="/images/philosophy-primary.webp" alt="Patient at peace" className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="section-label mb-6">Our Philosophy</p>
          <SplitText
            text="Healing is not an event. It is a practice."
            className="display text-[clamp(2.5rem,5vw,5rem)] text-charcoal"
          />
          <blockquote ref={quoteRef} className="mt-10 max-w-2xl">
            <GradientText className="display text-3xl italic md:text-4xl">
              "We do not treat conditions. We treat people — with time, with presence, with hands that listen."
            </GradientText>
          </blockquote>
          <FadeContent delay={0.2}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-charcoal/70">
              Every session begins with the question of how you want to move through the world. From there, we build the path — evidence-based, unhurried, and entirely yours.
            </p>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}