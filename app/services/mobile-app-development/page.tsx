import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development | CoreX Digital Solutions',
  description: 'Native and cross-platform mobile apps using Flutter, React Native, and robust backends.',
};

export default function MobileAppPage() {
  const tech = ['Flutter', 'React Native', 'TypeScript', 'Node.js', 'Firebase', 'AWS'];
  const included = [
    'iOS & Android builds',
    'App store publishing support',
    'API integration & auth',
    'Offline-first features',
    'Analytics & crash reporting',
    'CI/CD and release management',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Mobile App Development' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Mobile App Development"
        subtitle="High-quality iOS and Android apps that users love."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We build robust, performant mobile apps with clean architecture and smooth UX, ensuring reliability and scalability.</p>
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
        title="Launch your mobile app with confidence"
        subtitle="From MVP to enterprise, we’ve got you covered."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
