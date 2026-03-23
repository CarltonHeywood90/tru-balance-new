import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/constants/blog';
import { SERVICES } from '@/constants/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trubalancebodywork.com'; // Replace with actual domain

  // 1. Static Pages
  const staticPages = ['', '/services', '/resources', '/contact', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Dynamic Blog/Resource Pages
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}