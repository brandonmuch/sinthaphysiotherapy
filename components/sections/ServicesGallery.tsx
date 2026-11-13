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
  const active = items[activeIndex] ?? items[0];

  const move = (direction: number) => {
    setActiveIndex(current => (current + direction + items.length) % items.length);
  };

  return (
    <div className="services-gallery">
      <div className="relative h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[480px] md:h-[540px]">
        <CircularGallery
          items={items}
          bend={2.5}
          textColor="#FFFFFF"
          borderRadius={0.065}
          font={'600 23px "Open Sans"'}
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

      {active && (
        <div className="mt-3 grid grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-2 sm:grid-cols-[48px_minmax(0,1fr)_48px] sm:gap-5">
          <button
            type="button"
            onClick={() => move(-1)}
            className="services-gallery-arrow"
            aria-label="Previous service"
          >
            <span aria-hidden="true">←</span>
          </button>

          <article
            className="min-w-0 rounded-[22px] bg-[#F3EBF7] px-4 py-6 text-[#29262D] sm:px-7 sm:py-8 md:px-10"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="mb-3 text-center text-xs font-medium tabular-nums text-[#6B4B78]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <h3 className="mx-auto max-w-3xl text-center text-xl font-semibold leading-tight tracking-[-0.03em] text-[#30133E] sm:text-2xl md:text-3xl">
              {active.title}
            </h3>
            <div className="copy-justified mx-auto mt-3 max-w-3xl space-y-3 text-[14px] leading-7 text-[#29262D]/90 sm:text-[15px] md:text-base">
              {active.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>

          <button
            type="button"
            onClick={() => move(1)}
            className="services-gallery-arrow"
            aria-label="Next service"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
