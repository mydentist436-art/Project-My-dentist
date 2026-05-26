import type { Metadata } from 'next'
import { GraduationCap, Award, Heart, CheckCircle, Phone, CalendarCheck } from 'lucide-react'
import { clinicInfo } from '@/data/clinic'
import { CALL_LINK, STATS } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Dr. S.M Amin | Best Dental Surgeon in Salepur',
  description:
    'Learn about Dr. S.M Amin – Best Dentist in Salepur. BDS graduate with 11+ years of dental expertise. Trusted by over 5,000 patients in Cuttack district.',
  alternates: { canonical: 'https://www.mydentistsalepur.com/about' },
}


const timeline = [
  { year: '2013', event: 'Graduated with BDS from S\'O\'A University, Bhubaneswar' },
  { year: '2014', event: 'Completed internship at District Hospital Cuttack – Oral & Maxillofacial Surgery' },
  { year: '2015', event: 'Opened My Dentist clinic in Salipur, serving local community' },
  { year: '2017', event: 'Advanced training in implantology and rotary endodontics' },
  { year: '2019', event: 'Expanded clinic with digital X-ray and modern sterilization unit' },
  { year: '2021', event: 'Certified in clear aligner orthodontic therapy' },
  { year: '2023', event: 'Treated 5,000+ patients across Salipur, Cuttack & Kendrapara' },
  { year: '2024', event: 'Upgraded to advanced composite whitening and smile design services' },
]

export default function AboutPage() {
  const doctor = clinicInfo.doctor

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/about.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center">
          <FadeInUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/15 text-white mb-4">
              About the Doctor
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{doctor.name}</h1>
            <p className="text-blue-200 text-lg">{doctor.qualification} · {doctor.role}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              {/* Doctor card */}
              <div className="bg-gradient-to-br from-[#e8f8fd] to-white rounded-3xl p-10 border border-[#d0f0fb] text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white" style={{ background: 'linear-gradient(135deg, #2FBADE, #1587a3)' }}>
                  <Image 
                    src="/images/doctor/about-dr-1.webp" 
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 192px, 192px"
                    className="object-cover object-top"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
                <p className="font-medium mb-1" style={{ color: '#2FBADE' }}>{doctor.role}</p>
                <p className="text-gray-500 text-sm mb-6">{doctor.qualification}</p>

                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                      <div className="text-2xl font-bold" style={{ color: '#1aa0c0' }}>{s.value}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="flex items-center gap-2 rounded-full px-4 py-1.5 inline-flex w-fit mb-4" style={{ background: '#e8f8fd' }}>
                <GraduationCap className="w-4 h-4" style={{ color: '#2FBADE' }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#1aa0c0' }}>About the Doctor</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Bringing Expert Dental Care to Salipur Since 2015
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{doctor.bio}</p>

              <h3 className="font-semibold text-gray-900 mb-3">Our Approach to Patient Care</h3>
              <ul className="space-y-3 mb-8">
                {doctor.approach.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#2FBADE' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: '#F71A25', boxShadow: '0 4px 16px rgba(247,26,37,0.28)' }}
                >
                  <Phone className="w-4 h-4" />
                  Call Dr. Amin
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all"
                  style={{ border: '2px solid #2FBADE', color: '#1aa0c0' }}
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 overflow-hidden" style={{ background: '#f0fafd' }}>
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle badge="Credentials" title="Education & Professional Journey" />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: '#d0f0fb' }} />
              <StaggerContainer className="space-y-6">
                {timeline.map((item) => (
                  <StaggerItem key={item.year}>
                    <div className="flex gap-6 items-start">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 relative" style={{ background: '#2FBADE' }}>
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-[#d0f0fb] shadow-sm flex-1">
                        <span className="text-xs font-bold mb-1 block" style={{ color: '#2FBADE' }}>{item.year}</span>
                        <p className="text-gray-700 text-sm">{item.event}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle badge="Our Values" title="What We Stand For" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Patient First', desc: 'Every decision — from treatment planning to scheduling — is made with the patient\'s comfort, safety, and best interest at heart.' },
              { icon: Award, title: 'Clinical Excellence', desc: 'We stay updated with the latest dental advancements and continuously improve our skills through training and education.' },
              { icon: CheckCircle, title: 'Honesty & Transparency', desc: 'We explain your diagnosis clearly, present all options, and provide honest cost estimates before starting any treatment.' },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl p-7 text-center" style={{ background: '#e8f8fd' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: '#2FBADE' }}>
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
