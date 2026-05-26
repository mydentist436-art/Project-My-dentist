import type { Metadata } from 'next'
import { FadeInUp } from '@/components/common/MotionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import FAQ from '@/components/patient/FAQ'
import Tips from '@/components/patient/Tips'
import { Phone, CalendarCheck, MessageCircle } from 'lucide-react'
import { CALL_LINK, WHATSAPP_LINK } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Information – FAQs & Dental Tips | Dental Clinic Salepur',
  description:
    'Find answers to common dental questions, post-treatment care tips, and oral hygiene advice from Dr. S.M Amin at My Dentist, Salepur, Cuttack district.',
  alternates: { canonical: 'https://www.mydentistsalepur.com/patient-info' },
}

export default function PatientInfoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/patient_info.webp')`,
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
              Patient Corner
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Patient Information
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Everything you need to know before, during, and after your dental visit — answered by Dr. S.M Amin.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '📋',
                title: 'First Visit?',
                desc: 'Arrive 10 minutes early. Bring any previous dental X-rays or records if available. No special preparation needed for a routine checkup.',
              },
              {
                icon: '🚨',
                title: 'Dental Emergency?',
                desc: 'Call us immediately at 9692827635. Severe toothache, swelling, broken tooth, or knocked-out tooth — we prioritise urgent cases.',
              },
              {
                icon: '💊',
                title: 'Before Treatment',
                desc: 'Inform us of any medications you take or medical conditions. Eat normally before appointments unless told otherwise.',
              },
            ].map((card) => (
              <FadeInUp key={card.title}>
                <div className="rounded-2xl p-6 border border-[#d0f0fb] h-full" style={{ background: '#e8f8fd' }}>
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Honest answers to the questions patients ask us most — in plain, simple language."
          />
          <FAQ />
        </div>
      </section>

      {/* Post-treatment care */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle
            badge="Aftercare Guide"
            title="Post-Treatment Care Tips"
            subtitle="Quick guidance for common procedures — follow these for a smooth, speedy recovery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1400px] mx-auto">
            {[
              {
                title: 'After Tooth Extraction',
                color: 'border-red-200 bg-red-50',
                badge: 'bg-red-100 text-red-700',
                tips: [
                  'Bite on gauze for 30–45 minutes',
                  'Avoid spitting or rinsing for 24 hours',
                  'No straws for 48 hours',
                  'Eat soft, cool foods for 2–3 days',
                  'Rinse gently with warm salt water from day 2',
                  'Avoid smoking for at least 72 hours',
                ],
              },
              {
                title: 'After Root Canal (RCT)',
                color: 'border-orange-200 bg-orange-50',
                badge: 'bg-orange-100 text-orange-700',
                tips: [
                  'Avoid chewing on treated side until crown placed',
                  'Mild soreness for 2–3 days is normal',
                  'Take prescribed pain relievers as directed',
                  'Book your crown appointment promptly',
                  'Maintain gentle brushing around the area',
                  'Call us if swelling or severe pain occurs',
                ],
              },
              {
                title: 'After Teeth Whitening',
                color: 'border-yellow-200 bg-yellow-50',
                badge: 'bg-yellow-100 text-yellow-700',
                tips: [
                  'Avoid tea, coffee & red wine for 48 hours',
                  'No tobacco for at least 24–48 hours',
                  'Mild sensitivity is normal – subsides in 1–2 days',
                  'Use a sensitive toothpaste for 1 week',
                  'Eat white or colourless foods for 24 hours',
                  'Maintain results with good home hygiene',
                ],
              },
              {
                title: 'After Dental Implant',
                color: 'border-[#d0f0fb] bg-[#e8f8fd]',
                badge: 'bg-[#d0f0fb] text-[#1587a3]',
                tips: [
                  'Apply ice pack for 20 mins on/off for first day',
                  'Eat soft foods for 1–2 weeks',
                  'Avoid strenuous activity for 24 hours',
                  'Take antibiotics exactly as prescribed',
                  'Keep the area clean – gentle brushing only',
                  'Attend all follow-up appointments',
                ],
              },
              {
                title: 'After Braces Adjustment',
                color: 'border-blue-200 bg-blue-50',
                badge: 'bg-blue-100 text-blue-700',
                tips: [
                  'Soreness for 2–4 days after each adjustment is normal',
                  'Eat soft foods (dal, rice, curd) for first 2 days',
                  'Use orthodontic wax on any sharp wire',
                  'Rinse with warm salt water if gums are sore',
                  'Brush carefully around brackets after every meal',
                  'Never skip follow-up appointments',
                ],
              },
              {
                title: 'After Tooth Filling',
                color: 'border-purple-200 bg-purple-50',
                badge: 'bg-purple-100 text-purple-700',
                tips: [
                  'Avoid hard, sticky foods for 24 hours',
                  'Sensitivity to hot/cold is normal for a few days',
                  'If bite feels uneven, call us for a quick adjustment',
                  'Brush and floss gently around the filled tooth',
                  'Avoid chewing ice or very hard objects',
                  'Pain lasting more than a week – please call us',
                ],
              },
            ].map((card) => (
              <FadeInUp key={card.title}>
                <div className={`rounded-2xl p-6 border ${card.color} h-full`}>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.badge} mb-3 inline-block`}>
                    {card.title}
                  </span>
                  <ul className="space-y-2 mt-1">
                    {card.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 shrink-0" style={{ color: '#2FBADE' }}>✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Tips */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle
            badge="Daily Habits"
            title="Dental Hygiene Tips from Dr. Amin"
            subtitle="Simple, proven habits that keep your teeth and gums healthy between visits."
          />
          <Tips />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2FBADE 0%, #1587a3 100%)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Still Have Questions?
                </h2>
                <p className="text-blue-100 text-sm mb-7 max-w-sm mx-auto">
                  Call us, WhatsApp us, or book an appointment. Dr. Amin is happy to answer any concerns before you visit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={CALL_LINK}
                    className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ background: '#F71A25', boxShadow: '0 6px 20px rgba(247,26,37,0.35)' }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
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
