import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';

const PILLARS = [
  {
    title: 'Comprehensive rehabilitation',
    description: 'Personalised rehabilitation to restore strength, mobility and confidence after injury, illness or surgery.',
    image: '/images/u2428486467_Young_Coloured_South_African_woman_seated_calmly__1b852e40-efdd-48c9-9676-4899.jpeg',
    alt: 'A patient practising calm, supported breathing during physiotherapy',
  },
  {
    title: 'Specialised respiratory support',
    description: 'Evidence-based respiratory physiotherapy for children and adults, including complex and post-hospital care.',
    image: '/images/u2428486467_Middle-aged_Black_South_African_man_in_everyday_a_e9d82078-f7f4-4b7b-8b07-6d8b.jpeg',
    alt: 'A physiotherapist standing alongside an older adult in a rehabilitation setting',
  },
  {
    title: 'Whole-person wellness',
    description: 'Care that looks beyond a diagnosis and supports people to stay active, independent and connected to everyday life.',
    image: '/uploads/patient-grandfather-grandson.jpg',
    alt: 'A grandfather sharing time with his grandson',
  },
];

const SERVICES = [
  { title: 'Respiratory care', image: '/uploads/patient-elderly-recovery.jpg', alt: 'An older patient receiving respiratory care from a physiotherapist' },
  { title: 'Paediatric care', image: '/images/service-paediatric.jpg', alt: 'A child using a respiratory therapy device' },
  { title: 'ICU & post-hospital care', image: '/uploads/patient-physio-session-a.jpg', alt: 'A physiotherapist supporting an older patient during walking practice' },
  { title: 'Neurological rehabilitation', image: '/uploads/patient-walking-clinic.jpg', alt: 'A patient walking during a physiotherapy session' },
];

export default function Home() {
  return (
    <div className="bg-lilac-light">
      <Hero />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#6B4B78]">A more personal approach</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#30133E] md:text-5xl">
              Expert care, shaped around you.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#30133E]/70 md:text-lg">
              At Sintha Physiotherapy, we take a holistic approach to health, healing and wellbeing. Whether you are recovering after surgery, navigating life after a stroke or seeking support for your child, our team is here to help.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <article key={pillar.title} className="group overflow-hidden rounded-[1.6rem] bg-[#F7F2FA]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A9A]">0{index + 1}</p>
                  <h3 className="text-xl font-semibold text-[#30133E]">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#30133E]/70">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EBF7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#6B4B78]">How we can help</p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#30133E] md:text-5xl">Specialist care for every stage.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#30133E] transition hover:gap-3">
              View all services <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {SERVICES.map((service) => (
              <Link key={service.title} href="/services" className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#30133E] md:min-h-80">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D0D27]/85 via-[#1D0D27]/10 to-transparent transition group-hover:from-[#1D0D27]/95" />
                <h3 className="absolute inset-x-4 bottom-5 text-lg font-semibold leading-snug text-white md:inset-x-6 md:bottom-7 md:text-xl">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#30133E] px-6 py-20 text-center text-white md:py-28">
        <div className="pointer-events-none absolute -right-28 -top-40 h-96 w-96 rounded-full bg-[#DBC1E8]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#DBC1E8]">Your recovery, your pace</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Ready to take the next step?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Speak to our team about the right physiotherapy support for you or your family.
          </p>
          <Link href="/contact" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#DBC1E8] px-9 py-4 text-sm font-semibold text-[#30133E] transition hover:-translate-y-0.5 hover:bg-white">
            Book an assessment <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
