import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Reveal from './Reveal.jsx';

// PLACEHOLDER QUOTES — replace with real customer feedback before launch.
const TESTIMONIALS = [
  {
    quote: 'NEPA took the light, network went with it — and my girls kept selling. Everything synced back before I even noticed. That alone sold me.',
    name: 'Adaeze O.',
    role: 'Supermarket owner · Onitsha',
  },
  {
    quote: 'I finally know my real profit, not just my sales. The reports showed me two products I was actually selling at a loss.',
    name: 'Ibrahim S.',
    role: 'Provisions & drinks · Kaduna',
  },
  {
    quote: 'Each cashier has their own passcode and I decide what they can touch. I check the dashboard from home every night.',
    name: 'Funmi A.',
    role: 'Boutique owner · Lagos',
  },
];

const ROTATE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="block testis">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Shop owners talk</span>
          <h2>Businesses run better on Posale.</h2>
        </Reveal>

        <div className="testi-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testi"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
              <div className="who">
                <span className="avatar">{current.name.charAt(0)}</span>
                <div>
                  <strong>{current.name}</strong>
                  <span>{current.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={i === index ? 'on' : ''}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
