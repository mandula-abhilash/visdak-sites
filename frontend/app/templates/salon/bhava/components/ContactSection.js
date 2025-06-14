"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactSection({ business }) {
  return (
    <section
      id="contact"
      className="py-20 bg-[var(--template-dark)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your look? Contact us today to schedule your
              appointment and experience the luxury of our premium salon
              services.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-[var(--template-accent)]" />
                </div>
                <div>
                  <div className="font-semibold">Visit Our Salon</div>
                  <div className="text-gray-300">
                    {business.contact.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-[var(--template-accent)]" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-gray-300">{business.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-[var(--template-accent)]" />
                </div>
                <div>
                  <div className="font-semibold">Opening Hours</div>
                  <div className="text-gray-300">
                    Mon-Sat: 9AM-8PM | Sun: 10AM-6PM
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20${
                  business.name
                }`}
                className="inline-flex items-center bg-[var(--template-success)] hover:bg-[var(--template-success-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Book via WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
              alt="Modern salon reception area"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
