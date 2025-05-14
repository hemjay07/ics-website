// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Metadata
export const metadata: Metadata = {
  title: 'ICS - Government Management Systems Integrator',
  description: 'ICS specializes in delivering complex government management systems with a focus on efficiency and long-term functionality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}