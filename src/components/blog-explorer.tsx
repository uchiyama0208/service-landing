'use client';

import { clsx } from 'clsx';
import { useMemo, useState } from 'react';
import { BlogPost } from '@/lib/mdx';
import { BlogCard } from './blog-card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => Array.from(new Set(posts.map((post) => post.frontMatter.category))), [posts]);
  const tags = useMemo(() => Array.from(new Set(posts.flatMap((post) => post.frontMatter.tags))).sort(), [posts]);

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesKeyword = keyword
        ? post.frontMatter.title.includes(keyword) ||
          post.frontMatter.excerpt.includes(keyword) ||
          post.frontMatter.tags.some((tag) => tag.includes(keyword))
        : true;
      const matchesCategory = category ? post.frontMatter.category === category : true;
      const matchesTags = selectedTags.length
        ? selectedTags.every((tag) => post.frontMatter.tags.includes(tag))
        : true;
      return matchesKeyword && matchesCategory && matchesTags;
    });
  }, [posts, keyword, category, selectedTags]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            キーワード
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="例: 勤怠, 法務, 予約"
              className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-brand-primary focus:ring-brand-primary"
            />
          </label>
          <Button variant="ghost" onClick={() => { setKeyword(''); setCategory(null); setSelectedTags([]); }}>
            フィルターをリセット
          </Button>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">カテゴリ</p>
          <div className="flex flex-wrap gap-2">
            <Badge onClick={() => setCategory(null)} className={clsx('cursor-pointer', category === null && 'bg-brand-primary text-white')}>
              すべて
            </Badge>
            {categories.map((item) => (
              <Badge
                key={item}
                onClick={() => setCategory(item)}
                className={clsx('cursor-pointer', category === item && 'bg-brand-primary text-white')}
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">タグ</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <Badge
                  key={tag}
                  onClick={() =>
                    setSelectedTags((prev) =>
                      active ? prev.filter((item) => item !== tag) : [...prev, tag]
                    )
                  }
                  className={clsx('cursor-pointer', active && 'bg-brand-primary text-white')}
                >
                  #{tag}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filteredPosts.length ? (
          filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <p className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
            条件に合う記事が見つかりませんでした。
          </p>
        )}
      </div>
    </div>
  );
}
