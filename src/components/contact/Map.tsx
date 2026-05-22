import { MapPin, ExternalLink } from 'lucide-react'
import { clinicInfo } from '@/data/clinic'

export default function Map() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-50 overflow-hidden">
      {/* Map embed */}
      <div className="relative h-64 md:h-80" style={{ background: '#e8f8fd' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.0!2d86.0800!3d20.4600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1a9ae6!2sSalipur%2C%20Cuttack%2C%20Odisha!5e0!3m2!1sen!2sin!4v1000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="My Dentist – Salipur, Cuttack"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Address panel */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#e8f8fd' }}>
            <MapPin className="w-5 h-5" style={{ color: '#2FBADE' }} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Clinic Address</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {clinicInfo.contact.addressLine1},<br />
              {clinicInfo.contact.addressLine2},<br />
              {clinicInfo.contact.addressLine3}
            </p>
          </div>
        </div>

        <a
          href={clinicInfo.contact.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-map-link inline-flex items-center gap-2 w-full justify-center text-white font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
