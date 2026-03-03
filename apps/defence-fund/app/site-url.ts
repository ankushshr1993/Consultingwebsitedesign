const DEFAULT_SITE_URL = 'https://www.regressionconsulting.com';

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return DEFAULT_SITE_URL;
  }

  return configuredUrl.replace(/\/$/, '');
}

