import { ReactNode } from 'react'
import { cn } from '@/lib/helpers'

interface BadgeProps {
  children: ReactNode
  variant?: 'teal' | 'green' | 'blue' | 'gray'
  className?: string
}

const variants = {
  teal: 'bg-[#e8f8fd] text-[#1587a3] border-[#d0f0fb]',
  green: 'bg-green-50 text-green-700 border-green-100',
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  gray: 'bg-gray-50 text-gray-700 border-gray-100',
}

export default function Badge({ children, variant = 'teal', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
