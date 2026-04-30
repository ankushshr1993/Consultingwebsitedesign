import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="relative bg-[#0B1020] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E8ECF8]">Ready to regain execution control?</h2>
          <p className="text-xl text-[#A8B3CF]">For portfolio and enterprise leadership teams where technology execution has become business risk.</p>
          <div className="flex flex-col items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex rounded-md bg-[#4DA3FF] px-8 py-3 text-[#0B1020] transition-all hover:bg-[#7cbaff]">
              Start a conversation
            </Link>
            <Link href="/how-we-work" className="text-sm text-[#A8B3CF] transition-colors hover:text-[#E8ECF8]">
              See how we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
