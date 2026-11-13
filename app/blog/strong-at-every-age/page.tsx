import Link from 'next/link';

export const metadata = {
  title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew | Sintha Physiotherapy',
  description: 'How physiotherapy supports strength, balance, mobility and confidence for older adults.',
};

export default function StrongAtEveryAgePage() {
  return (
    <article className="min-h-screen bg-[#F3EBF7] pb-24 pt-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B4B78] hover:underline">
          <span aria-hidden="true">←</span> Back to Journal
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A9A]">Geriatrics · 15 October 2025 · 2 min read</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#30133E] md:text-6xl">
          Strong at Every Age: How Physiotherapy Helps Our Golden Crew
        </h1>
        <p className="mt-8 text-xl leading-8 text-[#30133E]/75">
          Growing older is a gift. More time for laughter, more stories to share, and more wisdom to pass on. But with age also come changes in our bodies, and sometimes those changes make life feel smaller than it should.
        </p>

        <div className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#30133E] prose-p:leading-8 prose-p:text-[#30133E]/80 prose-li:leading-8 prose-li:text-[#30133E]/80">
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

        <div className="mt-14 rounded-[1.5rem] bg-white p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#30133E]">Ready to keep moving?</h2>
          <p className="mt-3 leading-7 text-[#30133E]/70">Speak to our team about physiotherapy support for yourself or someone you care about.</p>
          <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-[#30133E] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4B255F]">
            Book an assessment <span aria-hidden="true" className="ml-3">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
