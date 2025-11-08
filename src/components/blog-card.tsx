import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import { Badge } from './ui/badge';

export function BlogCard({ post }: { post: BlogPost }) {
  const { slug, frontMatter } = post;
  const date = new Date(frontMatter.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {frontMatter.ogImage && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={frontMatter.ogImage}
            alt={frontMatter.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <Badge className="bg-brand-primary/10 text-brand-secondary">{frontMatter.category}</Badge>
          <span>{date}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link href={`/blog/${slug}`} className="transition hover:text-brand-primary">
              {frontMatter.title}
            </Link>
          </h3>
          <p className="text-sm text-slate-600">{frontMatter.excerpt}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 text-xs text-brand-secondary/80">
          {frontMatter.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-brand-surface px-3 py-1">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-slate-500">{frontMatter.readingTime}</div>
      </div>
    </article>
  );
}
