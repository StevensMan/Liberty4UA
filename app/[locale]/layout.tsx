import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/app/_components'
import { routing } from '@/lib/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Locale } from '@/lib/i18n/types'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const viewport: Viewport = {
  // themeColor: '#000000',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: "Fund Ukraine's Military, End Wasteful Aid",
  description: "Fund Ukraine's Military, End Wasteful Aid",
  metadataBase: new URL('http://liberty4ua.org/'),
  openGraph: {
    title: "Fund Ukraine's Military, End Wasteful Aid",
    description: "Fund Ukraine's Military, End Wasteful Aid",
    url: 'http://liberty4ua.org/',
    siteName: "Fund Ukraine's Military, End Wasteful Aid",
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fund Ukraine's Military, End Wasteful Aid",
    description: "Fund Ukraine's Military, End Wasteful Aid",
    creator: '@Liberty4Ua'
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '150x150'
      }
    ],
    shortcut: '/favicon.png'
  },
  manifest: '/site.webmanifest'
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Await dynamic params resolution before using its properties
  const resolvedParams = await Promise.resolve(props.params)
  const locale = resolvedParams.locale

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col items-center antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
