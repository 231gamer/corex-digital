import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Megaphone, 
  Cloud, 
  Headphones,
  CheckCircle,
  ArrowRight,
  Users,
  Building,
  GraduationCap,
  Briefcase,
  Rocket,
  Target
} from 'lucide-react';
import { Trophy, Star, MapPin } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites that drive results',
      href: '/services/website-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
      href: '/services/mobile-app-development'
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software tailored to your needs',
      href: '/services/software-development'
    },
    {
      icon: Megaphone,
      title: 'Branding & Marketing',
      description: 'Digital strategies that amplify your brand',
      href: '/services/branding-marketing'
    },
    {
      icon: Cloud,
      title: 'Cloud & Hosting',
      description: 'Reliable, scalable cloud infrastructure',
      href: '/services/cloud-hosting'
    },
    {
      icon: Headphones,
      title: 'IT Support',
      description: 'Dedicated technical support and consultancy',
      href: '/services/it-support'
    },
  ];

  const whyChooseUs = [
    {
      title: 'Global-Standard Quality',
      description: 'World-class solutions that compete internationally'
    },
    {
      title: 'Skilled Local Talent',
      description: 'Expert Liberian tech professionals'
    },
    {
      title: 'Fast Delivery',
      description: 'Efficient project timelines with strong support'
    },
    {
      title: 'Affordable Pricing',
      description: 'Enterprise solutions accessible to SMEs'
    },
    {
      title: 'Innovation-Driven',
      description: 'Cutting-edge technology and modern practices'
    },
  ];

  const portfolio = [
    {
      title: 'E-Commerce Platform',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/ecommerce-platform'
    },
    {
      title: 'NGO Management System',
      industry: 'Non-Profit',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/ngo-system'
    },
    {
      title: 'Mobile Banking App',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/banking-app'
    },
    {
      title: 'School Management Portal',
      industry: 'Education',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/school-portal'
    },
    {
      title: 'Government Data System',
      industry: 'Government',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/gov-data-system'
    },
    {
      title: 'Corporate Website',
      industry: 'Corporate',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      href: '/portfolio/corporate-site'
    },
  ];

  const clients = [
    { icon: Briefcase, label: 'SMEs' },
    { icon: Users, label: 'NGOs' },
    { icon: Building, label: 'Government' },
    { icon: GraduationCap, label: 'Schools' },
    { icon: Rocket, label: 'Startups' },
    { icon: Target, label: 'Corporate' },
  ];

  const metrics = [
    { icon: MapPin, value: '50', label: 'World wide branch' },
    { icon: Users, value: '205+', label: 'Team members' },
    { icon: Trophy, value: '08+', label: 'Awarded winner' },
    { icon: Star, value: '35+', label: 'Satisfied clients' },
  ];

  // determine the lowest numeric value among metrics to use as starting point
  const metricNumbers = metrics.map((m) => parseInt(String(m.value).replace(/\D/g, ''), 10) || 0);
  const lowestMetric = Math.min(...metricNumbers);

  const testimonials = [
    {
      quote: 'CoreX Digital Solutions transformed our online presence completely. Their team delivered beyond expectations.',
      author: 'Sarah Johnson',
      position: 'CEO, TechStart Liberia'
    },
    {
      quote: 'Professional, efficient, and innovative. They built our mobile app with exceptional quality and speed.',
      author: 'Michael Brown',
      position: 'Director, Global NGO'
    },
    {
      quote: 'The best tech agency in Liberia. Their support and expertise are unmatched in the region.',
      author: 'Rebecca Williams',
      position: 'COO, Enterprise Corp'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10 py-20">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transforming Businesses with <span className="text-accent-light">World-Class</span> Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-200">
                We design, build, and deploy high-performance technology solutions for Liberia and global clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary text-lg">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg">
                  View Our Services
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions to power your digital transformation
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} animation="slide-up">
                <Link href={service.href}>
                  <div className="card hover:scale-105 transition-transform cursor-pointer h-full">
                    <service.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <span className="text-accent font-semibold flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Why Choose CoreX?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for digital excellence
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimateOnScroll key={index} animation="slide-up">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses transform digitally
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolio.map((project, index) => (
              <AnimateOnScroll key={index} animation="slide-up">
                <Link href={project.href}>
                  <div className="card p-0 overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-accent font-semibold">
                        {project.industry}
                      </span>
                      <h3 className="text-xl font-bold text-primary mt-2 mb-3">
                        {project.title}
                      </h3>
                      <span className="text-accent font-semibold flex items-center">
                        Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Who We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by diverse organizations across industries
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <AnimateOnScroll key={index} animation="fade-in">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <client.icon className="w-10 h-10 text-accent-light" />
                  </div>
                  <p className="font-semibold text-lg">{client.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics / Stats (inspired by design attachment) */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-stretch text-center md:divide-x divide-y md:divide-y-0 divide-gray-200">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex-1 py-8 px-6 md:py-10 md:px-10">
                    <metric.icon className="mx-auto w-12 h-12 text-accent-light mb-4" />
                    <CountUp value={metric.value} startFrom={lowestMetric} className="text-4xl md:text-5xl font-extrabold text-accent mb-2" />
                    <p className="text-gray-600 font-semibold">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="slide-up">
                <div className="card bg-secondary">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-bold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-xl mb-10 text-gray-200">
                Ready to transform your business with cutting-edge technology? Let's start the conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary bg-white text-accent hover:bg-gray-100">
                  Get a Quote
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Talk to Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
