"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-pink font-jua">
              GlowDuck
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-white hover:text-pink transition-colors font-jua">
              Features
            </a>
            <a href="#progress" className="text-white hover:text-pink transition-colors font-jua">
              Progress
            </a>
            <Link href="/support" className="text-white hover:text-pink transition-colors font-jua">
              Support
            </Link>
            <a
              href="#download"
              className="bg-pink text-white px-4 py-2 rounded-button hover:bg-pink/90 transition-all font-jua text-sm"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 space-y-3 bg-black/80 rounded-lg mt-2">
            <a
              href="#features"
              className="block text-white hover:text-pink transition-colors px-4 font-jua"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#progress"
              className="block text-white hover:text-pink transition-colors px-4 font-jua"
              onClick={() => setMobileMenuOpen(false)}
            >
              Progress
            </a>
            <Link
              href="/support"
              className="block text-white hover:text-pink transition-colors px-4 font-jua"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <a
              href="#download"
              className="block bg-pink text-white px-4 py-2 rounded-button text-center hover:bg-pink/90 transition-all mx-4 font-jua"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

