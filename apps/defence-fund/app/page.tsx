import { pageMetadata } from '../lib/page-metadata';

export const metadata = pageMetadata('/', 'Defence and dual-use investment', 'Operator-led investment and institutional readiness for India-origin defence and dual-use companies.');

import Link from 'next/link';
import { SharedSiteHero } from '../components/ui';
import { TrackedLink } from '../components/tracked-link';

const cardClass = 'defence-index-row';
const buttonClass =
  'inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

export default function Page() {
  return (
    <div className="defence-home">
      <SharedSiteHero
        eyebrow="Defence-first venture platform"
        title="Capital for Indian defence innovation."
        subtitle="We help defence and dual-use companies prepare for institutional capital."
        metrics={[
          { label: 'Geography', value: 'India-origin' },
          { label: 'Technology', value: 'Prototype validated' },
          { label: 'Readiness', value: 'Governance discipline' }
        ]}
        primaryCta={
          <TrackedLink
            href="/founder-intake"
            eventName="hero_founder_cta_click"
            className={`${buttonClass} button-primary text-[var(--color-ink)]`}
          >
            I&apos;m a Founder
          </TrackedLink>
        }
        secondaryCta={
          <TrackedLink href="/investor-intake" eventName="hero_investor_cta_click" className={`${buttonClass} border border-white/20 text-[var(--color-ink)] hover:bg-[var(--color-surface)]`}>
            I&apos;m an Investor
          </TrackedLink>
        }
      />

      <div className="border-b border-slate-800 bg-[var(--color-ground)] py-6">
        <p className="mx-auto max-w-6xl px-6 text-sm text-[var(--color-muted)]">
          Concentrated. Selective. Long-term. Defence + Dual-use. Compliance-first. Concentrated conviction.
        </p>
      </div>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Operating examples</h2><p className="mt-4 text-sm text-[var(--color-muted)]">These examples illustrate operating contexts. Outcomes depend on the circumstances of each engagement.</p>
        <div className="defence-ruled-index">
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Governance reporting</h3>
            <p className="mt-2 text-[var(--color-muted)]">Governance rhythm established from ad-hoc to monthly board-ready reporting in 8 weeks.</p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Export-control mapping</h3>
            <p className="mt-2 text-[var(--color-muted)]">Export-control risk mapping completed before investor outreach, reducing diligence cycles.</p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Investor positioning</h3>
            <p className="mt-2 text-[var(--color-muted)]">Investor narrative restructured around deployability, economics, and compliance milestones.</p>
          </article>
        </div>
      </section>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">How We Work</h2>
        <div className="defence-process-index">
          {[
            ['01', 'Screen', 'Mission relevance, technology credibility, and institutional fit.'],
            ['02', 'Evaluate', 'Governance, compliance, and capital pathway review.'],
            ['03', 'Institutionalise', 'Readiness plan with tangible execution milestones.'],
            ['04', 'Align Capital', 'Selective capital participation and partner alignment.']
          ].map(([step, title, body]) => (
            <article key={step} className={cardClass}>
              <p className="text-xs tracking-normal text-[var(--color-muted)]">{step}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
              <p className="mt-2 text-[var(--color-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Who we are</h2><p className="mt-6 text-lg">Speak with <a className="text-link" href="https://www.linkedin.com/in/ankush-shr/" target="_blank" rel="noopener noreferrer">Ankush Sharma</a> about founder and investor enquiries.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            We are an operator-led investment partner focused on Indian defence and dual-use
            innovation.
          </p>
          <p>
            We engage directly within the defence technology ecosystem, with exposure to
            government-supported innovation programs, regulatory structures, and venture capital
            frameworks.
          </p>
          <p>
            This vantage point allows us to identify companies early, understand compliance
            constraints realistically, and structure them for institutional participation.
          </p>
          <p>
            We work selectively, prioritising governance discipline and long-term capital alignment
            over short-term visibility.
          </p>
        </div>
      </section>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">From screening to capital alignment</h2>
        <div className="defence-ruled-index">
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">Identify</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
              We screen for companies capable of scaling beyond domestic procurement and meeting
              institutional venture standards.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">Institutionalise</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
              We strengthen governance, clarify capital strategy, and prepare companies for
              rigorous investor scrutiny.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">Align Capital</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
              We invest selectively and introduce aligned partners only when structural readiness
              is achieved.
            </p>
          </article>
        </div>
      </section>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Who This Is For</h2>
        <div className="defence-ruled-index">
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">Founders</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--color-muted)]">
              <li>Building serious defence or dual-use technology</li>
              <li>Open to governance discipline</li>
              <li>Seeking institutional capital, not short-term visibility</li>
              <li>Ready for compliance-first structuring</li>
            </ul>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">Investors</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--color-muted)]">
              <li>Seeking structured exposure to India-origin defence innovation</li>
              <li>Prefer disciplined early screening</li>
              <li>Value governance maturity before capital deployment</li>
              <li>Interested in concentrated, high-conviction opportunities</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="site-container defence-home-section">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Our Edge</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">
          We operate at the intersection of capital discipline and defence reality.
        </p>
        <div className="defence-ruled-index">
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Early Structural Discipline</h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
              Governance and compliance alignment before valuation expansion.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Concentrated Strategy</h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
              We engage deeply with a small number of companies.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Regulatory Awareness</h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
              We design within export-control and foreign participation frameworks.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Long-Term Orientation</h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
              We build institutional track record before scale.
            </p>
          </article>
        </div>
      </section>

      <section className="site-container defence-home-section">
        <div className="closing-note">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Engage With Us</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">
            If you are building or backing serious defence and dual-use innovation and are prepared
            for institutional discipline, we welcome a focused conversation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/founder-intake"
              className={`${buttonClass} button-primary text-[var(--color-ink)]`}
            >
              Founder Intake
            </Link>
            <Link href="/investor-intake" className={`${buttonClass} border border-white/20 text-[var(--color-ink)] hover:bg-[var(--color-surface)]`}>
              Investor Intake
            </Link>
            <Link href="/faq" className={`${buttonClass} border border-white/20 text-[var(--color-ink)] hover:bg-[var(--color-surface)]`}>
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
