"use client";

import { useEffect } from "react";
import BusinessHeader from "@/components/BusinessHeader";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function SalonTemplate1({ business }) {
  // Set theme colors on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--business-primary", business.theme.primary);
    root.style.setProperty("--business-secondary", business.theme.secondary);
    root.style.setProperty("--business-accent", business.theme.accent);
    root.style.setProperty("--business-primary-text", "#FFFFFF");
  }, [business]);

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
