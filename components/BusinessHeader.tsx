'use client';

import { Business } from '@/lib/types';
import { CircleUser, Menu, Scissors, Laptop, Wrench, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BusinessHeaderProps {
  business: Business;
}

export default function BusinessHeader({ business }: BusinessHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Map the logo string to the correct Lucide icon
  const LogoIcon = () => {
    switch (business.logo) {
      case 'scissors':
        return <Scissors size={28} />;
      case 'laptop':
        return <Laptop size={28} />;
      case 'wrench':
        return <Wrench size={28} />;
      default:
        return <CircleUser size={28} />;
    }
  };
  
  return (
    <header className="relative">
      {/* Navigation Bar */}
      <div 
        className="fixed w-full z-50 px-4 md:px-6 py-4"
        style={{
          backgroundColor: `${business.theme.primary}`,
          color: 'var(--business-primary-text, #FFFFFF)'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Business Name */}
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              {business.name}
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLinks />
            <button 
              className="px-4 py-2 rounded-md font-medium"
              style={{
                backgroundColor: 'var(--business-primary-text, #FFFFFF)',
                color: business.theme.primary
              }}
            >
              Contact Us
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundColor: business.theme.primary,
          color: 'var(--business-primary-text, #FFFFFF)',
          top: '64px' // Height of the header
        }}
      >
        <div className="flex flex-col p-8 space-y-8 text-lg">
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          <button 
            className="px-4 py-2 rounded-md font-medium w-full"
            style={{
              backgroundColor: 'var(--business-primary-text, #FFFFFF)',
              color: business.theme.primary
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </header>
  );
}

function NavLinks({ mobile = false, onClick = () => {} }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
  ];
  
  return (
    <>
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium hover:opacity-80 transition-opacity",
            mobile && "block py-2"
          )}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
}