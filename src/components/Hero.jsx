import { motion } from 'motion/react';
import { APP_URL } from '../config.js';

const CHART_BARS = [0.35, 0.55, 0.42, 0.7, 0.6, 0.85, 1];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const check = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Floating badge with a gentle Simpoo-style hover/bob loop.
function FloatBadge({ className, duration = 4.5, children }) {
  return (
    <motion.div
      className={`float-badge ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.7 },
        y: { repeat: Infinity, duration, ease: 'easeInOut', delay: 0.9 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
        >
          <span className="eyebrow">POS · Inventory · Reports</span>
          <h1>
            All-in-one POS that keeps selling — <span className="accent">even offline</span>.
          </h1>
          <p className="lede">
            Posale runs your shop from any phone, tablet or laptop. Checkout with barcode
            scanning, print receipts, track stock, staff and true profit — and when the
            network drops, sales keep saving and sync back automatically.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-green" href={APP_URL}>Start free 30-day trial</a>
            <a className="btn btn-outline" href="#pricing">See pricing</a>
          </div>
          <div className="hero-proof">
            <span>{check} No card required</span>
            <span>{check} Full access for 30 days</span>
            <span>{check} From ₦3,000/month after</span>
          </div>
        </motion.div>

        <div className="hero-visual" aria-hidden="true">
          <motion.div
            className="dash"
            initial={{ opacity: 0, y: 30, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.65, 0.3, 1] }}
          >
            <div className="dash-head">
              <strong>Mama T Supermart</strong>
              <span className="sync">SYNC ON</span>
            </div>
            <div className="dash-stats">
              <div className="dash-stat">
                <span>Today&apos;s sales</span>
                <strong>₦186,450<em>▲ 12%</em></strong>
              </div>
              <div className="dash-stat">
                <span>Transactions</span>
                <strong>47<em>▲ 8%</em></strong>
              </div>
            </div>
            <div className="dash-chart">
              {CHART_BARS.map((height, index) => (
                <div
                  key={index}
                  className="dash-bar"
                  style={{ height: `${height * 100}%`, animationDelay: `${0.5 + index * 0.09}s` }}
                />
              ))}
            </div>
            <div className="dash-days">
              {DAYS.map((day) => <span key={day}>{day}</span>)}
            </div>
          </motion.div>

          <FloatBadge className="fb-sale" duration={4.2}>
            <span className="dot" style={{ background: '#10b981' }} />
            <div>
              Sale completed — ₦21,750
              <small>Receipt printed · stock updated</small>
            </div>
          </FloatBadge>
          <FloatBadge className="fb-offline" duration={5.1}>
            <span className="dot" style={{ background: '#f59e0b' }} />
            <div>
              3 offline sales
              <small>synced automatically ✓</small>
            </div>
          </FloatBadge>
          <FloatBadge className="fb-stock" duration={4.7}>
            <span className="dot" style={{ background: '#ef4444' }} />
            <div>
              Low stock: Peak Milk 400g
              <small>4 left — restock now</small>
            </div>
          </FloatBadge>
        </div>
      </div>
    </section>
  );
}
