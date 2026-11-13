import type { ReactNode } from 'react';
import BorderGlow from '@/components/ui/BorderGlow';

type SinthaCardProps = {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  borderRadius?: number;
};

export function SinthaCard({
  children,
  className = '',
  backgroundColor = '#F3EBF7',
  borderRadius = 24,
}: SinthaCardProps) {
  return (
    <BorderGlow
      className={`sintha-card-glow ${className}`}
      edgeSensitivity={24}
      glowColor="279 48 82"
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      glowRadius={28}
      glowIntensity={0.82}
      coneSpread={28}
      animated={false}
      colors={['#DBC1E8', '#8B6A9A', '#FFFFFF']}
      fillOpacity={0.14}
    >
      {children}
    </BorderGlow>
  );
}

export default SinthaCard;
