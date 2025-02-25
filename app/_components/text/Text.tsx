import { ReactNode } from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'p' | 'list-item'
type TextSize = 'sm' | 'md' | 'lg'

interface TextProps {
  variant: TextVariant
  children: ReactNode
  className?: string
  size?: TextSize
  bold?: boolean
}

export const Text = ({
  variant,
  children,
  className = '',
  size = 'md',
  bold = false
}: TextProps) => {
  const sizeClasses = {
    h1: {
      sm: 'text-3xl md:text-6xl',
      md: 'text-4xl md:text-7xl',
      lg: 'text-4xl md:text-8xl'
    },
    h2: {
      sm: 'text-2xl md:text-4xl',
      md: 'text-3xl md:text-5xl',
      lg: 'text-4xl md:text-6xl'
    },
    h3: {
      sm: 'text-xl md:text-3xl',
      md: 'text-2xl md:text-4xl',
      lg: 'text-3xl md:text-5xl'
    },
    p: {
      sm: 'text-base md:text-lg',
      md: 'text-lg md:text-xl',
      lg: 'text-lg md:text-2xl'
    },
    'list-item': {
      sm: 'text-base md:text-lg',
      md: 'text-lg md:text-xl',
      lg: 'text-lg md:text-2xl'
    }
  }

  const baseClasses = {
    h1: 'font-bold text-balance',
    h2: 'font-bold',
    'list-item': 'list-inside list-disc'
  }
  const boldClass = bold && variant !== 'h1' && variant !== 'h2' ? 'font-bold' : ''
  const combinedClasses = `${baseClasses[variant as keyof typeof baseClasses]} ${sizeClasses[variant][size]} ${boldClass} ${className}`

  switch (variant) {
    case 'h1':
      return <h1 className={combinedClasses}>{children}</h1>
    case 'h2':
      return <h2 className={combinedClasses}>{children}</h2>
    case 'h3':
      return <h3 className={combinedClasses}>{children}</h3>
    case 'p':
      return <p className={combinedClasses}>{children}</p>
    case 'list-item':
      return <li className={combinedClasses}>{children}</li>
    default:
      return <p className={combinedClasses}>{children}</p>
  }
}
