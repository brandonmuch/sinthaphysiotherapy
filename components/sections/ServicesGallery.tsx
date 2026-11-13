'use client';

import { useState } from 'react';
import CircularGallery from '@/components/ui/CircularGallery';
import './ServicesGallery.css';

type ServiceGalleryItem = {
  image: string;
  text: string;
  title: string;
  alt: string;
  paragraphs: string[];
};

export default function ServicesGallery({ items }: { items: ServiceGalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const active = items[activeIndex] ?? items[0];

  const move = (direction: number) => {
    setActiveIndex(current => (current + direction + items.length) % items.length);
    setDetailsOpen(false);
  };

  return (
    <div className="services-gallery">
      <div className="relative h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[480px] md:h-[540px]">
        <CircularGallery
          items={items}
          bend={2.5}
          textColor="#FFFFFF"
          borderRadius={0.065}
          font={'600 23px "Figtree"'}
          itemSize={0.78}
          itemAspect={0.82}
          gap={0.24}
          scrollSpeed={1.25}
          scrollEase={0.07}
          wave={0.42}
          fadeEdges={0.1}
          shadow={0.18}
          grayscale={false}
          showTitles
          snap
          openOnClick={false}
          activeIndex={activeIndex}
          onActiveChange={setActiveIndex}
          intro
        />
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3" aria-label="Choose a service">
          <button type="button" onClick={() => move(-1)} className="services-gallery-arrow" aria-label="Previous service">←</button>
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => { setActiveIndex(index); setDetailsOpen(false); }}
                className="services-gallery-dot"
                data-active={index === activeIndex ? 'true' : 'false'}
                aria-label={`Show ${item.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} className="services-gallery-arrow" aria-label="Next service">→</button>
          <span className="ml-1 text-xs font-medium text-white/75 tabular-nums">{String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        </div>
        <button type="button" className="services-gallery-cta" onClick={() => setDetailsOpen(open => !open)} aria-expanded={detailsOpen}>
          {detailsOpen ? 'Close service details' : 'View service'} <span aria-hidden="true">↗</span>
        </button>
      </div>

      {detailsOpen && active && (
        <article className="mt-7 rounded-[24px] border border-[#DBC1E8]/70 bg-[#F3EBF7] p-6 text-[#29262D] shadow-[0_16px_42px_-30px_rgba(12,5,18,0.55)] sm:p-8 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#30133E] md:text-3xl">{active.title}</h3>
            <span className="shrink-0 text-sm font-semibold text-[#8B6A9A]">{String(activeIndex + 1).padStart(2, '0')}</span>
          </div>
          <div className="copy-justified mt-5 space-y-4 text-base leading-8 text-[#29262D]/90">
            {active.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      )}
    </div>
  );
}
