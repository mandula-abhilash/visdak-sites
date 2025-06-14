"use client";

import { useEffect } from "react";
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

  // Set CSS custom properties for theme colors
  useEffect(() => {
    const root = document.documentElement;

    // Default Bhava theme colors (golden/yellow theme)
    const themeColors = {
      "--bhava-primary": "#B7935B",
      "--bhava-secondary": "#8E793E",
      "--bhava-accent": "#D4AF37",
      "--bhava-accent-light": "#F4E4BC",
      "--bhava-accent-hover": "#B8941F",
      "--bhava-dark": "#1F2937",
      "--bhava-background-light": "#FEF7E0",
      "--bhava-success": "#10B981",
      "--bhava-success-hover": "#059669",
    };

    // Apply theme colors to CSS custom properties
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Cleanup function to remove custom properties
    return () => {
      Object.keys(themeColors).forEach((property) => {
        root.style.removeProperty(property);
      });
    };
  }, []);

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
