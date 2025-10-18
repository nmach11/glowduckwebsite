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
        <p>Last updated: October 17th 2025</p>

        <h2>Introduction</h2>
        <p>GlowDuck (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides a mobile app and website (the &quot;Service&quot;) that helps you track skin progress, build habits, and receive friendly AI insights. This Privacy Policy explains what we collect, how we use it, and your choices.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Account info: Email and display name.</li>
          <li>Habit and progress data: Habits you track and completion records.</li>
          <li>Weekly progress photos: If you take a weekly face photo, it is saved on your device by default (see "Photos and AI Analysis").</li>
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

        <h2>Sharing</h2>
        <ul>
          <li>Service providers: We use trusted vendors strictly to operate the Service (e.g., analytics, subscriptions). They may process limited data on our behalf under confidentiality and security obligations.</li>
          <li>Legal: We may disclose information to comply with law, protect rights, prevent fraud/abuse, or ensure user safety.</li>
        </ul>

        <h2>Data Security</h2>
        <ul>
          <li>Encryption in transit and at rest (where data is stored off-device).</li>
          <li>Access controls and least-privilege practices for internal tools.</li>
          <li>Regular security reviews.</li>
        </ul>

        <h2>Your Choices</h2>
        <ul>
          <li>Photos: Photos are stored on-device by default. You control whether to take a weekly photo. Per‑photo deletion is not currently available in-app; you can delete all app data or request account deletion (below). We plan to add finer controls in future updates.</li>
          <li>Notifications: You can enable/disable in device settings.</li>
          <li>Account deletion: You can request deletion of your account and associated data we store off-device. Device-stored photos remain on your device until you remove them (e.g., by deleting the app&apos;s data or using future in-app deletion tools).</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>The Service is not intended for children under 13, and we do not knowingly collect data from children under 13.</p>

        <h2>Changes</h2>
        <p>We may update this policy as the Service evolves. We&apos;ll post updates here and update the &quot;Last updated&quot; date.</p>

        <h2>Contact</h2>
        <p>Questions about privacy? Contact: <a href="mailto:support@glowduck.app">support@glowduck.app</a></p>
      </article>
    </div>
  )
}