"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsCarousel({
  title,
  description,
  testimonials,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "var(--business-primary-15)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-sm border">
            <Quote
              size={40}
              className="mx-auto mb-6 opacity-20"
              style={{ color: "var(--business-accent)" }}
            />
            <div className="text-center">
              <p className="text-xl md:text-2xl italic mb-8 text-muted-foreground">
                "{testimonials[currentIndex].text}"
              </p>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--business-primary)" }}
              >
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background border shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background border shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
