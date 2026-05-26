import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Best Dentist in Salepur | Dental Clinic Near Nischintakoili | Book Appointment',
  description:
    'Dental Clinic in Salepur, Odisha | Teeth Cleaning, RCT, Braces. Expert dental care by Dr. S.M Amin (BDS). Call 9692827635 to book your appointment today.',
  alternates: {
    canonical: 'https://www.mydentistsalepur.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
