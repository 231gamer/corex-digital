import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development | CoreX Digital Solutions',
  description: 'Custom software solutions to digitize workflows, integrate systems, and unlock efficiency.',
};

export default function SoftwarePage() {
  const tech = ['Node.js', 'Python', 'PostgreSQL', 'Prisma', 'Next.js', 'AWS'];
  const included = [
    'Requirements & architecture design',
    'API development and integrations',
    'Authentication & authorization',
    'Database design & migrations',
    'Testing and documentation',
    'Deployment & monitoring',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Software Development' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Software Development"
        subtitle="Build reliable, secure, and scalable software products."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">End-to-end software development—from discovery to deployment—using modern stacks and clean architecture.</p>
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
        </div>
        <aside className="space-y-8">
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
        title="Build the software your business needs"
        subtitle="We design secure, scalable, and maintainable systems."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
