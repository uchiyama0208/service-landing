'use client';

import { DefaultSeo } from 'next-seo';
import { ReactNode } from 'react';
import { defaultSEO } from '@/lib/seo';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {children}
    </>
  );
}
