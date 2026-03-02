import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  if (window.location.pathname === '/services') {
    return <ServicesPage />;
  }

  return <HomePage />;
}
