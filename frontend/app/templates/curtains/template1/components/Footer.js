import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Custom Curtains',
    'Blinds & Shades',
    'Motorized Systems',
    'Commercial Solutions',
    'Repair Services',
    'Free Consultation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Elegant Drapes & Blinds</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming spaces with premium window treatments since 2003. Quality, style, and exceptional service in every project.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-sm text-gray-300">123 Design Avenue, Your City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-sm text-gray-300">info@elegantdrapes.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for design tips and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elegant Drapes & Blinds. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service  
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}