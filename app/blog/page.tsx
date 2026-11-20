import Image from 'next/image';
import Link from 'next/link';
import { BlurText } from '@/components/ui/BlurText';

const ARTICLES = [
  {
    title: 'Renal & Metabolic Care: Where Recovery Begins and Builds Into Strength',
    image: '/images/224639_7f08ec929cc14567a7df828b2cb05aab~mv2.jpeg',
    alt: 'A woman featured in the Renal and Metabolic Care article',
    excerpt:
      'Let’s be honest, living with kidney failure, diabetes or metabolic disorders can make your body feel like it’s running on low battery every single day. Fatigue, swelling, unsteady legs and barely enough energy to argue with the TV… it’s a lot to carry. That’s where physiotherapy steps in, gently, purposefully and with your strength in mind.',
    date: 'Nov 29, 2025',
    readTime: '2 min read',
    href: '/blog/renal-metabolic-care',
  },
  {
    title: 'Strong at Every Age: How Physiotherapy Helps Our Golden Crew',
    image: '/images/224639_4846fca15aec4b688dc5b48515df98c4~mv2.jpeg',
    alt: 'An older man and woman featured in the Strong at Every Age article',
    excerpt:
      'Growing older is a gift. More time for laughter, more stories to share and more wisdom to pass on. But with age also come changes in our bodies, and sometimes those changes make life feel smaller than it should. Here’s how physiotherapy can help older adults stay mobile and independent.',
    date: 'Oct 15, 2025',
    readTime: '2 min read',
    href: '/blog/strong-at-every-age',
  },
  {
    title: 'Recognising RSV',
    image: '/images/224639_153886ad0cdc4784891ee393e60f23d4~mv2.jpeg',
    alt: 'A young child using a colourful breathing device',
    excerpt:
      'What every parent should know. Respiratory Syncytial Virus (RSV) is one of the most common respiratory infections affecting babies and young children. Learn the signs of respiratory distress and when to seek support.',
    date: 'Aug 11, 2025',
    readTime: '2 min read',
    href: '/blog/recognising-rsv',
  },
  {
    title: 'Strong Women, Strong Lungs',
    image: '/images/224639_5b990c24f553474c837d37d995e1b759~mv2.jpeg',
    alt: 'Strong Women, Strong Lungs article image',
    excerpt:
      'Breathing for Recovery with Sintha Physiotherapy. Celebrating National Women’s Month through the power of breath and the role of respiratory physiotherapy in recovery.',
    date: 'Aug 3, 2025',
    readTime: '1 min read',
    href: '/blog/strong-women-strong-lungs',
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="site-container">
        <div className="blog-page__heading">
          <p className="section-kicker">Sintha Physiotherapy</p>
          <h1><BlurText text="All posts" delay={70} /></h1>
        </div>

        <nav className="blog-categories" aria-label="Blog categories">
          <Link href="/blog" aria-current="page">
            All Posts
          </Link>
          <Link href="/blog?category=geriatrics">Geriatrics</Link>
        </nav>

        <div className="blog-grid">
          {ARTICLES.map((article) => (
            <article className="blog-card" key={article.title}>
              <Link className="blog-card__image" href={article.href} aria-label={article.title}>
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={720}
                  height={540}
                  sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                />
              </Link>

              <div className="blog-card__content">
                <div className="blog-card__author">
                  <Image
                    src="/images/Sintha Physiotherapy Logo Favicon Lilac.png"
                    alt=""
                    width={40}
                    height={40}
                    className="blog-card__avatar"
                  />
                  <div className="blog-card__author-copy">
                    <span className="blog-card__author-name">Sintha Physiotherapy</span>
                    <span className="blog-card__date">
                      {article.date}<span aria-hidden="true"> · </span>{article.readTime}
                    </span>
                  </div>
                </div>

                <h2>
                  <Link href={article.href}>{article.title}</Link>
                </h2>
                <p className="blog-card__excerpt">{article.excerpt}</p>

                <div className="blog-card__footer">
                  <Link href={article.href} className="blog-card__read-link">
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
