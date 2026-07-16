import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

// Hash routes ("#/privacy") coexist with section anchors ("#pricing").
const getRoute = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#/privacy')) return 'privacy';
  if (hash.startsWith('#/terms')) return 'terms';
  return 'home';
};

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route === 'home') {
      const id = window.location.hash.replace('#', '');
      if (id && !id.startsWith('/')) {
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [route]);

  return (
    <>
      <Header />
      <main>
        {route === 'privacy' ? (
          <Privacy />
        ) : route === 'terms' ? (
          <Terms />
        ) : (
          <>
            <Hero />
            <Marquee />
            <Features />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Faq />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
