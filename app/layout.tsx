import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'John Doe - Developer & Writer',
  description: 'Personal website and blog of John Doe, featuring thoughts on technology, development, and life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navigation />
        <main className="min-h-screen max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}