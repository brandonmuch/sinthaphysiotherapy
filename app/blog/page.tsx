import Image from 'next/image';
import Link from 'next/link';

const ARTICLES = [
  {
    title: 'How Physiotherapy Supports Renal & Metabolic Health',
    category: 'Whole-person care',
    image: '/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg',
    alt: 'Illustration of lungs and flowers representing whole-person health',
    description: 'Discover how targeted physiotherapy can support people managing renal and metabolic conditions, from maintaining muscle strength to improving cardiovascular fitness.',
    action: 'Ask our team a question',
    href: '/contact',
  },
  {
    title: 'Recognising the Signs of Respiratory Distress in Children',
    category: 'Paediatric respiratory care',
    image: '/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg',
    alt: 'Illustrated guide to signs of respiratory distress in infants',
    description: 'Early intervention matters. Learn about warning signs such as flared nostrils, rib retractions, noisy breathing and changes in alertness.',
    action: 'Contact our team',
    href: '/contact',
  },
  {
    title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew',
    category: 'Geriatrics · 15 October 2025',
    image: '/images/224639_f1933d0923ba40f6a7bffa90ac58da04~mv2.jpeg',
    alt: 'Pink stethoscope adorned with yellow roses against a purple background',
    description: 'Growing older is a gift. Physiotherapy can help older adults stay strong, steady and independent, so they can keep enjoying the moments that make life full.',
    action: 'Read article',
    href: '/blog/strong-at-every-age',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F3EBF7] pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#30133E] md:text-7xl">
          Blog
        </h1>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <article key={article.title} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#30133E]/[0.07] bg-white shadow-[0_12px_32px_-28px_rgba(48,19,62,0.55)] blog-card">
              <Link href={article.href} aria-label={article.title} className="relative block aspect-[4/3] overflow-hidden bg-[#E8D8F0]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.035]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-xs font-semibold tracking-[0.08em] text-[#8B6A9A]">{article.category}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#30133E] md:text-[1.7rem]">
                  {article.title}
                </h2>
                <p className="copy-justified mt-4 flex-1 text-sm leading-7 text-[#30133E]/70">{article.description}</p>
                <Link href={article.href} className="mt-8 inline-flex items-center gap-2 border-b border-[#30133E]/30 pb-2 text-sm font-semibold text-[#30133E] transition-colors hover:border-[#6B4B78] hover:text-[#6B4B78]">
                  {article.action} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[1.75rem] bg-[#30133E] px-8 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              Have a question about your recovery?
            </h2>
            <Link href="/contact" className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#DBC1E8] px-8 py-4 text-sm font-semibold text-[#30133E] transition hover:bg-white">
              Speak to our team <span aria-hidden="true" className="ml-3 text-lg">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
