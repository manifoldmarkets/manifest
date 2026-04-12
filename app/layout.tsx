import { Bungee_Shade, Cinzel, Cinzel_Decorative, DM_Sans, Libre_Baskerville, Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// const dmSans = DM_Sans({A
//   variable: '--font-body',
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// })
const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const bungeeShade = Bungee_Shade({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400'],
})
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})
const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Manifest 2026',
  description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
  icons: {
    icon: '/manifold-logo.ico',
  },
  openGraph: {
    title: 'Manifest 2026',
    description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
    images: [
      {
        url: '/images/2026/manifest-2026-og.png',
        width: 1200,
        height: 630,
        alt: 'Manifest 2026 - A festival for prediction markets & the future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifest 2026',
    description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
    images: ['/images/2026/manifest-2026-og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${bungeeShade.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
