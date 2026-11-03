import type { Metadata } from 'next';
import { getSiteUrl } from '../app/site-url';
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return { title: `${title} | Regression Defence Tech`, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: new URL(path, getSiteUrl()).href, type: 'website' },
  };
}
