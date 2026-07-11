// ==== EDIT THIS: your deployed app URL ====
// Every CTA (Get Started, Choose plan, Login) points here.
export const APP_URL = 'https://app.posale.ng';

// Optional: WhatsApp sales contact shown in the header/footer CTAs.
// Format: full international number, digits only. Leave '' to hide.
export const WHATSAPP_NUMBER = '08039898809';

export const PLANS = [
  {
    name: 'Mini',
    monthly: 3000,
    annual: 26000,
    staff: '1 staff account',
    reports: 'Reports: last 30 days',
    reportsLimited: true,
  },
  {
    name: 'Basic',
    monthly: 6000,
    annual: 52000,
    staff: '5 staff accounts',
    reports: 'Unlimited report history',
  },
  {
    name: 'Standard',
    monthly: 13000,
    annual: 133000,
    staff: '10 staff accounts',
    reports: 'Unlimited report history',
    recommended: true,
  },
  {
    name: 'Premium',
    monthly: 30000,
    annual: 262000,
    staff: '20 staff accounts',
    reports: 'Unlimited report history',
  },
];

export const naira = (value) => `₦${Number(value).toLocaleString('en-NG')}`;
