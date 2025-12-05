'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Services
            </Link>

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
            <Link href="/services" className="block text-gray-700 hover:text-accent transition-colors font-medium">
              Services
            </Link>

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
