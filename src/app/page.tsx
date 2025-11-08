import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/reveal';
import { getAllBlogPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/blog-card';

const features = [
  {
    title: 'ロール管理',
    description: 'フロア、バックオフィス、キャストなど役割ごとに適切な権限を設定。店舗ごとの運用に合わせて柔軟にカスタマイズできます。',
  },
  {
    title: '勤怠',
    description: 'スマホ打刻と自動集計でシフト・遅刻・早退を一目で把握。労務アラートも自動通知。',
  },
  {
    title: 'オーダー＆卓',
    description: '卓の状況、オーダー、提供ステータスをリアルタイムに共有。キッチンとも連携し取りこぼしゼロへ。',
  },
  {
    title: '付け回し',
    description: '顧客属性と稼働状況を可視化。相性・売上バランスに応じた最適な付け回しをサジェスト。',
  },
  {
    title: '給与',
    description: 'バック計算から控除、日払いまで自動化。税務・社保データもワンクリックで出力。',
  },
  {
    title: 'ランキング＆ポイント',
    description: '店舗独自のポイント設計に対応。モチベーションを上げるランキング演出をアプリでリアルタイム共有。',
  },
  {
    title: '予約',
    description: '複数店舗の予約状況を一元管理。常連のお気に入りキャスト指定やVIPアラートもサポート。',
  },
  {
    title: 'マルチデバイス',
    description: 'iPad・スマホ・PCで同じ体験。オフラインキャッシュにも対応し、地下でも安心です。',
  },
];

const pricing = [
  {
    name: 'エッセンシャル',
    price: '¥39,800/月',
    target: '1店舗・小規模チーム向け',
    features: ['勤怠・オーダー・卓管理', '基本ダッシュボード', 'メールサポート'],
  },
  {
    name: 'スタンダード',
    price: '¥69,800/月',
    target: '成長期店舗に最適',
    features: ['全機能アクセス', 'シフト自動最適化', 'LINE連携 & API'],
    highlight: true,
  },
  {
    name: 'エンタープライズ',
    price: '個別見積',
    target: '多店舗・グループ本部向け',
    features: ['グループガバナンス', 'SLA付きプレミアムサポート', '専任オンボーディング'],
  },
];

const steps = [
  {
    title: 'ヒアリング＆要件整理',
    description: '現場の課題やKPIをヒアリングし、NightBaseの導入設計を共同でまとめます。',
  },
  {
    title: '初期設定・データ移行',
    description: 'ロール、卓、メニュー、顧客などのマスタを整備し、既存システムからの移行も支援。',
  },
  {
    title: 'トレーニング＆ローンチ',
    description: 'キャスト・スタッフ向けに操作トレーニングを実施。伴走しながら運用定着をサポートします。',
  },
];

const testimonials = [
  {
    quote:
      '勤怠・オーダー・給与が一つにつながり、締め作業が3時間から30分に。リアルタイムのランキングもキャストの士気を高めています。',
    name: '歌舞伎町キャバクラ オーナー',
  },
  {
    quote: '付け回しのサジェスト精度が高く、VIP対応がブレなくなりました。新人教育の時間も半減です。',
    name: '名古屋 ラウンジマネージャー',
  },
  {
    quote: '多店舗の予約状況がクラウドで見える化。グループ全体の稼働率が12%アップしました。',
    name: '関西エリア統括マネージャー',
  },
];

const securityHighlights = [
  '通信は全てTLS1.3で暗号化し、端末認証と二要素認証に対応。',
  'ISO27001に準拠した運用体制と24時間の監視で不正アクセスをブロック。',
  'アクセスログ・操作ログを長期保存し、監査証跡を確保。',
];

export default async function Page() {
  const posts = (await getAllBlogPosts()).slice(0, 3);

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-surface/60 to-white">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-28 text-center">
          <Badge className="bg-brand-primary/10 text-brand-secondary">夜の現場を、次の標準へ。</Badge>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            NightBase はキャバクラ／ガルバ／コンカフェ／ラウンジ／ホスト／バーの全部入り業務SaaS
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            現場を知るプロダクトチームが、ロール管理から付け回し、給与まで夜の運営をシームレスに。マルチデバイスでいつでもどこでも最新の状況が分かります。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/contact">デモを予約する</Button>
            <Button href="#features" variant="secondary">
              機能を見る
            </Button>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {['導入店舗数120以上', '月次レポート自動生成', '現場に寄り添うサポート体制'].map((stat) => (
              <Card key={stat} className="bg-white/90">
                <p className="text-sm font-medium text-brand-secondary">{stat}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Section id="features" subtitle="All-in-one" title="業務に必要な機能をワンパッケージで">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 60}>
              <Card>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="security" subtitle="Security" title="ナイトビジネスのリスクに対応する堅牢なセキュリティ">
        <div className="grid gap-6 md:grid-cols-3">
          {securityHighlights.map((item, index) => (
            <Reveal key={item} delay={index * 80}>
              <Card>
                <p className="text-sm text-slate-600">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pricing" subtitle="Pricing" title="店舗規模に合わせた料金プラン">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <Card className={plan.highlight ? 'border-brand-primary shadow-glow' : ''}>
                <div className="flex h-full flex-col gap-6">
                  <div>
                    <Badge className="bg-brand-primary/10 text-brand-secondary">{plan.target}</Badge>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">{plan.name}</h3>
                    <p className="text-lg font-bold text-brand-secondary">{plan.price}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature}>・{feature}</li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.highlight ? 'primary' : 'secondary'} className="mt-auto">
                    プランの相談をする
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" subtitle="Onboarding" title="導入は最短2週間。伴走体制で安心">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <Card>
                <span className="text-sm font-semibold text-brand-secondary">STEP {index + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        subtitle="Voices"
        title="NightBaseで現場が変わったお客様の声"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120}>
              <Card className="bg-white">
                <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                <p className="mt-4 text-xs font-semibold text-brand-secondary">{testimonial.name}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section subtitle="Knowledge" title="夜業界のノウハウを学べるブログ">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 120}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/blog" variant="secondary">
            ブログをすべて見る
          </Button>
        </div>
      </Section>

      <Section className="pb-28" subtitle="Ready" title="NightBaseで夜のスタンダードをつくる">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-brand-primary px-10 py-16 text-center text-white">
          <h3 className="text-3xl font-semibold">まずは無料相談から</h3>
          <p className="text-base text-brand-surface/90">
            店舗の課題をヒアリングし、NightBaseでの解決策をご提案します。お気軽にご相談ください。
          </p>
          <Button href="/contact" variant="secondary" className="bg-white text-brand-primary hover:bg-brand-surface">
            無料相談を申し込む
          </Button>
        </div>
      </Section>
    </div>
  );
}
