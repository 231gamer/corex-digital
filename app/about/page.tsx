import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Facebook, Lightbulb, Linkedin, Phone } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About Us | CoreX Digital Solutions',
  description:
    'We build powerful, high-performance digital solutions that blend strategy, creativity, and engineering to help businesses in Liberia and beyond grow with confidence.',
};

const heroImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
];

const approach = [
  {
    badge: '01',
    title: 'Project Planning',
    bullets: ['Project Research', 'Competitive Analysis', 'Define Flow', 'Requirements Gathering'],
  },
  {
    badge: '02',
    title: 'Development',
    bullets: ['UI/UX Implementation', 'System Development', 'Execution', 'Error Fixing', 'Iterations'],
  },
  {
    badge: '03',
    title: 'Quick Support',
    bullets: ['Quality Assurance', 'Product Launch', 'Maintenance', 'Continuous Support'],
  },
];

const team = [
  {
    role: 'CEO & Founder',
    name: 'Amara Johnson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'Leads vision, growth, and partnerships with clarity and conviction.',
  },
  {
    role: 'Lead Developer',
    name: 'Kofi Mensah',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: 'Engineers reliable, scalable systems with modern stacks.',
  },
  {
    role: 'UI/UX Designer',
    name: 'Lena Roberts',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    description: 'Crafts intuitive, elegant experiences with business intent.',
  },
  {
    role: 'Project Manager',
    name: 'Samuel Carter',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    description: 'Keeps teams aligned, accountable, and shipping on time.',
  },
  {
    role: 'Marketing Lead',
    name: 'Imani Blake',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80',
    description: 'Connects brand stories to the audiences that matter most.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="section-padding container-custom space-y-16">
        <Breadcrumb items={[{ label: 'About' }]} />

        {/* Top About Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll className="relative">
            <div className="absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-12 right-4 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-5">
              <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-3xl bg-secondary shadow-2xl ring-4 ring-white">
                <img
                  src={heroImages[0]}
                  alt="CoreX team collaborating"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-primary shadow-lg backdrop-blur">
                  Team Excellence
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-2xl translate-y-6 ring-4 ring-white">
                <img
                  src={heroImages[1]}
                  alt="Strategy session"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/25" />
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg">
                  <Lightbulb className="h-5 w-5" />
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-2xl -translate-y-6 ring-4 ring-white">
                <img
                  src={heroImages[2]}
                  alt="Design review"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/15" />
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                  <span className="text-xl font-bold">+</span>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-1/2 flex h-32 w-32 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent via-primary to-accent shadow-2xl backdrop-blur animate-spin-slow">
              <div className="absolute inset-3 rounded-full border-2 border-white/30" />
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-inner">
                <span className="text-2xl font-bold text-gradient">CX</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-in" className="space-y-6 lg:pl-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              About Our Company <span className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
              We Build Powerful Digital Solutions That Transform Businesses.
            </h1>
            <p className="text-lg text-gray-600">
              Our agency delivers cutting-edge technology, creative digital strategies, and high-performance systems
              built for scale. We combine innovation, strategy, and execution to empower businesses across Liberia and
              the world.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-2xl border border-secondary/80 bg-white p-5 shadow-lg">
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <p className="text-base font-semibold text-primary">
                  We bring years of combined expertise across digital product design, engineering, and consulting.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Discover More
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="inline-flex items-center gap-3 rounded-full border border-secondary/90 bg-white px-4 py-3 text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="rounded-full bg-accent/10 p-2 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs uppercase tracking-wide text-gray-500">Call Anytime</div>
                    <div className="text-sm font-semibold text-primary">+231 777 123 456</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0b1330]" />
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />

        <div className="container-custom relative z-10 space-y-10">
          <AnimateOnScroll className="text-center" animation="fade-in">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              How It Works
              <span className="h-px w-8 bg-gradient-to-r from-white/70 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Our Approach Is To Create</h2>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((item, idx) => (
              <AnimateOnScroll
                key={item.badge}
                animation="slide-up"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background:
                      idx === 0
                        ? 'radial-gradient(circle at 20% 20%, rgba(255,193,7,0.18), rgba(37,99,235,0.08), transparent 55%)'
                        : idx === 1
                        ? 'radial-gradient(circle at 80% 20%, rgba(37,99,235,0.18), rgba(10,26,47,0.8), transparent 60%)'
                        : 'radial-gradient(circle at 50% 60%, rgba(255,193,7,0.16), rgba(37,99,235,0.05), transparent 60%)',
                  }}
                />

                <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 animate-float-slow">
                  <div className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-white shadow-lg ring-1 ring-white/15">
                    {item.badge}
                  </div>
                </div>

                <div className="relative mt-6 space-y-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <div className="flex flex-col gap-3">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 group-hover:border-white/30 group-hover:text-white"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>

                  <div className="relative h-28">
                    <div className="absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(37,99,235,0.2),rgba(10,26,47,0.9))] opacity-90 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:translate-y-[-6px] animate-float-slow" />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding container-custom">
        <AnimateOnScroll className="mb-12 text-center" animation="fade-in">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Team Members
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <h2 className="text-3xl font-bold text-primary md:text-5xl">Meet Our Skilled and Passionate Team</h2>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <AnimateOnScroll
              key={member.role}
              animation="slide-up"
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.role}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Plus Icon Button - Visible by default */}
                <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-light text-primary shadow-xl transition-all duration-500 group-hover:scale-0 group-hover:rotate-90 group-hover:opacity-0">
                  +
                </div>

                {/* Social Media Icons - Hidden by default, pop up on hover */}
                <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <Link 
                    href="https://facebook.com" 
                    aria-label={`${member.name} on Facebook`} 
                    className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white text-primary shadow-xl transition-all duration-500 hover:bg-[#1877F2] hover:text-white group-hover:scale-100"
                    style={{ transitionDelay: '100ms' }}
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    aria-label={`${member.name} on LinkedIn`} 
                    className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white text-primary shadow-xl transition-all duration-500 hover:bg-[#0A66C2] hover:text-white group-hover:scale-100"
                    style={{ transitionDelay: '200ms' }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://x.com" 
                    aria-label={`${member.name} on X`} 
                    className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white text-primary shadow-xl transition-all duration-500 hover:bg-black hover:text-white group-hover:scale-100"
                    style={{ transitionDelay: '300ms' }}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="space-y-2 px-6 pb-6 pt-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{member.role}</p>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
