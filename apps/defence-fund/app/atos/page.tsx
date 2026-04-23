import Link from 'next/link';
import { AtosBalls } from './atos-balls';

const buttonClass =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

export default function AtosPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Atos ;)</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Each character below is built with moving particles that settle into the text shape.
      </p>

      <section className="mt-10">
        <AtosBalls />
      </section>

      <div className="mt-10">
        <Link
          href="/"
          className={`${buttonClass} border border-white/15 bg-white/5 text-white hover:bg-white/10`}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
