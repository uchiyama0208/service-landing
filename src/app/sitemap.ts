import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { siteConfig } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontMatter.date).toISOString(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
