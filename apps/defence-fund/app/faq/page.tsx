import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/faq', 'Frequently asked questions', 'Answers for founders and investors about participation, geographies, diligence, and response timelines.');

import Link from 'next/link';

const faqs = [
  {
    q: 'Do you invest directly or only through partners?',
    a: 'We can invest selectively ourselves and may introduce aligned partners once institutional readiness is demonstrated.'
  },
  {
    q: 'Do you lead rounds?',
    a: 'Case by case. We prioritize structural readiness and quality of opportunity over fixed participation labels.'
  },
  {
    q: 'Which geographies are in scope?',
    a: 'Primary focus is India-origin defence and dual-use companies, with cross-border relevance and compliance feasibility.'
  },
  {
    q: 'What is your response timeline?',
    a: 'We aim to respond within 3 business days and share whether there is fit for deeper discussion.'
  },
  {
    q: 'How do you handle sensitive regulatory and export-control topics?',
    a: 'We treat these as first-order diligence factors and design pathways inside legal and compliance constraints.'
  }
];

export default function FaqPage() {
  return <article className="site-container document-page">
    <header className="dossier-intro"><h1>FAQ</h1><p>Common questions from founders, investors, and ecosystem partners.</p><div className="hero-actions"><Link href="/contact-us" className="button-primary">Contact us</Link><Link href="/process" className="button-secondary">See process</Link></div></header>
    <div className="faq-index">{faqs.map(item => <details key={item.q}><summary><h2>{item.q}</h2></summary><p>{item.a}</p></details>)}</div>
  </article>;
}
