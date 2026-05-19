import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/helpers'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline-white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variants = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg',
  secondary: 'bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-teal-700',
  ghost: 'text-teal-600 hover:bg-teal-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
  external,
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5',
    variants[variant],
    sizes[size],
    disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
    className,
  )

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    }
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
