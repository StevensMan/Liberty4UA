'use client'

import { Link, usePathname } from '@/lib/i18n/routing'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/app/_components/language-switcher/LanguageSwitcher'

type MainMenuProps = {
  orientation?: 'horizontal' | 'vertical'
  onItemClick?: () => void
}

export const MainMenu = ({ orientation = 'horizontal', onItemClick }: MainMenuProps) => {
  const pathname = usePathname()
  const t = useTranslations('header.nav')

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick()
    }
  }

  const menuItems = [
    { name: t('home'), href: routes.home },
    { name: t('about'), href: routes.about },
    { name: t('call'), href: routes.call },
    { 
      name: t('letter'), 
      href: 'https://actionnetwork.org/letters/fund-ukraines-military-end-wasteful-aid',
      external: true 
    },
    { name: t('contact'), href: routes.contact }
  ]

  return (
    <nav className={cn(
      'flex items-center gap-1',
      orientation === 'vertical' && 'flex-col items-start gap-4'
    )}>
      <ul className={cn(
        'flex items-center gap-1',
        orientation === 'vertical' && 'flex-col items-start gap-4 w-full'
      )}>
        {menuItems.map((item) => (
          <li key={item.name} className={orientation === 'vertical' ? 'w-full' : ''}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleItemClick}
                className={cn(
                  'relative block px-3 py-2 text-sm font-medium transition-colors',
                  orientation === 'vertical' 
                    ? 'w-full rounded px-4 py-3 text-white hover:bg-white/10' 
                    : 'text-white/90 hover:text-white',
                  !orientation && 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full'
                )}
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.href}
                onClick={handleItemClick}
                className={cn(
                  'relative block px-3 py-2 text-sm font-medium transition-colors',
                  orientation === 'vertical' 
                    ? 'w-full rounded px-4 py-3 text-white hover:bg-white/10' 
                    : 'text-white/90 hover:text-white',
                  pathname === item.href && (
                    orientation === 'vertical' 
                      ? 'bg-white/10 font-bold text-secondary' 
                      : 'text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-secondary'
                  ),
                  pathname !== item.href && !orientation && 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full'
                )}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      
      {orientation !== 'vertical' && (
        <div className="ml-2 border-l border-white/20 pl-2">
          <LanguageSwitcher />
        </div>
      )}
      
      {orientation === 'vertical' && (
        <div className="mt-4 w-full border-t border-white/20 pt-4">
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  )
}
