import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud & Hosting Solutions | CoreX Digital Solutions',
  description: 'Secure, scalable cloud infrastructure and hosting on AWS, Vercel, and modern platforms.',
};

export default function CloudHostingPage() {
  const tech = ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Monitoring'];
  const included = [
    'Cloud architecture & provisioning',
    'CI/CD pipelines & environments',
    'Monitoring & alerting',
    'Security & backups',
    'Cost optimization',
    'Disaster recovery planning',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Cloud & Hosting' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Cloud & Hosting Solutions"
        subtitle="Run confidently with secure, scalable infrastructure."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We plan, provision, and manage infrastructure with best practices—so your apps are fast, secure, and resilient.</p>
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
        title="Deploy with confidence on the cloud"
        subtitle="We align infrastructure with your goals and budget."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />

      <div className="mt-8 text-sm text-gray-500">[Backend Placeholder – To Be Connected to Custom API / Database]</div>
    </div>
  );
}
