import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '利用規約',
};

export default function TermsPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">利用規約</h1>
        <p className="text-sm text-slate-500">最終更新日: 2024年5月1日</p>
        <section className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            NightBase（以下、「当社」といいます。）の提供するサービスを利用するにあたり、本規約に同意のうえご利用ください。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">第1条（適用）</h2>
          <p>
            本規約は、利用者と当社との間のサービス利用に関わる一切の関係に適用されます。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">第2条（利用登録）</h2>
          <p>
            利用希望者は当社の定める方法によって利用登録を申請し、当社が承認することで登録が完了します。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">第3条（禁止事項）</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>法令または公序良俗に違反する行為</li>
            <li>不正アクセスやセキュリティを脅かす行為</li>
            <li>当社の知的財産権を侵害する行為</li>
          </ul>
          <h2 className="text-2xl font-semibold text-slate-900">第4条（サービスの提供の停止等）</h2>
          <p>
            当社は、システム保守や不可抗力によりサービスの全部または一部の提供を停止することがあります。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">第5条（免責事項）</h2>
          <p>
            当社は、利用者間または第三者とのトラブルについて責任を負いません。ただし、当社の故意または重大な過失による場合を除きます。
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">第6条（準拠法・裁判管轄）</h2>
          <p>
            本規約は日本法に準拠し、紛争については東京地方裁判所を専属的合意管轄裁判所とします。
          </p>
          <p>
            本規約に関するお問い合わせは<Link href="/contact" className="text-brand-primary underline">お問い合わせページ</Link>からご連絡ください。
          </p>
        </section>
      </div>
    </article>
  );
}
