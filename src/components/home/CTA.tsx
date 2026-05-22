import { Phone, MapPin, CalendarCheck } from 'lucide-react'
import { CALL_LINK, WHATSAPP_LINK } from '@/lib/constants'
import { clinicInfo } from '@/data/clinic'
import { FadeInUp } from '@/components/common/MotionWrapper'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2FBADE 0%, #1587a3 100%)' }}>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <span className="text-4xl mb-4 block">🦷</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Your Dental Checkup Today
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Don't wait for tooth pain to see a dentist. Early care is easier, faster, and more affordable. Call us or walk in today.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#F71A25', boxShadow: '0 8px 24px rgba(247,26,37,0.35)' }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={clinicInfo.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book Appointment
                </Link>
              </div>

              <p className="text-blue-200 text-sm mt-6">
                📍 {clinicInfo.contact.addressLine1}, {clinicInfo.contact.addressLine2}
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
