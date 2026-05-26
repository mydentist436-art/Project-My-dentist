import type { Metadata } from 'next'
import { FadeInUp } from '@/components/common/MotionWrapper'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Blog & Tips | My Dentist Salepur',
  description:
    'Read our latest articles on oral hygiene, teeth treatments, root canal costs, and dental tips by Dr. S.M Amin.',
  alternates: { canonical: 'https://www.mydentistsalepur.com/blog' },
}

// Placeholder blog data for SEO scaffolding
const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Choose the Best Dentist in Salepur',
    excerpt: 'Finding the right dentist can be overwhelming. Learn what to look for when choosing a dental clinic near you...',
    category: 'Guides',
    date: 'Oct 15, 2024',
    slug: '#',
  },
  {
    id: 2,
    title: 'Root Canal Treatment Cost in Odisha: What to Expect',
    excerpt: 'Understanding the pricing and process of a root canal treatment in Salepur and Cuttack district. Is it really painful?',
    category: 'Treatments',
    date: 'Oct 10, 2024',
    slug: '#',
  },
  {
    id: 3,
    title: 'Tooth Pain Treatment at Home: When to Visit a Dentist',
    excerpt: 'Dealing with sudden toothache? Try these home remedies, and learn the warning signs that indicate you need emergency dental care.',
    category: 'Tips',
    date: 'Oct 02, 2024',
    slug: '#',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(47, 186, 222, 0.85) 0%, rgba(30, 120, 140, 0.9) 100%), url('/images/hero/patient_info.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center">
          <FadeInUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/15 text-white mb-4">
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dental Insights & Blog
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Expert advice, treatment costs, and oral hygiene tips from Dr. S.M Amin.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <FadeInUp key={post.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-50 hover:shadow-card-hover transition-shadow h-full flex flex-col group">
                  <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-800">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-gray-400 font-medium mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2FBADE] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <Link href={post.slug} className="inline-flex items-center gap-2 text-sm font-semibold text-[#2FBADE] hover:text-[#1587a3] transition-colors mt-auto">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
