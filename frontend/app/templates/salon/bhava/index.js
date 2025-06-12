"use client";

import { useState, useEffect } from "react";
import {
  Scissors,
  Menu,
  X,
  MessageCircle,
  Palette,
  Sparkles,
  User,
  Zap,
  Heart,
  Star,
  MapPin,
  Phone,
  Clock,
  Award,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function SalonTemplate2({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize animations on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Scissors,
      title: "Hair Cutting & Styling",
      description:
        "Professional precision cuts, modern styling, and creative designs tailored to your personality and lifestyle.",
      price: "Starting from $45",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description:
        "Expert color treatments including highlights, balayage, ombre, and fashion colors using premium products.",
      price: "Starting from $85",
    },
    {
      icon: Sparkles,
      title: "Hair Treatments",
      description:
        "Nourishing treatments including keratin, deep conditioning, and scalp therapies for healthy hair.",
      price: "Starting from $65",
    },
    {
      icon: User,
      title: "Men's Grooming",
      description:
        "Complete grooming services including beard trimming, styling, and traditional barbering techniques.",
      price: "Starting from $35",
    },
    {
      icon: Zap,
      title: "Hair Styling",
      description:
        "Special occasion styling, updos, blowouts, and creative styling for events and photoshoots.",
      price: "Starting from $55",
    },
    {
      icon: Heart,
      title: "Beauty Treatments",
      description:
        "Facial treatments, eyebrow shaping, and other beauty services to complete your look.",
      price: "Starting from $40",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Professional hair coloring transformation",
      category: "Hair Coloring",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZ12I-iSdSc9f3ooNnmXXLhNTtbHwj1Dhh-oP4oetiB0C4HmoiZ8tGfjyqRQsyL6XI3EOXeSpD27lBKzkWkEaKRdP1-MUW4cJ8Ie7uDTof-bbUFrM6hs4XbqC1WFJJxDfAVasj=s1360-w1360-h1020",
      alt: "Modern men's haircut and styling",
      category: "Men's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOuVMTuM3Odn7it9ByFZh7WEOqU7EzFv6VvKPXE=w143-h179-n-k-no-nu",
      alt: "Elegant women's hair styling and treatment",
      category: "Women's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOoMLl6tiX3y21xW4TaM3Mdw3kjK4kMiqv6u0wG=s1360-w1360-h1020",
      alt: "Professional salon workspace and equipment",
      category: "Modern Equipment",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPRAW_nkMME2ee5rNl-sUQ-OBq198O_CuUpddQU=s1360-w1360-h1020",
      alt: "Luxurious salon interior design",
      category: "Luxury Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Creative hair styling and artistic work",
      category: "Creative Styling",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Absolutely amazing experience! The stylist understood exactly what I wanted and delivered beyond my expectations. The salon atmosphere is so relaxing and professional.",
    },
    {
      name: "Michael Chen",
      role: "Business Professional",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: "Best salon experience I've ever had! The team is incredibly talented and the results speak for themselves. I always leave feeling confident and stylish.",
    },
    {
      name: "Emma Rodriguez",
      role: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: "From the moment I walked in, I felt welcomed and valued. The attention to detail and level of service is unmatched. Highly recommend to everyone!",
    },
  ];

  return (
    <div className="font-sans antialiased">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white pt-16"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Redefine Your
            <span className="text-yellow-600 block">Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience premium unisex salon services where style meets
            sophistication. Professional treatments for both men and women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Services
            </a>
            <a
              href={`https://wa.me/${business.contact.phone.replace(
                /\D/g,
                ""
              )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
              className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
            alt="Professional salon interior with modern styling chairs"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About {business.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of excellence in the beauty industry,{" "}
                {business.name} has been the premier destination for
                sophisticated hair styling and beauty treatments. Our unisex
                approach ensures that both men and women receive world-class
                services in a luxurious, welcoming environment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified professionals specializes in cutting-edge
                techniques, from precision cuts and creative coloring to
                advanced hair treatments and styling. We believe that every
                client deserves to look and feel their absolute best.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">
                    5000+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Professional hair stylist working with client"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
                <Award className="h-8 w-8 mb-2" />
                <div className="font-bold">Award Winning</div>
                <div className="text-sm">Salon Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional beauty and
              grooming services designed for both men and women
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-yellow-600/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-yellow-600 font-semibold">
                    {service.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our stunning transformations and creative
              work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial photo`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your look? Contact us today to schedule your
                appointment and experience the luxury of our premium salon
                services.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Salon</div>
                    <div className="text-gray-300">
                      {business.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-300">
                      {business.contact.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Opening Hours</div>
                    <div className="text-gray-300">
                      Mon-Sat: 9AM-8PM | Sun: 10AM-6PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${business.contact.phone.replace(
                    /\D/g,
                    ""
                  )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20${
                    business.name
                  }`}
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Book via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Modern salon reception area"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <Scissors className="h-8 w-8 text-yellow-600 mr-2" />
                <span className="text-2xl font-bold">{business.name}</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                {business.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:bg-yellow-600/30 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-yellow-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:bg-yellow-600/30 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-yellow-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:bg-yellow-600/30 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-yellow-600" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Hair Cutting</span>
                </li>
                <li>
                  <span className="text-gray-300">Hair Coloring</span>
                </li>
                <li>
                  <span className="text-gray-300">Hair Treatments</span>
                </li>
                <li>
                  <span className="text-gray-300">Men's Grooming</span>
                </li>
                <li>
                  <span className="text-gray-300">Hair Styling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 {business.name}. All rights reserved. |
              <a href="#" className="text-yellow-600 hover:underline ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-yellow-600 hover:underline ml-1">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
