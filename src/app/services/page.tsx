import type { Metadata } from 'next'
import { Phone, CalendarCheck } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ServicesGrid from '@/components/services/ServicesGrid'
import { FadeInUp } from '@/components/common/MotionWrapper'
import { CALL_LINK } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dental Services | My Dentist – Dr. S.M Amin, Salipur',
  description:
    'Complete dental services in Salipur: Teeth Cleaning, Root Canal (RCT), Dental Implants, Braces, Whitening, Pediatric Dentistry & more. Affordable & painless.',
  alternates: { canonical: 'https://mydentist-salipur.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/services.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
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
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Dental Services
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Comprehensive, affordable dental care under one roof — delivered with expertise and a gentle touch.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle
            badge="All Services"
            title="Expert Care for Every Dental Need"
            subtitle="From preventive checkups to complex restorations — Dr. S.M Amin and team are equipped to handle it all."
          />
          <ServicesGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="rounded-3xl p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2FBADE 0%, #1587a3 100%)' }}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Not Sure Which Treatment You Need?
                </h2>
                <p className="text-blue-100 text-sm mb-7 max-w-sm mx-auto">
                  Book a consultation with Dr. S.M Amin and get a thorough examination, honest advice, and a personalised treatment plan.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={CALL_LINK}
                    className="btn-red-cta px-6 py-3 font-bold shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
