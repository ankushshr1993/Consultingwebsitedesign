import type { Metadata } from 'next';
import { defenceMetadata } from '../../../packages/config/src';
import { getSiteUrl } from './site-url';

const siteUrl = getSiteUrl();

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defenceMetadata.title,
  description: defenceMetadata.description,
  openGraph: {
    title: defenceMetadata.title,
    description: defenceMetadata.description,
    type: 'website',
    url: siteUrl
  }
};
