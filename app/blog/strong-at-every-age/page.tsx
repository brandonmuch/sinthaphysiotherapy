import Link from 'next/link';
import Image from 'next/image';
import SpecularButton from '@/components/ui/SpecularButton';

export const metadata = {
  title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew | Sintha Physiotherapy',
  description: 'How physiotherapy supports strength, balance, mobility and confidence for older adults.',
};

export default function StrongAtEveryAgePage() {
  return (
    <article className="min-h-screen bg-white pb-24 pt-32 text-[#29262D]">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B4B78] hover:underline">
          <span aria-hidden="true">←</span> Back to blog
        </Link>

        <p className="mt-10 text-xs font-semibold tracking-[0.08em] text-[#8B6A9A]">Geriatrics · 15 October 2025 · 2 min read</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#30133E] md:text-6xl">
          Strong at Every Age: How Physiotherapy Helps Our Golden Crew
        </h1>
        <p className="mt-8 text-xl leading-8 text-[#29262D]/85">
          Growing older is a gift. More time for laughter, more stories to share, and more wisdom to pass on. But with age also come changes in our bodies, and sometimes those changes make life feel smaller than it should.
        </p>

        <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[26px] bg-[#F3EBF7]">
          <Image
            src="/images/224639_f1933d0923ba40f6a7bffa90ac58da04~mv2.jpeg"
            alt="Pink stethoscope adorned with vibrant yellow roses against a purple background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain p-4"
          />
        </figure>

        <div className="prose prose-lg copy-justified mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#30133E] prose-p:leading-8 prose-p:text-[#29262D]/85 prose-li:leading-8 prose-li:text-[#30133E]/80">
          <p>Here’s a fact that might surprise you: after the age of 65, 1 in 3 older adults experience a fall each year. Falls are the leading cause of injury in older people, and many never regain their full independence afterwards. Scary? Yes. But here’s the good news: physiotherapy can reduce fall risk by up to 40% That’s nearly half!</p>

          <h2>How Physiotherapy Can Help</h2>
          <p>At Sintha Physio, we believe our gogos, oupas, moms, and dads deserve to live fully, not fearfully. Physiotherapy for older adults focuses on:</p>
          <ul>
            <li><strong>Strength & balance training:</strong> Building muscle and confidence, one steady step at a time</li>
            <li><strong>Mobility & flexibility:</strong> Helping stiff joints loosen up so everyday tasks feel easier</li>
            <li><strong>Pain management:</strong> Gentle movement can ease arthritis and chronic pain</li>
            <li><strong>Confidence:</strong> Because feeling steady on your feet isn’t just physical, it’s emotional too</li>
          </ul>

          <h2>Small Tips with Big Impact</h2>
          <ol>
            <li>Keep moving even short daily walks make a difference</li>
            <li>Practice “sit-to-stand” from a chair to strengthen legs</li>
            <li>Stay hydrated as it improves energy and joint health</li>
            <li>Make the home fall-safe (no loose rugs, clear pathways)</li>
          </ol>

          <h2>Why It Matters</h2>
          <p>Physio doesn’t just add years to life; it adds life to years. Imagine your loved one confidently playing with the grandkids, enjoying a stroll in the garden, or dancing at a family wedding. That’s what strong movement brings: joy, freedom, and independence.</p>
          <p>At Sintha Physio, we’re here with warm hands, kind hearts, and proven skills to walk this journey with you and your loved ones.</p>
          <p>Remember: it’s never too late to start moving, healing, and thriving — because strength has no age limit.</p>
        </div>

        <div className="mt-14 rounded-[26px] border border-[#30133E]/10 bg-[#F8F4FA] p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#30133E]">Ready to keep moving?</h2>
          <p className="mt-3 leading-7 text-[#29262D]/80">Speak to our team about physiotherapy support for yourself or someone you care about.</p>
          <SpecularButton
            className="mt-7"
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
            Book an assessment <span aria-hidden="true">↗</span>
          </SpecularButton>
        </div>
      </div>
    </article>
  );
}
