import LegalPage from './LegalPage.jsx';

// Google Play requires a publicly reachable URL that explains how to delete an
// account and what happens to the data, reachable without signing in. It is
// linked from the Play listing's Data safety form.
export default function DeleteAccount() {
  return (
    <LegalPage
      eyebrow="Leaving is as easy as joining"
      title="Delete your Posale account"
      updated="15 September 2026"
    >
      <p>
        You can close your Posale account yourself, at any time, from inside the app or the web
        app. You do not need to email anyone or wait for approval.
      </p>

      <h2>1. How to delete your account</h2>
      <p>Only the business owner — the admin who signed the business up — can do this.</p>
      <ul>
        <li>
          <strong>Android app:</strong> open <strong>Settings</strong>, scroll to the bottom, and
          tap <strong>Delete my account</strong>. Enter your 4-digit passcode and type DELETE to
          confirm.
        </li>
        <li>
          <strong>Web app:</strong> sign in at <a href="https://app.posale.ng">app.posale.ng</a>,
          go to <strong>Settings</strong>, and use <strong>Delete my account</strong> at the
          bottom of the page.
        </li>
      </ul>
      <p>
        If you are a staff member rather than the owner, you do not have a separate account to
        delete — ask your admin to remove your staff account from Employee Management.
      </p>

      <h2>2. Deleting only some of your data</h2>
      <p>
        You do not have to close your account to remove data. Signed in as the business owner,
        you can do all of this yourself at any time:
      </p>
      <ul>
        <li>
          <strong>Remove a staff member</strong> — Employee Management &rarr; delete. Their
          profile, name, email and passcode are removed, and they can no longer sign in.
          Receipts they rang up keep their name so your audit trail stays intact; tell us if you
          need that cleared too.
        </li>
        <li>
          <strong>Delete products</strong> — Inventory &rarr; select the item &rarr; delete.
        </li>
        <li>
          <strong>Delete a store</strong> — Settings &rarr; Stores &rarr; delete. A store that
          already has sales or expense history cannot be deleted, because removing it would
          break your books.
        </li>
      </ul>
      <p>
        For anything we have not given you a button for — a particular receipt or expense
        record, or a staff member asking for their own details to be erased — email{' '}
        <a href="mailto:support@posale.ng">support@posale.ng</a> from the address on the account
        and tell us what to remove. We confirm with you before deleting anything, and we action
        requests within 30 days.
      </p>

      <h2>3. What happens immediately</h2>
      <ul>
        <li>You and every staff member in your business are signed out on every device.</li>
        <li>Nobody can sign in again, on the app or the web.</li>
        <li>Your subscription stops renewing.</li>
      </ul>

      <h2>4. The 30-day grace period</h2>
      <p>
        Your business records are kept for <strong>30 days</strong> after the request. A point of
        sale holds your entire trading history, so an accidental tap should not destroy it. During
        those 30 days the owner can undo the deletion: try to sign in as usual, and the app offers
        to restore the account. Everything comes back exactly as it was.
      </p>
      <p>
        After 30 days the data is erased permanently and cannot be recovered by you or by us.
      </p>

      <h2>5. What gets deleted</h2>
      <ul>
        <li>Your admin profile and every staff profile in your business, with their passcodes.</li>
        <li>All stores, products and stock levels.</li>
        <li>All sales, receipts, receipt line items and expenses.</li>
        <li>Your subscription record and payment history held by Posale.</li>
        <li>Sign-in history and any pending verification or reset codes.</li>
      </ul>

      <h2>6. What we may keep, and why</h2>
      <ul>
        <li>
          <strong>Payment records held by Paystack.</strong> Our payment processor keeps its own
          record of transactions to meet Nigerian financial and tax rules. That is held by
          Paystack under their policy, not by Posale.
        </li>
        <li>
          <strong>Encrypted backups.</strong> Our routine database backups are kept on a rolling
          schedule and expire on their own. Deleted data may persist in a backup for a short
          period until that backup expires, and is never restored into the live service.
        </li>
        <li>
          <strong>Anonymous, aggregated counts</strong> that cannot identify you or your business.
        </li>
      </ul>

      <h2>7. Data on your own device</h2>
      <p>
        Posale works offline, so some of your data is cached on your phone. Uninstalling the app,
        or clearing its storage from Android&rsquo;s app settings, removes that copy. If you have
        offline sales that have not synced yet, connect to the internet and let them sync before
        deleting the account — once the account is closed they cannot be uploaded.
      </p>

      <h2>8. Need help?</h2>
      <p>
        If you cannot access your account to delete it — for example you have lost your passcode —
        email <a href="mailto:support@posale.ng">support@posale.ng</a> from the address on the
        account and we will verify you and action the request. See our{' '}
        <a href="/privacy">Privacy Policy</a> for how we handle your data generally.
      </p>
    </LegalPage>
  );
}
