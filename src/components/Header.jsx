import { APP_URL } from '../config.js';
import Logo from './Logo.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Posale NG home">
          <Logo />
        </a>
        <nav className="nav-links" aria-label="Site">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a className="login-link" href={APP_URL}>Login</a>
          <a className="btn btn-green" href={APP_URL}>Get Started</a>
        </div>
      </div>
    </header>
  );
}
