import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import CTA from '@/components/ui/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training & Capacity Building | CoreX Digital Solutions',
  description: 'Hands-on training programs in digital skills, frontend, corporate ICT, software usage, and entrepreneurship.',
};

export default function ServiceTrainingPage() {
  const programs = [
    { title: 'Digital Skills', duration: '4-8 weeks', summary: 'Essential tools for the modern workplace', price: 'Contact for pricing' },
    { title: 'Frontend Development', duration: '8-12 weeks', summary: 'HTML, CSS, JS/TS, React/Next.js', price: 'Contact for pricing' },
    { title: 'Corporate ICT Training', duration: 'Custom', summary: 'Security, collaboration, digital workflows', price: 'Custom' },
    { title: 'Software Usage', duration: '2-4 weeks', summary: 'Productivity suites and specialized tools', price: 'Contact for pricing' },
    { title: 'Entrepreneurship Training', duration: '4-8 weeks', summary: 'Business models, digital marketing, ops', price: 'Contact for pricing' },
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Training & Capacity Building' }]} />

      <SectionHeader
        eyebrow="Services"
        title="Training & Capacity Building"
        subtitle="Practical, instructor-led programs with certificates."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {programs.map((p, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-bold text-primary">{p.title}</h3>
            <p className="text-gray-600">Duration: {p.duration}</p>
            <p className="text-gray-700 mt-2">{p.summary}</p>
            <p className="text-gray-900 font-semibold mt-2">{p.price}</p>
            <a href="#register" className="btn-primary mt-4 inline-block">Register Now</a>
          </div>
        ))}
      </div>

      <CTA
        title="Upskill your team with CoreX"
        subtitle="Tailored corporate programs and public cohorts available."
        primaryHref="/contact"
        primaryLabel="Talk to Us"
        secondaryHref="/quote"
        secondaryLabel="Get a Quote"
      />
    </div>
  );
}
