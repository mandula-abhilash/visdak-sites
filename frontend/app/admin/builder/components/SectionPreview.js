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

export default function SectionPreview({ section, globalSettings }) {
  const { type, props } = section;

  // Apply global settings styles
  const sectionStyle = {
    fontFamily: getFontFamily(globalSettings.font),
    "--primary-color": getPrimaryColor(globalSettings.colorPalette),
    "--secondary-color": getSecondaryColor(globalSettings.colorPalette),
    "--accent-color": getAccentColor(globalSettings.colorPalette),
  };

  const renderSection = () => {
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
        return (
          <div className="p-8 text-center text-gray-500">
            Unknown section type: {type}
          </div>
        );
    }
  };

  return (
    <div style={sectionStyle} className="min-h-[200px]">
      {renderSection()}
    </div>
  );
}

function HeroSection({ title, subtitle, image, cta }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-6 py-3 rounded-lg font-medium text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              {cta?.primary?.text || "Get Started"}
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium border-2 transition-colors"
              style={{
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
            >
              {cta?.secondary?.text || "Learn More"}
            </button>
          </div>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <img src={image} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function AboutSection({ title, description, image, features }) {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          {features && (
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <img src={image} alt="About" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function ServicesSection({ title, description, services }) {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span
                  className="text-lg font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {service.price}
                </span>
                <button
                  className="px-4 py-2 rounded text-white text-sm font-medium"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesSection({ title, description, features }) {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Star;
            return (
              <div key={feature.id} className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection({ title, description, testimonials }) {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (testimonial.rating || 5)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection({ title, description, phone, email, address }) {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Phone
              </h3>
              <p className="text-gray-600">{phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Email
              </h3>
              <p className="text-gray-600">{email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Address
              </h3>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Send us a message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-md font-medium text-white"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
