import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
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
      'We measure progress by changed behaviours, cleaner decisions, and delivery stability — not by presentation volume or status optics.',
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
    <section className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,181,68,0.10),transparent_48%)]" />
      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Who we are</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">
            Operator-led advisory for moments when technology execution becomes enterprise risk.
          </h1>
          <p className="max-w-[75ch] text-lg leading-relaxed text-[#A8B3CF]">
            Regression Consulting exists for the moments when leadership needs more than another strategy deck — when architecture, delivery, vendors, and decision rights need to be brought back under control.
          </p>
        </header>

        <section className="grid gap-8 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:grid-cols-[220px_1fr] md:p-10">
          <div className="space-y-3">
            <div className="flex h-48 w-full items-center justify-center rounded-xl border border-dashed border-[#2A3559] bg-[#0B1020] text-center text-sm text-[#A8B3CF]">
              Founder photo placeholder
            </div>
            <Link href="#" className="inline-block font-mono text-xs uppercase tracking-[0.16em] text-[#F5B544] hover:text-[#ffd27e]">
              Add LinkedIn profile link
            </Link>
          </div>
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Founder / operator</p>
            <h2 className="text-2xl font-semibold text-[#E8ECF8]">[Founder Name] — [Founder Title]</h2>
            <p className="text-[#A8B3CF]">
              Regression Consulting was founded by [Founder Name], a technology operator with [X]+ years of experience leading architecture, delivery, governance, and platform execution across complex business environments. The firm was built around a simple belief: execution problems are rarely solved by more reporting. They are solved by finding where structure broke — and restoring decision control.
            </p>
            <div className="grid gap-3 text-sm text-[#E8ECF8] md:grid-cols-2">
              <p><span className="font-mono text-[#A8B3CF]">Experience:</span> [Years of Experience]</p>
              <p><span className="font-mono text-[#A8B3CF]">Background:</span> [Relevant Background]</p>
              <p><span className="font-mono text-[#A8B3CF]">Environments:</span> [Industries / environments]</p>
              <p><span className="font-mono text-[#A8B3CF]">Achievements:</span> [Notable non-confidential achievements]</p>
            </div>
            <ul className="space-y-2 text-sm text-[#A8B3CF]">
              <li>• Optional selected experience bullet</li>
              <li>• Optional selected experience bullet</li>
              <li>• Optional selected experience bullet</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Why Regression?</p>
          <p className="mt-4 text-lg leading-relaxed text-[#E8ECF8]">
            In statistics, regression analysis helps identify the true relationship beneath noisy variables. It separates signal from distortion. That is the operating metaphor behind Regression Consulting. We do not take the status report at face value. We look for the structural causes behind delivery drift — architecture fragmentation, unclear ownership, vendor misalignment, weak governance, and decisions that were never made cleanly.
          </p>
        </section>

        <section className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Principles</p>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <h3 className="text-xl font-semibold text-[#E8ECF8]">{principle.title}</h3>
                <p className="mt-3 text-[#A8B3CF]">{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Credibility through operating context</p>
          <p className="mt-3 text-sm text-[#A8B3CF]">These are experience areas, not client claims.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {experienceAreas.map((area) => (
              <p key={area} className="rounded-lg border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]">
                {area}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 text-center md:p-10">
          <h2 className="text-3xl font-semibold text-[#E8ECF8]">Need an operator’s view on execution risk?</h2>
          <Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#F5B544] px-8 py-3 font-medium text-[#0B1020] transition-colors hover:bg-[#ffd27e]">
            Start a conversation
          </Link>
        </section>
      </div>
    </section>
  );
}
