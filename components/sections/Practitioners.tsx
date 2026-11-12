'use client';
import { SplitText } from '@/components/ui/SplitText';
import { TiltCard } from '@/components/ui/TiltCard';
import { SmartImage } from '@/components/ui/SmartImage';

const PRACTITIONERS = [
  { name: 'Dr. Naledi Mokoena', role: 'Lead Physiotherapist', bio: 'HPCSA-registered, 12 years of respiratory and paediatric practice.', image: '/images/lead-practitioner.webp' },
  { name: 'Thandiwe Dlamini', role: 'Neurological Specialist', bio: 'Vestibular rehabilitation, stroke recovery, and MS care.', image: '/images/practitioner-2.webp' },
  { name: 'Kagiso Sithole', role: 'Home Visit Lead', bio: 'Brings the same editorial care into your living room.', image: '/images/practitioner-3.webp' },
];

export function Practitioners() {
  return (
    <section id="practitioners" className="bg-cream py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="section-label">The Practitioners</p>
        <SplitText text="Hands that listen." className="display mt-4 text-[clamp(2.5rem,5vw,5rem)] text-charcoal" />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {PRACTITIONERS.map((p) => (
            <TiltCard key={p.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sage/20">
                <SmartImage src={p.image} alt={p.name} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-terracotta">{p.role}</p>
                <h3 className="display mt-2 text-3xl text-charcoal">{p.name}</h3>
                <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">{p.bio}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}