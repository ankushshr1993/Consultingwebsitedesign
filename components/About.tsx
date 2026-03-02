import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  'Over 15 years of industry experience',
  'Served 500+ clients globally',
  '95% client satisfaction rate',
  'Expert team of certified consultants',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-violet-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg blur-lg opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzIyODkwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern office teamwork"
              className="rounded-lg shadow-xl relative border border-white/10"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-6">
              Why Choose ConsultPro?
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              We are a team of experienced consultants dedicated to helping businesses achieve their goals. Our data-driven approach and industry expertise ensure measurable results.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From startups to Fortune 500 companies, we've helped organizations across industries navigate complex challenges and capitalize on opportunities.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-400 flex-shrink-0" size={24} />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
