import Link from 'next/link';
import { ContactForm } from '../../components/contact-form';

function LocationBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-200">
      {label}
    </span>
  );
}

export default async function ContactUsPage({
  searchParams,
}: {
  searchParams?: Promise<{ audience?: string }>;
}) {
  const params = await searchParams;
  const audience = params?.audience === 'investor' ? 'investor' : params?.audience === 'founder' ? 'founder' : null;
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Get In Touch</h1>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          We welcome focused enquiries from founders, investors, and ecosystem partners.
        </p>
        {audience && (
          <p className="mx-auto mt-4 max-w-2xl rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
            You selected: <strong>{audience === 'founder' ? 'Founder' : 'Investor'}</strong> pathway.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-100">What You Can Reach Us For</h2>
        <ul className="list-inside list-disc space-y-2 text-left text-base leading-relaxed text-slate-300 sm:text-center">
          <li>Founders: apply through the dedicated founder questionnaire.</li>
          <li>Investors: apply through the dedicated investor questionnaire.</li>
          <li>Partners: regulatory, ecosystem, or strategic collaboration opportunities.</li>
        </ul>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/founder-intake" className="rounded-md bg-indigo-500 px-5 py-2 text-sm text-white hover:bg-indigo-600">Founder Intake</Link>
          <Link href="/investor-intake" className="rounded-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10">Investor Intake</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-slate-100">Email</h3>
          <p className="text-base text-slate-300">General enquiries and introductions:</p>
          <a
            href="mailto:info@regressionconsulting.com"
            className="mt-2 block break-all text-indigo-400 transition-colors hover:text-indigo-300"
          >
            info@regressionconsulting.com
          </a>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-slate-100">Phone</h3>
          <p className="text-base text-slate-300">For priority enquiries:</p>
          <a href="tel:+31619116786" className="mt-2 block text-indigo-400 transition-colors hover:text-indigo-300">
            +31 619116786
          </a>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-slate-100">LinkedIn</h3>
          <p className="text-base text-slate-300">Connect with our team:</p>
          <a
            href="https://www.linkedin.com/company/regressionconsulting"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-indigo-400 transition-colors hover:text-indigo-300"
          >
            linkedin.com/regressionconsulting
          </a>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-100">Send Us a Message</h2>
        <p className="mb-6 text-center text-sm text-slate-300">
          Include your current stage, problem area, and compliance context so we can review fit efficiently.
        </p>
        <ContactForm />
      </section>

      <section className="mx-auto max-w-4xl bg-slate-900/60 px-6 py-8 text-center leading-relaxed text-slate-100">
        <p>
          We aim to respond to all enquiries within <strong>3 business days</strong>. If you have not heard back within
          this timeframe, please feel free to follow up.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-100">Offices &amp; Locations</h2>
        <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 sm:p-6">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-100">India</h3>
              <LocationBadge label="Registered Office" />
            </div>
            <p className="mt-4 text-base font-semibold text-slate-100">Regression Consulting Private Limited</p>
            <p className="mt-2 leading-relaxed text-slate-300">
              F-275, Jal Vayu Vihar
              <br />
              Sector 30, Gurugram
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-100">Netherlands</h3>
              <LocationBadge label="Global Presence" />
            </div>
            <p className="mt-4 leading-relaxed text-slate-300">
              Ertskade
              <br />
              Amsterdam, 1019 BB
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-slate-400">
        <p>
          By contacting us, you agree we may store and process your information in accordance with our{' '}
          <Link href="/privacy-policy" className="text-indigo-400 transition-colors hover:text-indigo-300">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </>
  );
}
