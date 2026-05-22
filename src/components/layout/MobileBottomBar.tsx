'use client'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { CALL_LINK, WHATSAPP_LINK } from '@/lib/constants'
import Link from 'next/link'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-between p-1">
        <a 
          href={CALL_LINK} 
          className="flex-1 flex flex-col items-center justify-center py-0.5 gap-0.5 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#f0f9fb] text-[#2FBADE]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Call Now</span>
        </a>
        
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-0.5 gap-0.5 border-l border-r border-gray-100 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-50 text-green-600">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">WhatsApp</span>
        </a>
        
        <Link 
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center py-0.5 gap-0.5 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#fff0f1] text-[#F71A25]">
            <CalendarCheck className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Book Now</span>
        </Link>
      </div>
    </div>
  )
}
