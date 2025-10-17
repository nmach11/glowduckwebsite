import Link from "next/link";
import AppBadges from "./AppBadges";

export default function Footer() {
  return (
    <footer id="download" className="bg-white py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-jua">
            Let&apos;s Glow Up Together!
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-16 text-black/80 font-jua">Download GlowDuck now</p>

          {/* Duck illustration */}
          <div className="flex justify-center mb-16">
            <div className="text-[12rem] md:text-[14rem] lg:text-[16rem] animate-bounce-slow">🦆</div>
          </div>

          {/* App badges */}
          <div className="flex justify-center">
            <AppBadges />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-borderGray my-16" />

        {/* Footer links and info */}
        <div className="grid md:grid-cols-3 gap-16 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink mb-4 font-jua">GlowDuck</h3>
            <p className="text-lg md:text-xl lg:text-2xl text-mutedGray font-jua">
              Glow up with a friend! 🦆✨
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 font-jua">Quick Links</h4>
            <ul className="space-y-4 text-lg md:text-xl lg:text-2xl">
              <li>
                <a href="#features" className="text-mutedGray hover:text-pink transition-colors font-jua">
                  Features
                </a>
              </li>
              <li>
                <Link href="/support" className="text-mutedGray hover:text-pink transition-colors font-jua">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-mutedGray hover:text-pink transition-colors font-jua">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-mutedGray hover:text-pink transition-colors font-jua">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 font-jua">Get in Touch</h4>
            <p className="text-lg md:text-xl lg:text-2xl text-mutedGray mb-4">
              <a
                href="mailto:support@glowduck.app"
                className="hover:text-pink transition-colors font-jua"
              >
                support@glowduck.app
              </a>
            </p>

            {/* Social media icons */}
            <div className="flex gap-8 justify-center md:justify-start mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white border-2 border-borderGray rounded-full flex items-center justify-center hover:bg-pink hover:text-white hover:border-pink transition-all"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white border-2 border-borderGray rounded-full flex items-center justify-center hover:bg-pink hover:text-white hover:border-pink transition-all"
                aria-label="Twitter"
              >
                <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-12 border-t border-borderGray text-center text-lg md:text-xl lg:text-2xl text-mutedGray">
          <p>&copy; {new Date().getFullYear()} GlowDuck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

