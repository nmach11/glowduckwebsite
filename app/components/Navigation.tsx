import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/" className="logo">GlowDuck</Link>
      
      <ul className="nav-links">
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms of Service</Link></li>
        <li><Link href="/support">Support</Link></li>
      </ul>
      
      <div className="nav-download-buttons">
        <a href="https://apps.apple.com" className="download-btn" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
            alt="Download on the App Store" 
            className="store-button-img nav-size"
            width={120}
            height={40}
          />
        </a>
        <a href="https://play.google.com" className="download-btn" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" 
            alt="Get it on Google Play" 
            className="store-button-img nav-size"
            width={135}
            height={40}
          />
        </a>
      </div>
    </nav>
  )
}