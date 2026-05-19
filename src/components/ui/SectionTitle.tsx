import { cn } from '@/lib/helpers'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(center ? 'text-center' : 'text-left', 'mb-12', className)}>
      {badge && (
        <span className={cn(
          'inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4',
          light
            ? 'bg-white/20 text-white'
            : 'bg-teal-50 text-teal-700',
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold leading-tight mb-4',
        light ? 'text-white' : 'text-gray-900',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base md:text-lg max-w-2xl leading-relaxed',
          center && 'mx-auto',
          light ? 'text-teal-100' : 'text-gray-500',
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
