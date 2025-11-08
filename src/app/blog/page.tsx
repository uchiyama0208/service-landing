import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { getAllBlogPosts } from '@/lib/mdx';
import { BlogExplorer } from '@/components/blog-explorer';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ブログ',
  description: 'NightBaseの運用ノウハウや機能アップデート、法務の知識をお届けします。',
  openGraph: {
    title: 'NightBaseブログ',
    description: 'NightBaseの運用ノウハウや機能アップデート、法務の知識をお届けします。',
    url: `${siteConfig.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return (
    <div className="bg-white">
      <Section title="NightBase ブログ" subtitle="Blog" align="left">
        <p className="text-base text-slate-600">
          夜のビジネスをアップデートするための知見を、現場視点でお届けします。
        </p>
      </Section>
      <Section className="pt-0" align="left">
        <BlogExplorer posts={posts} />
      </Section>
    </div>
  );
}
