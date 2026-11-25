import type { CSSProperties, ReactNode } from 'react';

export interface SwipeRowAction {
  id: string;
  label: string;
  icon?: ReactNode;
  dismiss?: boolean;
  onSelect?: () => void;
}

export interface SwipeRowProps {
  children: ReactNode;
  actions?: SwipeRowAction[];
  actionColor?: string;
  drawerColor?: string;
  rowColor?: string;
  textColor?: string;
  height?: number;
  radius?: number;
  actionWidth?: number;
  direction?: 'left' | 'right';
  snapBounce?: number;
  resistance?: number;
  collapseMs?: number;
  commitAt?: number;
  fullSwipe?: boolean;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onAction?: (action: SwipeRowAction) => void;
  onCommit?: (action: SwipeRowAction) => void;
  closeOnAction?: boolean;
  haptic?: boolean;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export default function SwipeRow(props: SwipeRowProps): React.JSX.Element;
