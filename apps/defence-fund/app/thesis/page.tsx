import Link from 'next/link';
import { Section } from '../../components/ui';

type FactChipProps = {
  label: string;
  value: string;
};

function FactChip({ label, value }: FactChipProps) {
  return (
    <div className="snap-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm whitespace-nowrap">
      <span className="text-slate-400">{label}: </span>
      <span className="text-slate-200">{value}</span>
    </div>
  );
}

type CardProps = {
  title: string;
  body: string;
};

function InfoCard({ title, body }: CardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-base font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </article>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
};

function StepCard({ step, title, body }: StepCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-xs font-medium tracking-wider text-slate-300">
        {step}
      </div>
      <h3 className="text-base font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </article>
  );
}

export default function ThesisPage() {
  return (
    <div className="pb-16">
      <Section title="Investment Thesis" className="max-w-5xl py-16">
        <p className="max-w-4xl text-base leading-relaxed text-slate-200 md:text-lg">
          Structured Capital for Indian Defence &amp; Dual-Use Innovation (India ↔ Europe)
        </p>
        <div className="mt-4 max-w-4xl space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
          <p>
            We identify a small number of high-potential companies, invest with discipline, and institutionalise them for venture
            scale.
          </p>
          <p>We engage only when governance, export reality, and exit logic can withstand institutional scrutiny.</p>
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate-400 md:text-sm">
          We do not guarantee funding or contracts; we design within regulatory frameworks and introduce capital selectively when a
          company is institutionally ready.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/criteria"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            See Our Criteria
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Contact
          </Link>
        </div>
      </Section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex snap-x gap-3 overflow-x-auto pb-2">
            <FactChip label="Stage" value="Prototype → Early Revenue (Seed / Pre-Series A)" />
            <FactChip label="Geography" value="India origin; Europe as expansion pathway" />
            <FactChip label="Focus" value="AI, autonomy, sensing, defence software, resilience" />
            <FactChip label="Approach" value="Concentrated, operator-led, selective capital alignment" />
            <FactChip label="We are not" value="Broker, contractor, or grant factory" />
            <FactChip label="Current phase" value="1–2 deals to build track record" />
          </div>
        </div>
      </section>

      <Section title="Core Thesis" className="max-w-5xl py-16">
        <div className="max-w-4xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
          <p>
            India&apos;s defence and dual-use ecosystem is increasingly technically credible. The constraint is not innovation—it is
            institutional readiness.
          </p>
          <p>
            European capital is active, but it is structurally conservative: governance, compliance, and exit logic must be clear
            before serious engagement begins.
          </p>
          <p>
            Our thesis is that early structural discipline (governance + regulatory clarity + venture economics) creates asymmetric
            long-term value.
          </p>
        </div>
        <div className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">What we believe</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
            Capital follows structure. Governance precedes valuation. Export reality cannot be ignored.
          </p>
        </div>
      </Section>

      <Section title="The Structural Gap" className="max-w-5xl border-t border-white/10 py-16">
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
          The best companies are often blocked by mismatches between defence reality and venture capital requirements.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Governance mismatch" body="Built for grants/procurement, not institutional boards." />
          <InfoCard title="Regulatory ambiguity" body="Export-control and foreign participation not mapped early." />
          <InfoCard title="Market framing" body="India-only narratives instead of venture-scale, global logic." />
          <InfoCard title="Exit confusion" body="No credible acquirer universe or comparable outcomes." />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">
          We operate as the “institutionalisation layer” before founders enter high-stakes investor conversations.
        </p>
      </Section>

      <Section title="Why Now" className="max-w-5xl border-t border-white/10 py-16">
        <ul className="max-w-4xl space-y-3 text-base leading-relaxed text-slate-300 md:text-lg">
          <li>
            • <strong className="text-slate-100">Defence modernisation + resilience:</strong> European defence priorities increasingly
            reward deployable innovation and supply-chain resilience.
          </li>
          <li>
            • <strong className="text-slate-100">Dual-use acceleration:</strong> AI/autonomy/sensing increasingly serve civil + defence
            markets, expanding TAM and exit optionality.
          </li>
          <li>
            • <strong className="text-slate-100">India capability curve:</strong> More startups are reaching TRL maturity; the bottleneck
            shifts to structure, governance, and capital alignment.
          </li>
        </ul>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-slate-400 md:text-sm">
          This page is a public thesis; detailed data and internal screening notes are shared selectively.
        </p>
      </Section>

      <Section title="What We Back" className="max-w-5xl border-t border-white/10 py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-slate-100">Preferred characteristics</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
              <li>• Software-defined advantage (AI, autonomy stack, sensing intelligence)</li>
              <li>• High-margin potential; scalable unit economics</li>
              <li>• Clear integration path (partners / primes / platforms) without dependency</li>
              <li>• Dual-use optionality where feasible (civil-first or parallel)</li>
              <li>• Founder willingness to accept governance discipline</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-slate-100">Not our focus</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
              <li>• Low-margin manufacturing arbitrage without defensible IP</li>
              <li>• Services-heavy contracting disguised as product</li>
              <li>• Grant-dependent R&amp;D with unclear commercial path</li>
              <li>• Companies unwilling to engage seriously with compliance or governance</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section title="How We Create Value" className="max-w-5xl border-t border-white/10 py-16">
        <div className="max-w-4xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
          <p>
            We are an operator-led investment partner. We concentrate on a small number of companies to increase probability of
            institutional outcomes.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <StepCard
            step="01"
            title="Identify & Screen"
            body="Institutional screening on team, market, defensibility, venture economics."
          />
          <StepCard
            step="02"
            title="Institutionalise"
            body="Governance readiness, cap-table clarity, diligence packaging, investor narrative."
          />
          <StepCard
            step="03"
            title="Align Capital"
            body="Personal participation where appropriate; selective introductions to aligned partners."
          />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">
          We do not run broad “demo days” or mass deck distribution.
        </p>
      </Section>

      <Section title="Investment Criteria" className="max-w-5xl border-t border-white/10 py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Team" body="founder velocity + domain credibility + coachability" />
          <InfoCard title="TRL" body="prototype validated; clear path to deployment" />
          <InfoCard title="Market" body="venture-scale beyond India-only procurement" />
          <InfoCard title="Differentiation" body="defensible advantage vs global competitors" />
          <InfoCard title="Economics" body="margin potential and capital efficiency" />
          <InfoCard title="Compliance" body="export-control awareness; foreign participation feasible" />
          <InfoCard title="Governance" body="willingness to add structure, board discipline, reporting" />
          <InfoCard title="Exit logic" body="plausible acquirer universe or strategic outcomes" />
        </div>
        <details className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-5">
          <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-wide text-slate-200">Kill Criteria</summary>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
            <li>• Founder expects guaranteed funding</li>
            <li>• No clarity on IP ownership or third-party restrictions</li>
            <li>• Export-control treated as an afterthought</li>
            <li>• No credible customer/buyer definition</li>
            <li>• Resistance to governance / transparency</li>
          </ul>
        </details>
      </Section>

      <Section title="Risk & Compliance Lens" className="max-w-5xl border-t border-white/10 py-16">
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
          Defence and dual-use investing is policy- and compliance-sensitive. We design inside constraints, not around them.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Export control reality" body="early mapping of what can move, what cannot, and what must be localised." />
          <InfoCard
            title="Foreign ownership & governance"
            body="structures that preserve lawful control while enabling investable participation."
          />
          <InfoCard title="Data/security posture" body="baseline expectations for European diligence." />
          <InfoCard
            title="Ethics & end-use"
            body="we avoid ambiguous end-use and require transparency on deployment pathways."
          />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">If risk cannot be mitigated, we stop early.</p>
      </Section>

      <Section title="What Success Looks Like" className="max-w-5xl border-t border-white/10 py-16">
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
          Success is not media coverage. It is institutional readiness plus a credible financing pathway.
        </p>
        <ul className="mt-5 max-w-4xl space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
          <li>• Clean diligence package + institutional investor narrative</li>
          <li>• Governance upgrades implemented (board, reporting, cap-table clarity)</li>
          <li>• Export/control feasibility mapped with a realistic Europe operating path</li>
          <li>• One meaningful capital event: qualified term sheet / follow-on round / strategic partner alignment</li>
        </ul>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-slate-400 md:text-sm">
          We prefer a small number of high-quality outcomes over a large number of weak conversations.
        </p>
      </Section>

      <Section title="Closing Perspective" className="max-w-5xl border-t border-white/10 py-16">
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
          We believe structural alignment precedes capital expansion. Our focus is to identify and institutionalise a small number of
          India-origin defence and dual-use companies that can withstand European investor scrutiny and scale responsibly.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-slate-100">For Founders</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              If you meet our criteria and are prepared for institutional discipline, reach out.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold text-slate-100">For Investors</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              If you seek structured exposure to India-origin defence innovation, we engage selectively.
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Contact
          </Link>
          <Link
            href="/criteria"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Criteria
          </Link>
        </div>
      </Section>
    </div>
  );
}
