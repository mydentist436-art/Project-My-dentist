import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'My Dentist – Dr. S.M Amin | Best Dentist in Salipur, Cuttack',
  description:
    'My Dentist in Salipur – Expert, painless dental care by Dr. S.M Amin (BDS). Services include RCT, implants, braces, whitening & more. Call 9692827635 today.',
  alternates: {
    canonical: 'https://mydentist-salipur.com',
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
