import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SpecularButton from '@/components/ui/SpecularButton';

const ARTICLES = [
  {
    slug: 'renal-metabolic-care',
    title: 'Renal & Metabolic Care: Where Recovery Begins and Builds Into Strength',
    category: 'Renal and metabolic care',
    image: '/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg',
    imageFrame: 'aspect-[2/3]',
    alt: 'Illustration of a person with floral lungs, representing whole-person respiratory and metabolic health',
    intro: 'Explore how physiotherapy supports recovery and strength alongside renal and metabolic care.',
  },
  {
    slug: 'recognising-rsv',
    title: 'Recognising RSV',
    subtitle: 'What Every Parent Should Know',
    category: 'Paediatric respiratory care',
    image: '/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg',
    imageFrame: 'aspect-[2/3]',
    alt: 'Illustrated guide to signs of respiratory distress in infants',
    intro: 'Understand respiratory syncytial virus (RSV) and the signs parents should know about in babies and young children.',
  },
  {
    slug: 'strong-women-strong-lungs',
    title: 'Strong Women, Strong Lungs',
    subtitle: 'Breathing for Recovery with Sintha Physiotherapy',
    category: 'Respiratory physiotherapy',
    image: '/images/224639_5b990c24f553474c837d37d995e1b759~mv2.jpeg',
    imageFrame: 'aspect-[16/9]',
    alt: 'Existing Sintha Physiotherapy Strong Women, Strong Lungs article image',
    intro: 'Explore the role of breathing and physiotherapy in supporting recovery and lung health.',
  },
];

export function generateStaticParams() {
  return ARTICLES.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find(item => item.slug === slug);

  if (!article) return { title: 'Article not found | Sintha Physiotherapy' };

  return {
    title: `${article.title} | Sintha Physiotherapy`,
    description: article.intro,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find(item => item.slug === slug);

  if (!article) notFound();

  return (
    <article className="min-h-screen bg-white pb-24 pt-32 text-[#29262D] md:pt-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B4B78] transition-colors hover:text-[#30133E]"
        >
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <header className="mt-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">
            {article.category}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#30133E] md:text-6xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-3 text-lg font-medium text-[#6B4B78] md:text-xl">
              {article.subtitle}
            </p>
          )}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#29262D]/85">
            {article.intro}
          </p>
        </header>

        <figure className="relative mx-auto mt-10 aspect-[16/9] max-h-[420px] w-full max-w-3xl overflow-hidden rounded-[28px] bg-[#F3EBF7]">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain object-center"
          />
        </figure>

        <section className="mt-12 rounded-[28px] bg-[#F3EBF7] p-7 md:p-10">
          <p className="text-base leading-8 text-[#29262D]/85">
            Every person’s experience is different. If this topic raises questions about your own health or recovery, speak with a healthcare professional who understands your medical history.
          </p>
          <p className="mt-4 text-base leading-8 text-[#29262D]/85">
            The Sintha team can help you explore whether physiotherapy support is appropriate for your needs and what a personalised plan may involve.
          </p>
        </section>

        <div className="mt-10">
          <SpecularButton
            size="md"
            radius={999}
            tint="#DBC1E8"
            tintOpacity={0.12}
            textColor="#FFFFFF"
            lineColor="#DBC1E8"
            baseColor="#30133E"
            intensity={0.82}
            idleIntensity={0.16}
            shineSize={10}
            shineFade={34}
            thickness={1.1}
            glow={0.3}
            followMouse
            href="/contact"
          >
            Speak to our team <span aria-hidden="true">↗</span>
          </SpecularButton>
        </div>
      </div>
    </article>
  );
}
