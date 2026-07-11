import { Fragment } from 'react';
import Reveal from './Reveal.jsx';

const STEPS = [
  {
    title: 'Create your business',
    body: 'Sign up with your name, email and a 4-digit passcode. Add your business details — they appear on every printed receipt.',
  },
  {
    title: 'Load your items & staff',
    body: 'Add products with prices, barcodes and stock counts (many at once). Create cashier accounts and choose what each one can do.',
  },
  {
    title: 'Start selling',
    body: 'Open the POS, ring up your first sale and print the receipt. Your dashboard starts tracking revenue and profit immediately.',
  },
];

const Arrow = () => (
  <span className="step-arrow" aria-hidden="true">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </span>
);

export default function HowItWorks() {
  return (
    <section className="block how" id="how">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Setup in one evening</span>
          <h2>From signup to first receipt in three steps.</h2>
        </Reveal>
        <div className="steps">
          {STEPS.map((step, index) => (
            <Fragment key={step.title}>
              <Reveal delay={index * 0.12}>
                <div className="step">
                  <span className="num">STEP 0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
              {index < STEPS.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
