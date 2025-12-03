import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | CoreX Digital Solutions',
  description: 'Insights on Tech, Digital Transformation, Marketing, SME Growth, and Cybersecurity.',
};

const posts = Array.from({ length: 9 }).map((_, i) => ({
  title: `Blog Post ${i + 1}`,
  category: ['Tech', 'Digital Transformation', 'Marketing', 'SME Growth', 'Cybersecurity'][i % 5],
  image: [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=80'
  ][i],
  href: `/blog/post-${i + 1}`,
}));

export default function BlogPage() {
  const categories = ['All', 'Tech', 'Digital Transformation', 'Marketing', 'SME Growth', 'Cybersecurity'];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <SectionHeader
        eyebrow="Insights"
        title="CoreX Blog"
        subtitle="Articles and updates from our team and partners"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <input className="card" placeholder="Search articles..." />
        <select className="card">
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <div className="card">Pagination: Page 1 of 3</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <Link key={i} href={p.href}>
            <div className="card p-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <div className="w-full aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-semibold">{p.category}</span>
                <h3 className="text-xl font-bold text-primary mt-2">{p.title}</h3>
                <span className="text-accent font-semibold">Read More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
