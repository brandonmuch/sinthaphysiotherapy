import type { CSSProperties, MouseEvent, ReactElement } from 'react';

export interface FlowingMenuItem {
  text: string;
  link?: string;
  image?: string;
  marquee?: string;
  meta?: string;
}

export interface FlowingMenuProps {
  items?: FlowingMenuItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'alternate';
  followCursor?: number;
  duration?: number;
  stretch?: number;
  magnet?: number;
  bandInset?: number;
  bandRadius?: number;
  carryContent?: boolean;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
  dividers?: boolean;
  dimInactive?: boolean;
  align?: 'left' | 'center';
  showIndex?: boolean;
  showArrow?: boolean;
  imageShape?: 'pill' | 'rounded' | 'circle';
  intro?: boolean;
  activeIndex?: number;
  onItemClick?: (
    item: FlowingMenuItem,
    index: number,
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

declare function FlowingMenu(props: FlowingMenuProps): ReactElement;

export default FlowingMenu;
