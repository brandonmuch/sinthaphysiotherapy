import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-lilac-light">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-purple leading-[1.1] mb-6">
              Empower Movement.<br/>Enhance Life.
            </h1>
            <p className="text-lg text-purple/80 mb-10 max-w-md leading-relaxed">
              Sintha Physiotherapy is a specialised physiotherapy practice. We offer comprehensive rehabilitation and specialised respiratory care.
            </p>
            <Link href="/contact" className="inline-block bg-purple text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-colors">
              Book a Consultation
            </Link>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/hero-couple.jpg" alt="Physiotherapist with patient" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Comprehensive Rehab', desc: 'Expert rehabilitation for orthopaedic, neurological, and post-operative recovery.' },
              { title: 'Specialised Respiratory', desc: 'Advanced respiratory care, including ventilator weaning and ICU rehabilitation.' },
              { title: 'Holistic Wellness', desc: 'Treating the whole person to restore function, independence, and quality of life.' }
            ].map((pillar, i) => (
              <div key={i} className="p-8 bg-lilac-light rounded-2xl border border-lilac/30">
                <h3 className="text-2xl font-bold text-purple mb-4">{pillar.title}</h3>
                <p className="text-purple/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SNAPSHOT */}
      <section className="py-24 bg-lilac-light">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
          <h2 className="text-4xl font-bold text-purple mb-16">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Respiratory Care', img: 'service-respiratory.jpg' },
              { title: 'Paediatric', img: 'service-paediatric.jpg' },
              { title: 'ICU & Post-Hospital', img: 'service-icu.jpg' },
              { title: 'Neurological', img: 'service-neuro.jpg' },
            ].map((s, i) => (
              <div key={i} className="group relative h-64 rounded-2xl overflow-hidden">
                <Image src={`/images/${s.img}`} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-purple/60 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-block mt-12 text-purple font-semibold border-b border-purple pb-1 hover:text-black hover:border-black transition-colors">
            View All Services
          </Link>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-bold text-purple">Latest Insights</h2>
              <Link href="/blog" className="text-sm font-semibold text-purple border-b border-purple hover:text-black hover:border-black transition-colors pb-1">View All</Link>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog" className="group">
                <div className="relative h-[350px] rounded-3xl overflow-hidden mb-6">
                   <Image src="/images/blog-floral-lungs.jpg" alt="Floral Lungs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs font-bold text-purple-light uppercase tracking-widest mb-2">Respiratory Health</p>
                <h3 className="text-2xl font-bold text-purple group-hover:text-black transition-colors">How Physiotherapy Supports Renal & Metabolic Health</h3>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}