// Headers
import BasicHeader from "@/sections/headers/basic";

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

// Footers
import BasicFooter from "@/sections/footers/basic";

export const sectionMap = {
  // Headers
  "headers.basic": BasicHeader,

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

  // Footers
  "footers.basic": BasicFooter,
};

export function getSection(type) {
  return sectionMap[type] || null;
}
