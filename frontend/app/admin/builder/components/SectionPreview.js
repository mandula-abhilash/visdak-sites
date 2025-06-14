"use client";

import {
  Star,
  Zap,
  Heart,
  Shield,
  Award,
  Target,
  ChevronRight,
} from "lucide-react";

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
      case "hero-basic":
        return <HeroSection {...props} />;
      case "hero-split":
        return <HeroSplitSection {...props} />;
      case "hero-modern":
        return <HeroModernSection {...props} />;
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

function HeroSplitSection({ title, subtitle, image, cta }) {
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

function HeroModernSection({ title, subtitle, announcement, logo, cta }) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                {logo && (
                  <img
                    className="h-11"
                    src={logo}
                    alt="Company Logo"
                    style={{
                      filter: `hue-rotate(${getHueRotation(
                        getPrimaryColor("midnight")
                      )}deg)`,
                    }}
                  />
                )}
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  {announcement && (
                    <a href="#" className="inline-flex space-x-6">
                      <span
                        className="rounded-full px-3 py-1 text-sm/6 font-semibold ring-1 ring-inset"
                        style={{
                          backgroundColor: `${getPrimaryColor("midnight")}10`,
                          color: getPrimaryColor("midnight"),
                          borderColor: `${getPrimaryColor("midnight")}20`,
                        }}
                      >
                        {announcement.badge}
                      </span>
                      <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                        <span>{announcement.text}</span>
                        <ChevronRight className="size-5 text-gray-400" />
                      </span>
                    </a>
                  )}
                </div>
                <h1
                  className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
                  style={{ fontFamily: getFontFamily("inter") }}
                >
                  {title}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  {subtitle}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      backgroundColor: getPrimaryColor("midnight"),
                      focusVisibleOutlineColor: getPrimaryColor("midnight"),
                    }}
                  >
                    {cta?.primary?.text || "Documentation"}
                  </button>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    {cta?.secondary?.text || "View on GitHub"}{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 md:-mr-20 lg:-mr-36"
              style={{
                boxShadow: `0 25px 50px -12px ${getPrimaryColor("midnight")}10`,
                borderColor: `${getPrimaryColor("midnight")}10`,
              }}
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div
                className="[clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]"
                style={{ backgroundColor: getPrimaryColor("midnight") }}
              >
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                  style={{
                    backgroundColor: `${getPrimaryColor("midnight")}20`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <div className="text-green-400 text-sm font-mono">
                          <div className="mb-2">{"// Your code example"}</div>
                          <div className="text-blue-300">
                            {"import"}{" "}
                            <span className="text-yellow-300">
                              {"{ useState }"}
                            </span>{" "}
                            <span className="text-blue-300">from</span>{" "}
                            <span className="text-green-300">'react'</span>
                          </div>
                          <div className="mt-2 text-purple-300">
                            {"function"}{" "}
                            <span className="text-yellow-300">App</span>() {"{"}
                          </div>
                          <div className="ml-4 text-gray-300">
                            {"return"}{" "}
                            <span className="text-red-300">
                              {"<div>Hello World</div>"}
                            </span>
                          </div>
                          <div className="text-purple-300">{"}"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
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

function getHueRotation(color) {
  // Simple hue rotation calculation for logo color adaptation
  const colorMap = {
    "#2C3E50": 0,
    "#2ECC71": 120,
    "#E74C3C": 0,
    "#B7935B": 45,
    "#8E44AD": 270,
    "#FF5E62": 0,
    "#2E86DE": 210,
    "#27AE60": 120,
    "#6C5CE7": 250,
    "#1E272E": 0,
    "#00B894": 160,
  };
  return colorMap[color] || 0;
}
