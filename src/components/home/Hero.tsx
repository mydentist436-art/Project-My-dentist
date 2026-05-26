'use client'
import { motion } from 'framer-motion'
import { Phone, CalendarCheck, MapPin, Star, ChevronDown } from 'lucide-react'
import { CALL_LINK, PHONE_PRIMARY } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E788C] via-[#2FBADE] to-[#0A4150]">
      {/* Premium Mesh Gradient & Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft upper-left highlight */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-40" />
        
        {/* Deep center depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-[#07303B] rounded-full mix-blend-multiply filter blur-[150px] opacity-40" />
        
        {/* Subtle red accent glow — integrating with the brand red gracefully */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#F71A25] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.12]" />
        
        {/* Right side soft glow highlighting the doctor image */}
        <div className="absolute top-1/4 -right-[15%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#4EE3FF] rounded-full mix-blend-soft-light filter blur-[130px] opacity-50" />
      </div>

      {/* Subtle Noise / Texture overlay for premium depth */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Modern crisp grid (medical precision) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 pt-24 md:pt-24 lg:pt-16 xl:pt-12 pb-8 md:pb-16 lg:pb-8 w-full lg:-translate-y-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 md:mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span className="text-xs text-white font-medium tracking-wide">Salipur, Cuttack, Odisha</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 md:mb-4"
            >
              Healthy Smiles{' '}
              <span className="text-white/90">Begin with</span>{' '}
              <span style={{ color: '#fff0f1', textShadow: '0 0 30px rgba(247,26,37,0.4)' }}>Expert Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 text-lg md:text-xl leading-relaxed mb-2 md:mb-8 max-w-lg"
            >
              Trusted dental care by <strong className="text-white">Dr. S.M Amin</strong> in Salipur. Painless treatments, advanced technology, and a warm welcome for every patient.
            </motion.p>

            {/* Mobile Doctor Card (visible only on mobile, placed between text and buttons) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex lg:hidden justify-center -mt-12 mb-6 md:-mt-6 md:mb-10"
            >
              {/* Floating card */}
              <div className="relative">
                {/* Doctor Image */}
                <div className="relative w-[320px] h-[420px] md:w-[500px] md:h-[600px] lg:w-[550px] lg:h-[650px] xl:w-[600px] xl:h-[700px] animate-float flex justify-center items-end">
                  <Image
                    src="/images/doctor/new-home.webp"
                    alt="Dr. S.M Amin"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 500px, (max-width: 1280px) 550px, 600px"
                  />
                </div>

                {/* Floating badge: Experience */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-20 -left-2 md:top-40 md:-left-4 lg:left-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-20"
                >
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Experience</div>
                    <div className="font-bold text-sm" style={{ color: '#2FBADE' }}>11+ Years</div>
                  </div>
                </motion.div>

                {/* Floating badge: Painless */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-12 -right-4 md:bottom-20 md:-right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-20"
                >
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Treatments</div>
                    <div className="font-bold text-sm" style={{ color: '#2FBADE' }}>100% Painless</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-10"
            >
              {/* Primary CTA — Red */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#F71A25', boxShadow: '0 8px 28px rgba(247,26,37,0.40)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#d4111b'; el.style.boxShadow = '0 12px 36px rgba(247,26,37,0.50)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#F71A25'; el.style.boxShadow = '0 8px 28px rgba(247,26,37,0.40)' }}
              >
                <CalendarCheck className="w-5 h-5" />
                Book Appointment
              </Link>
              {/* Secondary — Light blue glass */}
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              {[
                { label: '11+ Years', sub: 'Experience' },
                { label: '5,000+', sub: 'Patients Treated' },
                { label: '4.9★', sub: 'Patient Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="text-xl font-bold">{stat.label}</div>
                  <div className="text-blue-100 text-sm">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Right: Doctor Card (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-end items-center"
          >
            {/* Floating card */}
            <div className="relative lg:mr-4 xl:mr-8">
              {/* Doctor Image */}
              <div className="relative w-[320px] h-[420px] md:w-[500px] md:h-[600px] lg:w-[480px] lg:h-[580px] xl:w-[540px] xl:h-[640px] animate-float flex justify-center items-end">
                <Image
                  src="/images/doctor/new-home.webp"
                  alt="Dr. S.M Amin"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 500px, (max-width: 1280px) 480px, 540px"
                />
              </div>

              {/* Floating badge: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 -left-2 md:top-40 md:-left-4 lg:top-32 lg:-left-6 xl:top-40 xl:-left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-20"
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Experience</div>
                  <div className="font-bold text-sm" style={{ color: '#2FBADE' }}>11+ Years</div>
                </div>
              </motion.div>

              {/* Floating badge: Painless */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-12 -right-4 md:bottom-20 md:-right-8 lg:bottom-16 lg:-right-4 xl:bottom-20 xl:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-20"
              >
                <span className="text-2xl">✅</span>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Treatments</div>
                  <div className="font-bold text-sm" style={{ color: '#2FBADE' }}>100% Painless</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  )
}

