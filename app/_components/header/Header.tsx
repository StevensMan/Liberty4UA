'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, MainMenu, Logo } from '@/app/_components'
import { usePathname, Link } from '@/lib/i18n/routing'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === routes.home
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isHome && !isScrolled ? 'bg-transparent' : 'bg-primary shadow-md',
        isScrolled && 'h-16',
        !isScrolled && 'h-20'
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
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}
      <Container className="relative flex h-full items-center justify-between">
        <Link 
          href={routes.home}
          className="transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <MainMenu />
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="block md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 top-[64px] z-40 bg-primary p-4 transition-transform duration-300 md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <MainMenu orientation="vertical" onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      </Container>
    </header>
  )
}
