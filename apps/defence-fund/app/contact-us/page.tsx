import { pageMetadata } from '../../lib/page-metadata';
import Link from 'next/link';
import { ContactForm } from '../../components/contact-form';

export const metadata = pageMetadata('/contact-us', 'Contact us', 'Contact Regression Defence Tech about founder, investor, and ecosystem enquiries.');

export default async function ContactUsPage({
  searchParams,
}: {
  searchParams?: Promise<{ audience?: string }>;
}) {
  const params = await searchParams;
  const audience = params?.audience === 'investor' ? 'investor' : params?.audience === 'founder' ? 'founder' : null;
  return (
    <article className="site-container document-page">
      <header className="dossier-intro">
        <h1>Get in touch</h1>
        <p>We welcome focused enquiries from founders, investors, and ecosystem partners.</p>
        {audience && <p>You selected: <strong>{audience === 'founder' ? 'Founder' : 'Investor'}</strong> pathway.</p>}
        <div className="hero-actions">
          <Link href="/founder-intake" className="button-primary">Founder intake</Link>
          <Link href="/investor-intake" className="button-secondary">Investor intake</Link>
        </div>
      </header>

      <div className="contact-grid">
        <section className="document-section">
          <h2>Send us a message</h2>
          <p>Include your current stage, problem area, and compliance context so we can review fit efficiently.</p>
          <ContactForm />
        </section>
        <aside className="contact-aside">
          <section>
            <h2>Contact directly</h2>
            <div>
              <h3>Email</h3>
              <p>General enquiries and introductions:</p>
              <a href="mailto:info@regressionconsulting.com" className="text-link">info@regressionconsulting.com</a>
            </div>
            <div>
              <h3>Phone</h3>
              <p>For priority enquiries:</p>
              <a href="tel:+31619116786" className="text-link">+31 619116786</a>
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with our team:</p>
              <a href="https://www.linkedin.com/in/ankush-shr/" target="_blank" rel="noreferrer" className="text-link">Ankush Sharma on LinkedIn</a>
            </div>
          </section>
          <section>
            <h2>What you can reach us for</h2>
            <ul>
              <li>Founders: apply through the dedicated founder questionnaire.</li>
              <li>Investors: apply through the dedicated investor questionnaire.</li>
              <li>Partners: regulatory, ecosystem, or strategic collaboration opportunities.</li>
            </ul>
          </section>
          <section>
            <h2>Response time</h2>
            <p>We aim to respond to all enquiries within <strong>3 business days</strong>. If you have not heard back within this timeframe, please feel free to follow up.</p>
          </section>
        </aside>
      </div>

      <section className="document-section">
        <h2>Offices and locations</h2>
        <div className="criteria-list">
          <section className="criteria-item">
            <div><h3>India</h3><p>Registered Office</p></div>
            <div>
              <p><strong>Regression Consulting Private Limited</strong></p>
              <p>F-275, Jal Vayu Vihar<br />Sector 30, Gurugram</p>
            </div>
          </section>
          <section className="criteria-item">
            <div><h3>Netherlands</h3><p>Global Presence</p></div>
            <p>Ertskade<br />Amsterdam, 1019 BB</p>
          </section>
        </div>
      </section>
      <section className="closing-note">
        <p>
          By contacting us, you agree we may store and process your information in accordance with our{' '}
          <Link href="/privacy-policy" className="text-link">Privacy Policy</Link>.
        </p>
      </section>
    </article>
  );
}
