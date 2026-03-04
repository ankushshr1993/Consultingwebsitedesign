import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Discuss your execution context
          </h2>
          <p className="text-xl text-gray-400">
            If technology execution has become critical to growth, regulatory stability, or investor confidence, we welcome a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all"
          >
            Request an advisory conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
