'use client'
import { Phone } from 'lucide-react'
import { CALL_LINK, PHONE_PRIMARY } from '@/lib/constants'

export default function StickyCallButton() {
  return (
    <a
      href={CALL_LINK}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-teal-600 text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:bg-teal-700 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group"
      aria-label={`Call ${PHONE_PRIMARY}`}
    >
      <Phone className="w-5 h-5 animate-pulse-slow" />
      <span className="hidden sm:block">{PHONE_PRIMARY}</span>
    </a>
  )
}
