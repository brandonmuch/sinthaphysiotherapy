import type { SVGProps } from 'react';

type InterfaceIconName =
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-left'
  | 'chevron-right'
  | 'menu'
  | 'close';

type InterfaceIconProps = SVGProps<SVGSVGElement> & {
  name: InterfaceIconName;
};

export function InterfaceIcon({ name, className, ...props }: InterfaceIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {name === 'menu' ? (
        <>
          <path d="M4 6.5h16" />
          <path d="M4 12h16" />
          <path d="M4 17.5h16" />
        </>
      ) : name === 'close' ? (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : name === 'arrow-up-right' ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : name === 'arrow-right' ? (
        <path d="M4 12h15m-7-7 7 7-7 7" />
      ) : name === 'arrow-left' ? (
        <path d="M20 12H5m7-7-7 7 7 7" />
      ) : name === 'chevron-left' ? (
        <path d="m15 5-7 7 7 7" />
      ) : (
        <path d="m9 5 7 7-7 7" />
      )}
    </svg>
  );
}
