import { ReactNode } from 'react'
import { cn } from '@/lib/helpers'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10', className)}>
      {children}
    </div>
  )
}
