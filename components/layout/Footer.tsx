import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Digital Marketing', href: '/services/branding-marketing' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Cloud & Hosting', href: '/services/cloud-hosting' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">CX</span>
              </div>
              <span className="text-xl font-bold">CoreX Digital</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming businesses with world-class digital solutions for Liberia and global clients.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-1 text-accent" />
                <span className="text-gray-300">info@corexdigital.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-1 text-accent" />
                <span className="text-gray-300">+231 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <span className="text-gray-300">Monrovia, Liberia</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'var(--border-gray)' }}>
          <p className="text-gray-400">
            &copy; {currentYear} CoreX Digital Solutions. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
