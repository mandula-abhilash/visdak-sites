"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactSection({ business }) {
  if (!business || !business.contact) return null;

  // Format business hours for display
  const formatBusinessHours = () => {
    if (!business.businessHours) return null;

    const days = {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    };

    return Object.entries(business.businessHours).map(([day, hours]) => (
      <li key={day} className="flex justify-between space-x-4">
        <span>{days[day]}</span>
        <span>{hours}</span>
      </li>
    ));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[var(--template-dark)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--template-font-heading)" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "var(--template-font-body)" }}
            >
              {business.contact.description ||
                `Ready to transform your look? Contact us today to schedule your appointment and experience the luxury of our premium salon services.`}
            </p>

            <div className="space-y-6">
              {business.contact.address && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-[var(--template-accent)]" />
                  </div>
                  <div>
                    <div
                      className="font-semibold"
                      style={{ fontFamily: "var(--template-font-heading)" }}
                    >
                      Visit Our Salon
                    </div>
                    <div
                      className="text-gray-300"
                      style={{ fontFamily: "var(--template-font-body)" }}
                    >
                      {business.contact.address}
                    </div>
                  </div>
                </div>
              )}

              {business.contact.phone && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-[var(--template-accent)]" />
                  </div>
                  <div>
                    <div
                      className="font-semibold"
                      style={{ fontFamily: "var(--template-font-heading)" }}
                    >
                      Call Us
                    </div>
                    <div
                      className="text-gray-300"
                      style={{ fontFamily: "var(--template-font-body)" }}
                    >
                      {business.contact.phone}
                    </div>
                  </div>
                </div>
              )}

              {business.businessHours && (
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-[var(--template-accent)]" />
                  </div>
                  <div>
                    <div
                      className="font-semibold mb-2"
                      style={{ fontFamily: "var(--template-font-heading)" }}
                    >
                      Opening Hours
                    </div>
                    <ul
                      className="text-gray-300 space-y-1"
                      style={{ fontFamily: "var(--template-font-body)" }}
                    >
                      {formatBusinessHours()}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {business.contact.phone && (
              <div className="mt-8">
                <a
                  href={`https://wa.me/${business.contact.phone.replace(
                    /\D/g,
                    ""
                  )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20${
                    business.name
                  }`}
                  className="inline-flex items-center bg-[var(--template-accent)] hover:bg-[var(--template-accent-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Book via WhatsApp
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            {business.contactImage && (
              <>
                <img
                  src={business.contactImage}
                  alt={`${business.name} contact`}
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
