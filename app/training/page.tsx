'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TrainingPage() {
  const programs = [
    { title: 'Digital Skills', duration: '4-8 weeks', summary: 'Essential workplace tools and digital literacy', price: 'Contact for pricing' },
    { title: 'Frontend Development', duration: '8-12 weeks', summary: 'HTML, CSS, JS/TS, React/Next.js', price: 'Contact for pricing' },
    { title: 'Corporate ICT Training', duration: 'Custom', summary: 'Security, collaboration, automation', price: 'Custom' },
    { title: 'Software Usage', duration: '2-4 weeks', summary: 'Productivity suites and specialized tools', price: 'Contact for pricing' },
    { title: 'Entrepreneurship Training', duration: '4-8 weeks', summary: 'Business models, marketing, operations', price: 'Contact for pricing' },
  ];

  const benefits = [
    'Professional trainers',
    'Hands-on projects',
    'Certificates of completion',
    'Career guidance',
    'Flexible schedules',
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Training' }]} />

      <SectionHeader
        eyebrow="Programs"
        title="Training & Capacity Building"
        subtitle="Practical, instructor-led learning for teams and individuals"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="card">
          <h3 className="text-2xl font-bold text-primary mb-4">Training Benefits</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {benefits.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
        <div id="register" className="card">
          <h3 className="text-2xl font-bold text-primary mb-4">Registration Form</h3>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-lg border" placeholder="Full Name" required />
            <input className="px-4 py-3 rounded-lg border" placeholder="Email" type="email" required />
            <input className="px-4 py-3 rounded-lg border" placeholder="Phone" required />
            <select className="px-4 py-3 rounded-lg border">
              {programs.map((p) => (<option key={p.title}>{p.title}</option>))}
            </select>
            <textarea className="px-4 py-3 rounded-lg border md:col-span-2" placeholder="Message"></textarea>
            <button className="btn-primary md:col-span-2">Submit Registration</button>
          </form>
          <div className="text-sm text-gray-500 mt-2">[Backend Placeholder – To Be Connected to Custom API / Database]</div>
        </div>
      </div>
    </div>
  );
}
