import { Hero } from '@/components/sections/Hero';
import { Practitioners } from '@/components/sections/Practitioners';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
            Comprehensive Rehab. Specialised Respiratory. Holistic Wellness.
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            At Sintha Physiotherapy, we provide expert care tailored to your unique needs. From advanced respiratory support to holistic wellness, our team is dedicated to helping you move and live better.
          </p>
        </div>
      </section>

      {/* Quick Service Snapshot (Links to Services Page) */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Expertise</h2>
            <p className="text-cream/70 mb-8 leading-relaxed">
              We specialise in a wide range of physiotherapy disciplines, ensuring you receive the highest standard of care.
            </p>
            <Link href="/services" className="inline-block border border-cream px-8 py-4 text-xs uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-colors">
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Respiratory Care', 'Cardiac Rehab', 'Paediatrics', 'Neurological Rehab'].map((s) => (
               <div key={s} className="border border-cream/20 p-6 rounded-lg">
                 <p className="text-sm">{s}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      <Practitioners /> {/* This uses the updated component we just made */}
    </>
  );
}