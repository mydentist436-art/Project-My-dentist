'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
import { NAV_ITEMS, CALL_LINK, PHONE_PRIMARY } from '@/lib/constants'
import { cn } from '@/lib/helpers'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled } = useScroll(60)
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-navbar'
          : 'bg-transparent',
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow bg-white flex shrink-0">
              <Image src="/images/logo/new-logo.webp" alt="My Dentist Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={cn(
                'font-bold text-xl transition-colors',
                scrolled ? 'text-teal-700' : 'text-white drop-shadow'
              )}>
                My Dentist
              </span>
              <span className={cn(
                'text-xs transition-colors hidden sm:block',
                scrolled ? 'text-teal-500' : 'text-teal-100'
              )}>
                Dr. S.M Amin, BDS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'bg-teal-600 text-white'
                    : scrolled
                    ? 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                    : 'text-white/90 hover:text-white hover:bg-white/15',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={CALL_LINK}
              className="hidden sm:flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <button
              className={cn(
                'lg:hidden p-2 rounded-xl transition-colors',
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20',
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-teal-50 text-teal-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50',
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CALL_LINK}
            className="mt-2 flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-xl"
          >
            <Phone className="w-4 h-4" />
            Call {PHONE_PRIMARY}
          </a>
        </div>
      </div>
    </header>
  )
}
