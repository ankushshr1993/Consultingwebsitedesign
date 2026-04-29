'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { trackEvent } from '../lib/analytics';

export function TrackedLink({ href, eventName, children, className }: { href: LinkProps['href']; eventName: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={className} onClick={() => trackEvent(eventName)}>
      {children}
    </Link>
  );
}
