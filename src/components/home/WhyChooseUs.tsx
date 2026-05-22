import { Award, Zap, Heart, IndianRupee, Shield, Users } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHY_CHOOSE_US, STATS } from '@/lib/constants'
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/common/MotionWrapper'

const iconMap: Record<string, React.ElementType> = {
  Award, Zap, Heart, IndianRupee, Shield, Users,
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2FBADE 0%, #1587a3 100%)' }}>
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <SectionTitle
          badge="Why Choose Us"
          title="The My Dentist Difference"
          subtitle="We combine clinical excellence with compassionate care to deliver dental experiences worth smiling about."
          light
        />

        {/* Stats row */}
        <FadeInUp className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </FadeInUp>

        {/* Feature grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Award
            return (
              <StaggerItem key={item.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
