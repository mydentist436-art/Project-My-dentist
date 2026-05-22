import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react'
import { NAV_ITEMS, CALL_LINK, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK } from '@/lib/constants'
import { clinicInfo } from '@/data/clinic'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white flex shrink-0">
                <Image src="/images/logo/new-logo.webp" alt="My Dentist Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="font-bold text-xl">My Dentist</div>
                <div className="text-xs" style={{ color: '#2FBADE' }}>Dr. S.M Amin, BDS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted dental care partner in Salipur. Providing expert, gentle, and affordable dental treatments since 2013.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm transition-colors hover:text-[#2FBADE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Our Services</h3>
            <ul className="space-y-2">
              {['Teeth Cleaning & Scaling', 'Root Canal Treatment', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Pediatric Dentistry'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-[#2FBADE] text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={CALL_LINK} className="flex items-start gap-3 text-gray-400 hover:text-[#2FBADE] text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2FBADE' }} />
                  <span>{PHONE_PRIMARY} / {PHONE_SECONDARY}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2FBADE' }} />
                  <span>{clinicInfo.contact.addressLine1}, {clinicInfo.contact.addressLine2}, {clinicInfo.contact.addressLine3}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2FBADE' }} />
                  <div>
                    <div>Mon–Fri: 9AM–1PM & 4–8PM</div>
                    <div>Sat: 9AM–8PM</div>
                    <div>Sun: 10AM–1PM</div>
                  </div>
                </div>
              </li>
              <li>
                <a href={`mailto:${clinicInfo.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#2FBADE] text-sm transition-colors">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: '#2FBADE' }} />
                  {clinicInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {year} My Dentist – Dr. S.M Amin. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Proudly serving Salipur, Cuttack & Kendrapara
          </p>
        </div>
      </div>
    </footer>
  )
}
