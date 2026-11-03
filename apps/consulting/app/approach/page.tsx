import type { Metadata } from 'next';
import Link from 'next/link';

const method = [
  {
    step: '01',
    title: 'Find where control broke.',
    includes: [
      'Architecture and integration review',
      'Delivery cadence review',
      'Governance and escalation review',
      'Vendor and team ownership review',
      'Leadership reporting review',
    ],
    receives: 'Execution-risk map, structural diagnosis, and priority control issues.',
  },
  {
    step: '02',
    title: 'Re-establish decision structure.',
    includes: [
      'Decision rights',
      'Ownership boundaries',
      'Escalation paths',
      'Target-state architecture direction',
      'Delivery rhythm and governance model',
    ],
    receives: 'Reset plan, operating model, and leadership control cadence.',
  },
  {
    step: '03',
    title: 'Embed operating discipline.',
    includes: [
      'Weekly execution cadence',
      'Risk and dependency visibility',
      'Vendor coordination',
      'Architecture governance',
      'Board/investor reporting logic',
    ],
    receives: 'Durable controls, cleaner reporting, and reduced execution ambiguity.',
  },
];

const workingModel = [
  'Direct access to decision-makers',
  'Short cycles, visible checkpoints',
  'Practical outputs, not theatre',
  'Independent judgment',
  'Execution accountability',
];

const antiScope = [
  'We do not produce strategy decks disconnected from execution.',
  'We do not replace management accountability.',
  'We do not hide operational truth for political comfort.',
  'We do not add governance for its own sake.',
];

export const metadata: Metadata = {
  openGraph: { title: 'Find where control broke.', description: 'A structured, operator-led method to diagnose execution risk, reset control, and stabilise technology delivery.', url: '/approach', type: 'website' },
  alternates: { canonical: '/approach' },
  title: 'How We Work | Regression Consulting',
  description: 'A structured, operator-led method to diagnose execution risk, reset control, and stabilise technology delivery.',
};

export default function ApproachPage() {
  return (
    <article className="site-container approach-dossier">
      <header className="dossier-intro">
        <h1>Find the cause. Restore control.</h1>
        <p>
          We work in short, direct cycles to find where control broke, reset the operating structure,
          and embed delivery discipline that leadership can actually use.
        </p>
      </header>

      <section aria-labelledby="method-heading" className="method-timeline">
        <h2 id="method-heading" className="section-heading">Method timeline</h2>
        {method.map((stage) => (
          <article key={stage.step} className="method-stage">
            <span className="chapter-number" aria-hidden="true">{stage.step}</span>
            <div className="chapter-body">
              <h3>{stage.title}</h3>
              <ul>
                {stage.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <aside className="chapter-aside">
              <dl>
                <dt>Client receives</dt>
                <dd>{stage.receives}</dd>
              </dl>
            </aside>
          </article>
        ))}
      </section>

      <section className="editorial-letter" aria-labelledby="working-model-heading">
        <h2 id="working-model-heading" className="section-heading">Working model</h2>
        <ul className="experience-index">
          {workingModel.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="editorial-letter" aria-labelledby="scope-heading">
        <h2 id="scope-heading" className="section-heading">What we do not do</h2>
        <ul className="experience-index">
          {antiScope.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="closing-note">
        <h2>You have seen how we work. Ready to test where control is breaking?</h2>
        <Link href="/contact" className="button-primary">Start a conversation</Link>
      </section>
    </article>
  );
}
