import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionTitle from '@/components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

export default function Testimonials() {
  return (
    <section className="py-20 bg-teal-50/50">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <SectionTitle
          badge="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real experiences from real patients across Salipur, Cuttack, and surrounding areas."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.location}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-teal-200 shrink-0" />
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.review}</p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                    {t.treatment}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
