"use client";

import { Check } from "lucide-react";

export default function ListWithIcons({ title, description, services }) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-lg border p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: "var(--business-accent)" }}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <span
                      className="text-lg font-bold"
                      style={{ color: "var(--business-accent)" }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
