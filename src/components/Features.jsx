import Reveal from './Reveal.jsx';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

const FEATURES = [
  {
    title: 'Fast POS checkout',
    body: 'Scan barcodes or tap products, take cash, card, transfer or split payments, and print the receipt in seconds.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
  },
  {
    title: 'Sells through outages',
    body: 'No network? Sales save on the device, receipts still print, stock still updates — everything syncs automatically later. No duplicates, ever.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M1 1l22 22" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.58 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>,
  },
  {
    title: 'Inventory that counts itself',
    body: 'Every sale deducts stock; every supplier purchase restocks it and updates your cost price. Low-stock alerts before shelves go empty.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
  },
  {
    title: 'Profit, not just sales',
    body: 'Daily revenue, weekly performance, best sellers, cost of goods, expenses and true net profit — by item, category, cashier and date.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
  {
    title: 'Staff with limits you set',
    body: 'Cashiers log in with a 4-digit passcode. You decide who can see reports, edit stock, void receipts or manage expenses.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    title: 'Your data, locked down',
    body: 'Bank-grade authentication, encrypted passcodes and per-business isolation in the cloud. Voided receipts keep a full audit trail.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
];

export default function Features() {
  return (
    <section className="block" id="features">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Everything your counter needs</span>
          <h2>One app for checkout, stock and the money story.</h2>
          <p>Inventory, sales, staff, growth — simplified for how Nigerian shops actually run.</p>
        </Reveal>
        <div className="feature-grid">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <div className="feature">
                <span className="glyph">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
