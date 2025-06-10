'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const whatsappNumber = "1234567890"; // Replace with actual business number
  const whatsappMessage = "Hi! I'm interested in your curtain services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Elegant curtains in modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Elegant Drapes & Blinds
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Transform your space with custom curtains, blinds, and premium window treatments designed to perfection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us Now
          </a>
          
          <a
            href="tel:+1234567890"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}