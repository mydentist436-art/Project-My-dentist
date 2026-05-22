import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby } from 'lucide-react'
import { services } from '@/data/services'
import SectionTitle from '@/components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby,
}

const bgColors = [
  'bg-[#e8f8fd] text-[#2FBADE]',
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
              <StaggerItem key={service.id} className="h-full">
                <Link href={`/services#${service.id}`} className="group block h-full">
                  <div className="relative overflow-hidden bg-gray-900 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 h-full min-h-[320px] isolate">
                    {service.image && (
                      <>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 -z-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-80 -z-10"></div>
                      </>
                    )}
                    
                    <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/20 transition-transform duration-500 group-hover:-translate-y-2`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-xl mb-1 group-hover:text-[#2FBADE] transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <div className="overflow-hidden">
                          <p className="text-gray-200 text-sm leading-relaxed pt-3 border-t border-white/20 mt-3">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-colors group"
            style={{ color: '#1aa0c0' }}
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
