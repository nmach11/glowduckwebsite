import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GlowDuck - Glow up with a friend!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
            font-family: 'Jua', sans-serif;
            overflow-y: auto;
            scroll-behavior: smooth;
            background: white;
        }

        .section {
            height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
        }

        .section:not(:first-child):not(:last-child) {
            margin: 32px 0;
        }

        .section-bg-1 {
            background-image: url('/images/sections/HeroBanner.png');
        }

        .section-bg-2 {
            background-image: url('/images/sections/Section1.png');
        }

        .section-bg-3 {
            background-image: url('/images/sections/Section2.png');
        }

        .section-bg-4 {
            background-image: url('/images/sections/Section3.png');
        }

        .section-bg-5 {
            background-image: url('/images/sections/Section4.png');
        }

        .section-bg-6 {
            background-image: url('/images/sections/Section5.png');
        }

        .section-bg-7 {
            background-image: url('/images/sections/Section6.png');
        }

        .section-bg-8 {
            background-image: url('/images/sections/Section7.png');
        }

        .navigation {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem;
        }

        .logo {
            color: #FF8284;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
            flex-shrink: 0;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0 2rem;
        }

        .nav-links a {
            color: #333;
            text-decoration: none;
            transition: color 0.3s;
            font-size: 1rem;
        }

        .nav-links a:hover {
            color: #FF8284;
        }

        .nav-download-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .download-btn {
            transition: transform 0.3s;
            display: block;
        }

        .download-btn:hover {
            transform: scale(1.05);
        }

        .store-button-img {
            display: block;
            object-fit: contain;
        }

        /* Navigation bar buttons */
        .store-button-img.nav-size {
            height: 40px;
        }

          .nav-download-buttons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .nav-download-buttons .download-btn {
            display: flex;
            align-items: center;
          }

          .store-button-img.nav-size[alt*="App Store"] {
            width: 120px;
            height: 40px;
            object-fit: contain;
          }

          .store-button-img.nav-size[alt*="Google Play"] {
            width: 120px;
            height: 40px;
            object-fit: contain;
            transform: scale(1.5);
            transform-origin: center center;
          }

          .nav-download-buttons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

        /* Section buttons (hero and final) */
        .store-button-img.section-size {
            height: 65px;
        }

        .store-button-img.section-size[alt*="App Store"] {
            width: 240px;
        }

          .store-button-img.section-size[alt*="Google Play"] {
             width: 170px;
             height: 65px;
             transform: scale(1.5);
             transform-origin: center center;
          }

.section-download-buttons {
            position: absolute;
            bottom: 35%;
            left: 8%;
            display: flex;
            gap: 0;
            z-index: 10;
          }

          .section-download-buttons {
            gap: 3.5rem;
          }

        .download-btn {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            padding: 4rem 2rem;
            position: relative;
            z-index: 100;
            margin-top: 2rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }

        .footer-section h3 {
            color: #FF8284;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            font-family: 'Jua', sans-serif;
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section a {
            color: #333;
            text-decoration: none;
            transition: color 0.3s;
            font-size: 0.9rem;
        }

        .footer-section a:hover {
            color: #FF8284;
        }

        .footer-bottom {
            text-align: center;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            color: #666;
            font-size: 0.9rem;
        }

        .scroll-indicator {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 90;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .scroll-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background 0.3s;
        }

        .scroll-dot.active {
            background: #FF8284;
        }

        .scroll-dot:hover {
            background: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
            .navigation {
                padding: 0 1rem;
                height: 64px;
            }

            .nav-links {
                display: none;
            }

            .nav-download-buttons {
                gap: 0.5rem;
            }

            .store-button-img.nav-size {
                height: 36px;
            }

            .store-button-img.nav-size[alt*="App Store"] {
                width: 100px;
            }

            .store-button-img.nav-size[alt*="Google Play"] {
                width: 120px;
            }

            .store-button-img.section-size {
                height: 64px;
            }

            .store-button-img.section-size[alt*="App Store"] {
                width: 190px;
            }

            .store-button-img.section-size[alt*="Google Play"] {
                width: 220px;
            }

            .section-download-buttons {
                flex-direction: column;
                gap: 1rem;
                bottom: 30%;
                left: 5%;
            }

            .scroll-indicator {
                right: 1rem;
                bottom: 1rem;
            }

            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 2rem;
            }

            .footer {
                padding: 2rem 1rem;
            }
        }
    </style>
</head>
<body>
    <div id="section1" class="section section-bg-1">
        <div class="section-download-buttons">
            <a href="https://apps.apple.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" class="store-button-img section-size">
            </a>
            <a href="https://play.google.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Get it on Google Play" class="store-button-img section-size">
            </a>
        </div>
    </div>

    <div id="section2" class="section section-bg-2"></div>
    <div id="section3" class="section section-bg-3"></div>
    <div id="section4" class="section section-bg-4"></div>
    <div id="section5" class="section section-bg-5"></div>
    <div id="section6" class="section section-bg-6"></div>
    <div id="section7" class="section section-bg-7"></div>
    <div id="section8" class="section section-bg-8">
        <div class="section-download-buttons">
            <a href="https://apps.apple.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" class="store-button-img section-size">
            </a>
            <a href="https://play.google.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Get it on Google Play" class="store-button-img section-size">
            </a>
        </div>
    </div>

    <nav class="navigation">
        <a href="/" class="logo">GlowDuck</a>
        <ul class="nav-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/support">Support</a></li>
        </ul>
        <div class="nav-download-buttons">
            <a href="https://apps.apple.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" class="store-button-img nav-size">
            </a>
            <a href="https://play.google.com" class="download-btn" target="_blank" rel="noopener noreferrer">
                <img src="/images/buttons/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Get it on Google Play" class="store-button-img nav-size">
            </a>
        </div>
    </nav>

    <div class="scroll-indicator">
        <div class="scroll-dot active" onclick="scrollToSection(1)"></div>
        <div class="scroll-dot" onclick="scrollToSection(2)"></div>
        <div class="scroll-dot" onclick="scrollToSection(3)"></div>
        <div class="scroll-dot" onclick="scrollToSection(4)"></div>
        <div class="scroll-dot" onclick="scrollToSection(5)"></div>
        <div class="scroll-dot" onclick="scrollToSection(6)"></div>
        <div class="scroll-dot" onclick="scrollToSection(7)"></div>
        <div class="scroll-dot" onclick="scrollToSection(8)"></div>
    </div>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Legal</h3>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/cookies">Cookie Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Support</h3>
                <ul>
                    <li><a href="/support">Help Center</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/community">Community</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect</h3>
                <ul>
                    <li><a href="https://instagram.com/glowduck" target="_blank">Instagram</a></li>
                    <li><a href="https://twitter.com/glowduck" target="_blank">Twitter</a></li>
                    <li><a href="https://tiktok.com/@glowduck" target="_blank">TikTok</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 GlowDuck. All rights reserved.</p>
        </div>
    </footer>

    <script>
        function scrollToSection(sectionNumber) {
            const section = document.getElementById('section' + sectionNumber);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                updateActiveDot(sectionNumber);
            }
        }

        function updateActiveDot(activeSection) {
            const dots = document.querySelectorAll('.scroll-dot');
            dots.forEach((dot, index) => {
                if (index + 1 === activeSection) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Update active dot on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    updateActiveDot(index + 1);
                }
            });
        });
    </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
