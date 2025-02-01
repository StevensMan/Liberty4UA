'use client'

import Image from 'next/image'
import { Container, MainMenu } from '@/app/_components'
import { usePathname, Link } from '@/lib/i18n/routing'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'

export const Header = () => {
  const pathname = usePathname()

  const isHome = pathname === routes.home

  return (
    <header
      className={cn(
        'relative z-50 h-[100px] w-full',
        isHome && 'bg-transparent'
      )}
    >
      {!isHome && (
        <>
          <Image
            src="/header-bg-1.jpg"
            alt="Liberty4UA"
            fill
            priority
            className="absolute left-0 top-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </>
      )}
      <Container className="relative flex h-full items-center justify-between">
        <Link href={routes.home}>
          <p className="text-2xl font-bold text-white">
            Liberty4<span className="text-yellow-400">UA</span>
          </p>
        </Link>
        <MainMenu />
      </Container>
    </header>
  )
}
