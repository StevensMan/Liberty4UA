'use client'

import Link from 'next/link'
import { routes } from '@/lib/routes'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const MainMenu = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-white md:hidden"
      >
        {isOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </button>
      <ul
        className={cn(
          'absolute left-0 top-0 mt-[100px] flex w-full flex-col items-center justify-center gap-8 bg-white p-6 md:relative md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0 md:text-white',
          isOpen ? 'flex' : 'hidden'
        )}
      >
        <li>
          <Link
            className={cn(
              'hover:text-yellow-400',
              pathname === routes.about && 'text-yellow-400'
            )}
            href={routes.about}
            onClick={handleClose}
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
            onClick={handleClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  )
}
