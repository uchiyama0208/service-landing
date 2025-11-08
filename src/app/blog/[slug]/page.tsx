import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlogPost, getBlogSlugs, compilePostContent } from '@/lib/mdx';
import { siteConfig } from '@/lib/seo';

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) {
    return { title: '記事が見つかりません' };
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      images: post.frontMatter.ogImage
        ? [
            {
              url: post.frontMatter.ogImage,
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) {
    notFound();
  }

  const mdxContent = await compilePostContent(post.content);
  const date = new Date(post.frontMatter.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20">
        <Badge className="bg-brand-primary/10 text-brand-secondary">{post.frontMatter.category}</Badge>
        <h1 className="text-4xl font-bold text-slate-900">{post.frontMatter.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{date}</span>
          <span>・{post.frontMatter.readingTime}</span>
          <div className="flex flex-wrap gap-2 text-brand-secondary/80">
            {post.frontMatter.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-surface px-3 py-1 text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-primary">
          {mdxContent}
        </div>
        <div className="mt-10">
          <Button href="/blog" variant="secondary">
            記事一覧に戻る
          </Button>
        </div>
      </div>
    </article>
  );
}
