import { CheckCircle } from 'lucide-react';

const principles = [
  'Clear problem definition before recommendations.',
  'Decision-ready outputs with owners, dates, and risks.',
  'No inflated certainty, no vanity metrics, no dependency theater.',
  'Direct communication with the accountable executive sponsor.',
];

const artifacts = [
  'Operator brief (decision context, options, tradeoffs).',
  'Prioritized action register (owner, due date, dependency).',
  'Risk log with mitigation pathways and escalation triggers.',
  '30/60/90-day execution checkpoint memo.',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-violet-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-6">
              How Regression Consulting Operates
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              We are an executive advisory partner focused on qualification, sequencing, and operational follow-through.
              Engagements are intentionally narrow so recommendations can be acted on quickly.
            </p>
            <h3 className="text-lg font-semibold text-white mb-4">Working principles</h3>
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{principle}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Engagement boundaries</h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside mb-8">
              <li>We do not replace internal leadership or line management.</li>
              <li>We do not provide legal, tax, or regulated advisory services.</li>
              <li>We do not run open-ended retainers without a defined objective and endpoint.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-white mb-4">What you receive</h3>
            <div className="space-y-3">
              {artifacts.map((artifact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-rose-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{artifact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
