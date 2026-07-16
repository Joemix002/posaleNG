import Reveal from './Reveal.jsx';
import Logo from './Logo.jsx';
import { APP_URL, WHATSAPP_NUMBER } from '../config.js';

export default function Footer() {
  return (
    <>
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2>Your next customer is waiting.</h2>
            <p>Set up tonight, sell tomorrow morning. Full access for 30 days — no card, no commitment.</p>
            <div className="ctas">
              <a className="btn btn-green" href={APP_URL}>Start free 30-day trial</a>
              {WHATSAPP_NUMBER && (
                <a className="btn btn-dark-ghost" href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}>
                  Chat with us on WhatsApp
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <Logo dark size={34} />
            <small>© {new Date().getFullYear()} · Powered by Evolve Media Global LTD · </small>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/terms">Terms &amp; Conditions</a>
            <a href={APP_URL}>Login</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
