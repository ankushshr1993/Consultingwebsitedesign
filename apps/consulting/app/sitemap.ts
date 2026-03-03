import type { MetadataRoute } from 'next';
import { getSiteUrl } from './site-url';

const staticRoutes = ['/', '/about', '/services', '/approach', '/insights', '/contact'];
const insightSlugs = [
  'market-positioning-playbook',
  'operational-efficiency-checklist',
  'change-management-framework'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const pageEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));

  const insightEntries: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...pageEntries, ...insightEntries];
}
