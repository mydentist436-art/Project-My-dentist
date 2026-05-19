import type { Metadata } from 'next'
import { FadeInUp } from '@/components/common/MotionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { Phone } from 'lucide-react'
import { CALL_LINK } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smile Gallery – Before & After | My Dentist Salipur',
  description:
    'View real before & after results from My Dentist: teeth whitening, braces, dental implants, smile corrections and more by Dr. S.M Amin in Salipur, Cuttack.',
  alternates: { canonical: 'https://mydentist-salipur.com/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
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
              Real Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Smile Gallery
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Real before & after transformations from our patients. These are genuine results achieved right here at My Dentist, Salipur.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <SectionTitle
            badge="Before & After"
            title="Transformations That Speak for Themselves"
            subtitle="Browse by treatment type and click any card to see the full story behind each smile transformation."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <p className="text-gray-400 text-sm mb-8">
              * Results may vary by individual case. All treatments are performed by Dr. S.M Amin (BDS) following evidence-based dental protocols. Gallery represents a selection of cases treated at My Dentist, Salipur.
            </p>
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready for Your Own Smile Transformation?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Book a consultation with Dr. S.M Amin and discover what's possible for your smile.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-700 transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call 9692827635
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
