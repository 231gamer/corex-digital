'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Code2, Megaphone, Palette, Headphones, Cloud, GraduationCap,
  ArrowRight, Zap, Shield, Sparkles, Cpu, Rocket, ChevronRight, Target
} from 'lucide-react';

const services = [
  { name: 'Website Development', icon: Globe, href: '/services/website-development', desc: 'Blazing-fast, conversion-focused websites built with Next.js, headless CMS, and perfect Core Web Vitals.', tags: ['Next.js', 'WordPress', 'Shopify'], gradient: 'from-emerald-500 to-teal-600' },
  { name: 'Mobile App Development', icon: Smartphone, href: '/services/mobile-app-development', desc: 'Native & cross-platform apps with React Native & Flutter that users love.', tags: ['React Native', 'Flutter', 'Swift'], gradient: 'from-violet-500 to-purple-600' },
  { name: 'Software Development', icon: Code2, href: '/services/software-development', desc: 'Custom ERPs, CRMs, SaaS platforms, and automation tools that scale.', tags: ['Node.js', 'Python', 'Laravel'], gradient: 'from-amber-500 to-orange-600' },
  { name: 'Branding & Digital Marketing', icon: Megaphone, href: '/services/branding-marketing', desc: 'SEO that ranks #1, ads with 8x+ ROAS, content that converts.', tags: ['SEO', 'Google Ads', 'Social Media'], gradient: 'from-pink-500 to-rose-600' },
  { name: 'UI/UX Design', icon: Palette, href: '/services/ui-ux-design', desc: 'Award-winning designs that boost conversion by 40%+.', tags: ['Figma', 'Framer', 'User Research'], gradient: 'from-indigo-500 to-blue-600' },
  { name: 'IT Support & Consultancy', icon: Headphones, href: '/services/it-support', desc: '24/7 helpdesk, vCISO, compliance, and infrastructure audits.', tags: ['24/7', 'NDPR/GDPR', 'Pen Testing'], gradient: 'from-cyan-500 to-blue-600' },
  { name: 'Cloud & Hosting Solutions', icon: Cloud, href: '/services/cloud-hosting', desc: 'AWS, Azure, GCP migrations with 99.99% uptime guarantee.', tags: ['AWS', 'Azure', 'Kubernetes'], gradient: 'from-sky-500 to-cyan-600' },
  { name: 'Training & Capacity Building', icon: GraduationCap, href: '/services/training', desc: 'Corporate bootcamps: React, DevOps, Cloud, Cybersecurity.', tags: ['React', 'DevOps', 'Cybersecurity'], gradient: 'from-lime-500 to-emerald-600' },
  { name: 'AI & Automation Solutions', icon: Cpu, href: '/services/ai-automation', desc: 'Chatbots, RPA, machine learning models, and workflow automation.', tags: ['ChatGPT', 'RPA', 'Python AI'], gradient: 'from-purple-600 to-pink-600' },
];

export default function ServicesPage() {
  return (
    <>
      {/* NEW HERO SECTION - from second code */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#01383D] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="container-custom section-padding relative z-10 grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Modern delivery, measurable outcomes
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              A services hub engineered for speed, polish, and growth.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              Choose the service you need today and keep every specialist on speed dial - designers, engineers, marketers, and cloud experts working as one team to ship fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary shadow-lg shadow-black/10 bg-accent text-rich-black hover:bg-accent/90 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center">
                <Zap className="w-6 h-6 mr-2" />
                Book a strategy call
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold hover:bg-white hover:text-primary transition text-lg"
              >
                Talk with an expert
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Time to kickoff', value: '< 10 days' },
                { label: 'Client satisfaction', value: '98%' },
                { label: 'Ship cadence', value: 'Weekly drops' },
              ].map((stat) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-lg border border-white/15 bg-white/5 p-4"
                >
                  <p className="text-sm text-white/70">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="card bg-white/10 border-white/20 text-white backdrop-blur rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-accent" />
                <p className="uppercase text-xs tracking-wide text-white/80 font-bold">How we partner</p>
              </div>
              <div className="space-y-3 text-white/90">
                <p>
                  Every service plugs into a unified delivery model: discovery, prioritization, rapid prototyping, and
                  production-ready releases.
                </p>
                <p>Expect transparent roadmaps, measurable KPIs, and dedicated leads for design, engineering, and growth.</p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/10 border border-white/20 p-4">
                  <p className="text-sm text-white/70">Visibility</p>
                  <p className="font-semibold">Roadmaps + weekly demos</p>
                </div>
                <div className="rounded-lg bg-white/10 border border-white/20 p-4">
                  <p className="text-sm text-white/70">Ownership</p>
                  <p className="font-semibold">Senior leads on every lane</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid – NOW 3 PER ROW ON LG+ */}
      <section className="py-24 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={service.href}>
                    <div className="group relative h-full bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                      
                      <div className="p-8 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-6 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-rich-black mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-accent to-accent/80 transition-all">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-accent font-bold group-hover:gap-4 transition-all">
                          Explore Service <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar – unchanged */}
      <section className="py-16 bg-rich-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{number:"150+",label:"Projects Delivered"},{number:"98%",label:"Client Retention"},{number:"4.9/5",label:"Average Rating"},{number:"<12h",label:"Support Response"}].map(stat=>
              <div key={stat.label}><div className="text-5xl font-black text-accent">{stat.number}</div><div className="text-gray-400 mt-2">{stat.label}</div></div>
            )}
          </div>
        </div>
      </section>

      {/* REDESIGNED FINAL CTA SECTION - Clean, Modern, Smooth */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with gradient and subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-70"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-slate-100 opacity-20"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-primary">Ready to Transform?</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rich-black mb-6 leading-tight">
              Let's Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                Digital Future Together
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with a team that moves fast, thinks strategically, and delivers exceptional results. 
              From initial concept to market launch and beyond.
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Primary Action Card */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white"
              >
                <div className="absolute top-6 right-6 opacity-10">
                  <Zap className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="font-semibold uppercase tracking-wide text-sm">Kickstart Your Project</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Start with a Free Strategy Session</h3>
                  <p className="text-white/80 mb-6">
                    Get a customized roadmap and timeline for your project with our senior team.
                  </p>
                  <Link 
                    href="/quote" 
                    className="inline-flex items-center justify-between w-full px-6 py-4 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-all group-hover:shadow-lg"
                  >
                    <span>Get Your Custom Proposal</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Secondary Action Card */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-6 right-6 opacity-10">
                  <Rocket className="w-16 h-16 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold uppercase tracking-wide text-sm text-primary">Explore First</span>
                  </div>
                  <h3 className="text-2xl font-bold text-rich-black mb-4">See Our Work in Action</h3>
                  <p className="text-gray-600 mb-6">
                    Browse our portfolio of successful projects across industries and platforms.
                  </p>
                  <Link 
                    href="/portfolio" 
                    className="inline-flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-xl font-bold hover:from-primary/20 hover:to-accent/20 transition-all group-hover:shadow-md"
                  >
                    <span>View Case Studies</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm mb-6">Join 200+ satisfied clients including</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="text-lg font-semibold text-gray-400">Startups</div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="text-lg font-semibold text-gray-400">SMBs</div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="text-lg font-semibold text-gray-400">Enterprises</div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="text-lg font-semibold text-gray-400">Agencies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}