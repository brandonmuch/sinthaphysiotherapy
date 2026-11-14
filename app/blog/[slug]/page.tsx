import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SpecularButton from '@/components/ui/SpecularButton';

const ARTICLES = [
  {
    slug: 'renal-metabolic-care',
    title: 'Renal & Metabolic Care: Where Recovery Begins and Builds Into Strength',
    category: 'Renal and metabolic care',
    date: '29 November 2025',
    readTime: '2 min read',
    image: '/images/224639_4dc100e8d2e945a79919dc279d08b41a~mv2.jpeg',
    alt: 'Pink stethoscope adorned with vibrant yellow roses against a purple background',
    intro: 'Let’s be honest, living with kidney failure, diabetes, or metabolic disorders can make your body feel like it’s running on low battery every single day. Fatigue, swelling, unsteady legs, and barely enough energy to argue with the TV… it’s a lot to carry.',
    content: (
      <>
        <p>That’s where physiotherapy steps in, gently, purposefully, and with your strength in mind.</p>
        <h2>How Physiotherapy Supports Renal &amp; Metabolic Health</h2>
        <p>At Sintha Physiotherapy, our Renal &amp; Metabolic Care program focuses on small, guided movements that create meaningful change. Think of it as “exercise with a personality”, light stretches, intentional breathing, gentle strengthening, and tiny wins that add up quickly.</p>
        <p>These sessions help:</p>
        <ul>
          <li>Reduce fluid retention</li>
          <li>Improve circulation</li>
          <li>Keep muscles engaged and active</li>
          <li>Boost daily energy and endurance</li>
          <li>Support balance and mobility</li>
        </ul>
        <p>Instead of simply getting through the day, the goal is to help you enjoy it.</p>
        <h2>Why Early Movement Matters</h2>
        <p>Kidney and metabolic conditions can make mobility decline faster than most people expect. When the body slows down, complications can follow, pressure sores, muscle wasting, stiffness, and weakness. Early movement helps prevent this “sleep mode” from taking over. Even small exercises done consistently can improve recovery, confidence, and independence.</p>
        <h2>Our Team Philosophy</h2>
        <p>We don’t believe in cookie-cutter care. We meet every patient exactly where they are, physically, emotionally, and functionally. Breathing isn’t just automatic; it’s the secret ingredient behind movement, mood, and healing.</p>
        <p>Our approach is:</p>
        <ul>
          <li><strong>Holistic:</strong> We consider the whole person, not just the diagnosis.</li>
          <li><strong>Hands-on:</strong> We guide, support, and adjust exercises to suit your needs.</li>
          <li><strong>Human:</strong> We listen, we teach, we encourage, and we celebrate every win, big or small.</li>
        </ul>
        <p>Recovery isn’t a straight line. It’s a journey, and we walk it with you.</p>
      </>
    ),
  },
  {
    slug: 'recognising-rsv',
    title: 'Recognising RSV',
    subtitle: 'What Every Parent Should Know',
    category: 'Paediatric respiratory care',
    date: '11 August 2025',
    readTime: '2 min read',
    image: '/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg',
    alt: 'Pink stethoscope adorned with vibrant yellow roses against a purple background',
    intro: 'Respiratory Syncytial Virus (RSV) is one of the most common respiratory infections affecting babies and young children, particularly those under the age of two. While most cases are mild, RSV can lead to more serious conditions like bronchiolitis or pneumonia, especially in vulnerable infants or those with underlying conditions.',
    content: (
      <>
        <h2>Did you know?</h2>
        <p>The RSV is the leading cause of lower respiratory tract infections in children under one year in South Africa? In fact, one out of every four respiratory-related hospital admissions in children under two years old is due to RSV. These statistics highlight just how important it is for parents and caregivers to be aware of the symptoms.</p>
        <p>Some of the key signs to look out for include:</p>
        <ul>
          <li>A persistent cough</li>
          <li>Wheezing</li>
          <li>Rapid breathing.</li>
          <li>Nostrils flaring or the chest sinking in with breathing</li>
        </ul>
        <p>You may notice your child having trouble feeding, becoming unusually tired or irritable, or struggling to breathe comfortably. In more severe cases, a child may develop a bluish tint around the lips or fingernails, which is a medical emergency.</p>
        <p>It’s also important to understand that RSV is a viral infection, not a bacterial one. That means it cannot be treated with antibiotics. Instead, care focuses on easing symptoms while the virus runs its course, sometimes including antivirals or oxygen support if needed.</p>
        <p>At Sintha Physiotherapy, we help ease respiratory distress through safe, specialised techniques to support breathing and clear the lungs.</p>
        <h2>Reach out early.</h2>
        <p>We’re here to help your little one breathe easier and recover faster.</p>
        <blockquote>“Movement is medicine. A breath well taken is a step toward healing”<br />– David Butler, Specialist Physiotherapist &amp; Educator</blockquote>
      </>
    ),
  },
  {
    slug: 'strong-women-strong-lungs',
    title: 'Strong Women, Strong Lungs',
    subtitle: 'Breathing for Recovery with Sintha Physiotherapy',
    category: 'Respiratory physiotherapy',
    date: '3 August 2025',
    readTime: '1 min read',
    image: '/images/224639_5b990c24f553474c837d37d995e1b759~mv2.jpeg',
    alt: 'Existing Sintha Physiotherapy Strong Women, Strong Lungs article image',
    intro: 'Celebrating National Women’s Month through the Power of Breath',
    content: (
      <>
        <p>At Sintha Physiotherapy, we see resilience every day, in mothers nurturing children through illness, in women recovering from surgery, and in grandmothers rebuilding their strength after a hospital stay. On National Women’s Day and Month, we honour that strength, not just in muscle, but in every breath.</p>
        <p>Breath is more than air, it’s a signal of life, calm, and recovery. For women facing physical challenges, trauma, or chronic illness, breathing well can be the first step to healing.</p>
        <p>So, what does breathing therapy really involve? At Sintha Physiotherapy, we use evidence-based techniques tailored to each person’s recovery needs, whether it’s after major surgery, an ICU stay, or ongoing respiratory conditions like asthma or bronchitis.</p>
        <p>Simple but powerful breathing techniques we often recommend include:</p>
        <ul>
          <li><strong>Pursed-Lip Breathing:</strong> Helps slow the breath and keep airways open longer. Especially helpful for women with chronic lung conditions.</li>
          <li><strong>Diaphragmatic Breathing:</strong> Also known as belly breathing, this calms the nervous system and strengthens respiratory muscles.</li>
          <li><strong>Active Cycle of Breathing Techniques (ACBT):</strong> Designed to clear mucus and improve airflow — particularly useful post-surgery or during chest infections.</li>
        </ul>
        <p>Each technique is taught with care and adjusted as recovery progresses. And the beauty is, these can be done anywhere, even in bed or at home with your child beside you!</p>
        <p>As women, we often put others first. But today, we invite you to pause, inhale deeply, and reconnect with yourself. Recovery isn’t just about movement- it begins with the breath.</p>
        <p>At Sintha, we’re here to help you breathe easier, move stronger, and heal fully, one breath at a time.</p>
      </>
    ),
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
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B4B78] transition-colors hover:text-[#30133E]"
        >
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <header className="mt-10">
          <p className="text-xs font-semibold text-[#6B4B78]">
            {article.category} <span aria-hidden="true">·</span> {article.date} <span aria-hidden="true">·</span> {article.readTime}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#30133E] md:text-6xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-3 text-lg font-medium text-[#6B4B78] md:text-xl">
              {article.subtitle}
            </p>
          )}
          <p className="mt-6 max-w-[68ch] text-[17px] leading-[1.85] text-[#29262D]/85 md:text-lg">
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

        <section className="blog-article-copy mt-12">
          {article.content}
        </section>

        <aside className="mt-12 rounded-[28px] bg-[#F3EBF7] p-7 md:p-10">
          <p className="text-[15px] leading-7 text-[#29262D]/85">
            Every person’s experience is different. If this topic raises questions about your own health or recovery, speak with a healthcare professional who understands your medical history.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-[#29262D]/85">
            The Sintha team can help you explore whether physiotherapy support is appropriate for your needs and what a personalised plan may involve.
          </p>
        </aside>

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
