import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CursorGlow } from '@/components/ui/CursorGlow'

export const metadata: Metadata = {
  title: 'Vedant Agrawal — a corner of the internet',
  description:
    'A 21-year-old from Titlagarh, Odisha. Currently in Delhi, trying to understand economics, figure out how businesses work, play too much FC, and cook things that occasionally turn out edible.',
  keywords: ['Vedant Agrawal', 'economics', 'finance', 'India', 'startups', 'cricket'],
  authors: [{ name: 'Vedant Agrawal' }],
  openGraph: {
    title: 'Vedant Agrawal',
    description: 'A corner of the internet. Pull up a chair.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedant Agrawal',
    description: 'A corner of the internet. Pull up a chair.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
