export default function LegalPage({ eyebrow, title, updated, children }) {
  return (
    <section className="block legal">
      <div className="wrap legal-wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        {children}
        <p className="legal-back">
          <a href="#/" onClick={() => window.scrollTo(0, 0)}>← Back to home</a>
        </p>
      </div>
    </section>
  );
}
