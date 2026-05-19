import Link from 'next/link'
import { ArrowRight, Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby } from 'lucide-react'
import { services } from '@/data/services'
import SectionTitle from '@/components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby,
}

const bgColors = [
  'bg-teal-50 text-teal-600',
  'bg-blue-50 text-blue-600',
  'bg-emerald-50 text-emerald-600',
  'bg-amber-50 text-amber-600',
  'bg-purple-50 text-purple-600',
  'bg-rose-50 text-rose-600',
  'bg-yellow-50 text-yellow-600',
  'bg-cyan-50 text-cyan-600',
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Dental Care"
          subtitle="From routine cleanings to advanced implants and orthodontics — all under one roof, with genuine care."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles
            const colorCls = bgColors[index % bgColors.length]

            return (
              <StaggerItem key={service.id}>
                <Link href={`/services#${service.id}`} className="group block">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl ${colorCls} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900 transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
