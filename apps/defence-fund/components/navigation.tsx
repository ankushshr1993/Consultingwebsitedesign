'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
const links = [['/', 'Home'], ['/thesis', 'Thesis'], ['/process', 'Process'], ['/resources', 'Resources'], ['/criteria', 'Criteria'], ['/faq', 'FAQ'], ['/contact-us', 'Contact']] as const;
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header">
    <nav aria-label="Main navigation" className="site-container defence-nav" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
      <Link href="/" className="brand-name" onClick={() => setOpen(false)}>Regression <span>Defence Tech</span></Link>
      <button ref={toggle} type="button" className="nav-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="defence-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <div id="defence-navigation" className={open ? 'nav-links is-open' : 'nav-links'}>
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href || (href !== '/' && pathname.startsWith(href + '/')) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </div>
    </nav>
  </header>;
}
