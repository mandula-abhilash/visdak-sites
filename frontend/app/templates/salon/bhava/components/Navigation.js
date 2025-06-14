"use client";

import { useState, useEffect } from "react";
import { Scissors, Menu, X, MessageCircle, Phone } from "lucide-react";

export default function Navigation({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect - this is acceptable as it's a window event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when menu is open - React way
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent event bubbling when clicking inside menu
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleLogoClick = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            {/* Logo - Now clickable */}
            <a
              href="#home"
              onClick={handleLogoClick}
              className="flex items-center flex-shrink-0 min-w-0 group cursor-pointer"
            >
              <Scissors className="h-6 w-6 lg:h-8 lg:w-8 text-[var(--bhava-accent)] mr-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-lg lg:text-xl font-bold text-gray-900 truncate transition-colors duration-200 group-hover:text-[var(--bhava-accent)]">
                {business.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--bhava-accent)] transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a
                href={`tel:${business.contact.phone}`}
                className="flex items-center text-gray-700 hover:text-[var(--bhava-accent)] transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                className="bg-[var(--bhava-success)] hover:bg-[var(--bhava-success-hover)] text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center font-medium"
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
                className="bg-[var(--bhava-success)] hover:bg-[var(--bhava-success-hover)] text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              {/* Hamburger menu */}
              <button
                className="p-2 rounded-lg text-gray-700 hover:text-[var(--bhava-accent)] hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--bhava-accent)]"
                onClick={handleMenuToggle}
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

      {/* Mobile Menu Overlay - React way with conditional rendering */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop - onClick handler instead of event listener */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />

          {/* Menu Panel - stopPropagation to prevent backdrop click */}
          <div
            className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden"
            onClick={handleMenuClick}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header - Also clickable */}
              <div className="px-6 py-4 border-b border-gray-200">
                <a
                  href="#home"
                  onClick={handleLogoClick}
                  className="flex items-center group cursor-pointer"
                >
                  <Scissors className="h-6 w-6 text-[var(--bhava-accent)] mr-3 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-lg font-bold text-gray-900 truncate transition-colors duration-200 group-hover:text-[var(--bhava-accent)]">
                    {business.name}
                  </span>
                </a>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[var(--bhava-accent)] hover:bg-[var(--bhava-accent-light)] rounded-lg transition-colors duration-200"
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
                  className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-gray-700 hover:text-[var(--bhava-accent)] hover:bg-gray-50 rounded-lg transition-colors duration-200"
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
                  className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium bg-[var(--bhava-success)] hover:bg-[var(--bhava-success-hover)] text-white rounded-lg transition-colors duration-200"
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
