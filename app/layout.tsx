import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "O'Byrne Automotive | Mobile Mechanic Yorkshire",
  description: 'Professional mobile mechanic services across Yorkshire. Recovery, breakdowns, repairs, and maintenance at your location.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}
