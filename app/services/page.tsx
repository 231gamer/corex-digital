'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Code2, Megaphone, Palette, Headphones, Cloud, GraduationCap,
  ArrowRight, Zap, Shield, Sparkles, Cpu
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
  { name: 'AI & Automation Solutions', icon: Cpu, href: '/services/ai-automation', desc: 'Chatbots, RPA, machine learning models, and workflow automation.', tags: ['ChatGPT', 'RPA', 'Python AI'], gradient: 'from-purple-600 to-pink-600' }, // ← NEW 9th service
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero – unchanged, still fire */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rich-black via-slate-900 to-rich-black pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent"></div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">9 Core Services • 150+ Projects Delivered</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">
            We Build What Others Can’t
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            End-to-end digital solutions that don’t just work — they dominate.
          </p>
        </motion.div>
      </section>

      {/* Services Grid – NOW 3 PER ROW ON LG+ */}
      <section className="py-24 -mt-16 relative z-20">
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

      {/* FINAL CTA – NOW WITH HIGH-RES IMAGE BACKGROUND */}
      <section className="relative py-40 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')"}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-rich-black/80"></div>
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
          className="container-custom relative z-10 text-center text-white"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to <span className="text-accent">Dominate</span> Your Industry?
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let’s build something extraordinary together. No excuses. No delays. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote" className="btn-primary bg-accent text-rich-black hover:bg-accent/90 text-xl px-12 py-6 font-bold inline-flex items-center justify-center">
              <Zap className="w-7 h-7 mr-3" />
              Start Your Project Now
            </Link>
            <Link href="/portfolio" className="text-white border-2 border-white hover:bg-white hover:text-rich-black px-12 py-6 rounded-full font-bold text-xl transition-all">
              See Our Latest Work →
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}