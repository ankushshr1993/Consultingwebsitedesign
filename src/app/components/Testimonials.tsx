import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlowingEffect } from './ui/glowing-effect';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVision Inc.',
    content: 'ConsultPro transformed our business strategy. Their insights helped us increase revenue by 40% in just one year.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1770058428104-9dab343b7ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNDA1MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLab',
    content: 'The team\'s expertise in change management was invaluable during our merger. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Operations, Global Solutions',
    content: 'Professional, knowledgeable, and results-driven. ConsultPro exceeded our expectations in every way.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative min-h-[18rem]"
            >
              <div className="relative h-full rounded-xl border border-white/10 p-2 bg-black/40 backdrop-blur-sm">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative flex h-full flex-col rounded-lg border border-white/5 bg-[#030303]/80 p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    {testimonial.image && (
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/20"
                      />
                    )}
                    {!testimonial.image && (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/20 flex items-center justify-center">
                        <span className="text-indigo-400 font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
