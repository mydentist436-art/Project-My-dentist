# My Dentist – Dr. S.M Amin

A production-ready dental clinic website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## 🦷 Clinic Details

- **Clinic Name:** My Dentist
- **Doctor:** Dr. S.M Amin (BDS, S'O'A University)
- **Location:** Under Bank Of Baroda, At-Thana, Kendrapara Rd, Chaka, Salipur, Cuttack, Odisha – 754202
- **Phone:** 9692827635 / 7978409003

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── about/            # About Dr. S.M Amin
│   ├── services/         # Dental services
│   ├── gallery/          # Smile gallery (before/after)
│   ├── patient-info/     # FAQs & hygiene tips
│   ├── contact/          # Contact & appointment form
│   └── api/contact/      # API route for form submission
├── components/
│   ├── layout/           # Navbar, Footer, Container
│   ├── ui/               # Button, Card, SectionTitle, Input, Badge
│   ├── home/             # Hero, ServicesPreview, WhyChooseUs, Testimonials, CTA
│   ├── services/         # ServiceCard, ServicesGrid
│   ├── gallery/          # GalleryGrid (filterable before/after)
│   ├── patient/          # FAQ accordion, hygiene Tips
│   ├── contact/          # ContactForm, Map
│   └── common/           # ScrollToTop, StickyCallButton, MotionWrapper, Loader
├── data/                 # All static content (clinic, services, testimonials, faq)
├── hooks/                # useScroll, useIntersection
├── lib/                  # constants, seo, helpers
├── context/              # AppContext
├── styles/               # animations.css
└── types/                # TypeScript interfaces
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Full-stack React framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| lucide-react | Icon library |
| TypeScript | Type safety |

---

## 🔍 SEO Features

- Per-page metadata with `generateMetadata`
- Local business schema (JSON-LD) in layout
- Canonical URLs on every page
- OpenGraph tags
- Semantic HTML structure
- Alt-text ready image handling

---

## ⚡ Performance

- Lazy loading images with Next.js `<Image />`
- Code splitting via App Router
- Minimal third-party dependencies
- Compressed output (`compress: true` in next.config)
- WebP/AVIF image formats enabled

---

## 📞 Conversion Features

- Sticky **Call Now** button (always visible)
- Click-to-call links (`tel:`) throughout
- WhatsApp quick-contact link
- Validated appointment request form
- Google Maps embed on contact page
- Repeated CTAs on every page

---

## 🛠️ Customisation

1. **Update clinic info:** Edit `src/data/clinic.ts`
2. **Add/edit services:** Edit `src/data/services.ts`
3. **Update testimonials:** Edit `src/data/testimonials.ts`
4. **Change colours:** Edit `tailwind.config.ts`
5. **Add real images:** Place WebP images in `public/images/` and update components

---

## 📧 Contact Form API

The form submits to `/api/contact`. To enable real notifications:
1. Install `nodemailer` or use a service like **Resend** or **Twilio**
2. Add credentials to `.env.local`
3. Update `src/app/api/contact/route.ts`

---

## 🚀 Deployment

Deploy instantly on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or use any Node.js-compatible hosting (Railway, Render, DigitalOcean, etc.)
