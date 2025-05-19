"use client";

import BusinessHeader from "@/components/BusinessHeader";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function SalonTemplate1({ business }) {
  return (
    <main className="min-h-screen">
      <BusinessHeader business={business} />
      <HeroSection business={business} />
      <ServiceSection business={business} />
      <TestimonialSection business={business} />
      <ContactSection business={business} />
      <Footer business={business} />
    </main>
  );
}
