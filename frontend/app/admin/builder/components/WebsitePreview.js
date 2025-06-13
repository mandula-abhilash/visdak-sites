"use client";

import { Star, Zap, Heart, Shield, Award, Target } from "lucide-react";

const iconMap = {
  star: Star,
  zap: Zap,
  heart: Heart,
  shield: Shield,
  award: Award,
  target: Target,
};

export default function WebsitePreview({ sections, globalSettings }) {
  // Apply global settings styles
  const websiteStyle = {
    fontFamily: getFontFamily(globalSettings.font),
    "--primary-color": getPrimaryColor(globalSettings.colorPalette),
    "--secondary-color": getSecondaryColor(globalSettings.colorPalette),
    "--accent-color": getAccentColor(globalSettings.colorPalette),
  };

  const scrollBehaviorClass = getScrollBehaviorClass(
    globalSettings.scrollBehavior
  );

  return (
    <div style={websiteStyle} className={`min-h-screen ${scrollBehaviorClass}`}>
      {/* Website Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "var(--primary-color)" }}
            ></div>
            <span className="text-xl font-bold text-gray-900">
              Your Website
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-white font-medium"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Add padding for fixed nav */}
      <div className="pt-20">
        {/* Render all sections */}
        {sections.map((section, index) => (
          <div key={section.id} id={`section-${index}`}>
            {renderSection(section.type, section.props)}
          </div>
        ))}

        {/* Website Footer */}
        <footer
          className="py-12 px-6 text-white"
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Your Website</h3>
                <p className="opacity-80">
                  Building amazing experiences for our customers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 opacity-80">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="opacity-80 space-y-2">
                  <p>123 Business Street</p>
                  <p>City, State 12345</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-white/20 text-center opacity-80">
              <p>&copy; 2024 Your Website. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function renderSection(type, props) {
  switch (type) {
    case "hero":
      return <HeroSection {...props} />;
    case "about":
      return <AboutSection {...props} />;
    case "services":
      return <ServicesSection {...props} />;
    case "features":
      return <FeaturesSection {...props} />;
    case "testimonials":
      return <TestimonialsSection {...props} />;
    case "contact":
      return <ContactSection {...props} />;
    default:
      return null;
  }
}

function HeroSection({ title, subtitle, image, cta }) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6 min-h-[80vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 rounded-lg font-medium text-white transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              {cta?.primary?.text || "Get Started"}
            </button>
            <button
              className="px-8 py-4 rounded-lg font-medium border-2 transition-colors hover:bg-opacity-10"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
            >
              {cta?.secondary?.text || "Learn More"}
            </button>
          </div>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={image} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ title, description, image, features }) {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img src={image} alt="About" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          {features && (
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-4"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ title, description, services }) {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span
                  className="text-2xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {service.price}
                </span>
                <button
                  className="px-6 py-3 rounded-lg text-white font-medium transition-transform hover:scale-105"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ title, description, features }) {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features?.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Star;
            return (
              <div key={feature.id} className="text-center group">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ title, description, testimonials }) {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < (testimonial.rating || 5)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ title, description, phone, email, address }) {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Phone
              </h3>
              <p className="text-lg text-gray-600">{phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Email
              </h3>
              <p className="text-lg text-gray-600">{email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Address
              </h3>
              <p className="text-lg text-gray-600">{address}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Send us a message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-medium text-white text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper functions for global settings
function getFontFamily(font) {
  const fonts = {
    inter: '"Inter", sans-serif',
    roboto: '"Roboto", sans-serif',
    poppins: '"Poppins", sans-serif',
    playfair: '"Playfair Display", serif',
    montserrat: '"Montserrat", sans-serif',
  };
  return fonts[font] || fonts.inter;
}

function getPrimaryColor(palette) {
  const colors = {
    midnight: "#2C3E50",
    emerald: "#2ECC71",
    coral: "#E74C3C",
    gold: "#B7935B",
    plum: "#8E44AD",
    navy: "#2C3E50",
    sunset: "#FF5E62",
    ocean: "#2E86DE",
    forest: "#27AE60",
    silicon: "#6C5CE7",
    carbon: "#1E272E",
    neon: "#00B894",
  };
  return colors[palette] || colors.midnight;
}

function getSecondaryColor(palette) {
  const colors = {
    midnight: "#34495E",
    emerald: "#27AE60",
    coral: "#C0392B",
    gold: "#8E793E",
    plum: "#9B59B6",
    navy: "#1A2530",
    sunset: "#FF9966",
    ocean: "#1B5299",
    forest: "#219653",
    silicon: "#5B52D1",
    carbon: "#2C3A47",
    neon: "#00A885",
  };
  return colors[palette] || colors.midnight;
}

function getAccentColor(palette) {
  const colors = {
    midnight: "#3498DB",
    emerald: "#16A085",
    coral: "#E67E22",
    gold: "#AD8A3B",
    plum: "#6C3483",
    navy: "#3498DB",
    sunset: "#FF7F50",
    ocean: "#54A0FF",
    forest: "#2ECC71",
    silicon: "#897DEC",
    carbon: "#3498DB",
    neon: "#55EFC4",
  };
  return colors[palette] || colors.midnight;
}

function getScrollBehaviorClass(behavior) {
  const classes = {
    normal: "",
    smooth: "scroll-smooth",
    parallax: "parallax-container",
    fade: "fade-in-sections",
  };
  return classes[behavior] || "";
}
