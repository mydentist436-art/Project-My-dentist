import { ReactNode } from 'react'
import { cn } from '@/lib/helpers'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className, hover = true, padding = 'md' }: CardProps) {
  const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-card border border-gray-50',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}
