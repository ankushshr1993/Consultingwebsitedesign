import type { MetadataRoute } from 'next';
import { getSiteUrl } from './site-url';

const routes = ['/', '/thesis', '/criteria', '/team', '/contact-us'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
