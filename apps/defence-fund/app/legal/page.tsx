import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/legal', 'Legal disclosure', 'Important information about the scope of this website and investment-related content.');

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-[var(--color-muted)]">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)]">Legal Disclosure</h1>
      <p className="mt-4">This website is provided for general informational purposes only. Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, securities in any jurisdiction.</p>
      <p className="mt-4">Any investment activity, if undertaken, will be conducted only in accordance with applicable law, regulatory requirements, and jurisdictional restrictions.</p>
      <p className="mt-4">Past outcomes, case references, and operational examples are illustrative and do not guarantee future results.</p>
    </div>
  );
}
