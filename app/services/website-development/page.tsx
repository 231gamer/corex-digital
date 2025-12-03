import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Services | CoreX Digital Solutions',
  description: 'Modern, responsive, SEO-friendly websites and web apps built with Next.js, React, and Tailwind.',
};

export default function WebsiteDevPage() {
  const tech = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Vercel'];
  const included = [
    'Responsive design (mobile-first)',
    'SEO optimization and performance',
    'CMS setup (headless-ready)',
    'Analytics & tracking',
    'Accessibility best practices',
    'Hosting & deployment guidance',
  ];
  const whoFor = ['SMEs', 'NGOs', 'Government', 'Startups', 'Corporate'];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Website Development' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Website Development"
        subtitle="High-performance websites and web apps that convert and scale."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We craft modern, responsive websites and web applications with best-in-class performance and SEO. Built with Next.js and a scalable architecture for future growth.</p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">What’s Included</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {included.map((i, idx) => (<li key={idx}>{i}</li>))}
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (<TechBadge key={t} label={t} />))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Portfolio Samples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80'
              ].map((img, n) => (
                <div key={n} className="w-full aspect-video rounded-lg overflow-hidden">
                  <img src={img} alt={`Website ${n + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Who This Is For</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {whoFor.map((w) => (<li key={w}>{w}</li>))}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Pricing / Engagement</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Fixed project</li>
              <li>Monthly retainer</li>
              <li>Hourly support package</li>
            </ul>
          </div>
          <a href="/quote" className="btn-primary block text-center">Request a Quote</a>
        </aside>
      </div>

      <CTA
        title="Ready to launch a world-class website?"
        subtitle="We design, build, and deploy websites that convert."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
