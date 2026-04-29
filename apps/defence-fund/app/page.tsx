import Link from 'next/link';
import { SharedSiteHero } from '../components/ui';

const cardClass = 'rounded-2xl border border-white/10 bg-white/5 p-6';
const buttonClass =
  'inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

export default function Page() {
  return (
    <>
      <SharedSiteHero
        title="Structured Capital for Indian Defence & Dual-Use Innovation"
        subtitle="We identify high-potential defence and dual-use startups, invest with discipline, strengthen institutional readiness, and align them with long-term capital."
        primaryCta={
          <Link
            href="/founder-intake"
            className={`${buttonClass} bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600`}
          >
            I&apos;m a Founder
          </Link>
        }
        secondaryCta={
          <Link href="/investor-intake" className={`${buttonClass} border border-white/20 text-white hover:bg-white/10`}>
            I&apos;m an Investor
          </Link>
        }
      />

      <div className="border-b border-slate-800 bg-[#030303] pb-20 -mt-10">
        <p className="mx-auto max-w-6xl px-6 text-center text-sm tracking-wide text-slate-400">
          Concentrated. Selective. Long-term.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Proof of Operating Discipline</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Case Snapshot A</h3>
            <p className="mt-2 text-slate-300">Governance rhythm established from ad-hoc to monthly board-ready reporting in 8 weeks.</p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Case Snapshot B</h3>
            <p className="mt-2 text-slate-300">Export-control risk mapping completed before investor outreach, reducing diligence cycles.</p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Case Snapshot C</h3>
            <p className="mt-2 text-slate-300">Investor narrative restructured around deployability, economics, and compliance milestones.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">How We Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ['01', 'Screen', 'Mission relevance, technology credibility, and institutional fit.'],
            ['02', 'Evaluate', 'Governance, compliance, and capital pathway review.'],
            ['03', 'Institutionalise', 'Readiness plan with tangible execution milestones.'],
            ['04', 'Align Capital', 'Selective capital participation and partner alignment.']
          ].map(([step, title, body]) => (
            <article key={step} className={cardClass}>
              <p className="text-xs tracking-wider text-slate-400">{step}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Who We Are</h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300">
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">What We Do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-white">Identify</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              We screen for companies capable of scaling beyond domestic procurement and meeting
              institutional venture standards.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-white">Institutionalise</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              We strengthen governance, clarify capital strategy, and prepare companies for
              rigorous investor scrutiny.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-white">Align Capital</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              We invest selectively and introduce aligned partners only when structural readiness
              is achieved.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Who This Is For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-white">Founders</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-300">
              <li>Building serious defence or dual-use technology</li>
              <li>Open to governance discipline</li>
              <li>Seeking institutional capital, not short-term visibility</li>
              <li>Ready for compliance-first structuring</li>
            </ul>
          </article>
          <article className={cardClass}>
            <h3 className="text-xl font-semibold text-white">Investors</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-300">
              <li>Seeking structured exposure to India-origin defence innovation</li>
              <li>Prefer disciplined early screening</li>
              <li>Value governance maturity before capital deployment</li>
              <li>Interested in concentrated, high-conviction opportunities</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Our Edge</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
          We operate at the intersection of capital discipline and defence reality.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Early Structural Discipline</h3>
            <p className="mt-2 leading-relaxed text-slate-300">
              Governance and compliance alignment before valuation expansion.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Concentrated Strategy</h3>
            <p className="mt-2 leading-relaxed text-slate-300">
              We engage deeply with a small number of companies.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Regulatory Awareness</h3>
            <p className="mt-2 leading-relaxed text-slate-300">
              We design within export-control and foreign participation frameworks.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className="text-lg font-semibold text-white">Long-Term Orientation</h3>
            <p className="mt-2 leading-relaxed text-slate-300">
              We build institutional track record before scale.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Engage With Us</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            If you are building or backing serious defence and dual-use innovation and are prepared
            for institutional discipline, we welcome a focused conversation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/founder-intake"
              className={`${buttonClass} bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600`}
            >
              Founder Intake
            </Link>
            <Link href="/investor-intake" className={`${buttonClass} border border-white/20 text-white hover:bg-white/10`}>
              Investor Intake
            </Link>
            <Link href="/faq" className={`${buttonClass} border border-white/20 text-white hover:bg-white/10`}>
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
