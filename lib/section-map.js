// Hero Sections
import SimpleCenteredHero from "@/sections/hero/simple-centered";
import SplitWithImageHero from "@/sections/hero/split-with-image";
import WithBackgroundImageHero from "@/sections/hero/with-background-image";

// Service Sections
import GridWithFeatures from "@/sections/services/grid-with-features";
import ListWithIcons from "@/sections/services/list-with-icons";

// Testimonial Sections
import SimpleGrid from "@/sections/testimonials/simple-grid";
import Carousel from "@/sections/testimonials/carousel";

export const sectionMap = {
  // Hero Sections
  "hero.simple-centered": SimpleCenteredHero,
  "hero.split-with-image": SplitWithImageHero,
  "hero.with-background": WithBackgroundImageHero,

  // Service Sections
  "services.grid": GridWithFeatures,
  "services.list": ListWithIcons,

  // Testimonial Sections
  "testimonials.grid": SimpleGrid,
  "testimonials.carousel": Carousel,
};

export function getSection(type) {
  return sectionMap[type] || null;
}
