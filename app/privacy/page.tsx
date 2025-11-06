import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GlowDuck',
  description: 'GlowDuck privacy policy - Learn how we protect your data and privacy.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-3xl mx-auto">
        <h1>Privacy Policy</h1>
        <p>Last updated: November 6th, 2024</p>

        <h2>Introduction</h2>
        <p>GlowDuck (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides a mobile app and website (the &quot;Service&quot;) that helps you track skin progress, build habits, and receive friendly AI insights. This Privacy Policy explains what we collect, how we use it, and your choices.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Account info: Email and display name.</li>
          <li>Habit and progress data: Habits you track and completion records.</li>
          <li>Weekly progress photos: If you take a weekly face photo, it is saved on your device by default (see &quot;Photos and AI Analysis&quot;).</li>
          <li>Analytics: Anonymous usage and performance metrics (no IDFA unless you explicitly adopt ATT).</li>
        </ul>

        <h2>Photos and AI Analysis</h2>
        <ul>
          <li>On-device storage: Your weekly progress photos are stored locally on your device by default.</li>
          <li>AI analysis: If you initiate analysis, the app may send the current week&apos;s photo to our AI processing service to generate scores and friendly feedback. When implemented server-side, we will use short‑lived, access‑controlled handling and delete uploaded copies promptly after analysis.</li>
          <li>We do not publish or share your photos with other users.</li>
        </ul>

        <h2>How We Use Data</h2>
        <ul>
          <li>Provide app functionality: habit tracking, weekly analysis, progress views.</li>
          <li>Improve the Service: performance, reliability, and feature development.</li>
          <li>Communications: reminders, critical service notices, and account-related messages.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following trusted third-party services to operate GlowDuck:</p>
        <ol>
          <li>
            <strong>Firebase (Google LLC)</strong>
            <ul>
              <li>Services: Authentication, Cloud Firestore, Cloud Storage, Analytics, Crashlytics, Performance Monitoring, Cloud Functions</li>
              <li>Purpose: Core app infrastructure, user authentication, data storage, analytics, crash reporting</li>
              <li>Privacy Policy: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
            </ul>
          </li>
          <li>
            <strong>RevenueCat</strong>
            <ul>
              <li>Services: Subscription management and purchase tracking</li>
              <li>Purpose: Process and manage your subscription</li>
              <li>Privacy Policy: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
            </ul>
          </li>
          <li>
            <strong>Apple Sign In</strong>
            <ul>
              <li>Service: Apple authentication</li>
              <li>Purpose: Secure sign-in with your Apple ID</li>
              <li>Privacy Policy: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
            </ul>
          </li>
          <li>
            <strong>Google Sign In</strong>
            <ul>
              <li>Service: Google authentication</li>
              <li>Purpose: Secure sign-in with your Google account</li>
              <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            </ul>
          </li>
          <li>
            <strong>OpenAI</strong>
            <ul>
              <li>Service: AI image analysis</li>
              <li>Purpose: Generate skin progress insights from your photos</li>
              <li>Privacy Policy: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">https://openai.com/privacy</a></li>
            </ul>
          </li>
        </ol>
        <p>These services may process your data according to their own privacy policies. We ensure all service providers are bound by confidentiality agreements and security obligations.</p>

        <h2>Data Security</h2>
        <p><strong>How We Protect Your Data:</strong></p>
        <ul>
          <li>Encryption: All data transmitted to our servers uses TLS/SSL encryption</li>
          <li>Storage Encryption: Data at rest is encrypted using industry-standard AES-256 encryption</li>
          <li>Access Controls: Strict access controls limit who can view your data</li>
          <li>Regular Audits: We conduct regular security reviews and updates</li>
          <li>Secure Infrastructure: We use Firebase, which is SOC 2 and SOC 3 certified</li>
        </ul>
        <p><strong>What We Cannot Guarantee:</strong></p>
        <p>No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
        <p><strong>Your Responsibility:</strong></p>
        <ul>
          <li>Keep your login credentials secure</li>
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication if available</li>
          <li>Report any unauthorized access immediately</li>
        </ul>

        <h2>Your Rights (GDPR & CCPA)</h2>
        <p>If you are in the European Union or California, you have the following rights:</p>
        <ul>
          <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data. Note: Some data may be retained for legal compliance.</li>
          <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format to transfer to another service.</li>
          <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
          <li><strong>Right to Object:</strong> Object to certain types of processing, including direct marketing.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          <li><strong>Right to Opt-Out of Sale:</strong> We do not sell your personal information to third parties.</li>
        </ul>
        <p><strong>How to Exercise Your Rights:</strong></p>
        <ul>
          <li>Email: <a href="mailto:support@glowduck.app">support@glowduck.app</a> with subject line &quot;Privacy Rights Request&quot;</li>
          <li>Specify which right(s) you wish to exercise</li>
          <li>We will respond within 30 days (GDPR) or 45 days (CCPA)</li>
          <li>We may need to verify your identity before fulfilling requests</li>
        </ul>

        <h2>Data Retention</h2>
        <p><strong>How Long We Keep Your Data:</strong></p>
        <ul>
          <li><strong>Active Accounts:</strong> We retain your data for as long as your account is active.</li>
          <li><strong>After Account Deletion:</strong> Your data is permanently deleted within 30 days of account deletion.</li>
          <li><strong>Backups:</strong> Data in disaster recovery backups may persist for up to 90 days.</li>
          <li><strong>Legal Obligations:</strong> Some data may be retained longer if required by law (e.g., tax records, fraud prevention).</li>
        </ul>
        <p><strong>What Happens to Your Photos:</strong></p>
        <ul>
          <li>Photos stored on your device remain until you delete the app or clear app data</li>
          <li>If you initiated AI analysis, server-side copies are deleted immediately after processing</li>
          <li>No long-term server storage of photos unless explicitly needed for a feature you opted into</li>
        </ul>

        <h2>International Data Transfers</h2>
        <p><strong>Where Your Data is Stored:</strong></p>
        <p>Your data may be stored and processed in the United States and other countries where our service providers operate.</p>
        <p><strong>For European Users:</strong></p>
        <ul>
          <li>We comply with GDPR requirements for international data transfers</li>
          <li>We use Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>We ensure adequate safeguards are in place to protect your data</li>
        </ul>
        <p><strong>For California Users:</strong></p>
        <p>Your data may be transferred outside California but remains protected under CCPA.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p><strong>Analytics and Tracking:</strong></p>
        <p>We use Firebase Analytics to understand how users interact with the app. This includes:</p>
        <ul>
          <li>Session data: Time spent in app, screens viewed, features used</li>
          <li>Device information: Device model, OS version, screen size</li>
          <li>Performance data: App crashes, slow operations, errors</li>
          <li>User properties: Subscription status, account age (no personal identifiers)</li>
        </ul>
        <p><strong>You can opt-out of analytics:</strong></p>
        <ul>
          <li>iOS: Settings &gt; Privacy &gt; Analytics & Improvements &gt; Turn off &quot;Share iPhone Analytics&quot;</li>
          <li>In-App: Future update will include opt-out toggle</li>
        </ul>
        <p><strong>We do not use:</strong></p>
        <ul>
          <li>Advertising IDs (IDFA/AAID)</li>
          <li>Cross-app tracking</li>
          <li>Behavioral advertising cookies</li>
        </ul>

        <h2>Age Verification and Children&apos;s Privacy</h2>
        <p><strong>Age Requirement:</strong></p>
        <p>You must be at least 13 years old to use GlowDuck. By creating an account, you confirm you meet this age requirement.</p>
        <p><strong>We Do Not Knowingly Collect Data from Children Under 13:</strong></p>
        <p>If we discover that a child under 13 has provided personal information, we will:</p>
        <ol>
          <li>Delete the account immediately</li>
          <li>Remove all associated data</li>
          <li>Notify the parent/guardian (if contact information is available)</li>
        </ol>
        <p><strong>For Parents:</strong></p>
        <p>If you believe your child under 13 has created an account, please contact us immediately at <a href="mailto:support@glowduck.app">support@glowduck.app</a> so we can delete the account and data.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p><strong>How We Notify You:</strong></p>
        <p>When we update this Privacy Policy:</p>
        <ul>
          <li>We update the &quot;Last Updated&quot; date at the top</li>
          <li>For material changes, we&apos;ll notify you via:
            <ul>
              <li>In-app notification</li>
              <li>Email (if we have your email)</li>
              <li>Prominent notice in the app</li>
            </ul>
          </li>
        </ul>
        <p><strong>Your Continued Use:</strong></p>
        <p>Continued use of the app after changes constitutes acceptance of the updated Privacy Policy. If you don&apos;t agree with changes, please stop using the app and delete your account.</p>

        <h2>Contact & Data Protection Officer</h2>
        <p><strong>General Privacy Questions:</strong></p>
        <p>Email: <a href="mailto:support@glowduck.app">support@glowduck.app</a></p>
        <p><strong>EU Data Protection Officer:</strong></p>
        <p>If you&apos;re in the EU and need to contact our Data Protection Officer:</p>
        <p>Email: <a href="mailto:privacy@glowduck.app">privacy@glowduck.app</a></p>
        <p><strong>Response Time:</strong></p>
        <ul>
          <li>General inquiries: 3-5 business days</li>
          <li>Data rights requests: Within 30 days (GDPR) or 45 days (CCPA)</li>
          <li>Urgent security matters: Within 24 hours</li>
        </ul>
      </article>
    </div>
  )
}