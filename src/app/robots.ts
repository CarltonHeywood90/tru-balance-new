import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // If you have an admin or staging area
    },
    sitemap: 'https://trubalancebodywork.com/sitemap.xml',
  };
}