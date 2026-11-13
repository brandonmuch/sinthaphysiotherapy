import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="bg-[#F3EBF7] pb-24 pt-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6B4B78]">Knowledge & wellbeing</p>
        <h1 className="mb-14 text-5xl font-semibold tracking-tight text-[#30133E] md:text-6xl">Journal & insights</h1>

        <div className="space-y-10">
          <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm">
            <div className="relative h-[280px] w-full md:h-[420px]">
              <Image
                src="/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg"
                alt="Floral illustration of the lungs, representing respiratory health"
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A9A]">Whole-person care</p>
              <h2 className="text-3xl font-semibold text-[#30133E] transition group-hover:text-[#6B4B78] md:text-4xl">
                How Physiotherapy Supports Renal & Metabolic Health
              </h2>
              <p className="mb-6 mt-5 text-base leading-8 text-[#30133E]/70">
                Discover how targeted physiotherapy can support people managing renal and metabolic conditions, from maintaining muscle strength to improving cardiovascular fitness.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#30133E]/40 pb-1 text-sm font-semibold text-[#30133E]">
                Ask our team a question <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          <article className="group grid overflow-hidden rounded-[1.75rem] bg-white shadow-sm md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg"
                alt="Illustrated guide to signs of respiratory distress in infants"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A9A]">Paediatric respiratory care</p>
              <h2 className="text-2xl font-semibold text-[#30133E] md:text-3xl">
                Recognising the Signs of Respiratory Distress in Children
              </h2>
              <p className="mb-6 mt-4 text-sm leading-7 text-[#30133E]/70">
                Early intervention matters. Learn about warning signs such as flared nostrils, rib retractions, noisy breathing and changes in alertness.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#30133E]/40 pb-1 text-sm font-semibold text-[#30133E]">
                Contact our team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
