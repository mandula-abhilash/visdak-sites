"use client";

import { Scissors, Palette, Sparkles, User, Zap, Heart } from "lucide-react";

export default function ServicesSection({ business }) {
  console.log(business);

  if (!business || !business.services || business.services.length === 0) {
    return null;
  }

  // Map service names to icons
  const getServiceIcon = (serviceName) => {
    const name = serviceName.toLowerCase();
    if (name.includes("cut") || name.includes("styling")) return Scissors;
    if (name.includes("color")) return Palette;
    if (name.includes("treatment")) return Sparkles;
    if (name.includes("men") || name.includes("groom")) return User;
    if (name.includes("style")) return Zap;
    if (name.includes("beauty") || name.includes("facial")) return Heart;
    return Scissors; // default icon
  };

  return (
    <section
      id="services"
      className="py-20 bg-[var(--template-background-light)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--template-font-heading)" }}
          >
            Our Premium Services
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--template-font-body)" }}
          >
            Discover our comprehensive range of professional beauty and grooming
            services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.services.map((service, index) => {
            const IconComponent = getServiceIcon(service.name);
            return (
              <div
                key={service.id || index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-[var(--template-accent)]" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--template-font-heading)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  {service.description}
                </p>
                <div
                  className="text-[var(--template-accent)] font-semibold"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  {service.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
