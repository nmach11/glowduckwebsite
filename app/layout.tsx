import type { Metadata } from 'next'
import { Jua } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const jua = Jua({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GlowDuck - Glow up with a friend!',
  description: 'Track your skin progress, build habits, and get friendly AI insights with GlowDuck.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jua.className}>
      <body className="bg-white">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}