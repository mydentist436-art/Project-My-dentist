import { ReactNode, CSSProperties } from 'react'
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

// Inline styles for brand colours (cannot be handled by Tailwind JIT dynamically)
const variantStyles: Record<string, CSSProperties> = {
  primary: { background: '#F71A25', color: '#ffffff', boxShadow: '0 4px 16px rgba(247,26,37,0.28)' },
  secondary: { border: '2px solid #2FBADE', color: '#1aa0c0', background: 'transparent' },
  'outline-white': {},
  ghost: {},
}

const variantClasses = {
  primary: 'text-white hover:-translate-y-0.5 hover:brightness-90',
  secondary: 'font-semibold hover:-translate-y-0.5',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-[#1aa0c0]',
  ghost: 'hover:bg-[#e8f8fd] text-[#1aa0c0]',
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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200',
    variantClasses[variant],
    sizes[size],
    disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
    className,
  )
  const style = variantStyles[variant]

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{children}</a>
    }
    return <Link href={href} className={cls} style={style}>{children}</Link>
  }

  return (
    <button type={type} className={cls} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
