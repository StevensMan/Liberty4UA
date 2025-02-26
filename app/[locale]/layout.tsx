import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header, Footer } from '@/app/_components'
import { routing } from '@/lib/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Locale } from '@/lib/i18n/types'

export const viewport: Viewport = {
  themeColor: '#0057b7',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: "Fund Ukraine's Military, End Wasteful Aid | Liberty4UA",
  description: "Liberty4UA advocates for direct military funding to Ukraine while eliminating wasteful aid. Join our mission to support Ukraine's fight for freedom efficiently.",
  metadataBase: new URL('http://liberty4ua.org/'),
  openGraph: {
    title: "Fund Ukraine's Military, End Wasteful Aid | Liberty4UA",
    description: "Liberty4UA advocates for direct military funding to Ukraine while eliminating wasteful aid. Join our mission to support Ukraine's fight for freedom efficiently.",
    url: 'http://liberty4ua.org/',
    siteName: "Liberty4UA",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image1.jpg',
        width: 1200,
        height: 630,
        alt: "Liberty4UA - Fund Ukraine's Military, End Wasteful Aid"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fund Ukraine's Military, End Wasteful Aid | Liberty4UA",
    description: "Liberty4UA advocates for direct military funding to Ukraine while eliminating wasteful aid. Join our mission to support Ukraine's fight for freedom efficiently.",
    creator: '@Liberty4Ua',
    images: ['/og-image1.jpg']
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
    <html lang={locale} className="scroll-smooth" data-theme="liberty4ua">
      <body
        className={'flex min-h-screen flex-col items-center bg-gray-50 antialiased'}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex w-full flex-col items-center">
            <Header />
            <main className="flex w-full flex-1 flex-col items-center">
              {props.children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
