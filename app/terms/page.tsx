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
        <p>Last updated: November 6th, 2024</p>

        <h2>1. Agreement</h2>
        <p>By using GlowDuck (the &quot;App&quot;), you agree to these Terms. If you do not agree, do not use the App.</p>

        <h2>2. Service Description</h2>
        <p>GlowDuck provides habit tracking, weekly skin progress photos, and AI-generated insights about the user&apos;s skin presented in accessible, friendly language (not professional or medical advice).</p>

        <h2>3. Accounts</h2>
        <ul>
          <li>Provide accurate information and keep credentials secure.</li>
          <li>You must be 13+ to use the App.</li>
          <li>You are responsible for activity under your account.</li>
        </ul>

        <h2>4. Subscriptions and Billing</h2>
        <ul>
          <li>Monthly plan with intro pricing: First month $0.99, then $4.99/month (prices shown in USD and may vary by region/tax).</li>
          <li>Auto‑renewal: Subscriptions renew automatically until cancelled. Manage/cancel anytime in your device&apos;s subscription settings.</li>
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
        <p>The Service is provided &quot;as is&quot; without warranties. We do not guarantee uninterrupted or error‑free operation.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, our liability is limited to the amount you paid for the Service in the 12 months preceding the claim and excludes consequential damages.</p>

        <h2>11. Termination</h2>
        <p>We may suspend or terminate access for violations of these Terms. You may stop using the App at any time.</p>

        <h2>12. Changes to Terms</h2>
        <p>We may update these Terms as the Service evolves. Continued use constitutes acceptance of changes.</p>

        <h2>13. Contact</h2>
        <p>Questions about these Terms? Contact: <a href="mailto:support@glowduck.app">support@glowduck.app</a></p>

        <h2>14. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless GlowDuck, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising from:</p>
        <ol type="a">
          <li>Your use or misuse of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of another person or entity</li>
          <li>Your violation of any applicable laws or regulations</li>
          <li>Content you submit to the Service</li>
        </ol>
        <p>This defense and indemnification obligation will survive termination of these Terms and your use of the Service.</p>

        <h2>15. Governing Law and Dispute Resolution</h2>
        <p><strong>Governing Law:</strong></p>
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>
        <p><strong>Jurisdiction:</strong></p>
        <p>You agree that any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in Los Angeles County, California, and you irrevocably consent to the jurisdiction of such courts.</p>
        <p><strong>For EU Users:</strong></p>
        <p>Nothing in these Terms affects your statutory rights as a consumer under EU law. EU users may bring legal proceedings in their country of residence.</p>

        <h2>16. Force Majeure</h2>
        <p>We shall not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to:</p>
        <ul>
          <li>Acts of God (earthquakes, floods, fires, natural disasters)</li>
          <li>War, terrorism, riots, or civil unrest</li>
          <li>Government actions, laws, or regulations</li>
          <li>Internet service provider failures or disruptions</li>
          <li>Power outages or equipment failures</li>
          <li>Pandemics or public health emergencies</li>
          <li>Cyberattacks or hacking attempts</li>
        </ul>
        <p>During such events, our obligations under these Terms will be suspended for the duration of the force majeure event.</p>

        <h2>17. Severability</h2>
        <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction:</p>
        <ol type="a">
          <li>That provision shall be deemed severed from these Terms</li>
          <li>The remaining provisions shall continue in full force and effect</li>
          <li>The invalid provision shall be replaced with a valid provision that most closely reflects the original intent</li>
        </ol>
        <p>The failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

        <h2>18. Assignment</h2>
        <p><strong>You Cannot Assign:</strong></p>
        <p>You may not assign, transfer, or delegate these Terms or your rights and obligations under these Terms without our prior written consent. Any attempted assignment without consent is void.</p>
        <p><strong>We Can Assign:</strong></p>
        <p>We may assign these Terms, in whole or in part, to any person or entity at any time without your consent, including in connection with:</p>
        <ul>
          <li>A merger or acquisition</li>
          <li>Sale of assets</li>
          <li>Corporate reorganization</li>
          <li>Any other business transition</li>
        </ul>
        <p>You will be notified of any such assignment that materially affects your rights.</p>

        <h2>19. Entire Agreement</h2>
        <p>These Terms, together with our Privacy Policy and any other legal notices or policies published by us on the Service, constitute the entire agreement between you and GlowDuck concerning the Service.</p>
        <p>These Terms supersede and replace any prior or contemporaneous agreements, communications, and proposals (whether oral, written, or electronic) between you and us regarding the Service.</p>
        <p>No amendment to these Terms shall be effective unless made in writing and signed by an authorized representative of GlowDuck (or published as an update to these Terms with notice to users).</p>

        <h2>20. Electronic Communications</h2>
        <p><strong>Consent to Electronic Communications:</strong></p>
        <p>By using the Service, you consent to receive communications from us electronically, including:</p>
        <ul>
          <li>Emails to the address you provided</li>
          <li>Push notifications (if enabled)</li>
          <li>In-app messages</li>
          <li>Updates to Terms or Privacy Policy</li>
        </ul>
        <p>You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</p>
        <p><strong>Opting Out:</strong></p>
        <p>You can opt out of promotional emails by clicking &quot;unsubscribe&quot; in any marketing email. Note: You cannot opt out of service-related communications (e.g., account security, Terms updates, subscription confirmations).</p>

        <h2>21. Apple App Store Terms (iOS Users)</h2>
        <p><strong>Acknowledgment:</strong></p>
        <p>If you access the Service through the Apple App Store, you acknowledge and agree that:</p>
        <ol type="a">
          <li>These Terms are between you and GlowDuck only, not Apple</li>
          <li>Apple has no obligation to furnish maintenance and support services</li>
          <li>Apple is not responsible for addressing any claims relating to the Service</li>
          <li>Apple is not responsible for investigation, defense, or settlement of third-party claims of intellectual property infringement</li>
          <li>Apple and Apple&apos;s subsidiaries are third-party beneficiaries of these Terms</li>
          <li>Upon your acceptance of these Terms, Apple has the right to enforce these Terms against you as a third-party beneficiary</li>
        </ol>
        <p><strong>Apple-Specific Requirements:</strong></p>
        <ul>
          <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country</li>
          <li>You represent that you are not listed on any U.S. Government list of prohibited or restricted parties</li>
          <li>You must comply with all applicable third-party terms when using the Service (e.g., wireless data service agreement)</li>
        </ul>

        <h2>22. Google Play Store Terms (Android Users)</h2>
        <p>If you access the Service through Google Play, you acknowledge and agree that:</p>
        <ol type="a">
          <li>These Terms are between you and GlowDuck only, not Google</li>
          <li>Your use of the Service must comply with Google Play&apos;s then-current Terms of Service</li>
          <li>Google is only a provider of Google Play where you obtained the Service</li>
          <li>GlowDuck, not Google, is solely responsible for the Service</li>
          <li>Google has no obligation or liability with respect to the Service or these Terms</li>
          <li>You acknowledge and agree that Google is a third-party beneficiary to these Terms as they relate to the Service</li>
        </ol>

        <h2>23. Waiver</h2>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
        <p>Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of GlowDuck.</p>

        <h2>24. Survival</h2>
        <p>The following sections shall survive termination of these Terms and your use of the Service:</p>
        <ul>
          <li>Intellectual Property (Section 8)</li>
          <li>Warranty Disclaimer (Section 9)</li>
          <li>Limitation of Liability (Section 10)</li>
          <li>Indemnification (Section 14)</li>
          <li>Governing Law (Section 15)</li>
          <li>Entire Agreement (Section 19)</li>
          <li>Any other section that by its nature should survive termination</li>
        </ul>

        <h2>25. Export Controls</h2>
        <p>You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce.</p>
        <p>You represent that you are not:</p>
        <ul>
          <li>Located in a country subject to a U.S. Government embargo</li>
          <li>Listed on any U.S. Government list of prohibited or restricted parties</li>
        </ul>

        <h2>26. No Professional Advice</h2>
        <p><strong>Medical Disclaimer (Expanded):</strong></p>
        <p>The Service provides AI-generated insights about skin appearance for informational and motivational purposes only. This is <strong>NOT medical advice</strong>.</p>
        <p><strong>We Are Not:</strong></p>
        <ul>
          <li>Medical professionals</li>
          <li>Licensed dermatologists or skincare specialists</li>
          <li>Providing diagnosis, treatment, or medical recommendations</li>
        </ul>
        <p><strong>You Should:</strong></p>
        <ul>
          <li>Consult a licensed dermatologist for medical concerns</li>
          <li>Seek professional medical advice for skin conditions</li>
          <li>Not rely on the Service for medical decisions</li>
          <li>Contact emergency services if you notice any concerning skin changes</li>
        </ul>
        <p><strong>Limitation:</strong></p>
        <p>We make no warranties about the accuracy, reliability, or completeness of AI-generated insights. Results vary and should not be used as a substitute for professional medical advice.</p>
      </article>
    </div>
  )
}