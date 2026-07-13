import Reveal from './Reveal.jsx';

const FAQS = [
  {
    q: 'Does it really work without internet?',
    a: 'Yes. Sales made offline are saved on your device with a printed receipt and updated stock. When data comes back, they sync to the cloud automatically — each sale carries a unique key, so a flaky connection can never duplicate a sale or receipt.',
  },
  {
    q: 'What do I need to run it?',
    a: 'Any phone, tablet or computer with a browser. Posale installs to your home screen like an app. For receipts, it prints to 58mm thermal printers or any regular printer on A4.',
  },
  {
    q: 'How do my cashiers log in?',
    a: 'Each staff member gets their own name and 4-digit passcode. You control exactly what they can do — a cashier can sell all day without ever seeing your profit numbers.',
  },
  {
    q: 'What can each staff role do?',
    a: 'There are three roles. The Admin (owner) has full access and control, and is the only one who can grant extra privileges or edit business information. A Manager runs inventory and sales — creating and deleting items, removing duplicates, seeing cost prices, viewing full reports, printing expenses, voiding receipts and paying for subscriptions — but cannot edit business information. A Cashier (sales rep) makes sales and views and prints their own receipts; they cannot void receipts unless the owner grants that privilege. Every paid plan includes all three roles — your plan size sets how many of each you can add.',
  },
  {
    q: 'Can I run more than one store?',
    a: 'Yes. The admin can create multiple stores under one business, each with its own stock and sales. Basic includes 1 store, Standard 2 stores, and Premium up to 10.',
  },
  {
    q: 'How do I pay for a plan?',
    a: 'Through Paystack — card, bank transfer or USSD, all in naira. Nothing renews automatically: we remind you 7 days before your plan ends and you renew with one tap. Time you have paid for is never lost.',
  },
  {
    q: 'What happens if I stop paying?',
    a: 'Your shop keeps working and your data stays safe. You drop to the free tier, where the admin account is the only login — core selling continues under admin; staff accounts, reports and expenses unlock again whenever you resubscribe.',
  },
];

export default function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Questions, answered</span>
          <h2>Before you ask —</h2>
        </Reveal>
        <div className="faq">
          {FAQS.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05}>
              <details>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
