import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/process', 'Investment process', 'From initial screening to diligence, institutional readiness, and selective capital alignment.');

import Link from 'next/link';

const steps = [
  {
    title: '1) Initial Screen (Week 1)',
    body: 'We review mission relevance, technical credibility, and baseline fit with our criteria.'
  },
  {
    title: '2) Diligence Snapshot (Weeks 2–3)',
    body: 'We test governance readiness, market logic, compliance posture, and capital pathway realism.'
  },
  {
    title: '3) Institutionalisation Plan (Weeks 3–6)',
    body: 'For aligned teams, we define a practical plan covering governance cadence, diligence materials, and investor positioning.'
  },
  {
    title: '4) Capital Alignment (Post-readiness)',
    body: 'We deploy selectively and introduce aligned partners when structural readiness is visible and defensible.'
  }
];

export default function ProcessPage() {
  return (
    <article className="site-container document-page">
      <header className="dossier-intro">
        <h1>How we work</h1>
        <p>Our process is designed to improve institutional readiness before scaling capital conversations.</p>
      </header>
      <div className="method-timeline">
        {steps.map((step, index) => (
          <section key={step.title} className="method-stage">
            <span className="chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className="chapter-body"><h2>{step.title.replace(/^\d\)\s*/, '')}</h2><p>{step.body}</p></div>
          </section>
        ))}
      </div>
      <section className="closing-note">
        <h2>What you can expect</h2>
        <ul>
          <li>Clear qualification decision and transparent next steps.</li>
          <li>Compliance-first framing across diligence discussions.</li>
          <li>Focused, high-signal engagement rather than broad networking.</li>
        </ul>
        <div className="hero-actions"><Link href="/founder-intake" className="button-primary">Founder intake</Link><Link href="/investor-intake" className="button-secondary">Investor intake</Link><Link href="/criteria" className="text-link">View criteria</Link></div>
      </section>
    </article>
  );
}
