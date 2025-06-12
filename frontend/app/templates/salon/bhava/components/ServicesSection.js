"use client";

import { Scissors, Palette, Sparkles, User, Zap, Heart } from "lucide-react";

export default function ServicesSection() {
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

  return (
    <section id="services" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional beauty and grooming
            services designed for both men and women
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
  );
}
