import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="consulting-hero">
      <div className="site-container hero-grid">
        <div>
          <h1>Technology execution. Under control.</h1>
          <p className="hero-lede">Operator-led advisory when delivery risk becomes enterprise risk.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">Start a conversation</Link>
            <Link href="/approach" className="button-secondary">See how we work</Link>
          </div>
        </div>
        <aside className="diagnostic-summary" aria-labelledby="diagnostic-heading">
          <div className="diagnostic-duration"><strong>2</strong><span>weeks</span></div><h2 id="diagnostic-heading">Execution diagnostic</h2>
          <p>Find where architecture, delivery, and decision ownership have lost coherence.</p>
          <dl>
            <div><dt>Review</dt><dd>Architecture, dependencies, and governance</dd></div>
            <div><dt>Receive</dt><dd>Risk priorities and practical control actions</dd></div>
          </dl>
          <Link href="/services#engagement-models" className="text-link">Explore engagement models</Link>
        </aside>
      </div>
    </section>
  );
}
