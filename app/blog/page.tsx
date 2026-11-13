import Image from 'next/image';
import Link from 'next/link';
import SpecularButton from '@/components/ui/SpecularButton';
import SinthaCard from '@/components/ui/SinthaCard';

const ARTICLES = [
  {
    title: 'Renal & Metabolic Care: Where Recovery Begins and Builds Into Strength',
    category: 'Renal and metabolic care',
    image: '/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg',
    alt: 'Existing Sintha Physiotherapy renal and metabolic care article image',
    description: 'Explore how physiotherapy supports recovery and strength alongside renal and metabolic care.',
    href: '/blog/renal-metabolic-care',
    external: false,
  },
  {
    title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew',
    category: 'Geriatric physiotherapy',
    image: '/images/224639_f1933d0923ba40f6a7bffa90ac58da04~mv2.jpeg',
    alt: 'Pink stethoscope adorned with yellow roses against a purple background',
    description: 'Growing older is a gift. More time for laughter, more stories to share, and more wisdom to pass on. But with age also come changes in our bodies, and sometimes those changes make life feel smaller than it should.',
    href: '/blog/strong-at-every-age',
    external: false,
  },
  {
    title: 'Recognising RSV',
    subtitle: 'What Every Parent Should Know',
    category: 'Paediatric respiratory care',
    image: '/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg',
    alt: 'Illustrated guide to signs of respiratory distress in infants',
    description: 'Understand respiratory syncytial virus (RSV) and the signs parents should know about in babies and young children.',
    href: '/blog/recognising-rsv',
    external: false,
  },
  {
    title: 'Strong Women, Strong Lungs',
    subtitle: 'Breathing for Recovery with Sintha Physiotherapy',
    category: 'Respiratory physiotherapy',
    image: '/images/224639_5b990c24f553474c837d37d995e1b759~mv2.jpeg',
    alt: 'Existing Sintha Physiotherapy Strong Women, Strong Lungs article image',
    description: 'Explore the role of breathing and physiotherapy in supporting recovery and lung health.',
    href: '/blog/strong-women-strong-lungs',
    external: false,
  },
];

function ArticleLink({
  href,
  external,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  external: boolean;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#30133E] md:text-7xl">
          Blog
        </h1>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <SinthaCard key={article.title} className="h-full" backgroundColor="#F3EBF7" borderRadius={24}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#30133E]/[0.07] bg-[#F3EBF7] shadow-[0_12px_32px_-28px_rgba(48,19,62,0.55)] blog-card">
              <ArticleLink
                href={article.href}
                external={article.external}
                ariaLabel={article.title}
                className="relative block aspect-[4/3] overflow-hidden bg-[#E8D8F0]"
              >
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="blog-card-image object-cover object-center"
                />
              </ArticleLink>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-xs font-semibold tracking-[0.08em] text-[#8B6A9A]">{article.category}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#30133E] md:text-[1.7rem]">
                  {article.title}
                </h2>
                {article.subtitle && (
                  <p className="mt-2 text-sm font-medium leading-6 text-[#6B4B78]">{article.subtitle}</p>
                )}
                <p className="copy-justified mt-4 flex-1 text-sm leading-7 text-[#29262D]/80">{article.description}</p>
                <ArticleLink
                  href={article.href}
                  external={article.external}
                  className="mt-8 inline-flex items-center gap-2 border-b border-[#30133E]/30 pb-2 text-sm font-semibold text-[#30133E] transition-colors hover:border-[#6B4B78] hover:text-[#6B4B78]"
                >
                  Read article <span aria-hidden="true">↗</span>
                </ArticleLink>
              </div>
              </article>
            </SinthaCard>
          ))}
        </div>

        <div className="mt-20 rounded-[1.75rem] bg-[#30133E] px-8 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
              Have a question about your recovery?
            </h2>
            <SpecularButton size="md" radius={999} tint="#DBC1E8" tintOpacity={0.16} textColor="#FFFFFF" lineColor="#DBC1E8" baseColor="#3D2548" intensity={0.82} idleIntensity={0.18} shineSize={10} shineFade={34} thickness={1.1} glow={0.34} followMouse href="/contact">
              Speak to our team <span aria-hidden="true">↗</span>
            </SpecularButton>
          </div>
        </div>
      </div>
    </div>
  );
}
