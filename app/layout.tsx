import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'O’Byrne Automotive | Mobile Mechanic in Leeds & Yorkshire',
  description: 'Fully qualified mobile mechanic with 10+ years of experience. Vehicle repairs, servicing, diagnostics and breakdown assistance at your home or workplace across Yorkshire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
