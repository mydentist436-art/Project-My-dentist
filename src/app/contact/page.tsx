import type { Metadata } from 'next'
import { Phone, Clock, MapPin, MessageCircle, PhoneCall } from 'lucide-react'
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import { clinicInfo } from '@/data/clinic'
import { CALL_LINK, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact & Appointments | My Dentist Salipur – Dr. S.M Amin',
  description:
    'Contact My Dentist in Salipur, Cuttack. Call 9692827635 or visit us at Under Bank Of Baroda, Kendrapara Rd, Chaka, Salipur. Book your appointment today.',
  alternates: { canonical: 'https://mydentist-salipur.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center">
          <FadeInUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/15 text-white mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-teal-100 text-lg max-w-lg mx-auto">
              Walk in, call, or send a message. We're here for you Monday through Sunday.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <StaggerItem>
              <a
                href={CALL_LINK}
                className="flex items-center gap-4 p-5 rounded-2xl border border-teal-100 bg-teal-50 hover:bg-teal-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Primary Phone</div>
                  <div className="font-bold text-teal-700 text-lg group-hover:text-teal-800">{PHONE_PRIMARY}</div>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={`tel:${PHONE_SECONDARY}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Alternate Phone</div>
                  <div className="font-bold text-blue-700 text-lg group-hover:text-blue-800">{PHONE_SECONDARY}</div>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-green-100 bg-green-50 hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">WhatsApp</div>
                  <div className="font-bold text-green-700 text-lg group-hover:text-green-800">Chat with Us</div>
                </div>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Main content: Form + Map + Info */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Form */}
            <SlideInLeft>
              <ContactForm />
            </SlideInLeft>

            {/* Right: Map + Info */}
            <SlideInRight>
              <div className="space-y-6">
                <Map />

                {/* Working Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-50">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {clinicInfo.hours.map((h) => (
                      <div key={h.day} className="flex items-start justify-between gap-4 text-sm">
                        <span className="font-medium text-gray-700 shrink-0">{h.day}</span>
                        <span className="text-gray-500 text-right">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-teal-600 font-medium">
                      🚨 Dental emergencies seen immediately during working hours — call ahead.
                    </p>
                  </div>
                </div>

                {/* Address detail */}
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-gray-900">How to Find Us</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    We are located <strong>under the Bank of Baroda building</strong> on Kendrapara Road, near Chaka, Salipur. Look for the My Dentist signboard on the ground floor.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Landmarks:</strong> Bank of Baroda, Chaka Junction, Kendrapara Rd
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </>
  )
}
