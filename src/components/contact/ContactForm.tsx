'use client'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Input, Textarea } from '@/components/ui/Input'
import { services } from '@/data/services'
import { PHONE_PRIMARY } from '@/lib/constants'
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Please enter your name'
    if (!formData.phone.trim()) e.phone = 'Please enter your phone number'
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address'
    if (!formData.message.trim()) e.message = 'Please write a short message'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)

    // Construct WhatsApp message
    const messageLines = [
      `Hello My Dentist Salepur,`,
      ``,
      `I would like to request an appointment. Here are my details:`,
      `*Name:* ${formData.name}`,
      `*Mobile:* ${formData.phone}`,
    ]

    if (formData.email) messageLines.push(`*Email:* ${formData.email}`)
    if (formData.service) messageLines.push(`*Service Needed:* ${formData.service}`)
    
    messageLines.push(``, `*Message:*`, formData.message)

    const encodedText = encodeURIComponent(messageLines.join('\n'))
    const whatsappUrl = `https://wa.me/91${PHONE_PRIMARY}?text=${encodedText}`

    window.open(whatsappUrl, '_blank')

    setLoading(false)
    setSubmitted(true)
    
    // Optional: Reset form after a delay if they come back
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-card border border-gray-50 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#e8f8fd' }}>
          <CheckCircle className="w-8 h-8" style={{ color: '#2FBADE' }} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Redirecting to WhatsApp...</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, <strong>{formData.name}</strong>! Please send the pre-filled message on WhatsApp to confirm your appointment with our team.
        </p>
        <p className="text-sm mt-4 font-medium" style={{ color: '#2FBADE' }}>
          For urgent care, call: {PHONE_PRIMARY}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card border border-gray-50 space-y-5">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Request an Appointment</h3>
      <p className="text-gray-500 text-sm mb-5">Fill in the form and we'll call you back to confirm.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Priya Mohanty"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name}
        />
        <Input
          label="Mobile Number *"
          type="tel"
          placeholder="10-digit mobile number"
          value={formData.phone}
          onChange={handleChange('phone')}
          error={errors.phone}
        />
      </div>

      <Input
        label="Email Address (Optional)"
        type="email"
        placeholder="yourname@email.com"
        value={formData.email}
        onChange={handleChange('email')}
        error={errors.email}
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Service Needed (Optional)</label>
        <select
          value={formData.service}
          onChange={handleChange('service')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2FBADE] focus:border-transparent transition-all"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="General Checkup">General Checkup</option>
          <option value="Dental Emergency">Dental Emergency</option>
        </select>
      </div>

      <Textarea
        label="Your Message *"
        placeholder="Briefly describe your dental concern or preferred appointment time..."
        rows={4}
        value={formData.message}
        onChange={handleChange('message')}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 disabled:opacity-70"
        style={{ background: '#F71A25' }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Book via WhatsApp
          </>
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">We respond within 2–4 hours during working hours.</p>
    </form>
  )
}
