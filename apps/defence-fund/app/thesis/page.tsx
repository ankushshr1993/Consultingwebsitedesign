import { pageMetadata } from '../../lib/page-metadata';
import Link from 'next/link';

export const metadata = pageMetadata('/thesis', 'Investment thesis', 'Our approach to India-origin defence innovation, institutional readiness, and cross-border capital alignment.');

type Chapter = {
  id: string;
  title: string;
  paragraphs?: string[];
  rows?: string[][];
  bullets?: string[];
  groups?: { title: string; items: string[] }[];
  steps?: string[][];
};

const chapters: Chapter[] = [
  {
    "id": "our-focus",
    "title": "Our focus",
    "paragraphs": [
      "Structured Capital for Indian Defence & Dual-Use Innovation (India ↔ Europe)",
      "We identify a small number of high-potential companies, invest with discipline, and institutionalise them for venture scale.",
      "We engage only when governance, export reality, and exit logic can withstand institutional scrutiny."
    ]
  },
  {
    "id": "at-a-glance",
    "title": "At a glance",
    "rows": [
      [
        "Stage",
        "Prototype / Early Revenue (Seed / Pre-Series A)"
      ],
      [
        "Geography",
        "India origin; Europe as expansion pathway"
      ],
      [
        "Focus",
        "AI, autonomy, sensing, defence software, resilience"
      ],
      [
        "Approach",
        "Concentrated, operator-led, selective capital alignment"
      ]
    ]
  },
  {
    "id": "core-thesis",
    "title": "Core thesis",
    "paragraphs": [
      "India’s defence and dual-use ecosystem is increasingly technically credible. The constraint is not innovation: it is institutional readiness.",
      "European capital is active, but structurally conservative. Governance, compliance, and exit logic must be clear before serious engagement begins.",
      "Our thesis is that early structural discipline, governance, regulatory clarity, and venture economics create asymmetric long-term value."
    ]
  },
  {
    "id": "the-structural-gap",
    "title": "The structural gap",
    "paragraphs": [
      "The best companies are often blocked by mismatches between defence reality and venture capital requirements."
    ],
    "rows": [
      [
        "Governance mismatch",
        "Built for grants/procurement, not institutional boards."
      ],
      [
        "Regulatory ambiguity",
        "Export-control and foreign participation not mapped early."
      ],
      [
        "Market framing",
        "India-only narratives instead of venture-scale, global logic."
      ],
      [
        "Exit confusion",
        "No credible acquirer universe or comparable outcomes."
      ]
    ]
  },
  {
    "id": "why-now",
    "title": "Why now",
    "rows": [
      [
        "Defence modernisation + resilience",
        "European defence priorities increasingly reward deployable innovation and supply-chain resilience."
      ],
      [
        "Dual-use acceleration",
        "AI/autonomy/sensing increasingly serve civil + defence markets, expanding TAM and exit optionality."
      ],
      [
        "India capability curve",
        "More startups are reaching TRL maturity; the bottleneck shifts to structure, governance, and capital alignment."
      ]
    ]
  },
  {
    "id": "what-we-back",
    "title": "What we back",
    "groups": [
      {
        "title": "Preferred characteristics",
        "items": [
          "Software-defined advantage (AI, autonomy stack, sensing intelligence)",
          "High-margin potential; scalable unit economics",
          "Clear integration path (partners / primes / platforms) without dependency",
          "Dual-use optionality where feasible (civil-first or parallel)",
          "Founder willingness to accept governance discipline"
        ]
      },
      {
        "title": "Not our focus",
        "items": [
          "Low-margin manufacturing arbitrage without defensible IP",
          "Services-heavy contracting disguised as product",
          "Grant-dependent R&D with unclear commercial path",
          "Companies unwilling to engage seriously with compliance or governance"
        ]
      }
    ]
  },
  {
    "id": "how-we-create-value",
    "title": "How we create value",
    "paragraphs": [
      "We are an operator-led investment partner. We concentrate on a small number of companies to increase probability of institutional outcomes."
    ],
    "steps": [
      [
        "01",
        "Identify & Screen",
        "Institutional screening on team, market, defensibility, venture economics."
      ],
      [
        "02",
        "Institutionalise",
        "Governance readiness, cap-table clarity, diligence packaging, investor narrative."
      ],
      [
        "03",
        "Align Capital",
        "Personal participation where appropriate; selective introductions to aligned partners."
      ]
    ]
  },
  {
    "id": "investment-criteria",
    "title": "Investment criteria",
    "rows": [
      [
        "Team",
        "founder velocity + domain credibility + coachability"
      ],
      [
        "TRL",
        "prototype validated; clear path to deployment"
      ],
      [
        "Market",
        "venture-scale beyond India-only procurement"
      ],
      [
        "Differentiation",
        "defensible advantage vs global competitors"
      ],
      [
        "Economics",
        "margin potential and capital efficiency"
      ],
      [
        "Compliance",
        "export-control awareness; foreign participation feasible"
      ],
      [
        "Governance",
        "willingness to add structure, board discipline, reporting"
      ],
      [
        "Exit logic",
        "plausible acquirer universe or strategic outcomes"
      ]
    ]
  },
  {
    "id": "risk-compliance-lens",
    "title": "Risk and compliance lens",
    "paragraphs": [
      "Defence and dual-use investing is policy- and compliance-sensitive. We design inside constraints, not around them."
    ],
    "rows": [
      [
        "Export control reality",
        "early mapping of what can move, what cannot, and what must be localised."
      ],
      [
        "Foreign ownership & governance",
        "structures that preserve lawful control while enabling investable participation."
      ],
      [
        "Data/security posture",
        "baseline expectations for European diligence."
      ],
      [
        "Ethics & end-use",
        "we avoid ambiguous end-use and require transparency on deployment pathways."
      ]
    ]
  },
  {
    "id": "what-success-looks-like",
    "title": "What success looks like",
    "paragraphs": [
      "Success is not media coverage. It is institutional readiness plus a credible financing pathway."
    ],
    "bullets": [
      "Clean diligence package + institutional investor narrative",
      "Governance upgrades implemented (board, reporting, cap-table clarity)",
      "Export/control feasibility mapped with a realistic Europe operating path",
      "One meaningful capital event: qualified term sheet / follow-on round / strategic partner alignment"
    ]
  },
  {
    "id": "closing-perspective",
    "title": "Closing perspective",
    "paragraphs": [
      "We believe structural alignment precedes capital expansion. Our focus is to identify and institutionalise a small number of India-origin defence and dual-use companies that can withstand European investor scrutiny and scale responsibly."
    ],
    "rows": [
      [
        "For Founders",
        "If you meet our criteria and are prepared for institutional discipline, reach out."
      ],
      [
        "For Investors",
        "If you seek structured exposure to India-origin defence innovation."
      ]
    ]
  }
];

