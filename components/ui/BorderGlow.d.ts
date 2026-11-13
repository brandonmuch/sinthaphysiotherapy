import type { CSSProperties, ReactNode, ReactElement } from 'react';

export interface BorderGlowProps {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}

declare function BorderGlow(props: BorderGlowProps): ReactElement;

export default BorderGlow;
