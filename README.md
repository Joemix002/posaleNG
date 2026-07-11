# Posale NG — Landing Page (React + Vite)

Standalone marketing site for Posale, deployed **separately** from the app.
Layout and motion inspired by simpoobusiness.com, rendered in Posale's own
identity: light clean grounds, dark-teal ink and dark bands, green-accent
buttons.

## Structure

```
landing/
  index.html              Vite entry (fonts + meta)
  src/
    config.js             <-- APP_URL, WhatsApp number, plan data (edit here)
    styles.css            all styles (design tokens at the top)
    App.jsx               page composition
    components/           Header, Hero, Marquee, Features, HowItWorks,
                          Pricing, Testimonials, Faq, Footer, Reveal
```

## Before deploying — edit `src/config.js`

```js
export const APP_URL = 'https://posale.vercel.app';  // your deployed app
export const WHATSAPP_NUMBER = '';                   // e.g. '2348030000000' (optional)
export const PLANS = [...]                           // prices shown on the page
```

Every CTA (Get Started, Start trial, Choose plan, Login) uses `APP_URL`.

**Testimonials are placeholders** — replace the quotes in
`src/components/Testimonials.jsx` with real customer feedback before launch.

## Run & deploy

```bash
cd landing
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # outputs dist/

# Vercel (as its own project, separate from the app):
npx vercel deploy --prod

# Netlify: set base directory = landing, build = npm run build, publish = dist
```

## Design notes

- Hero: animated dashboard mockup (weekly bars grow on load) with floating
  activity badges — sale completed, offline sales synced, low-stock alert.
- Industry marquee, scroll-reveal sections, 3-step how-it-works with arrows,
  monthly/annual pricing toggle, auto-rotating testimonial carousel, FAQ
  accordions, dark-teal final CTA band + footer.
- Buttons use the app's green accent (#10b981); dark bands use the app's
  dark teal (#0f2a24). All animations respect `prefers-reduced-motion`.
