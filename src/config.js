// ==== EDIT THIS: your deployed app URL ====
// Every CTA (Get Started, Choose plan, Login) points here.
export const APP_URL = 'https://app.posale.ng';

// Optional: WhatsApp sales contact shown in the header/footer CTAs.
// Format: full international number, digits only. Leave '' to hide.
export const WHATSAPP_NUMBER = '+2348039898809';

export const PLANS = [
  {
    name: 'Mini',
    monthly: 3000,
    annual: 26000,
    staff: '1 staff account',
    roles: '1 admin',
    stores: '1 store',
    reports: 'Reports: last 30 days',
    reportsLimited: true,
  },
  {
    name: 'Basic',
    monthly: 6000,
    annual: 52000,
    staff: '5 staff accounts',
    roles: '1 admin · 1 manager · 3 cashiers',
    stores: '1 store',
    reports: 'Unlimited report history',
  },
  {
    name: 'Standard',
    monthly: 13000,
    annual: 133000,
    staff: '8 staff accounts',
    roles: '1 admin · 2 managers · 5 cashiers',
    stores: '2 stores',
    reports: 'Unlimited report history',
    recommended: true,
  },
  {
    name: 'Premium',
    monthly: 30000,
    annual: 262000,
    staff: 'Unlimited staff accounts',
    roles: '2 admins · unlimited managers & cashiers',
    stores: '10 stores',
    reports: 'Unlimited report history',
  },
];

export const naira = (value) => `₦${Number(value).toLocaleString('en-NG')}`;
