'use client';
import { useEffect, useRef } from 'react';
import { InterfaceIcon } from '@/components/ui/InterfaceIcon';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { SplitText } from '@/components/ui/SplitText';
import { gsap } from '@/lib/gsap';

const SERVICES = [
  { title: 'Rehabilitation', desc: 'Strength, mobility and return to activity after injury or surgery.', tag: '01', image: '/images/service-rehab.webp' },
  { title: 'Respiratory Support', desc: 'Evidence-based respiratory physiotherapy to help you breathe easier.', tag: '02', image: '/images/service-respiratory.webp' },
  { title: 'Paediatric Care', desc: 'Gentle, playful physiotherapy for children from infancy to teens.', tag: '03', image: '/images/service-paediatric.webp' },
  { title: 'ICU & Post-Hospital', desc: 'Dignified rehabilitation at the bedside, transition and beyond.', tag: '04', image: '/images/service-icu.webp' },
  { title: 'Neurological & Vestibular', desc: 'Balance, gait and vestibular rehab for stroke, MS, Parkinson\'s.', tag: '05', image: '/images/service-neuro.webp' },
  { title: 'Home Visits', desc: 'The clinic, brought to you — with the same standard of care.', tag: '06', image: '/images/service-home.webp' },
];

export function Treatments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const totalScroll = track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalScroll + 400}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="treatments" className="relative overflow-hidden bg-charcoal text-cream">
      <div ref={sectionRef} className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10">
          <p className="section-label !text-terracotta">Treatments</p>
          <SplitText
            text="Seven disciplines. One standard."
            className="display mt-4 text-[clamp(2.5rem,5vw,5rem)] text-cream"
          />
          <p className="mt-4 max-w-md text-sm text-cream/60">
            Scroll to explore every specialisation we practise — horizontally.
          </p>
        </div>

        <div ref={trackRef} className="mt-16 flex gap-8 pl-6 pr-6 md:pl-10 will-change-transform">
          {SERVICES.map((s) => (
            <SpotlightCard
              key={s.title}
              className="h-[68vh] w-[78vw] shrink-0 rounded-2xl border border-cream/10 bg-cream/[0.03] p-10 md:w-[34vw]"
              spotlightColor="rgba(196,130,106,0.22)"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="font-mono text-xs tracking-[0.1em] text-terracotta">{s.tag}</p>
                  <h3 className="display mt-6 text-4xl md:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-xs text-sm text-cream/60">{s.desc}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs tracking-[0.1em] text-cream/40">Learn more</span>
                  <InterfaceIcon name="arrow-right" className="h-5 w-5" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        <div className="h-24" />
      </div>
    </section>
  );
}