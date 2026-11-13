import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { HomeServicesGallery } from '@/components/sections/HomeServicesGallery';

const PILLARS = [
  {
    number: '1',
    title: 'Comprehensive rehabilitation',
    description: 'From bouncing back after surgery to navigating life post-stroke or managing neurological conditions, we’re with you every step of the way. Our personalised rehab plans are built to ease pain, restore movement, and boost strength, so you can feel confident in your body again.',
    image: '/images/u2428486467_Close-up_of_physiotherapy_tools_on_a_mat_or_woode_4cdd9653-899b-4c2e-8f1d-45ca.jpeg',
    alt: 'A close-up of physiotherapy tools on an exercise mat',
  },
  {
    number: '2',
    title: 'Specialised respiratory support',
    description: 'Struggling to catch your breath? With evidence-based respiratory physiotherapy, we help you breathe easier, manage chronic lung conditions, and recover from post-op or acute respiratory issues, one deep breath at a time.',
    image: '/images/u2428486467_Young_Coloured_South_African_woman_seated_calmly__1b852e40-efdd-48c9-9676-4899.jpeg',
    alt: 'A woman seated calmly in a quiet setting',
  },
  {
    number: '3',
    title: 'Holistic wellness',
    description: 'Physiotherapy isn’t just for when things go wrong — it’s also about helping life go right. Whether you’re managing the natural effects of ageing or bouncing back from general weakness, we’re here to help you move well, stay strong, and enjoy a better quality of life.',
    image: '/images/u2428486467_Middle-aged_Black_South_African_man_in_everyday_a_e9d82078-f7f4-4b7b-8b07-6d8b.jpeg',
    alt: 'A middle-aged man in a physiotherapy setting',
  },
];

const SERVICES = [
  {
    title: 'Inpatient & outpatient physiotherapy',
    href: '/services',
    description: 'Personalised rehab plans for both hospital-based and outpatient clients — helping you recover from a wide range of physical conditions with expert, hands-on support.',
  },
  {
    title: 'Paediatric physiotherapy & respiratory care',
    href: '/services#paediatric-respiratory-support',
    description: 'Gentle, child-centred therapy focused on respiratory support because little lungs and growing bodies deserve specialised care.',
  },
  {
    title: 'ICU & post-hospital rehabilitation',
    href: '/services#advanced-respiratory-care',
    description: 'Recovering after a critical illness? We’re here to help. From breathing support to rebuilding strength, we guide your journey back to independence.',
  },
  {
    title: 'Postoperative recovery',
    href: '/services#postoperative-recovery',
    description: 'Heal stronger, faster. Our targeted physiotherapy helps reduce complications, ease pain, and restore mobility after surgery, getting you back on your feet, safely.',
  },
  {
    title: 'Neurological & vestibular rehabilitation',
    href: '/services#neurological-vestibular-rehabilitation',
    description: 'Support for stroke, Parkinson’s, balance issues, and more. Our customised rehab plans help retrain your brain and body to move with greater control and confidence.',
  },
  {
    title: 'Chronic illness & frailty management',
    href: '/services#renal-metabolic-care',
    description: 'Gentle, goal-based therapy for those living with long-term conditions or age-related challenges, helping you stay strong, steady, and independent.',
  },
  {
    title: 'Home visits',
    href: '/services#home-visits',
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

      <section className="bg-[#F3EBF7] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="copy-justified text-base leading-8 text-[#30133E]/85 md:text-xl md:leading-[1.75]">
            We take a holistic, whole-person approach to your health, healing, and well-being. While we’re known for our expert care in respiratory physiotherapy, our services go way beyond just helping you breathe easier.
          </p>
          <p className="copy-justified mt-5 text-base leading-8 text-[#30133E]/85 md:text-xl md:leading-[1.75]">
            Whether you’re bouncing back after surgery, navigating life after a stroke, caring for a little one with health challenges, or adjusting to the natural changes that come with age, we’re here for you. From neurological to vestibular conditions, or simply feeling a bit weaker than usual, our experienced team is ready to support and empower you every step of the way. With tailored physiotherapy plans designed just for you, we’ll help you move with more confidence, breathe with ease, and get back to doing the things you love.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-6xl">
            Let’s get you living life to the fullest — one step, stretch, and breath at a time.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {PILLARS.map((pillar) => (
              <article key={pillar.number} className="home-pillar-card group overflow-hidden rounded-[1.5rem] border border-[#30133E]/[0.07] bg-[#F8F3FA]">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#E9DDF0]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="home-pillar-image object-cover"
                  />
                </div>
                <div className="px-6 pb-7 pt-6 md:px-7">
                <p className="text-xs font-semibold tracking-[0.12em] text-[#8B6A9A]">{pillar.number.padStart(2, '0')}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] md:text-xl">{pillar.title}</h3>
                <p className="copy-justified mt-4 text-sm leading-7 text-[#30133E]/75">{pillar.description}</p>
                </div>
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
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-5xl">
                Our Services
              </h2>
              <p className="copy-justified mt-6 text-base leading-8 text-[#30133E]/70 md:text-lg">
                Our services support children and adults through hospital-based care, recovery, rehabilitation and ongoing support at home.
              </p>
            </div>
            <Link href="/services" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#30133E] underline-offset-4 hover:underline">
              View our Services Today <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-12">
            <HomeServicesGallery />
          </div>

          <div className="mt-16 grid gap-x-12 border-t border-[#30133E]/20 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Link
                href={service.href}
                key={service.title}
                className="home-service-link group grid gap-3 border-b border-[#30133E]/20 py-7 sm:grid-cols-[48px_1fr_24px] sm:gap-5 sm:px-4"
              >
                <span className="pt-1 text-sm tabular-nums text-[#8B6A9A]">0{index + 1}</span>
                <span>
                  <span className="block text-base font-semibold tracking-[-0.015em]">{service.title}</span>
                  <span className="copy-justified mt-3 block max-w-2xl text-sm leading-7 text-[#30133E]/70">{service.description}</span>
                </span>
                <span className="hidden text-xl text-[#8B6A9A] transition-transform duration-200 ease-out group-hover:translate-x-1 sm:block">↗</span>
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
                <p className="copy-justified max-w-3xl pt-5 pr-8 text-base leading-8 text-[#30133E]/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#30133E] px-6 py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-6xl">
            Your recovery, your pace, our care
          </h2>
          <Link href="/contact" className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] transition hover:bg-white">
            Contact us today <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
