import { pageMetadata } from '../../../lib/page-metadata';

export const metadata = pageMetadata('/resources/export-control-readiness', 'Export-control readiness checklist', 'Organize transfer, approval, end-use, and data questions before cross-border defence or dual-use discussions.');

import Link from 'next/link';

export default function ResourcePage() {
  return <article className="site-container max-w-4xl pb-20 document-page">
    <header className="page-intro"><Link href="/resources" className="text-link">All resources</Link><h1>Export-control readiness checklist</h1><p>Organize the questions that need specialist assessment before cross-border discussions.</p></header>
      <section className="resource-detail"><h2>Map possible transfers</h2><p>Classify what can and cannot be transferred across jurisdictions.</p><p>Inventory hardware, software, technical information, access permissions, and involved jurisdictions. Record unresolved classification questions for qualified review.</p></section>
      <section className="resource-detail"><h2>Identify approvals</h2><p>Define approval pathways and expected regulatory lead times.</p><p>Assign an owner to each approval question. Distinguish confirmed requirements from assumptions and connect approval dependencies to the proposed commercial schedule.</p></section>
      <section className="resource-detail"><h2>Understand end use</h2><p>Document end-use assurance requirements for potential buyers.</p><p>Prepare questions about intended use, end user, onward transfer, and the documentation a buyer can provide. Escalate unclear answers before making commitments.</p></section>
      <section className="resource-detail"><h2>Plan data handling</h2><p>Map data-handling and localization constraints by geography.</p><p>Record where information is stored, who can access it, and which partners receive it. Ask specialists to assess the proposed access and transfer arrangements.</p></section>
      <section className="resource-detail"><h2>Align expectations</h2><p>Align partner and investor expectations with compliance reality.</p><p>Explain which decisions remain conditional, who will resolve them, and which milestones depend on approvals. Do not describe an unresolved pathway as approved.</p></section>
    <section className="resource-detail"><h2>Your next step</h2><p>Use this checklist to identify what is ready, what is missing, and who owns the next action.</p><div className="flex flex-wrap gap-3"><Link className="button-primary" href="/founder-intake">Introduce your company</Link><Link className="button-secondary" href="/contact-us">Ask a question</Link></div></section>
  </article>;
}
