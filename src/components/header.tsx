'use client';

import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { Button } from './ui/button';

const navLinks = [
  { href: '/#features', label: '機能' },
  { href: '/#pricing', label: '料金' },
  { href: '/#how-it-works', label: '導入フロー' },
  { href: '/#testimonials', label: '導入事例' },
  { href: '/blog', label: 'ブログ' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-brand-secondary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary text-white">NB</span>
          <span>NightBase</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">無料相談はこちら</Button>
        </div>
        <button
          className="lg:hidden"
          aria-label="メニューを開閉"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">メニュー</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-900"></span>
            <span className="block h-0.5 w-6 bg-slate-900"></span>
            <span className="block h-0.5 w-6 bg-slate-900"></span>
          </div>
        </button>
      </div>
      <div
        className={clsx(
          'lg:hidden',
          open ? 'max-h-screen border-t border-slate-200 bg-white/90 backdrop-blur' : 'max-h-0 overflow-hidden',
        )}
      >
        <div className="space-y-4 px-6 py-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button className="w-full" href="/contact" onClick={() => setOpen(false)}>
            無料相談はこちら
          </Button>
        </div>
      </div>
    </header>
  );
}
