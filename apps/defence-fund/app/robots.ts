import type { MetadataRoute } from 'next';
import { getSiteUrl } from './site-url';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deftech.regressionconsulting.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
