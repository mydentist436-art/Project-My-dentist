import type { Metadata } from 'next'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/common/MotionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import ServicesGrid from '@/components/services/ServicesGrid'
import Map from '@/components/contact/Map'
import { Phone, CalendarCheck } from 'lucide-react'
import { CALL_LINK } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Dentist in Salepur | Top Dental Clinic Near Me',
  description:
    'Looking for the best dentist in Salepur? My Dentist by Dr. S.M Amin offers expert, painless dental care including RCT, implants, and braces. Call 9692827635.',
  alternates: { canonical: 'https://www.mydentistsalepur.com/dentist-in-salepur' },
}

export default function SalepurLocationPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/home.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center">
          <FadeInUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/15 text-white mb-4">
              Local Dental Expert
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Best Dentist in Salepur
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Expert, pain-free dental treatments by Dr. S.M Amin. Serving the Salepur community with modern, affordable dental care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CALL_LINK} className="btn-red-cta px-6 py-3 font-bold shadow-lg">
                <Phone className="w-4 h-4" />
                Call 9692827635
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all">
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Looking for a "Dentist Near Me" in Salepur?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Finding a trusted dental clinic in Salepur doesn't have to be hard. At <strong>My Dentist</strong>, Dr. S.M Amin brings over 11 years of experience in delivering high-quality, painless dental treatments to families across the Cuttack district.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need a routine teeth cleaning, advanced root canal treatment (RCT), or dental implants, our modern clinic is equipped with the latest technology to ensure your comfort and safety. We adhere to international sterilization standards, ensuring every patient receives the best care possible.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Why Patients in Salepur Trust Us:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> 100% Painless treatments with advanced anesthesia
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> Transparent pricing with no hidden charges
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> Located conveniently under Bank of Baroda, Salepur
                </li>
              </ul>
            </SlideInLeft>
            <SlideInRight>
              <Map />
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle badge="Treatments" title="Comprehensive Dental Services" subtitle="We offer a wide range of dental procedures under one roof." />
          <ServicesGrid />
        </div>
      </section>
    </>
  )
}
