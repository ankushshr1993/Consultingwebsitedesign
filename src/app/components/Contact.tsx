import { Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackEvent } from '../../lib/analytics';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Qualification Intake
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We review inbound requests for executive sponsorship, urgency, and implementation readiness before accepting new work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-lg bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Before you reach out</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Include the decision or initiative that must move in the next 90 days.</li>
                <li>Confirm the accountable executive sponsor and implementation owner.</li>
                <li>Share constraints we should design around (time, budget, organizational).</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <Mail className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">intake@regressionconsulting.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <Phone className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-400">+1 (555) 010-9075</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Operating model</div>
                  <div className="text-gray-400">Remote-first advisory with scheduled on-site sessions for active engagements.</div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              trackEvent('contact_submit_success');
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="scope" className="block text-sm font-medium text-gray-300 mb-2">
                Decision / Scope to Qualify
              </label>
              <textarea
                id="scope"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="What decision needs to be made, by when, and what is at risk if delayed?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all"
            >
              Submit for Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
