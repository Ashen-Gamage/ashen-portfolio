import type { ComponentType } from 'react';

export interface BranchedMenuItem {
  value?: string;
  label: string;
  icon?: unknown;
  children?: BranchedMenuItem[];
}

export interface BranchedMenuProps {
  items?: BranchedMenuItem[];
  defaultOpen?: number | number[];
  defaultActive?: string;
  onSelect?: (value: string, item: BranchedMenuItem) => void;
  onToggle?: (index: number, open: boolean) => void;
  color?: string;
  accentColor?: string;
  lineColor?: string;
  width?: number;
  rowHeight?: number;
  indent?: number;
  trunk?: number;
  radius?: number;
  lineWidth?: number;
  fontSize?: number;
  drawDuration?: number;
  foldDuration?: number;
  className?: string;
}

declare const BranchedMenu: ComponentType<BranchedMenuProps>;
export default BranchedMenu;
export const LEADERSHIP_ITEMS: BranchedMenuItem[];