export default function ThesisPage() {
  return (
    <article className="site-container document-page">
      <header className="dossier-intro">
        <h1>Investment thesis</h1>
        <p>India-origin defence and dual-use companies, prepared for institutional participation.</p>
      </header>
      <div className="document-body">
        <nav className="document-index" aria-label="On this page">
          {chapters.map(chapter => <a href={`#${chapter.id}`} key={chapter.id}>{chapter.title}</a>)}
        </nav>
        <div>
          {chapters.map(chapter => (
            <section id={chapter.id} className="document-section" key={chapter.id}>
              <h2 className="section-heading">{chapter.title}</h2>
              {chapter.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {chapter.rows && <dl className="criteria-list">{chapter.rows.map(([title, body]) => <div key={title} className="criteria-item"><dt>{title}</dt><dd>{body}</dd></div>)}</dl>}
              {chapter.bullets && <ul>{chapter.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              {chapter.groups?.map(group => <div className="document-section" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
              {chapter.steps && <div className="method-timeline">{chapter.steps.map(([step, title, body]) => <div className="method-stage" key={step}><span className="chapter-number" aria-hidden="true">{step}</span><div className="chapter-body"><h3>{title}</h3><p>{body}</p></div></div>)}</div>}
            </section>
          ))}
          <div className="closing-note">
            <div className="hero-actions"><Link href="/founder-intake" className="button-primary">Founder intake</Link><Link href="/investor-intake" className="button-secondary">Investor intake</Link></div>
            <div className="hero-actions"><Link href="/contact-us" className="text-link">General enquiry</Link><Link href="/criteria" className="text-link">View criteria</Link></div>
          </div>
        </div>
      </div>
    </article>
  );
}
