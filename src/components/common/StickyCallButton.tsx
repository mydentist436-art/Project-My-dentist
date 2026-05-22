'use client'
import { Phone } from 'lucide-react'
import { CALL_LINK, PHONE_PRIMARY } from '@/lib/constants'

export default function StickyCallButton() {
  return (
    <a
      href={CALL_LINK}
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center text-white font-semibold w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group"
      style={{ background: '#F71A25', boxShadow: '0 6px 20px rgba(247,26,37,0.35)' }}
      aria-label={`Call ${PHONE_PRIMARY}`}
      onMouseEnter={e => (e.currentTarget.style.background = '#d4111b')}
      onMouseLeave={e => (e.currentTarget.style.background = '#F71A25')}
    >
      <Phone className="w-6 h-6 animate-pulse-slow" />
    </a>
  )
}
