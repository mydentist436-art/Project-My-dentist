import { Metadata } from 'next'

const BASE_URL = 'https://mydentist-salipur.com'
const CLINIC_NAME = 'My Dentist – Dr. S.M Amin'
const DEFAULT_DESCRIPTION =
  'My Dentist in Salipur, Cuttack – Expert dental care by Dr. S.M Amin (BDS). Painless RCT, implants, braces, cleaning & more. Call 9692827635 to book an appointment.'

export function generateMetadata(
  title: string,
  description?: string,
  path?: string,
): Metadata {
  const fullTitle = `${title} | ${CLINIC_NAME}`
  const desc = description || DEFAULT_DESCRIPTION
  const url = `${BASE_URL}${path || ''}`

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      'dentist in Salipur',
      'dental clinic Cuttack',
      'best dentist near me Salipur',
      'tooth pain treatment Salipur',
      'root canal Salipur',
      'dental implants Cuttack',
      'teeth cleaning Salipur',
      'Dr SM Amin dentist',
      'My Dentist Salipur',
      'painless dental treatment Odisha',
    ],
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: CLINIC_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'My Dentist',
  image: `${BASE_URL}/images/clinic/clinic-front.webp`,
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  telephone: '+919692827635',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Under Bank Of Baroda, At-Thana, Kendrapara Rd, Chaka',
    addressLocality: 'Salipur',
    addressRegion: 'Odisha',
    postalCode: '754202',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.4567,
    longitude: 86.0123,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Card',
  medicalSpecialty: 'Dentistry',
}
