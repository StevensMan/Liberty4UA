import { cn } from '@/lib/utils'

export const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return <section id={id} className={cn('w-full py-12', className)}>{children}</section>
}
