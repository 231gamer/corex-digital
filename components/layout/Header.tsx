'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CX</span>
            </div>
            <span className="text-xl font-bold text-rich-black hidden md:block">
              CoreX Digital Solutions
            </span>
            <span className="text-xl font-bold text-rich-black md:hidden">
              CoreX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`transition-colors font-medium ${isActive('/') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors font-medium ${isActive('/about') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              About
            </Link>
            <Link href="/services" className={`transition-colors font-medium ${isActive('/services') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Services
            </Link>

            <Link href="/portfolio" className={`transition-colors font-medium ${isActive('/portfolio') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Portfolio
            </Link>
            <Link href="/blog" className={`transition-colors font-medium ${isActive('/blog') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Blog
            </Link>
            <Link href="/training" className={`transition-colors font-medium ${isActive('/training') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Training
            </Link>
            <Link href="/contact" className={`transition-colors font-medium ${isActive('/contact') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
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
            <Link href="/" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Home
            </Link>
            <Link href="/about" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/about') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              About
            </Link>
            <Link href="/services" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/services') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Services
            </Link>

            <Link href="/portfolio" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/portfolio') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Portfolio
            </Link>
            <Link href="/blog" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/blog') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Blog
            </Link>
            <Link href="/training" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/training') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Training
            </Link>
            <Link href="/contact" onClick={handleNavClick} className={`block transition-colors font-medium ${isActive('/contact') ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
              Contact
            </Link>
            <Link href="/quote" onClick={handleNavClick} className="btn-primary block text-center">
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
