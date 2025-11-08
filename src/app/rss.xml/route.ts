import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/mdx';
import { siteConfig } from '@/lib/seo';

export async function GET() {
  const posts = await getAllBlogPosts();
  const feedItems = posts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      return `
        <item>
          <title><![CDATA[${post.frontMatter.title}]]></title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.frontMatter.excerpt}]]></description>
        </item>
      `;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${siteConfig.name} Blog</title>
      <link>${siteConfig.url}</link>
      <description>${siteConfig.description}</description>
      ${feedItems}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
