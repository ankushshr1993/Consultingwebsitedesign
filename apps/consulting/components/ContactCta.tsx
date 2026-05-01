import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="relative bg-[#0B1020] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E8ECF8]">If technology execution has become a board-level concern, let’s talk.</h2>
          <p className="text-lg text-[#A8B3CF]">Share the situation, the pressure, and what is at stake. We will respond with a clear view on whether we can help — and what the first diagnostic step should be.</p>
          <p className="text-sm text-[#A8B3CF]">All conversations are confidential. We work under NDA where required.</p>
          <div className="flex flex-col items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex rounded-md border border-[#C8A45D] bg-[#111827] px-8 py-3 text-white transition-colors hover:bg-[#1F2937]">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
