import type { NextConfig } from 'next'

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bioguide.congress.gov'
        },
        {
          protocol: 'http',
          hostname: 'bioguide.congress.gov'
        },
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: 'www.whitehouse.gov'
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
}

export default withNextIntl(nextConfig)
