import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GlowDuck',
  description: 'GlowDuck terms of service - Read our terms and conditions.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-3xl mx-auto">
        <h1>Terms of Service</h1>
        <p>Last updated: October 17th 2025</p>

        <h2>1. Agreement</h2>
        <p>By using GlowDuck (the "App"), you agree to these Terms. If you do not agree, do not use the App.</p>

        <h2>2. Service Description</h2>
        <p>GlowDuck provides habit tracking, weekly skin progress photos, and AI-generated insights about the user's skin presented in accessible, friendly language (not professional or medical advice).</p>

        <h2>3. Accounts</h2>
        <ul>
          <li>Provide accurate information and keep credentials secure.</li>
          <li>You must be 13+ to use the App.</li>
          <li>You are responsible for activity under your account.</li>
        </ul>

        <h2>4. Subscriptions and Billing</h2>
        <ul>
          <li>Monthly plan with intro pricing: First month $0.99, then $4.99/month (prices shown in USD and may vary by region/tax).</li>
          <li>Auto‑renewal: Subscriptions renew automatically until cancelled. Manage/cancel anytime in your device's subscription settings.</li>
          <li>Cancellation: No partial refunds; you retain access until the current period ends.</li>
          <li>Pricing changes: Future price changes will be communicated and applied per platform policies.</li>
        </ul>

        <h2>5. User Content (Photos)</h2>
        <ul>
          <li>You retain rights to your photos.</li>
          <li>You grant us a limited license to process photos solely to provide the Service (e.g., AI analysis and progress features).</li>
          <li>Do not upload unlawful or inappropriate content, or content that you do not have the right to share.</li>
          <li>Photos are stored on your device by default; if you choose to initiate AI analysis, a temporary copy may be processed in our secure infrastructure and then deleted after analysis.</li>
        </ul>

        <h2>6. Acceptable Use</h2>
        <p>No reverse engineering, scraping, service disruption, or unauthorized access.</p>

        <h2>7. AI Insights Disclaimer</h2>
        <p>AI outputs are informational only and not medical advice. Results vary. Consult a professional for medical questions.</p>

        <h2>8. Intellectual Property</h2>
        <p>We own the App, brand, and related IP. You receive a personal, non-transferable license to use the App as intended.</p>

        <h2>9. Warranty Disclaimer</h2>
        <p>The Service is provided "as is" without warranties. We do not guarantee uninterrupted or error‑free operation.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, our liability is limited to the amount you paid for the Service in the 12 months preceding the claim and excludes consequential damages.</p>

        <h2>11. Termination</h2>
        <p>We may suspend or terminate access for violations of these Terms. You may stop using the App at any time.</p>

        <h2>12. Changes to Terms</h2>
        <p>We may update these Terms as the Service evolves. Continued use constitutes acceptance of changes.</p>

        <h2>13. Contact</h2>
        <p>Questions about these Terms? Contact: <a href="mailto:support@glowduck.app">support@glowduck.app</a></p>
      </article>
    </div>
  )
}