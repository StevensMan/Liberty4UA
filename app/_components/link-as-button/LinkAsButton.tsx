import { ReactNode } from 'react'
import { Link } from '@/lib/i18n/routing'

interface LinkAsButtonProps {
  href: string
  children: ReactNode
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  variant?: 'primary' | 'secondary'
}

export const LinkAsButton = ({
  href,
  children,
  className = '',
  target,
  variant = 'primary'
}: LinkAsButtonProps) => {
  const baseClasses = 'btn text-lg text-black md:text-2xl'
  const variantClasses = {
    primary: 'bg-yellow-400 hover:bg-yellow-100',
    secondary: 'bg-gray-200 hover:bg-gray-100'
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <Link role="button" href={href} target={target} className={buttonClasses}>
      {children}
    </Link>
  )
}