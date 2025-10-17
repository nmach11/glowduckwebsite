# GlowDuck Website

A production-ready marketing website for the GlowDuck mobile app, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🦆 About GlowDuck

GlowDuck is a mobile app that helps you glow up with a friend! Analyze your skin, get personalized skincare routines, build life-changing habits, and track your progress.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Jua (Google Fonts)
- **Hosting**: Vercel

## 🎨 Brand Tokens

### Colors
- `softPink`: #F2D5E0
- `pink`: #FF8284
- `white`: #FFFFFF
- `black`: #000000
- `mutedGray`: #8A8A8A
- `borderGray`: #EDEDED

### Border Radius
- `card`: 18px
- `image`: 12px
- `pill`: 24px
- `button`: 12px

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   └── support/            # Support page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── SectionAnalyze.tsx  # Analyze your skin section
│   ├── SectionRoutine.tsx  # Personalized routine section
│   ├── SectionHabits.tsx   # Build habits section
│   ├── SectionProgress.tsx # Track progress section
│   ├── SectionLevelUp.tsx  # Level up section
│   ├── SectionGlowUp.tsx   # As you glow up section
│   ├── Footer.tsx          # Footer with CTA
│   └── AppBadges.tsx       # App store badges
└── public/
    └── images/             # Image assets

```

## 🎯 Features

- ✨ Fully responsive design (mobile, tablet, desktop)
- ♿ Accessibility compliant (ARIA labels, semantic HTML)
- 🚀 Performance optimized (Next.js Image, lazy loading)
- 🎨 Smooth animations and transitions
- 📱 App store download badges
- 📄 Legal pages (Privacy, Terms, Support)
- 🔍 SEO optimized with meta tags

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📊 Performance

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## 📞 Support

For questions or support, contact: [support@glowduck.app](mailto:support@glowduck.app)

## 📄 License

© 2025 GlowDuck. All rights reserved.

