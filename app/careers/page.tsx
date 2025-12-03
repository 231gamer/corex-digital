'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CareersPage() {
  const benefits = [
    'Work with cutting-edge technologies',
    'Collaborative and innovative culture',
    'Professional development opportunities',
    'Competitive compensation',
    'Flexible working arrangements',
    'Impactful projects for Liberia and beyond',
  ];

  const positions = [
    { 
      title: 'Senior Full-Stack Developer', 
      type: 'Full-time', 
      location: 'Monrovia, Liberia',
      description: 'Lead development of complex web applications using Next.js, React, Node.js, and PostgreSQL.'
    },
    { 
      title: 'Mobile App Developer (Flutter)', 
      type: 'Full-time', 
      location: 'Monrovia / Remote',
      description: 'Build cross-platform mobile apps with Flutter for iOS and Android.'
    },
    { 
      title: 'UI/UX Designer', 
      type: 'Full-time', 
      location: 'Monrovia, Liberia',
      description: 'Create beautiful, user-centered designs for web and mobile applications using Figma.'
    },
  ];

  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Careers' }]} />

      <SectionHeader
        eyebrow="Work With Us"
        title="Build the Future at CoreX"
        subtitle="We’re building a world-class team in Liberia and beyond"
        align="left"
      />

      {/* Why Work With Us */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Why Work With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="card flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Open Positions</h3>
        <div className="space-y-6">
          {positions.map((p, i) => (
            <div key={i} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-primary">{p.title}</h4>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <span className="bg-secondary px-3 py-1 rounded-full">{p.type}</span>
                    <span className="bg-secondary px-3 py-1 rounded-full">{p.location}</span>
                  </div>
                </div>
                <a href="#apply" className="btn-primary mt-4 md:mt-0 inline-block">Apply Now</a>
              </div>
              <p className="text-gray-700">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internships */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-4">Internship Opportunities</h3>
        <div className="card">
          <p className="text-gray-700 mb-4">
            We offer internships for students and recent graduates in software development, design, and digital marketing. 
            Gain hands-on experience with real projects and mentorship from industry professionals.
          </p>
          <a href="#apply" className="btn-outline inline-block">Apply for Internship</a>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" className="card max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Apply Now</h3>
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-lg border" placeholder="Full Name" required />
          <input className="px-4 py-3 rounded-lg border" placeholder="Email" type="email" required />
          <input className="px-4 py-3 rounded-lg border" placeholder="Phone" required />
          <select className="px-4 py-3 rounded-lg border" required>
            <option value="">Select Position</option>
            {positions.map((p) => (
              <option key={p.title} value={p.title}>{p.title}</option>
            ))}
            <option value="internship">Internship</option>
          </select>
          <input type="file" className="px-4 py-3 rounded-lg border md:col-span-2" accept=".pdf,.doc,.docx" />
          <textarea className="px-4 py-3 rounded-lg border md:col-span-2" placeholder="Cover Letter / Why you want to join CoreX" rows={6} required></textarea>
          <button className="btn-primary md:col-span-2">Submit Application</button>
        </form>
        <div className="text-sm text-gray-500 mt-2">[Backend Placeholder – To Be Connected to Custom API / Database]</div>
      </div>

      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
          alt="Team collaboration"
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
}
