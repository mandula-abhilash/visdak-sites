// Hero Sections
import SimpleCenteredHero from "@/sections/hero/simple-centered";
import SplitWithImageHero from "@/sections/hero/split-with-image";
import WithBackgroundImageHero from "@/sections/hero/with-background-image";

// Service Sections
// import ServicesSection from "@/sections/services/grid-with-features";

// Testimonial Sections
// import TestimonialsSection from "@/sections/testimonials/simple-grid";

export const sectionMap = {
  // Hero Sections
  "hero.simple-centered": SimpleCenteredHero,
  "hero.split-with-image": SplitWithImageHero,
  "hero.with-background": WithBackgroundImageHero,

  // Service Sections
  // "services.grid": ServicesSection,

  // Testimonial Sections
  // "testimonials.grid": TestimonialsSection,
};

export function getSection(type) {
  return sectionMap[type] || null;
}
