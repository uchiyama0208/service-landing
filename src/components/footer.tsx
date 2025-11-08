import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

const footerLinks = [
  {
    title: '会社情報',
    items: [
      { label: 'プライバシーポリシー', href: '/legal/privacy' },
      { label: '利用規約', href: '/legal/terms' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
  {
    title: 'ソリューション',
    items: [
      { label: '機能一覧', href: '/#features' },
      { label: '料金プラン', href: '/#pricing' },
      { label: '導入事例', href: '/#testimonials' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-surface/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-lg font-semibold text-brand-secondary">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary text-white">NB</span>
            {siteConfig.name}
          </span>
          <p className="max-w-sm text-sm text-slate-600">
            夜の現場を支えるすべての業務を一元化。NightBaseで次のスタンダードを構築しましょう。
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link className="transition hover:text-brand-primary" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
