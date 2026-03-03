import Link from 'next/link';
import { SharedSiteHero } from '../components/ui';
import { MdxPage } from '../lib/mdx-page';

export default function Page() {
  return (
    <>
      <SharedSiteHero
        title="Structured Capital for Indian Defence & Dual-Use Innovation"
        subtitle="We identify high-potential defence and dual-use startups, invest with discipline, strengthen institutional readiness, and align them with long-term capital."
        primaryCta={
          <Link
            href="/intake"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 px-8 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-rose-600"
          >
            Submit a company
          </Link>
        }
        secondaryCta={
          <Link
            href="/focus"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Review focus areas
          </Link>
        }
      />
      <MdxPage title="Investment Thesis" fileName="thesis.mdx" />
    </>
  );
}
