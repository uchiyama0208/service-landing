# NightBase Landing & Blog

NightBaseのB2B SaaS紹介サイトです。Next.js 14 (App Router)・TypeScript・Tailwind CSS・MDXブログで構築されています。

## セットアップ

> **Note**: このプロジェクトでは npm を使用します。

1. 依存関係のインストール
   ```bash
   npm install
   ```
2. 開発サーバーの起動
   ```bash
   npm run dev
   ```
   ブラウザで <http://localhost:3000> を開いて確認します。
3. 本番ビルド
   ```bash
   npm run build
   ```
4. 本番ビルドの起動
   ```bash
   npm run start
   ```

## 主な機能

- ランディングページ（Hero/Features/Pricing/How it works/Testimonials/Blog preview/CTA）
- MDXベースのブログ（カテゴリ・タグ・検索フィルタ、RSS、サイトマップ）
- お問い合わせフォーム（ダミー送信）
- プライバシーポリシー／利用規約ページ
- next-seo によるデフォルトSEO設定

## コンテンツ編集

- ブログ記事は `content/blog/*.mdx` に配置します。
- OGP画像や静的アセットは `public/` 以下に追加してください。

## スクリプト一覧

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動します |
| `npm run build` | 本番用にビルドします |
| `npm run start` | 本番ビルドを起動します |
| `npm run lint` | ESLint を実行します |
