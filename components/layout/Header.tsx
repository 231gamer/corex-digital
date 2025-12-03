'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Branding & Digital Marketing', href: '/services/branding-marketing' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'IT Support & Consultancy', href: '/services/it-support' },
    { name: 'Cloud & Hosting Solutions', href: '/services/cloud-hosting' },
    { name: 'Training & Capacity Building', href: '/services/training' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CX</span>
            </div>
            <span className="text-xl font-bold text-primary hidden md:block">
              CoreX Digital Solutions
            </span>
            <span className="text-xl font-bold text-primary md:hidden">
              CoreX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-accent transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-accent transition-colors font-medium flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Blog
            </Link>
            <Link href="/training" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Training
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link href="/" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Blog
            </Link>
            <Link href="/training" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Training
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Contact
            </Link>
            <Link href="/quote" className="btn-primary block text-center">
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
