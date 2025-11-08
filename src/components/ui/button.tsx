import { clsx } from 'clsx';
import Link from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

const base =
  'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
const variants: Record<'primary' | 'secondary' | 'ghost', string> = {
  primary:
    'bg-brand-primary text-white shadow-glow hover:bg-brand-secondary focus-visible:outline-brand-secondary',
  secondary:
    'bg-white text-brand-secondary ring-1 ring-inset ring-brand-primary/30 hover:ring-brand-primary/60 focus-visible:outline-brand-primary',
  ghost:
    'bg-transparent text-brand-secondary hover:text-brand-primary focus-visible:outline-brand-primary',
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'type'> & {
    href: string;
    type?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={clsx(base, variants[variant], className)} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...rest } = props;
  return (
    <button type={type} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
