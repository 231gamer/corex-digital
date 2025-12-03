import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Support & Consultancy | CoreX Digital Solutions',
  description: 'Reliable IT support, maintenance, audits, and strategic technology consulting for organizations.',
};

export default function ITSupportPage() {
  const tech = ['ITIL Practices', 'Security Audits', 'Monitoring', 'SLA Support'];
  const included = [
    'Helpdesk & ticketing setup',
    'Preventive maintenance',
    'Security & compliance audits',
    'Network and cloud monitoring',
    'Backup and disaster recovery',
    'Strategy & roadmap consulting',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'IT Support & Consultancy' }]} />

      <SectionHeader
        eyebrow="Services"
        title="IT Support & Consultancy"
        subtitle="Reliable support and expert guidance to keep you moving."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We ensure your systems are secure, reliable, and aligned with business objectives—so teams can focus on impact.</p>
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
        title="Keep your tech running smoothly"
        subtitle="We provide responsive support with clear SLAs."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
