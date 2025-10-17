import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - GlowDuck',
  description: 'Contact GlowDuck support for help with your account or the app.',
}

export default function Support() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
        <p className="text-xl text-gray-600 mb-4">Need help? Contact our support team:</p>
        <a 
          href="mailto:support@glowduck.app" 
          className="text-2xl text-[#FF8284] hover:text-[#ff6b6d] font-semibold"
        >
          support@glowduck.app
        </a>
      </div>
    </div>
  )
}