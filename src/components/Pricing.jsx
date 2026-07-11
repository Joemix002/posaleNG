import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { APP_URL, PLANS, naira } from '../config.js';

export default function Pricing() {
  const [cycle, setCycle] = useState('monthly');

  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Simple naira pricing</span>
          <h2>Every plan sells without limits.</h2>
          <p>Unlimited items and unlimited sales on all plans — pay only for team size and reporting depth.</p>
        </Reveal>

        <div className="pricing-toggle-row">
          <div className="cycle" role="tablist" aria-label="Billing cycle">
            <button type="button" className={cycle === 'monthly' ? 'on' : ''} onClick={() => setCycle('monthly')}>
              Monthly
            </button>
            <button type="button" className={cycle === 'annual' ? 'on' : ''} onClick={() => setCycle('annual')}>
              Annual · save up to 28%
            </button>
          </div>
        </div>

        <Reveal>
          <div className="trial-banner">
            <b>Free 30-day trial</b>
            <span>Every new business starts with a month of full access — unlimited staff, all reports, no card needed.</span>
            <a className="btn btn-green" href={APP_URL}>Start your trial</a>
          </div>
        </Reveal>

        <div className="plans">
          {PLANS.map((plan, index) => {
            const amount = cycle === 'annual' ? plan.annual : plan.monthly;
            const savings = Math.round((1 - plan.annual / (plan.monthly * 12)) * 100);
            return (
              <Reveal key={plan.name} delay={index * 0.07}>
                <div className={`plan ${plan.recommended ? 'reco' : ''}`}>
                  {plan.recommended && <span className="tag">Recommended</span>}
                  <h3>{plan.name}</h3>
                  <p className="price">
                    {naira(amount)}
                    <small> /{cycle === 'annual' ? 'year' : 'month'}</small>
                  </p>
                  <p className="save">{cycle === 'annual' && savings > 0 ? `Save ${savings}% vs monthly` : ''}</p>
                  <ul>
                    <li>Unlimited items &amp; sales</li>
                    <li>{plan.staff}</li>
                    <li>Expense management</li>
                    <li className={plan.reportsLimited ? 'dim' : ''}>{plan.reports}</li>
                  </ul>
                  <a className={`btn ${plan.recommended ? 'btn-green' : 'btn-outline'}`} href={APP_URL}>
                    Choose {plan.name}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="pricing-fine">
          Pay by card, bank transfer or USSD via Paystack. No automatic charges — you renew when you
          choose, and upgrading within 7 days of paying credits what you already paid. When a plan
          ends, your shop keeps all its data and continues free with core selling features.
        </p>
      </div>
    </section>
  );
}
