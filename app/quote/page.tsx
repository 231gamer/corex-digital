'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';

export default function QuotePage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Request a Quote' }]} />

      <SectionHeader
        eyebrow="Estimate"
        title="Get Your Estimate"
        subtitle="Tell us about your project and we’ll get back shortly"
        align="left"
      />

      <div className="card">
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-lg border" placeholder="Full Name" required />
          <input className="px-4 py-3 rounded-lg border" placeholder="Organization" />
          <input className="px-4 py-3 rounded-lg border" placeholder="Email" type="email" required />
          <input className="px-4 py-3 rounded-lg border" placeholder="Phone" />

          <select className="px-4 py-3 rounded-lg border md:col-span-1">
            {['Website','Mobile App','Software','Branding','UI/UX','IT Support','Cloud & Hosting','Training'].map((s) => (<option key={s}>{s}</option>))}
          </select>

          <select className="px-4 py-3 rounded-lg border md:col-span-1">
            {['< $1k', '$1k–$5k', '$5k–$10k', '$10k–$25k', '$25k+'].map((b) => (<option key={b}>{b}</option>))}
          </select>

          <select className="px-4 py-3 rounded-lg border md:col-span-1">
            {['2–4 weeks', '1–3 months', '3–6 months', 'Flexible'].map((t) => (<option key={t}>{t}</option>))}
          </select>

          <input type="file" className="px-4 py-3 rounded-lg border md:col-span-1" />

          <textarea className="px-4 py-3 rounded-lg border md:col-span-2" placeholder="Detailed Project Description" rows={6} required></textarea>

          <button className="btn-primary md:col-span-2">Get Your Estimate</button>
        </form>
        <div className="text-sm text-gray-500 mt-2">[Backend Placeholder – To Be Connected to Custom API / Database]</div>
      </div>
    </div>
  );
}
