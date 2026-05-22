import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const inputBase =
  'w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all'
const inputFocusStyle = { '--tw-ring-color': '#2FBADE' } as React.CSSProperties

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={cn(inputBase, 'focus:ring-[#2FBADE]', error && 'border-red-400', className)}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        className={cn(inputBase, 'resize-none focus:ring-[#2FBADE]', error && 'border-red-400', className)}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
