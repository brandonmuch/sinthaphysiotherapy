import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="bg-lilac-light pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h1 className="text-5xl md:text-6xl font-bold text-purple mb-16">Journal & Insights</h1>
        
        <div className="space-y-16">
          {/* Main Article - YOUR EXACT FILENAME */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm group">
            <div className="relative h-[400px] w-full">
              <Image src="/images/blog-floral-lungs.jpg" alt="Floral Lungs Illustration" fill className="object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold text-purple-light uppercase tracking-widest mb-3">Respiratory Health</p>
              <h2 className="text-3xl md:text-4xl font-bold text-purple mb-6 group-hover:text-black transition-colors">
                How Physiotherapy Supports Renal & Metabolic Health
              </h2>
              <p className="text-lg text-purple/80 leading-relaxed mb-6">
                Discover how targeted physiotherapy interventions can significantly improve the quality of life for individuals managing renal and metabolic conditions. From maintaining muscle mass to improving cardiovascular fitness, physiotherapy plays a crucial role in holistic care.
              </p>
              <Link href="#" className="inline-block border-b-2 border-purple text-purple font-semibold pb-1 hover:text-black hover:border-black transition-colors">
                Read Full Article
              </Link>
            </div>
          </article>

          {/* Secondary Article - YOUR EXACT FILENAME */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-2 group">
            <div className="relative h-[300px] md:h-auto">
              <Image src="/images/respiratory-chart.jpg" alt="Signs of Respiratory Distress" fill className="object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm font-semibold text-purple-light uppercase tracking-widest mb-3">Paediatric Care</p>
              <h2 className="text-3xl font-bold text-purple mb-4 group-hover:text-black transition-colors">
                Recognising the Signs of Respiratory Distress in Children
              </h2>
              <p className="text-purple/80 leading-relaxed mb-6">
                Early intervention is key. Learn the critical signs of respiratory distress in infants and children, from flared nostrils and rib retractions to altered consciousness.
              </p>
              <Link href="#" className="inline-block border-b-2 border-purple text-purple font-semibold pb-1 hover:text-black hover:border-black transition-colors">
                Read Guide
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}