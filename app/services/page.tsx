import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Code, Globe, Smartphone, Megaphone, PenTool, Headphones, Cloud, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | CoreX Digital Solutions',
  description: 'Explore our services: Websites, Mobile Apps, Software, Digital Marketing, UI/UX, IT Support, Cloud & Hosting, Training & Capacity Building.',
};

const services = [
  { icon: Globe, title: 'Website & Web App Development', href: '/services/website-development', desc: 'Modern, scalable, SEO-friendly web solutions.' },
  { icon: Smartphone, title: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'High-performance native and cross-platform apps.' },
  { icon: Code, title: 'Software Development', href: '/services/software-development', desc: 'Custom software to automate and optimize operations.' },
  { icon: Megaphone, title: 'Branding & Digital Marketing', href: '/services/branding-marketing', desc: 'Growth-focused digital strategies and campaigns.' },
  { icon: PenTool, title: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Human-centered design for delightful experiences.' },
  { icon: Headphones, title: 'IT Support & Consultancy', href: '/services/it-support', desc: 'Reliable support and expert technology guidance.' },
  { icon: Cloud, title: 'Cloud & Hosting Solutions', href: '/services/cloud-hosting', desc: 'Secure, scalable infrastructure and deployments.' },
  { icon: GraduationCap, title: 'Training & Capacity Building', href: '/services/training', desc: 'Hands-on training programs for teams and individuals.' },
];

export default function ServicesPage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Services' }]} />

      <SectionHeader
        eyebrow="Our Capabilities"
        title="End-to-End Digital Services"
        subtitle="From idea to launch—web, mobile, software, cloud, design, and more"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Link key={i} href={s.href}>
            <div className="card h-full hover:scale-105 transition-transform cursor-pointer">
              <s.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <span className="text-accent font-semibold flex items-center">View Service <ArrowRight className="ml-2 w-4 h-4" /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
