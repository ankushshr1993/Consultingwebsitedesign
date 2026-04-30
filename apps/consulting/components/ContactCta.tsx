import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="relative bg-[#0B1020] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E8ECF8]">Discuss your execution context</h2>
          <p className="text-xl text-[#A8B3CF]">
            Best fit for portfolio companies and enterprise teams facing execution-level board risk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex rounded-md bg-[#4DA3FF] px-8 py-3 text-[#0B1020] transition-all hover:bg-[#7cbaff]">
              Request a risk diagnostic
            </Link>
            <Link href="/contact" className="inline-flex rounded-md border border-[#2A3559] px-8 py-3 text-[#E8ECF8] transition-all hover:bg-[#111831]">
              Stress-test an execution plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
