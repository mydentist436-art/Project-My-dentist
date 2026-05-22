import { Brush, GitMerge, Droplets, AlertTriangle, Droplet, CalendarCheck } from 'lucide-react'
import { hygieneTips } from '@/data/faq'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

const iconMap: Record<string, React.ElementType> = {
  Brush, GitMerge, Droplets, AlertTriangle, Droplet, CalendarCheck,
}

const bgColors = [
  'bg-[#e8f8fd] text-[#2FBADE]',
  'bg-blue-50 text-blue-600',
  'bg-cyan-50 text-cyan-600',
  'bg-amber-50 text-amber-600',
  'bg-sky-50 text-sky-600',
  'bg-emerald-50 text-emerald-600',
]

export default function Tips() {
  return (
    <div>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {hygieneTips.map((tip, index) => {
          const Icon = iconMap[tip.icon] || Brush
          const colorCls = bgColors[index % bgColors.length]
          return (
            <StaggerItem key={tip.id}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card h-full">
                <div className={`w-12 h-12 rounded-xl ${colorCls} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tip.tip}</p>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
