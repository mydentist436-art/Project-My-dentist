'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { faqs } from '@/data/faq'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

const categories = [
  { key: 'all', label: 'All Questions' },
  { key: 'treatment', label: 'Treatments' },
  { key: 'general', label: 'General' },
  { key: 'cost', label: 'Costs' },
  { key: 'care', label: 'Aftercare' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? 'text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-[#e8f8fd] hover:text-[#1aa0c0]'
            }`}
            style={activeCategory === cat.key ? { background: '#F71A25' } : {}}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <StaggerContainer className="space-y-3">
        {filtered.map((faq) => (
          <StaggerItem key={faq.id}>
            <div
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                  {faq.question}
                </h3>
                <div className="shrink-0">
                  {open === faq.id ? (
                    <ChevronUp className="w-5 h-5" style={{ color: '#2FBADE' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              {open === faq.id && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
