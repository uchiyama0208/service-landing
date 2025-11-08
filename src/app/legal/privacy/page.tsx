import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">プライバシーポリシー</h1>
        <p className="text-sm text-slate-500">最終更新日: 2024年5月1日</p>
        <section className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            NightBase（以下、「当社」といいます。）は、当社が提供するサービスにおいて取得する個人情報について、以下のとおりプライバシーポリシーを定めます。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">1. 取得する情報</h2>
          <p>
            氏名、連絡先、勤怠情報、オーダー履歴などサービス提供に必要な情報を取得します。利用目的の達成に必要な範囲でのみ取得します。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">2. 利用目的</h2>
          <p>
            サービス提供、本人確認、サポート対応、システム改善および法令遵守のために利用します。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">3. 第三者提供</h2>
          <p>
            法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。業務委託先には適切な監督を行います。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">4. セキュリティ</h2>
          <p>
            当社はTLS1.3による通信暗号化やアクセス制御、多要素認証などの安全管理措置を講じます。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">5. 個人情報の開示・訂正等</h2>
          <p>
            ご本人からの請求に応じ、法令の範囲内で遅滞なく対応します。お問い合わせは<Link href="/contact" className="text-brand-primary underline">お問い合わせページ</Link>からご連絡ください。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">6. 改定</h2>
          <p>本ポリシーの内容は必要に応じて改定し、改定後は本ページにて告知します。</p>
        </section>
      </div>
    </article>
  );
}
