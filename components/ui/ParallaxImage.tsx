'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  strength?: number;
  priority?: boolean;
  sizes?: string;
};

export function ParallaxImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  objectPosition = 'center',
  strength = 58,
  priority = false,
  sizes = '100vw',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div
      ref={ref}
      className={`parallax-media ${className}`.trim()}
      aria-hidden={alt.length === 0 ? true : undefined}
    >
      <motion.div
        className="parallax-media__inner"
        style={{ y: reduceMotion ? 0 : y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`parallax-media__image ${imageClassName}`.trim()}
          style={{ objectPosition }}
        />
      </motion.div>
    </div>
  );
}
