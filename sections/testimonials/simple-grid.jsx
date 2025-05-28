"use client";

import { Quote } from "lucide-react";

export default function SimpleGrid({ title, description, testimonials }) {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 rounded-lg shadow-sm border relative"
            >
              <Quote
                size={24}
                className="absolute top-4 right-4 opacity-20"
                style={{ color: "var(--business-accent)" }}
              />
              <div className="flex flex-col h-full">
                <p className="mb-4 italic text-muted-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
