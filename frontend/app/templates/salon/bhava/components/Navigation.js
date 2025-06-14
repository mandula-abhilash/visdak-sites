"use client";

import { useState, useEffect } from "react";
import { Scissors, Menu, X, MessageCircle, Phone } from "lucide-react";

export default function Navigation({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20 w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Scissors className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-600 mr-2 flex-shrink-0" />
              <span className="text-lg lg:text-xl font-bold text-gray-900 truncate">
                {business.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a
                href={`tel:${business.contact.phone}`}
                className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center font-medium"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
              {/* Mobile WhatsApp button */}
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              {/* Hamburger menu */}
              <button
                className="mobile-menu-container p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="mobile-menu-container fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Scissors className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                  <span className="text-lg font-bold text-gray-900 truncate">
                    {business.name}
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA Section */}
              <div className="px-6 py-6 border-t border-gray-200 space-y-4">
                <a
                  href={`tel:${business.contact.phone}`}
                  onClick={handleLinkClick}
                  className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">
                    Call {business.contact.phone}
                  </span>
                </a>

                <a
                  href={`https://wa.me/${business.contact.phone.replace(
                    /\D/g,
                    ""
                  )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                  onClick={handleLinkClick}
                  className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">Book via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
