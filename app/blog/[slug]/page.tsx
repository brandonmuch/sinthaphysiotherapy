import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SpecularButton from '@/components/ui/SpecularButton';

const ARTICLE = {
  slug: 'strong-at-every-age',
  title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew',
  category: 'Geriatrics',
  date: '15 October 2025',
  image: '/images/224639_f1933d0923ba40f6a7bffa90ac58da04~mv2.jpeg',
  alt: 'Pink stethoscope adorned with vibrant yellow roses against a purple background, blending medicine and nature in a serene composition.',
  intro:
    'Growing older is a gift. More time for laughter, more stories to share, and more wisdom to pass on. But with age also come changes in our bodies, and sometimes those changes make life feel smaller than it should.',
};

export function generateStaticParams() {
  return [{ slug: ARTICLE.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== ARTICLE.slug) {
    return { title: 'Article not found | Sintha Physiotherapy' };
  }

  return {
    title: ARTICLE.title,
    description:
      'How physiotherapy can help older adults maintain strength, balance, mobility and independence.',
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== ARTICLE.slug) notFound();

  return (
    <article className="min-h-screen bg-white pb-24 pt-32 text-[#29262D] md:pt-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B4B78] transition-colors hover:text-[#30133E]"
        >
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <header className="mt-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#8B6A9A]">
            {ARTICLE.category} <span aria-hidden="true">·</span> {ARTICLE.date}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl">
            {ARTICLE.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#29262D]/85">
            {ARTICLE.intro}
          </p>
        </header>

        <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#F3EBF7]">
          <Image
            src={ARTICLE.image}
            alt={ARTICLE.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain p-4"
          />
        </figure>

        <div className="mx-auto mt-12 max-w-3xl space-y-8 text-base leading-8 text-[#29262D]/85 md:text-lg">
          <p>
            Here’s a fact that might surprise you: after the age of 65, 1 in 3 older
            adults experience a fall each year. Falls are the leading cause of injury
            in older people, and many never regain their full independence afterwards.
            Scary? Yes. But here’s the good news: physiotherapy can reduce fall risk by
            up to 40%. That’s nearly half!
          </p>

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#30133E] md:text-3xl">
              How Physiotherapy Can Help
            </h2>
            <p className="mt-4">
              At Sintha Physio, we believe our gogos, oupas, moms, and dads deserve to
              live fully, not fearfully. Physiotherapy for older adults focuses on:
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>
                <strong className="font-semibold text-[#30133E]">Strength &amp; balance training:</strong>{' '}
                Building muscle and confidence, one steady step at a time.
              </li>
              <li>
                <strong className="font-semibold text-[#30133E]">Mobility &amp; flexibility:</strong>{' '}
                Helping stiff joints loosen up so everyday tasks feel easier.
              </li>
              <li>
                <strong className="font-semibold text-[#30133E]">Pain management:</strong>{' '}
                Gentle movement can ease arthritis and chronic pain.
              </li>
              <li>
                <strong className="font-semibold text-[#30133E]">Confidence:</strong>{' '}
                Because feeling steady on your feet isn’t just physical, it’s emotional too.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#30133E] md:text-3xl">
              Small Tips with Big Impact
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6">
              <li>Keep moving. Even short daily walks make a difference.</li>
              <li>Practice “sit-to-stand” from a chair to strengthen legs.</li>
              <li>Stay hydrated as it improves energy and joint health.</li>
              <li>Make the home fall-safe (no loose rugs, clear pathways).</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#30133E] md:text-3xl">
              Why It Matters
            </h2>
            <p className="mt-4">
              Physio doesn’t just add years to life; it adds life to years. Imagine
              your loved one confidently playing with the grandkids, enjoying a stroll
              in the garden, or dancing at a family wedding. That’s what strong
              movement brings: joy, freedom, and independence.
            </p>
            <p className="mt-4">
              At Sintha Physio, we’re here with warm hands, kind hearts, and proven
              skills to walk this journey with you and your loved ones.
            </p>
            <p className="mt-4">
              Remember: it’s never too late to start moving, healing, and thriving,
              because strength has no age limit.
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-[1.5rem] bg-[#F3EBF7] p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Would you like to talk to a physiotherapist?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#30133E]/75">
            Speak with the Sintha team about your needs and the support available.
          </p>
          <SpecularButton
            className="mt-6"
            size="md"
            radius={999}
            tint="#DBC1E8"
            tintOpacity={0.16}
            textColor="#FFFFFF"
            lineColor="#DBC1E8"
            baseColor="#30133E"
            intensity={0.82}
            idleIntensity={0.18}
            shineSize={10}
            shineFade={34}
            thickness={1.1}
            glow={0.32}
            followMouse
            href="/contact"
          >
            Contact our team <span aria-hidden="true">↗</span>
          </SpecularButton>
        </div>
      </div>
    </article>
  );
}
