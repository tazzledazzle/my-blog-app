import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A modern blog built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}