"use client";

import { Wrench, Clock, Shield } from "lucide-react";
import BusinessHeader from "@/components/BusinessHeader";
import ServiceSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PlumberTemplate2({ business }) {
  return (
    <main className="min-h-screen">
      <BusinessHeader business={business} />

      {/* Emergency Hero Section */}
      <section
        className="relative py-20 px-6"
        style={{ backgroundColor: business.theme.primary }}
      >
        <div className="max-w-6xl mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                24/7 Emergency Plumbing Services
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Available round the clock for all your plumbing emergencies.
                Professional, reliable, and fast response times.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white rounded-lg font-bold text-lg transition-transform hover:scale-105"
                style={{ color: business.theme.primary }}
              >
                Call Now
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Feature
                icon={<Clock size={40} />}
                title="24/7 Service"
                description="Available day and night for emergencies"
              />
              <Feature
                icon={<Wrench size={40} />}
                title="Expert Team"
                description="Licensed and experienced plumbers"
              />
              <Feature
                icon={<Shield size={40} />}
                title="Guaranteed"
                description="100% satisfaction guaranteed"
              />
              <Feature
                icon={<Clock size={40} />}
                title="Fast Response"
                description="Quick response to emergency calls"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceSection business={business} />
      <ContactSection business={business} />
      <Footer business={business} />
    </main>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
}
