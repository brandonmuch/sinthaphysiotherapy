'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function SmartImage({
  src, alt, className, sizes = '100vw', priority = false,
}: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-sage/25 via-cream to-terracotta/20',
          className,
        )}
        aria-label={alt}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  );
}