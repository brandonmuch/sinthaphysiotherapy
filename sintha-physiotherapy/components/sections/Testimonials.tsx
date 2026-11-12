'use client';
import { Marquee } from '@/components/ui/Marquee';

const QUOTES = [
  'The first practice that treated me like a person, not a chart.',
  'My son actually looks forward to his sessions. That says everything.',
  'After my stroke, they gave me back my morning walks.',
  'Thorough, calm, and radically kind. Rare in healthcare.',
  'They came to my mother\'s house and she cried with relief.',
  'I breathe easier. I move easier. I live easier.',
];

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-cream py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="section-label">Voices</p>
        <h2 className="display mt-4 text-[clamp(2.5rem,5vw,5rem)] text-charcoal">In their words.</h2>
      </div>
      <div className="mt-16 space-y-8">
        <Marquee speed={60}>
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="display w-[420px] shrink-0 text-2xl italic text-charcoal/80">
              "{q}"
            </blockquote>
          ))}
        </Marquee>
        <Marquee speed={70} reverse>
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="display w-[420px] shrink-0 text-2xl italic text-charcoal/80">
              "{q}"
            </blockquote>
          ))}
        </Marquee>
      </div>
    </section>
  );
}