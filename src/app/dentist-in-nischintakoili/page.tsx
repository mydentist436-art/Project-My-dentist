import type { Metadata } from 'next'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/common/MotionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import ServicesGrid from '@/components/services/ServicesGrid'
import Map from '@/components/contact/Map'
import { Phone, CalendarCheck } from 'lucide-react'
import { CALL_LINK } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Dental Clinic Near Nischintakoili | Dr. S.M Amin',
  description:
    'Searching for the best dentist near Nischintakoili? My Dentist in Salepur offers expert RCT, teeth cleaning, and braces. Short drive, painless treatments.',
  alternates: { canonical: 'https://www.mydentistsalepur.com/dentist-in-nischintakoili' },
}

export default function NischintakoiliLocationPage() {
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
              Serving Your Area
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Best Dental Clinic Near Nischintakoili
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Just a short drive from Nischintakoili, Dr. S.M Amin provides world-class, painless dental care at My Dentist in Salepur.
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
                Top-Rated Dentist Near Nischintakoili
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you are looking for a reliable and expert dentist near Nischintakoili, <strong>My Dentist</strong> located in neighboring Salepur is your top destination. We frequently welcome patients from Nischintakoili who seek advanced and pain-free dental care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Led by Dr. S.M Amin (BDS), our clinic specializes in comprehensive oral healthcare. Whether you are dealing with severe tooth pain that requires a Root Canal Treatment (RCT), looking to restore your smile with dental implants, or needing routine family dental checkups, we ensure a comfortable experience.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Why Make the Short Trip?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> 11+ years of trusted clinical excellence
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> State-of-the-art digital X-rays and sterilization
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <span style={{ color: '#2FBADE' }}>✓</span> Family-friendly, anxiety-free environment
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
