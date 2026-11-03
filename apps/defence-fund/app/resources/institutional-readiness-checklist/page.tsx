import { pageMetadata } from '../../../lib/page-metadata';

export const metadata = pageMetadata('/resources/institutional-readiness-checklist', 'Institutional readiness checklist', 'Prepare governance, ownership, commercial, compliance, and fundraising evidence for investor diligence.');

import Link from 'next/link';

export default function ResourcePage() {
  return <article className="site-container max-w-4xl pb-20 document-page">
    <header className="page-intro"><Link href="/resources" className="text-link">All resources</Link><h1>Institutional readiness checklist</h1><p>Prepare evidence before the first diligence conversation.</p></header>
      <section className="resource-detail"><h2>Governance and accountability</h2><p>Board reporting cadence and governance accountability established.</p><p>Prepare a sample reporting pack, a decision-rights map, and the owner of each reporting obligation. Note any practices still being introduced.</p></section>
      <section className="resource-detail"><h2>Ownership and documentation</h2><p>Cap table, IP ownership, and key contracts are diligence-ready.</p><p>Gather the current cap table, IP assignments, and material contracts. Record missing signatures or unresolved ownership questions rather than presenting them as complete.</p></section>
      <section className="resource-detail"><h2>Commercial readiness</h2><p>Commercial model supports durable margins and repeatability.</p><p>Separate actual revenue from projections. Explain buyer, pricing, delivery cost, procurement dependencies, and what would make the model repeatable.</p></section>
      <section className="resource-detail"><h2>Compliance boundaries</h2><p>Compliance and export-risk boundaries are explicitly documented.</p><p>Identify products, software, data, jurisdictions, end users, and questions requiring specialist review. Keep sensitive technical material out of an initial enquiry.</p></section>
      <section className="resource-detail"><h2>Fundraising narrative</h2><p>Fundraising narrative links mission relevance to venture economics.</p><p>Connect the capital requested to specific milestones. Distinguish demonstrated results from assumptions and identify evidence for each major claim.</p></section>
    <section className="resource-detail"><h2>Your next step</h2><p>Use this checklist to identify what is ready, what is missing, and who owns the next action.</p><div className="flex flex-wrap gap-3"><Link className="button-primary" href="/founder-intake">Introduce your company</Link><Link className="button-secondary" href="/contact-us">Ask a question</Link></div></section>
  </article>;
}
