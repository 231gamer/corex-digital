import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX Design | CoreX Digital Solutions',
  description: 'Human-centered UI/UX design for web and mobile—wireframes, prototypes, and design systems.',
};

export default function UIDesignPage() {
  const tech = ['Figma', 'Design Systems', 'Accessibility', 'Prototyping', 'User Research'];
  const included = [
    'Discovery & user research',
    'Wireframes & prototypes',
    'Visual design & UI kits',
    'Design systems & tokens',
    'Usability testing',
    'Design handoff & specs',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'UI/UX Design' }]} />

      <SectionHeader
        eyebrow="Services"
        title="UI/UX Design"
        subtitle="Beautiful, usable interfaces that drive results."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We design intuitive, accessible experiences that balance aesthetics with usability and business goals.</p>
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
        title="Delight your users with great design"
        subtitle="We create consistent, scalable design systems."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
