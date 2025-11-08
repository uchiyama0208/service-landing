import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  asChild?: boolean;
};

export function Badge({ className, asChild, onClick, ...props }: BadgeProps) {
  const interactive = typeof onClick === 'function';
  const sharedClassName = clsx(
    'inline-flex items-center rounded-xl bg-brand-surface px-3 py-1 text-xs font-semibold tracking-wide text-brand-secondary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary',
    className,
  );

  if (interactive && !asChild) {
    const { children, ...rest } = props;
    return (
      <button
        type="button"
        className={sharedClassName}
        onClick={onClick}
        {...(rest as ComponentPropsWithoutRef<'button'>)}
      >
        {children}
      </button>
    );
  }

  return <span className={sharedClassName} onClick={onClick} {...props} />;
}
