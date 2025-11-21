'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

  const scrollToSection = (sectionNumber: number) => {
    const section = document.getElementById('section' + sectionNumber);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      updateActiveDot(sectionNumber);
    }
  };

  const updateActiveDot = (activeSection: number) => {
    const dots = document.querySelectorAll('.scroll-dot');
    dots.forEach((dot, index) => {
      if (index + 1 === activeSection) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          updateActiveDot(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="section1" className="section section-bg-1">
        <div className="section-download-buttons">
          <a href="https://apps.apple.com" className="download-btn" target="_blank" rel="noopener noreferrer">
            <img src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" className="store-button-img section-size" />
          </a>
          {!isIOS && (
            <a href="https://play.google.com" className="download-btn" target="_blank" rel="noopener noreferrer">
              <img src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Get it on Google Play" className="store-button-img section-size" />
            </a>
          )}
        </div>
      </div>

      <div id="section2" className="section section-bg-2"></div>
      <div id="section3" className="section section-bg-3"></div>
      <div id="section4" className="section section-bg-4"></div>
      <div id="section5" className="section section-bg-5"></div>
      <div id="section6" className="section section-bg-6"></div>
      <div id="section7" className="section section-bg-7"></div>
      <div id="section8" className="section section-bg-8">
        <div className="section-download-buttons">
          <a href="https://apps.apple.com" className="download-btn" target="_blank" rel="noopener noreferrer">
            <img src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" className="store-button-img section-size" />
          </a>
          {!isIOS && (
            <a href="https://play.google.com" className="download-btn" target="_blank" rel="noopener noreferrer">
              <img src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Get it on Google Play" className="store-button-img section-size" />
            </a>
          )}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot active" onClick={() => scrollToSection(1)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(2)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(3)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(4)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(5)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(6)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(7)}></div>
        <div className="scroll-dot" onClick={() => scrollToSection(8)}></div>
      </div>
    </>
  );
}