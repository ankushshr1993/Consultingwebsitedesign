import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="site-container closing-note">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-ink)]">Discuss the decision you are facing.</h2>
          <p className="text-lg text-[var(--color-muted)]">Share what is at stake. We will explain whether we can help and the first diagnostic step.</p>
          <p className="text-sm text-[var(--color-muted)]">All conversations are confidential. We work under NDA where required.</p>
          <div className="flex flex-col items-start gap-3">
            <Link href="/contact" className="button-primary">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
