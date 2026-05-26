import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import StickyCallButton from '@/components/common/StickyCallButton'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import { AppProvider } from '@/context/AppContext'
import { jsonLdGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'My Dentist – Dr. S.M Amin | Best Dentist in Salepur',
  description:
    'Best Dentist in Salepur | Dental Clinic Near Nischintakoili | Expert dental care by Dr. S.M Amin (BDS). Painless RCT, implants, braces, teeth cleaning & more. Call 9692827635 to book an appointment.',
  keywords: ['dentist in Salepur', 'dental clinic near Nischintakoili', 'best dentist Cuttack district', 'Dr SM Amin', 'RCT Salepur', 'dental implants Cuttack', 'teeth cleaning Salepur'],
  authors: [{ name: 'Dr. S.M Amin' }],
  creator: 'My Dentist',
  metadataBase: new URL('https://www.mydentistsalepur.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'My Dentist – Dr. S.M Amin',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="pb-24 md:pb-0">
        <AppProvider>
          <ScrollToTop />
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <StickyCallButton />
          <MobileBottomBar />
          <FloatingWhatsApp />
        </AppProvider>
      </body>
    </html>
  )
}
