import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';

const PILLARS = [
  {
    number: '1',
    title: 'COMPREHENSIVE REHABILITATION',
    description: 'From bouncing back after surgery to navigating life post-stroke or managing neurological conditions, we’re with you every step of the way. Our personalised rehab plans are built to ease pain, restore movement, and boost strength, so you can feel confident in your body again.',
    image: '/images/u2428486467_Close-up_of_physiotherapy_tools_on_a_mat_or_woode_4cdd9653-899b-4c2e-8f1d-45ca.jpeg',
    alt: 'A close-up of physiotherapy tools on an exercise mat',
  },
  {
    number: '2',
    title: 'SPECIALISED RESPIRATORY SUPPORT',
    description: 'Struggling to catch your breath? With evidence-based respiratory physiotherapy, we help you breathe easier, manage chronic lung conditions, and recover from post-op or acute respiratory issues, one deep breath at a time.',
    image: '/images/u2428486467_Young_Coloured_South_African_woman_seated_calmly__1b852e40-efdd-48c9-9676-4899.jpeg',
    alt: 'A woman seated calmly in a quiet setting',
  },
  {
    number: '3',
    title: 'HOLISTIC WELLNESS',
    description: 'Physiotherapy isn’t just for when things go wrong — it’s also about helping life go right. Whether you’re managing the natural effects of ageing or bouncing back from general weakness, we’re here to help you move well, stay strong, and enjoy a better quality of life.',
    image: '/images/u2428486467_Middle-aged_Black_South_African_man_in_everyday_a_e9d82078-f7f4-4b7b-8b07-6d8b.jpeg',
    alt: 'A middle-aged man in a physiotherapy setting',
  },
];

const SERVICES = [
  {
    title: 'INPATIENT & OUTPATIENT PHYSIOTHERAPY',
    description: 'Personalised rehab plans for both hospital-based and outpatient clients — helping you recover from a wide range of physical conditions with expert, hands-on support.',
  },
  {
    title: 'PAEDIATRIC PHYSIOTHERAPY & RESPIRATORY CARE',
    description: 'Gentle, child-centred therapy focused on respiratory support because little lungs and growing bodies deserve specialised care.',
  },
  {
    title: 'ICU & POST-HOSPITAL REHABILITATION',
    description: 'Recovering after a critical illness? We’re here to help. From breathing support to rebuilding strength, we guide your journey back to independence.',
  },
  {
    title: 'POSTOPERATIVE RECOVERY',
    description: 'Heal stronger, faster. Our targeted physiotherapy helps reduce complications, ease pain, and restore mobility after surgery, getting you back on your feet, safely.',
  },
  {
    title: 'NEUROLOGICAL & VESTIBULAR REHABILITATION',
    description: 'Support for stroke, Parkinson’s, balance issues, and more. Our customised rehab plans help retrain your brain and body to move with greater control and confidence.',
  },
  {
    title: 'CHRONIC ILLNESS & FRAILTY MANAGEMENT',
    description: 'Gentle, goal-based therapy for those living with long-term conditions or age-related challenges, helping you stay strong, steady, and independent.',
  },
  {
    title: 'HOME VISITS',
    description: 'Can’t come to us? We’ll come to you. Enjoy expert physiotherapy in the comfort of your home, perfect for ongoing care or mobility challenges.',
  },
];

const FAQS = [
  {
    question: 'Do I need a referral to see a physiotherapist?',
    answer: 'No referral is needed. Physiotherapists are first-line practitioners. You can book directly, or we also accept referrals from GPs and specialists.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'It depends on your condition. A tailored plan will be created after assessment.',
  },
  {
    question: 'Do you charge medical aid rates?',
    answer: 'Yes. In-hospital: We will bill your medical aid directly. In-room: Pay via EFT/cash, claim back with our statement.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'Via WhatsApp, phone call, or our online booking form.',
  },
];

export default function Home() {
  return (
    <div className="bg-[#F3EBF7] text-[#30133E]">
      <Hero />

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-6xl">
            Let’s get you living life to the fullest — one step, stretch, and breath at a time.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {PILLARS.map((pillar) => (
              <article key={pillar.number} className="group">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] bg-[#E9DDF0]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <p className="mt-7 text-xs font-semibold tracking-[0.2em] text-[#8B6A9A]">{pillar.number.padStart(2, '0')}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] md:text-xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#30133E]/75">{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B3C69] underline-offset-4 hover:underline">
              Who We Are <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3EBF7] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-5xl">
              QUICK SERVICE SNAPSHOT
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#30133E]/70">
              Our services support children and adults through hospital-based care, recovery, rehabilitation and ongoing support at home.
            </p>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#30133E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4B255F]">
              View our Services Today <span aria-hidden="true">↗</span>
            </Link>

            <ul className="mt-10 space-y-3 border-t border-[#30133E]/15 pt-7 text-sm font-medium text-[#30133E]/75">
              <li>Inpatient & outpatient care</li>
              <li>Paediatric respiratory therapy</li>
              <li>ICU and post-ICU rehabilitation</li>
              <li>Postoperative recovery</li>
              <li>Home visits</li>
            </ul>
          </div>

          <div className="border-t border-[#30133E]/20">
            {SERVICES.map((service, index) => (
              <Link
                href="/services"
                key={service.title}
                className="group grid gap-3 border-b border-[#30133E]/20 py-7 transition-colors hover:bg-white/45 sm:grid-cols-[64px_1fr_32px] sm:gap-6 sm:px-4"
              >
                <span className="pt-1 text-sm tabular-nums text-[#8B6A9A]">0{index + 1}</span>
                <span>
                  <span className="block text-base font-semibold tracking-[-0.015em]">{service.title}</span>
                  <span className="mt-3 block max-w-2xl text-sm leading-7 text-[#30133E]/70">{service.description}</span>
                </span>
                <span className="hidden text-xl text-[#8B6A9A] transition-transform group-hover:translate-x-1 sm:block">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Frequently asked questions</h2>
          <div className="mt-10 border-t border-[#30133E]/20">
            {FAQS.map((faq, index) => (
              <details key={faq.question} className="group border-b border-[#30133E]/20 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold tracking-[-0.02em] marker:hidden">
                  <span>{faq.question}</span>
                  <span className="text-2xl font-light text-[#8B6A9A] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-5 pr-8 text-base leading-8 text-[#30133E]/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#30133E] px-6 py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-6xl">
            YOUR RECOVERY, YOUR PACE, OUR CARE
          </h2>
          <Link href="/contact" className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] transition hover:bg-white">
            Contact Us Today <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
