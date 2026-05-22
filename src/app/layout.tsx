import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import StickyCallButton from '@/components/common/StickyCallButton'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import { AppProvider } from '@/context/AppContext'
import { localSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'My Dentist – Dr. S.M Amin | Best Dentist in Salipur, Cuttack',
  description:
    'My Dentist in Salipur, Cuttack – Expert dental care by Dr. S.M Amin (BDS, S\'O\'A University). Painless RCT, implants, braces, teeth cleaning & more. Call 9692827635.',
  keywords: ['dentist in Salipur', 'dental clinic Cuttack', 'Dr SM Amin', 'RCT Salipur', 'dental implants Cuttack'],
  authors: [{ name: 'Dr. S.M Amin' }],
  creator: 'My Dentist Salipur',
  metadataBase: new URL('https://mydentist-salipur.com'),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
      </head>
      <body className="pb-24 md:pb-0">
        <AppProvider>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyCallButton />
          <MobileBottomBar />
        </AppProvider>
      </body>
    </html>
  )
}
