import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md py-16 px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-gray-800 hover:text-[#FF8284]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-800 hover:text-[#FF8284]">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="text-gray-800 hover:text-[#FF8284]">Help Center</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p>&copy; 2025 GlowDuck. All rights reserved.</p>
      </div>
    </footer>
  )
}