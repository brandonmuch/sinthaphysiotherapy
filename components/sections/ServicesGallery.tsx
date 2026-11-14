'use client';

import { useState } from 'react';
import CircularGallery from '@/components/ui/CircularGallery';
import { InterfaceIcon } from '@/components/ui/InterfaceIcon';
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
      <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] sm:h-[480px] md:h-[540px]">
        <CircularGallery
          items={items}
          bend={2.5}
          textColor="#FFFFFF"
          borderRadius={0.065}
          font={'600 23px sans-serif'}
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
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3 sm:justify-end sm:gap-3">
            <span className="text-xs font-medium tabular-nums text-[#DBC1E8] sm:hidden">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="services-gallery-arrow"
                aria-label="Previous service"
              >
                <InterfaceIcon name="chevron-left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="services-gallery-arrow"
                aria-label="Next service"
              >
                <InterfaceIcon name="chevron-right" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <article
            className="min-w-0 w-full rounded-[22px] bg-[#F3EBF7] px-5 py-6 text-left text-[#29262D] sm:px-7 sm:py-8 md:px-10"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="mb-3 hidden text-center text-xs font-medium tabular-nums text-[#6B4B78] sm:block">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <h3 className="mx-auto max-w-3xl text-left text-xl font-semibold leading-tight tracking-[-0.03em] text-[#30133E] sm:text-center sm:text-2xl md:text-3xl">
              {active.title}
            </h3>
            <div className="mx-auto mt-4 max-w-3xl space-y-4 text-left text-[15px] leading-[1.75] text-[#29262D]/90 sm:text-[15px] md:text-base md:leading-7">
              {active.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
