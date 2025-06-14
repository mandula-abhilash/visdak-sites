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

function HeroSplitSection({ title, subtitle, image, cta }) {
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

function HeroModernSection({ title, subtitle, announcement, logo, cta }) {
  return (
    <section id="home" className="bg-white">
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
                          backgroundColor: `var(--primary-color)10`,
                          color: "var(--primary-color)",
                          borderColor: `var(--primary-color)20`,
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
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  {title}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  {subtitle}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      focusVisibleOutlineColor: "var(--primary-color)",
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
                boxShadow: `0 25px 50px -12px var(--primary-color)10`,
                borderColor: `var(--primary-color)10`,
              }}
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div
                className="[clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                  style={{ backgroundColor: `var(--primary-color)20` }}
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
