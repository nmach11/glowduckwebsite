import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md py-16 px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-800 hover:text-[#FF8284]">About Us</Link></li>
            <li><Link href="/careers" className="text-gray-800 hover:text-[#FF8284]">Careers</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-[#FF8284]">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-gray-800 hover:text-[#FF8284]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-800 hover:text-[#FF8284]">Terms of Service</Link></li>
            <li><Link href="/cookies" className="text-gray-800 hover:text-[#FF8284]">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="text-gray-800 hover:text-[#FF8284]">Help Center</Link></li>
            <li><Link href="/faq" className="text-gray-800 hover:text-[#FF8284]">FAQ</Link></li>
            <li><Link href="/community" className="text-gray-800 hover:text-[#FF8284]">Community</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-[#FF8284] text-lg font-bold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="https://instagram.com/glowduck" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#FF8284]">Instagram</a></li>
            <li><a href="https://twitter.com/glowduck" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#FF8284]">Twitter</a></li>
            <li><a href="https://tiktok.com/@glowduck" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#FF8284]">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p>&copy; 2025 GlowDuck. All rights reserved.</p>
      </div>
    </footer>
  )
}
