import LegalPage from './LegalPage.jsx';

export default function Privacy() {
  return (
    <LegalPage eyebrow="Your data, respected" title="Privacy Policy" updated="16 July 2026">
      <p>
        Posale NG (&ldquo;Posale&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by Evolve Media Global LTD, a company
        registered in Nigeria. This policy explains what information we collect when you use the Posale NG
        website and app, how we use it, and the choices you have. We process personal data in line with
        the Nigeria Data Protection Act 2023 (NDPA).
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <b>Account and business information</b> — your name, business name, phone number, email
          address and business details you provide when you register.
        </li>
        <li>
          <b>Staff information</b> — names and encrypted 4-digit passcodes for the staff accounts the
          business owner creates. Staff data is entered by the business owner, who is responsible for
          informing their staff.
        </li>
        <li>
          <b>Business records</b> — products, stock levels, cost and selling prices, sales, receipts,
          expenses and store records you create while using Posale NG. This data belongs to your business;
          we store and process it only to provide the service.
        </li>
        <li>
          <b>Payment information</b> — subscription payments are processed by Paystack. We receive
          confirmation of payment and plan details, but we never see or store your card number, bank
          login or USSD details.
        </li>
        <li>
          <b>Device and usage data</b> — basic technical information such as device type, browser and
          app activity, used to keep the service secure and reliable. Sales made offline are stored on
          your device until they sync to the cloud.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To provide the service: processing sales, syncing offline transactions, printing receipts, tracking stock and generating reports.</li>
        <li>To manage your subscription, including reminders before your plan expires.</li>
        <li>To secure accounts, prevent fraud and keep audit trails (for example, voided receipts keep a full record).</li>
        <li>To support you when you contact us, including via WhatsApp.</li>
        <li>To improve Posale NG, using aggregated information that does not identify you or your customers.</li>
      </ul>
      <p>We do not sell your data, and we do not share your business records with other businesses.</p>

      <h2>3. Where your data lives</h2>
      <p>
        Your records are stored in secure cloud infrastructure with per-business isolation — no other
        business can see your data. Passcodes are encrypted, and access within your business is limited
        by the roles the owner assigns (admin, manager, cashier).
      </p>

      <h2>4. How long we keep it</h2>
      <p>
        Your business records are kept for as long as your account exists — including on the free tier
        after a plan ends. If you ask us to delete your account, we delete your business data within a
        reasonable period, except where we must keep records to meet legal or accounting obligations.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Under the NDPA you may ask us to access, correct, export or delete the personal data we hold
        about you, or object to how it is processed. Business owners can edit or remove staff accounts
        and business records directly in the app at any time.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        We use a small number of processors to run Posale NG: cloud hosting for data storage and sync, and
        Paystack for payments. Each processes data only on our instructions. The website loads fonts
        from Google Fonts.
      </p>

      <h2>7. Children</h2>
      <p>Posale is a business tool and is not directed at children under 18.</p>

      <h2>8. Changes to this policy</h2>
      <p>
        If we make material changes we will update this page and notify account owners in the app. The
        date at the top shows when this policy was last revised.
      </p>

      <h2>9. Contact us</h2>
      <p>
        For any privacy question or request, chat with us on WhatsApp at +234 803 989 8809 or email{' '}
        <a href="mailto:support@posale.ng">support@posale.ng</a>.
      </p>
    </LegalPage>
  );
}
