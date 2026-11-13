export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h1 className="font-serif text-6xl text-charcoal mb-12">Journal</h1>
        
        <div className="space-y-12">
          {/* Article 1 */}
          <article className="group cursor-pointer">
            <p className="text-terracotta text-sm uppercase tracking-widest mb-3">Health & Wellness</p>
            <h2 className="font-serif text-4xl text-charcoal group-hover:text-terracotta transition-colors mb-4">
              How Physiotherapy Supports Renal & Metabolic Health
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Discover how targeted physiotherapy interventions can significantly improve the quality of life for individuals managing renal and metabolic conditions...
            </p>
            <span className="text-sm font-semibold border-b border-charcoal pb-1">Read Article</span>
          </article>
        </div>
      </div>
    </main>
  );
}