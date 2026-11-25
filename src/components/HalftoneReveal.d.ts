import type { CSSProperties } from 'react';

export interface HalftoneRevealProps {
  src?: string;
  fit?: 'cover' | 'contain';
  mode?: string;
  shape?: string;
  cellSize?: number;
  angle?: number;
  dotScale?: number;
  inkColor?: string;
  accentColor?: string;
  paperColor?: string;
  contrast?: number;
  brightness?: number;
  invert?: boolean;
  roughness?: number;
  misregistration?: number;
  revealRadius?: number;
  softness?: number;
  linger?: number;
  reverse?: boolean;
  wander?: boolean;
  clickBurst?: boolean;
  intro?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function HalftoneReveal(props: HalftoneRevealProps): React.JSX.Element;
