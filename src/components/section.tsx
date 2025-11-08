import { clsx } from 'clsx';
import { ReactNode } from 'react';

export function Section({
  id,
  title,
  subtitle,
  align = 'center',
  className,
  children,
}: {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx('section-gradient py-20 sm:py-28', className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        {(title || subtitle) && (
          <div className={clsx('mx-auto max-w-3xl space-y-4', align === 'left' ? 'text-left' : 'text-center')}>
            {subtitle && <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">{subtitle}</p>}
            {title && <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
