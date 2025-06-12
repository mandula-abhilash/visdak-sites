"use client";

import { useState } from "react";
import { Scissors, Menu, X, MessageCircle } from "lucide-react";

export default function Navigation({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-yellow-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">
              {business.name}
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href={`https://wa.me/${business.contact.phone.replace(
              /\D/g,
              ""
            )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </a>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
