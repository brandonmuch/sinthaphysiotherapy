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
             {/* YOUR EXACT FILENAME */}
            <Image src="/images/hero-couple.png" alt="Physiotherapist with patient" fill className="object-cover" priority />
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
              // ADD YOUR EXACT FILENAMES HERE
              { title: 'Respiratory Care', img: 'u2428486467_An_elderly_Black_South_African_woman_sitting_upr_81c8ea83-7a42-4501-b2a0-04b1c71b4a4d.jpeg' },
              { title: 'Paediatric', img: 'u2428486467_Coloured_South_African_boy_around_6_years_old_sea_5c03f6ad-f7f3-443d-ab2b-245d.jpeg' },
              { title: 'ICU & Post-Hospital', img: 'u2428486467_A_physiotherapist_working_with_an_elderly_patie_94f5f3b6-1f7e-4c3b-8e8c-4b3b1e2e8d4c.jpeg' },
              { title: 'Neurological', img: 'u2428486467_A_dark-skinned_Black_female_patient_in_her_50s_s_3b1a9c4f-9a1b-4b1a-9c1a-1a9c1b1a9c1a.jpeg' },
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
    </div>
  );
}