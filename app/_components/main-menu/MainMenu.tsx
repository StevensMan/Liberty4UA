'use client'

import Link from 'next/link'
import { routes } from '@/lib/routes'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const MainMenu = () => {
  const pathname = usePathname()

  return (
    <ul className="hidden flex-row items-center justify-center gap-8 text-white md:flex">
      <li>
        <Link
          className={cn(
            'hover:text-yellow-400',
            pathname === routes.about && 'text-yellow-400'
          )}
          href={routes.about}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={cn(
            'hover:text-yellow-400',
            pathname === routes.contact && 'text-yellow-400'
          )}
          href={routes.contact}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
