import { NavItem } from '@/types/global'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Doctor', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Smile Gallery', href: '/gallery' },
  { label: 'Patient Info', href: '/patient-info' },
  { label: 'Contact', href: '/contact' },
]

export const PHONE_PRIMARY = '9692827635'
export const PHONE_SECONDARY = '7978409003'
export const WHATSAPP_LINK = `https://wa.me/91${PHONE_PRIMARY}`
export const CALL_LINK = `tel:${PHONE_PRIMARY}`

export const STATS = [
  { value: '11+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Patients' },
  { value: '8', label: 'Dental Services' },
  { value: '4.9', label: 'Patient Rating' },
]

export const WHY_CHOOSE_US = [
  {
    icon: 'Award',
    title: '11+ Years of Expertise',
    desc: 'Over a decade of specialized dental practice serving thousands of patients across Cuttack district.',
  },
  {
    icon: 'Zap',
    title: 'Advanced Equipment',
    desc: 'Modern dental technology including digital X-rays, ultrasonic scalers, and rotary endodontics.',
  },
  {
    icon: 'Heart',
    title: 'Painless Treatments',
    desc: 'Patient comfort is our priority. We use advanced anesthesia and gentle techniques for pain-free care.',
  },
  {
    icon: 'IndianRupee',
    title: 'Affordable Pricing',
    desc: 'Transparent, competitive pricing with no hidden charges. Quality dental care accessible to all.',
  },
  {
    icon: 'Shield',
    title: 'Strict Sterilization',
    desc: 'International hygiene standards maintained. Autoclaved instruments and single-use disposables always.',
  },
  {
    icon: 'Users',
    title: 'Family-Friendly Care',
    desc: 'We welcome patients of all ages — from toddlers to seniors — in a warm, welcoming environment.',
  },
]
