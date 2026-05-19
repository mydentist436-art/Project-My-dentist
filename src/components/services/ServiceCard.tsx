import { CheckCircle, Clock, IndianRupee } from 'lucide-react'
import { Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby } from 'lucide-react'
import { Service } from '@/types/service'

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Shield, Zap, Scissors, Anchor, AlignCenter, Sun, Baby,
}

const bgColors = [
  'from-teal-400 to-teal-600',
  'from-blue-400 to-blue-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
  'from-purple-400 to-purple-600',
  'from-rose-400 to-rose-600',
  'from-yellow-400 to-yellow-600',
  'from-cyan-400 to-cyan-600',
]

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Sparkles
  const gradient = bgColors[index % bgColors.length]

  return (
    <div id={service.id} className="bg-white rounded-2xl shadow-card border border-gray-50 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className={`bg-gradient-to-br ${gradient} p-6`}>
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.fullDesc}</p>

        {/* Benefits */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Benefits</h4>
          <ul className="space-y-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration & Price */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5 text-teal-500" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-teal-700 font-semibold">
            <IndianRupee className="w-3 h-3" />
            <span>{service.priceRange.replace('₹', '')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
