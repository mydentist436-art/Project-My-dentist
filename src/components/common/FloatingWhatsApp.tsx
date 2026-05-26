import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] hidden md:flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  )
}
