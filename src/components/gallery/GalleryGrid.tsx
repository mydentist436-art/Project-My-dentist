'use client'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

const galleryItems = [
  { id: 1, category: 'Whitening', before: '🟡', after: '⬜', label: 'Teeth Whitening – 6 Shades Brighter', desc: 'Patient had severe tea staining. Professional whitening achieved dramatic brightening in one session.' },
  { id: 2, category: 'Braces', before: '😬', after: '😁', label: 'Braces Treatment – 18 Months', desc: 'Crowded front teeth corrected with metal braces over 18 months. Beautiful, aligned smile achieved.' },
  { id: 3, category: 'Implant', before: '🦷', after: '✨', label: 'Dental Implant – Missing Molar', desc: 'Missing lower molar replaced with a titanium implant and ceramic crown. Natural look and function restored.' },
  { id: 4, category: 'Veneer', before: '😐', after: '😊', label: 'Smile Correction – Composite Veneers', desc: 'Chipped and uneven front teeth restored with composite veneers for a natural, confident smile.' },
  { id: 5, category: 'RCT', before: '😣', after: '😌', label: 'Root Canal – Severe Pain Relieved', desc: 'Severely infected tooth saved with modern rotary RCT. Patient reported zero pain during procedure.' },
  { id: 6, category: 'Whitening', before: '☕', after: '🌟', label: 'Coffee Stain Removal', desc: 'Years of coffee and tobacco staining removed with professional scaling and whitening treatment.' },
  { id: 7, category: 'Braces', before: '🔄', after: '👍', label: 'Underbite Correction', desc: 'Bite misalignment corrected with a combination of braces and bite plate therapy over 20 months.' },
  { id: 8, category: 'Implant', before: '❌', after: '✅', label: 'Full Upper Restoration', desc: 'Multiple missing upper teeth restored with implant-supported bridge. Eating and speaking fully restored.' },
  { id: 9, category: 'Cleaning', before: '🦠', after: '💎', label: 'Deep Scaling & Cleaning', desc: 'Heavy calculus and gum inflammation resolved with deep scaling and root planing. Healthy gums achieved.' },
]

const categories = ['All', 'Whitening', 'Braces', 'Implant', 'Veneer', 'RCT', 'Cleaning']

const categoryColors: Record<string, string> = {
  Whitening: 'bg-yellow-100 text-yellow-700',
  Braces: 'bg-blue-100 text-blue-700',
  Implant: 'bg-teal-100 text-teal-700',
  Veneer: 'bg-purple-100 text-purple-700',
  RCT: 'bg-red-100 text-red-700',
  Cleaning: 'bg-green-100 text-green-700',
}

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === cat
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <StaggerItem key={item.id}>
            <div
              className="bg-white rounded-2xl shadow-card border border-gray-50 overflow-hidden cursor-pointer hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              onClick={() => setSelected(item)}
            >
              {/* Before / After visual */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                <div className="bg-gray-50 p-8 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2">{item.before}</span>
                  <span className="text-xs text-gray-400 font-medium">BEFORE</span>
                </div>
                <div className="bg-teal-50 p-8 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2">{item.after}</span>
                  <span className="text-xs text-teal-500 font-medium">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.label}</h3>
                  <ZoomIn className="w-4 h-4 text-gray-300 group-hover:text-teal-500 transition-colors shrink-0 mt-0.5" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center">
                <span className="text-5xl mb-2">{selected.before}</span>
                <span className="text-xs font-semibold text-gray-400">BEFORE</span>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 flex flex-col items-center">
                <span className="text-5xl mb-2">{selected.after}</span>
                <span className="text-xs font-semibold text-teal-500">AFTER</span>
              </div>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[selected.category]}`}>
              {selected.category}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{selected.label}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}
