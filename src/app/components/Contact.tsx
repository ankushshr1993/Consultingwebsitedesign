import { Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg blur-lg opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMjg2MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business strategy planning"
                className="rounded-lg shadow-xl relative border border-white/10"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <Mail className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">contact@consultpro.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <Phone className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold text-white">Office</div>
                  <div className="text-gray-400">123 Business Plaza, Suite 500<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
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
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="your@email.com"
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
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
