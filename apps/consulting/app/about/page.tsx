import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  openGraph: { title: 'Who We Are | Regression Consulting', description: 'Operator-led technology execution advisory for investors and leadership teams managing enterprise-risk delivery environments.', url: '/about', type: 'website' },
  alternates: { canonical: '/about' },
  title: 'Who We Are | Regression Consulting',
  description:
    'Operator-led technology execution advisory for investors and leadership teams managing enterprise-risk delivery environments.',
};

const principles = [
  {
    title: 'Truth before narrative',
    description:
      'We prioritise what is operationally true over what is politically convenient. Recovery starts with a clear read of architecture, ownership, and execution reality.',
  },
  {
    title: 'Structure before speed',
    description:
      'Speed without structure amplifies risk. We focus first on decision rights, governance cadence, and accountability so momentum is sustainable.',
  },
  {
    title: 'Control without bureaucracy',
    description:
      'Control should improve execution, not slow it down. We design governance that is explicit, lightweight, and decision-useful for leadership teams.',
  },
  {
    title: 'Execution over theatre',
    description:
      'We measure progress by changed behaviours, cleaner decisions, and delivery stability: not by presentation volume or status optics.',
  },
];

const experienceAreas = [
  'Regulated delivery environments',
  'Multi-vendor technology programs',
  'Architecture and integration governance',
  'Investor / board-level execution visibility',
];

export default function AboutPage() {
  return (
    <article className="site-container about-dossier">
      <header className="dossier-intro">
        <h1>An operator’s view of execution risk.</h1>
        <p>
          Regression Consulting exists for the moments when leadership needs more than another
          strategy deck: when architecture, delivery, vendors, and decision rights need to be
          brought back under control.
        </p>
      </header>

      <section className="editorial-letter" aria-labelledby="why-heading">
        <aside className="named-contact">
          <h2>Speak with Ankush Sharma</h2>
          <p>Discuss your situation directly with Ankush Sharma.</p>
          <a className="text-link" href="https://www.linkedin.com/in/ankush-shr/" target="_blank" rel="noopener noreferrer">
            View Ankush’s LinkedIn profile
          </a>
        </aside>
        <div className="chapter-body">
          <h2 id="why-heading" className="section-heading">Why Regression?</h2>
          <p>
            In statistics, regression analysis helps identify the true relationship beneath noisy
            variables. It separates signal from distortion. That is the operating metaphor behind
            Regression Consulting. We do not take the status report at face value. We look for the
            structural causes behind delivery drift: architecture fragmentation, unclear ownership,
            vendor misalignment, weak governance, and decisions that were never made cleanly.
          </p>
        </div>
      </section>

      <section aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="section-heading">Principles</h2>
        <ol className="principle-index">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <span className="chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="editorial-letter" aria-labelledby="experience-heading">
        <div>
          <h2 id="experience-heading" className="section-heading">Credibility through operating context</h2>
          <p>These are experience areas, not client claims.</p>
        </div>
        <ul className="experience-index">
          {experienceAreas.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>

      <section className="closing-note">
        <h2>Need an operator’s view on execution risk?</h2>
        <Link href="/contact" className="button-primary">Start a conversation</Link>
      </section>
    </article>
  );
}
