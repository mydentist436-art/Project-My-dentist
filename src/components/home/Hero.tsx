'use client'
import { motion } from 'framer-motion'
import { Phone, CalendarCheck, MapPin, Star, ChevronDown } from 'lucide-react'
import { CALL_LINK, PHONE_PRIMARY } from '@/lib/constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-teal-200" />
              <span className="text-sm text-teal-100 font-medium">Salipur, Cuttack, Odisha</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Healthy Smiles{' '}
              <span className="text-teal-200">Begin with</span>{' '}
              Expert Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Trusted dental care by <strong className="text-white">Dr. S.M Amin</strong> in Salipur. Painless treatments, advanced technology, and a warm welcome for every patient.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-7 py-4 rounded-full hover:bg-teal-50 shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2 bg-teal-600/80 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:bg-teal-600 transition-all duration-200 hover:-translate-y-0.5"
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
              className="flex flex-wrap gap-6"
            >
              {[
                { label: '11+ Years', sub: 'Experience' },
                { label: '5,000+', sub: 'Patients Treated' },
                { label: '4.9★', sub: 'Patient Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="text-xl font-bold">{stat.label}</div>
                  <div className="text-teal-200 text-sm">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Doctor Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating card */}
            <div className="relative">
              {/* Doctor avatar card */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-teal-400/30 to-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center shadow-2xl animate-float">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center mb-4">
                  <span className="text-6xl">👨‍⚕️</span>
                </div>
                <h3 className="text-white font-bold text-xl">Dr. S.M Amin</h3>
                <p className="text-teal-200 text-sm">BDS – S'O'A University</p>
                <p className="text-teal-100 text-xs mt-1">Dental Surgeon</p>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Floating badge: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Experience</div>
                  <div className="text-teal-700 font-bold text-sm">11+ Years</div>
                </div>
              </motion.div>

              {/* Floating badge: Painless */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
              >
                <span className="text-2xl">✅</span>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Treatments</div>
                  <div className="text-teal-700 font-bold text-sm">100% Painless</div>
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
        <ChevronDown className="w-6 h-6 text-teal-200" />
      </motion.div>
    </section>
  )
}
