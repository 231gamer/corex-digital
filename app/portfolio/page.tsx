import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | CoreX Digital Solutions',
  description: 'Explore our projects across Web, Mobile, Software, and Branding with case studies and results.',
};

const projects = Array.from({ length: 9 }).map((_, i) => ({
  title: `Project Title ${i + 1}`,
  category: ['Web', 'Mobile', 'Software', 'Branding'][i % 4],
  image: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80'
  ][i],
  href: `/portfolio/case-${i + 1}`,
}));

export default function PortfolioPage() {
  const filters = ['All', 'Web', 'Mobile', 'Software', 'Branding'];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Portfolio' }]} />

      <SectionHeader
        eyebrow="Case Studies"
        title="Our Work"
        subtitle="A selection of projects and case studies across industries"
        align="left"
      />

      <div className="flex gap-3 flex-wrap mb-8">
        {filters.map((f) => (
          <button key={f} className="px-4 py-2 rounded-full bg-secondary text-gray-700 hover:bg-accent hover:text-white transition">
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Link key={i} href={p.href}>
            <div className="card p-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <div className="w-full aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-semibold">{p.category}</span>
                <h3 className="text-xl font-bold text-primary mt-2">{p.title}</h3>
                <span className="text-accent font-semibold">Read Case Study →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
