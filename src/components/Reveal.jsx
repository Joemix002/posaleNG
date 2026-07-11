import { motion } from 'motion/react';

// Scroll-triggered reveal used across sections (Simpoo-style fade-up).
export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.65, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
