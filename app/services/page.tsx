import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Advanced Respiratory Care',
    img: '/uploads/patient-elderly-recovery.jpg',
    desc: 'Specialised support for complex respiratory conditions, including airway clearance, breathing exercises and recovery after ventilation.',
  },
  {
    title: 'Cardiac & Cardiovascular Rehab',
    img: '/uploads/patient-balance-exercise.jpg',
    desc: 'Guided exercise and education to help rebuild endurance, improve function and support recovery after cardiac events.',
  },
  {
    title: 'ICU & Post-Hospital Rehab',
    img: '/uploads/patient-physio-session-a.jpg',
    desc: 'Compassionate rehabilitation after critical illness or surgery, with a focus on restoring strength, mobility and independence.',
  },
  {
    title: 'Paediatric Physiotherapy',
    img: '/images/service-paediatric.jpg',
    desc: 'Gentle, child-centred respiratory and movement support for infants, children and teenagers.',
  },
  {
    title: 'Neurological Rehab',
    img: '/uploads/patient-walking-clinic.jpg',
    desc: 'Personalised therapy for stroke, neurological conditions, balance difficulties and gait retraining.',
  },
  {
    title: 'Home Visits',
    img: '/uploads/physio-home-visit.jpg',
    desc: 'Professional physiotherapy in the comfort of home for people who need continued support or have difficulty travelling.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F3EBF7] pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6B4B78]">How we can help</p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#30133E] md:text-6xl">Our services</h1>
          <p className="mt-6 text-lg leading-8 text-[#30133E]/75">
            We offer specialised physiotherapy for children and adults, from respiratory support and rehabilitation to home-based care.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-[1.6rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#30133E]/10">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#E8D8F0]">
                <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold text-[#30133E]">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#30133E]/70">{service.desc}</p>
                <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#6B4B78] transition group-hover:gap-3">
                  Enquire about this service <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[1.75rem] bg-[#30133E] px-8 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">Speak to our team and we’ll help you find the right support.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] transition hover:bg-white">
            Make an enquiry <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
