import { MapPin, ExternalLink } from 'lucide-react'
import { clinicInfo } from '@/data/clinic'

export default function Map() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-50 overflow-hidden">
      {/* Map embed */}
      <div className="relative h-64 md:h-80" style={{ background: '#e8f8fd' }}>
        <iframe
          src={clinicInfo.contact.mapEmbedUrl}
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
