import Link from 'next/link';
import { Section, SiteHero } from '../components/ui';

export default function Page() {
  return (
    <>
      <SiteHero
        eyebrow="HOME PAGE (Strategic • Stealth • Thought-Leader)"
        title="Structured Capital for Indian Defence & Dual-Use Innovation"
        subtitle="We identify high-potential defence and dual-use startups, invest with discipline, strengthen institutional readiness, and align them with long-term capital."
      >
        <span className="text-sm font-medium text-slate-200">No hype. No volume. No shortcuts.</span>
      </SiteHero>

      <Section title="The Context">
        <p>India’s defence innovation ecosystem is maturing.</p>
        <p>Technical capability is rising.</p>
        <p>Government validation is improving.</p>
        <p>Global demand for resilient, cost-efficient defence technology is increasing.</p>
        <p>
          Yet institutional capital participation remains constrained — not due to lack of innovation, but due to structural misalignment.
        </p>
        <ul>
          <li>Governance</li>
          <li>Export reality</li>
          <li>Cross-border feasibility</li>
          <li>Exit logic</li>
        </ul>
        <p>This is where we operate.</p>
      </Section>

      <Section title="What We Believe">
        <p>Capital does not follow technology. It follows structure.</p>
        <p>
          Defence startups do not fail because they lack innovation. They fail because they lack institutional discipline early enough.
        </p>
        <p>We believe early structural alignment creates measurable long-term value.</p>
      </Section>

      <Section title="What We Do">
        <p>We operate as an operator-led investment partner.</p>
        <h3>1 — Identify</h3>
        <p>We selectively evaluate defence and dual-use startups capable of scaling beyond domestic procurement.</p>
        <h3>2 — Institutionalise</h3>
        <p>We work alongside founders to strengthen:</p>
        <ul>
          <li>Governance</li>
          <li>Capital structure</li>
          <li>Export-control awareness</li>
          <li>Institutional positioning</li>
          <li>Exit logic</li>
        </ul>
        <h3>3 — Align Capital</h3>
        <p>
          We invest personally and introduce institutional capital only when structural readiness is achieved. We concentrate on depth, not deal volume.
        </p>
      </Section>

      <Section title="Our Focus">
        <p>We prioritise technologies that demonstrate:</p>
        <ul>
          <li>Dual-use scalability</li>
          <li>Software and autonomy leverage</li>
          <li>Sensor-driven systems</li>
          <li>Margin resilience</li>
          <li>Cross-border applicability</li>
        </ul>
        <p>We avoid capital-intensive, low-margin, grant-dependent models.</p>
      </Section>

      <Section title="Our Phase">
        <p>
          We are currently executing a concentrated strategy — partnering with a limited number of companies to build disciplined institutional track record before broader capital formation.
        </p>
        <p>Measured. Intentional. Long-term.</p>
      </Section>

      <Section title="For Founders">
        <p>
          If you are building serious defence or dual-use technology and are prepared for institutional governance and structural discipline, we welcome a substantive conversation.
        </p>
      </Section>

      <Section title="For Investors" className="pb-20">
        <p>
          If you seek structured exposure to India-origin defence innovation with early-stage institutional alignment, we engage selectively.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-rose-600"
          >
            Contact us
          </Link>
          <Link
            href="/thesis"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Read thesis
          </Link>
        </div>
      </Section>
    </>
  );
}
