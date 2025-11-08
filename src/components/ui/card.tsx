import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
      {...props}
    />
  );
}
