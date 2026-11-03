import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/terms', 'Terms of use', 'Terms governing access to and use of the Regression Defence Tech website.');

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-[var(--color-muted)]">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)]">Terms of Use</h1>
      <p className="mt-4">By using this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of others.</p>
      <p className="mt-4">Content is provided on an "as is" basis and may be modified, updated, or removed without notice.</p>
      <p className="mt-4">Users are responsible for compliance with local laws and regulations applicable to their access and use of this website.</p>
    </div>
  );
}
