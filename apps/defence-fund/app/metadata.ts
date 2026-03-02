import type { Metadata } from 'next';
import { defenceMetadata } from '../config/metadata';

export const siteMetadata: Metadata = {
  title: defenceMetadata.title,
  description: defenceMetadata.description,
  openGraph: {
    title: defenceMetadata.title,
    description: defenceMetadata.description,
    type: 'website'
  }
};
