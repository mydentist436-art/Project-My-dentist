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
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/gallery.webp')`,
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
              Real Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Smile Gallery
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
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
            <div className="rounded-2xl p-8 border" style={{ background: '#e8f8fd', borderColor: '#d0f0fb' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready for Your Own Smile Transformation?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Book a consultation with Dr. S.M Amin and discover what's possible for your smile.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-md"
                  style={{ background: '#F71A25', boxShadow: '0 4px 16px rgba(247,26,37,0.28)' }}
                >
                  <Phone className="w-4 h-4" />
                  Call 9692827635
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all"
                  style={{ border: '2px solid #2FBADE', color: '#1aa0c0' }}
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
