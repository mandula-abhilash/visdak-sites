"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
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
    <section className="py-20 bg-[var(--template-background-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--template-font-heading)" }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--template-font-body)" }}
          >
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
                <div className="flex text-[var(--template-accent)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p
                className="text-gray-600 mb-6 italic"
                style={{ fontFamily: "var(--template-font-body)" }}
              >
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial photo`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: "var(--template-font-heading)" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "var(--template-font-body)" }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
