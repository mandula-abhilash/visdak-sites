'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Elegant Living Room Curtains",
      description: "Custom designed flowing curtains in neutral tones"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Bedroom Blinds",
      description: "Sleek horizontal blinds for perfect light control"
    },
    {
      url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Luxury Drapes Collection",
      description: "Premium fabric drapes with elegant tie-backs"
    },
    {
      url: "https://images.unsplash.com/photo-1560184897-cc4bbbc5bd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Office Window Treatments",
      description: "Professional commercial blinds installation"
    },
    {
      url: "https://images.unsplash.com/photo-1560185127-6a4e96c5c9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Kitchen Cafe Curtains",
      description: "Charming cafe-style curtains for kitchen windows"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning window treatments that have transformed homes and offices across the region.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-4 ring-blue-600 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}