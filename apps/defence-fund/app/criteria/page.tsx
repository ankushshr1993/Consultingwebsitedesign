import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/criteria', 'Engagement criteria', 'Technology maturity, team, governance, compliance, and commercial criteria for working with Regression Defence Tech.');

import Link from 'next/link';

const stageItems = [
  'Prototype validated (TRL maturity)',
  'Early revenue or credible deployment pathway',
  'Seed to pre-Series A orientation',
  'Founder-led, execution-focused'
];

const geographyItems = [
  'India-origin companies',
  'Europe considered as structured expansion pathway',
  'Willingness to design within export-control realities'
];

const coreCriteria = [
  {
    title: 'Team Quality',
    text: 'Founders with domain credibility, decision velocity, and openness to governance.'
  },
  {
    title: 'Technical Defensibility',
    text: 'Clear advantage versus global alternatives; credible differentiation.'
  },
  {
    title: 'Scalable Economics',
    text: 'Path toward strong margins and repeatable revenue.'
  },
  {
    title: 'Market Logic',
    text: 'Clear buyer definition and venture-scale opportunity beyond a single procurement channel.'
  },
  {
    title: 'Institutional Readiness',
    text: 'Willingness to adopt reporting discipline, structured governance, and board oversight.'
  },
  {
    title: 'Compliance Awareness',
    text: 'Early understanding of export-control, foreign participation, and regulatory constraints.'
  },
  {
    title: 'Dual-Use Optionality (Where Relevant)',
    text: 'Ability to expand beyond defence-only dependency.'
  },
  {
    title: 'Exit Rationality',
    text: 'Plausible strategic acquirer universe or defined long-term liquidity pathway.'
  }
];

const governanceItems = [
  'Clean cap table transparency',
  'Clear IP ownership documentation',
  'Export-control feasibility assessment',
  'Board-level reporting discipline',
  'No undisclosed side arrangements'
];

const notFitItems = [
  'Companies seeking guaranteed funding',
  'Grant-only R&D labs without commercial roadmap',
  'Low-margin manufacturing arbitrage without defensible IP',
  'Founder teams resistant to governance',
  'Businesses entirely dependent on a single government contract'
];

const readinessItems = [
  'We have validated our core technology.',
  'We understand our buyer and revenue model.',
  'We are open to governance discipline.',
  'We acknowledge regulatory constraints.',
  'We are seeking institutional capital, not visibility.'
];

function BulletList({ items }: { items: string[] }) {
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

const chapters = [
  ['screening', 'Screening philosophy'],
  ['stage-scope', 'Stage and scope'],
  ['selection', 'Selection criteria'],
  ['governance', 'Governance'],
  ['not-a-fit', 'Not a fit'],
  ['readiness', 'Before reaching out'],
] as const;

export default function CriteriaPage() {
  return (
    <article className="site-container document-page">
      <header className="dossier-intro">
        <h1>Engagement criteria</h1>
        <p>We engage with a limited number of companies each year.</p>
      </header>
      <div className="document-body">
        <nav className="document-index" aria-label="On this page">
          {chapters.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <div>
          <section id="screening" className="document-section">
            <h2 className="section-heading">Our screening philosophy</h2>
            <p>Selection is based on institutional readiness, structural clarity, and scalable potential: not proximity, visibility, or grant history.</p>
          </section>
          <section id="stage-scope" className="document-section">
            <h2 className="section-heading">Stage and scope</h2>
            <div className="criteria-list">
              <div className="criteria-item"><h3>Stage</h3><BulletList items={stageItems} /></div>
              <div className="criteria-item"><h3>Geography</h3><BulletList items={geographyItems} /></div>
            </div>
          </section>
          <section id="selection" className="document-section">
            <h2 className="section-heading">Core selection criteria</h2>
            <div className="criteria-list">
              {coreCriteria.map(criteria => <section key={criteria.title} className="criteria-item"><h3>{criteria.title}</h3><p>{criteria.text}</p></section>)}
            </div>
          </section>
          <section id="governance" className="document-section">
            <h2 className="section-heading">Governance and compliance expectations</h2>
            <p>Institutional capital requires structure.</p>
            <BulletList items={governanceItems} />
            <p>If these elements cannot be implemented, engagement does not proceed.</p>
          </section>
          <section id="not-a-fit" className="document-section">
            <h2 className="section-heading">Not a fit</h2>
            <BulletList items={notFitItems} />
          </section>
          <section id="readiness" className="document-section">
            <h2 className="section-heading">Before reaching out</h2>
            <p>Founders should be able to answer “yes” to most of the following:</p>
            <BulletList items={readinessItems} />
            <p>If uncertain, internal preparation should precede outreach.</p>
          </section>
          <section className="closing-note">
            <h2>Proceed selectively</h2>
            <p>We review opportunities deliberately and confidentially. If your company aligns with the above criteria, we welcome a focused introduction.</p>
            <div className="hero-actions"><Link href="/founder-intake" className="button-primary">Founder intake</Link><Link href="/thesis" className="button-secondary">View thesis</Link></div>
          </section>
        </div>
      </div>
    </article>
  );
}
