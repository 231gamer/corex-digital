import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from '@/components/ui/TechBadge';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding & Digital Marketing | CoreX Digital Solutions',
  description: 'Strategy, branding, content, and campaigns that amplify your reach and drive growth.',
};

export default function MarketingPage() {
  const tech = ['SEO', 'Google Analytics', 'Meta Ads', 'Email (Resend)', 'Content Strategy'];
  const included = [
    'Brand strategy & visual identity',
    'SEO & content marketing',
    'Social media & paid campaigns',
    'Landing pages & funnels',
    'Analytics & reporting',
    'Optimization & growth loops',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Branding & Digital Marketing' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Branding & Digital Marketing"
        subtitle="Build a memorable brand and drive measurable growth."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
            <p className="text-gray-700">We craft growth strategies across content, SEO, and paid channels with data-driven experimentation and consistent brand narrative.</p>
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
        title="Grow your brand and revenue"
        subtitle="We turn strategy into measurable outcomes."
        primaryHref="/quote"
        primaryLabel="Request a Quote"
        secondaryHref="/contact"
        secondaryLabel="Talk to Us"
      />
    </div>
  );
}
