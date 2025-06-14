"use client";

import { useEffect } from "react";
import { applyTemplateTheme } from "@/lib/template-themes";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Bhava({ business }) {
  // Initialize animations on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Apply theme based on business theme or default to golden
  useEffect(() => {
    const themeName = business.themeName || "golden";
    applyTemplateTheme(themeName);

    // Cleanup function to remove theme variables when component unmounts
    return () => {
      // Note: We don't remove theme variables on unmount as they might be needed
      // for other components. Theme cleanup should be handled at the app level.
    };
  }, [business.themeName]);

  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Navigation business={business} />
      <HeroSection business={business} />
      <AboutSection business={business} />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection business={business} />
      <Footer business={business} />
    </div>
  );
}
