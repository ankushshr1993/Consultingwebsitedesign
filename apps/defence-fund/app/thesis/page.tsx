import { Section } from '../../components/ui';

function PillarCard({
  icon,
  title,
  points
}: {
  icon: string;
  title: string;
  points: string[];
}) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <h4 className="text-base font-semibold text-slate-100">
        <span className="mr-2" aria-hidden>
          {icon}
        </span>
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ThesisPage() {
  return (
    <>
      <Section title="Investment Thesis">
        <h3 className="text-xl font-semibold text-slate-100">Structured Capital in Indian Defence &amp; Dual-Use Innovation</h3>
        <p>
          We back companies where strategic necessity, technical edge, and institutional discipline can scale together. In this
          category, structure is not administrative overhead—it is the condition that makes long-term capital possible.
        </p>
      </Section>

      <Section title="Core Conviction" className="pt-0">
        <p>
          India&apos;s defence technology ecosystem is still early, but advancing with real depth in engineering talent and mission-led
          innovation. The opportunity is clear; the investability is uneven.
        </p>
        <p>
          Our conviction follows modern venture logic: valuation follows quality, and quality in defence is inseparable from
          governance, process integrity, and deployment realism. Capital should be deployed after structural readiness is visible,
          not before.
        </p>
      </Section>

      <Section title="Structural Inefficiency" className="pt-0">
        <p>Many technically capable companies fail to attract institutional capital due to execution gaps outside the product stack:</p>
        <ul>
          <li>Governance misalignment between founder speed and institutional decision standards.</li>
          <li>Regulatory and compliance complexity across defence procurement and export frameworks.</li>
          <li>Export-control barriers that are not integrated into early go-to-market planning.</li>
          <li>Undefined global market logic beyond domestic demand assumptions.</li>
          <li>Weak or delayed exit pathway design for strategic acquirers and later-stage funds.</li>
        </ul>
        <p>
          Institutional investors require pipeline discipline, reporting quality, and governance clarity before scale capital is
          committed. We treat this gap as an investment opportunity.
        </p>
      </Section>

      <Section title="Why Now" className="pt-0">
        <ul>
          <li>India&apos;s indigenous capability base is maturing across software-led and hardware-enabled defence systems.</li>
          <li>European and broader allied markets are increasing defence and dual-use technology allocations.</li>
          <li>Dual-use models are accelerating, improving capital efficiency and commercial optionality.</li>
          <li>Strategic demand is shifting toward resilient, interoperable, and sovereignty-aware technology supply chains.</li>
        </ul>
      </Section>

      <Section title="Capital Framework" className="pt-0">
        <p>Our screening and underwriting are built on four structural pillars:</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PillarCard
            icon="🧭"
            title="Early Institutionalisation"
            points={[
              'Governance design, board rhythm, and diligence readiness are established early.',
              'Capital structure supports follow-on financing without fragility.'
            ]}
          />
          <PillarCard
            icon="🔀"
            title="Dual-Use Optionality"
            points={[
              'Clear civil + defence demand pathways reduce single-channel dependency.',
              'Commercial learnings strengthen mission deployment and vice versa.'
            ]}
          />
          <PillarCard
            icon="📈"
            title="Margin & Scalability Discipline"
            points={[
              'Unit economics and delivery model can sustain growth beyond pilot cycles.',
              'Scalability is tested against procurement reality, not presentation narratives.'
            ]}
          />
          <PillarCard
            icon="🎯"
            title="Exit Rationality"
            points={[
              'Potential acquirer universe is identified early (strategics, integrators, sovereign programs).',
              'Pathways to liquidity are framed as strategic design constraints, not late-stage hopes.'
            ]}
          />
        </div>
      </Section>

      <Section title="Focus Areas" className="pt-0">
        <ul>
          <li>
            <strong>AI &amp; Decision Systems:</strong> mission-speed decision quality, data fusion, and operator augmentation in complex
            environments.
          </li>
          <li>
            <strong>Autonomy:</strong> scalable autonomy stacks for contested, distributed, and high-risk operational contexts.
          </li>
          <li>
            <strong>Advanced Sensing:</strong> sensing and signal intelligence layers that improve detection, awareness, and response
            reliability.
          </li>
          <li>
            <strong>Software-Defined Infrastructure:</strong> adaptable platforms that improve interoperability, upgrade velocity, and
            lifecycle economics.
          </li>
        </ul>
      </Section>

      <Section title="Risk Awareness" className="pt-0">
        <p>We underwrite with explicit recognition of structural risk and external dependency:</p>
        <ul>
          <li>Export and policy shifts that can alter market access or deployment timing.</li>
          <li>Geopolitical transitions that change strategic demand and alliance priorities.</li>
          <li>Procurement-cycle friction that impacts revenue recognition and scaling cadence.</li>
          <li>Capital market cycles that affect follow-on financing and valuation discipline.</li>
        </ul>
      </Section>

      <Section title="Current Strategy" className="pt-0">
        <p>
          We are executing a concentrated, operator-led early investment strategy: fewer positions, deeper engagement, and rigorous
          institutional build-out alongside founders.
        </p>
        <p>
          This phase is intentionally designed to build a high-signal portfolio and repeatable underwriting process as a foundation
          for broader micro-VC expansion.
        </p>
      </Section>

      <Section title="Closing Statement" className="pt-0">
        <p>
          Our thesis is simple: in defence and dual-use innovation, disciplined structure compounds into durable value. That principle
          drives how we select, support, and scale every investment.
        </p>
      </Section>
    </>
  );
}
