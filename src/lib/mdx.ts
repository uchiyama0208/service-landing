import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactNode } from 'react';

export type BlogFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  ogImage?: string;
};

export type BlogPost = {
  slug: string;
  frontMatter: BlogFrontMatter & { readingTime: string };
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const file = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(file);

  const frontMatter = data as BlogFrontMatter;
  const stats = readingTime(content);

  return {
    slug,
    frontMatter: {
      ...frontMatter,
      readingTime: `${Math.ceil(stats.minutes)}分で読めます`,
    },
    content,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));
  return posts.sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1));
}

export async function compilePostContent(source: string): Promise<ReactNode> {
  const { content } = await compileMDX({
    source,
  });
  return content;
}
