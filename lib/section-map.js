import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

export const sectionMap = {
  hero: HeroSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
};

export function getSection(type) {
  return sectionMap[type];
}
